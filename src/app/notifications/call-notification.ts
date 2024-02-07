import { app, ipcMain } from 'electron';
import {
  apiName,
  ElectronNotificationData,
  ICallNotificationData,
  NotificationActions,
} from '../../common/api-interface';
import { isMac } from '../../common/env';
import { logger } from '../../common/logger';
import {
  AUX_CLICK,
  ICustomBrowserWindow,
  ICustomBrowserWindowConstructorOpts,
  IS_NODE_INTEGRATION_ENABLED,
  IS_SAND_BOXED,
  windowHandler,
} from '../window-handler';
import { createComponentWindow, windowExists } from '../window-utils';
import {
  CallNotificationEvents,
  NotificationSettingsEvents,
} from '../../common/ipcEvent';
import { notification } from '../notification';
import { getGuid } from '../../../lib/src/common/utils';

const CALL_NOTIFICATION_WIDTH = 264;
const CALL_NOTIFICATION_HEIGHT = 290;
const isDevEnv = !app.isPackaged;

class CallNotification {
  private callNotificationWindow: ICustomBrowserWindow | undefined;

  private notificationCallbacks: Map<
    number,
    (event: NotificationActions, data: ElectronNotificationData) => void
  > = new Map();

  constructor() {
    ipcMain.on(CallNotificationEvents.CLICKED, (_event, windowId) => {
      this.notificationClicked(windowId);
    });
    ipcMain.on(CallNotificationEvents.ON_ACCEPT, (_event, windowId) => {
      this.onCallNotificationOnAccept(windowId);
    });
    ipcMain.on(CallNotificationEvents.ON_REJECT, (_event, windowId) => {
      this.onCallNotificationOnReject(windowId);
    });
    ipcMain.on(NotificationSettingsEvents.UPDATE_SETTINGS, async (_event) => {
      setTimeout(() => {
        const { x, y } = notification.getCallNotificationPosition();
        if (
          this.callNotificationWindow &&
          windowExists(this.callNotificationWindow)
        ) {
          try {
            this.callNotificationWindow.setPosition(
              parseInt(String(x), 10),
              parseInt(String(y), 10)
            );
          } catch (err) {
            logger.info(
              `Failed to set window position. x: ${x} y: ${y}. Contact the developers for more details`
            );
          }
        }
      }, 500);
    });
  }

  public createCallNotificationWindow = (
    callNotificationData: ICallNotificationData,
    callback
  ) => {
    if (
      this.callNotificationWindow &&
      windowExists(this.callNotificationWindow)
    ) {
      this.callNotificationWindow.notificationData = callNotificationData;
      this.callNotificationWindow.winName = apiName.notificationWindowName;
      this.notificationCallbacks.set(callNotificationData.id, callback);
      ipcMain.once(CallNotificationEvents.READY, () => {
        this.callNotificationWindow?.webContents.send(
          CallNotificationEvents.DATA,
          callNotificationData
        );
      });

      return;
    }
    const opts = this.getCallNotificationOpts();
    // Set stream id as winKey to link stream to the window
    this.callNotificationWindow = createComponentWindow(
      'call-notification',
      opts,
      false
    ) as ICustomBrowserWindow;
    windowHandler.addWindow(opts.winKey, this.callNotificationWindow);

    this.callNotificationWindow.notificationData = callNotificationData;
    this.callNotificationWindow.winName = apiName.notificationWindowName;
    this.notificationCallbacks.set(callNotificationData.id, callback);

    this.callNotificationWindow.setVisibleOnAllWorkspaces(true);
    this.callNotificationWindow.setSkipTaskbar(true);
    this.callNotificationWindow.setAlwaysOnTop(true, 'screen-saver');
    const { x, y } = notification.getCallNotificationPosition();
    try {
      this.callNotificationWindow.setPosition(
        parseInt(String(x), 10),
        parseInt(String(y), 10)
      );
    } catch (err) {
      logger.info(
        `Failed to set window position. x: ${x} y: ${y}. Contact the developers for more details`
      );
    }
    this.callNotificationWindow.webContents.once('did-finish-load', () => {
      if (
        !this.callNotificationWindow ||
        !windowExists(this.callNotificationWindow)
      ) {
        return;
      }
      this.callNotificationWindow.webContents.setZoomFactor(1);
      this.callNotificationWindow.webContents.setVisualZoomLevelLimits(1, 1);
      ipcMain.once(CallNotificationEvents.READY, () => {
        this.callNotificationWindow?.webContents.send(
          CallNotificationEvents.DATA,
          callNotificationData
        );
      });
      this.callNotificationWindow.showInactive();
    });

    this.callNotificationWindow.once('closed', () => {
      this.callNotificationWindow = undefined;
      windowHandler.removeWindow(opts.winKey);
    });
  };

  /**
   * Handles call notification click
   *
   * @param clientId {number}
   */
  public notificationClicked(clientId: number): void {
    const browserWindow = this.callNotificationWindow;
    if (
      browserWindow &&
      windowExists(browserWindow) &&
      browserWindow.notificationData
    ) {
      const data = browserWindow.notificationData;
      const callback = this.notificationCallbacks.get(clientId);
      if (typeof callback === 'function') {
        callback(NotificationActions.notificationClicked, data);
      }
      this.closeNotification(clientId);
    }
  }

  /**
   * Handles call notification success action which updates client
   * @param clientId {number}
   */
  public onCallNotificationOnAccept(clientId: number): void {
    const browserWindow = this.callNotificationWindow;
    if (
      browserWindow &&
      windowExists(browserWindow) &&
      browserWindow.notificationData
    ) {
      const data = browserWindow.notificationData;
      const callback = this.notificationCallbacks.get(clientId);
      if (typeof callback === 'function') {
        callback(NotificationActions.notificationAccept, data);
      }
      this.closeNotification(clientId);
    }
  }

  /**
   * Handles call notification success action which updates client
   * @param clientId {number}
   */
  public onCallNotificationOnReject(clientId: number): void {
    const browserWindow = this.callNotificationWindow;
    if (
      browserWindow &&
      windowExists(browserWindow) &&
      browserWindow.notificationData
    ) {
      const data = browserWindow.notificationData;
      const callback = this.notificationCallbacks.get(clientId);
      if (typeof callback === 'function') {
        callback(NotificationActions.notificationReject, data);
      }
      this.closeNotification(clientId);
    }
  }

  /**
   * Close the notification window
   */
  public closeNotification(clientId: number): void {
    const browserWindow = this.callNotificationWindow;
    if (browserWindow && windowExists(browserWindow)) {
      if (
        browserWindow.notificationData &&
        browserWindow.notificationData.id !== clientId
      ) {
        logger.info(
          'call-notification',
          `notification with the id ${browserWindow.notificationData.id} does match with clientID ${clientId}`
        );
        return;
      }
      browserWindow.close();
      logger.info(
        'call-notification',
        'successfully closed call notification window'
      );
    }
    return;
  }

  private getCallNotificationOpts = (): ICustomBrowserWindowConstructorOpts => {
    const callNotificationOpts: ICustomBrowserWindowConstructorOpts = {
      width: CALL_NOTIFICATION_WIDTH,
      height: CALL_NOTIFICATION_HEIGHT,
      alwaysOnTop: true,
      skipTaskbar: true,
      resizable: false,
      show: false,
      frame: false,
      transparent: true,
      fullscreenable: false,
      acceptFirstMouse: true,
      modal: false,
      focusable: true,
      autoHideMenuBar: true,
      minimizable: false,
      maximizable: false,
      title: 'Call Notification - Symphony',
      webPreferences: {
        sandbox: IS_SAND_BOXED,
        nodeIntegration: IS_NODE_INTEGRATION_ENABLED,
        devTools: isDevEnv,
        disableBlinkFeatures: AUX_CLICK,
      },
      winKey: getGuid(),
    };
    if (isMac) {
      callNotificationOpts.type = 'panel';
    }
    return callNotificationOpts;
  };
}

const callNotification = new CallNotification();

export { callNotification };
