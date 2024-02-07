// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import {
  apiCmds,
  apiName,
  IBoundsChange,
  ILogMsg,
  INotificationData,
  IRestartFloaterData,
  IScreenSharingIndicator,
  IScreenSharingIndicatorOptions,
  IScreenSnippet,
  LogLevel,
} from 'common/api-interface';
import { SSFApi } from './ssf-api';
import { IpcEvents } from 'common/ipcEvent';
import {
  IScreenSourceError,
  ICustomDesktopCapturerSource,
  ICustomSourcesOptions,
} from 'renderer/components/desktop-capturer/desktop-capturer';
import { isLinux, isMac, isWindowsOS } from 'common/env';
import { IAnalyticsData } from './bi/interface';

export type Channels = IpcEvents | 'welcome' | apiName.symphonyApi;

const isDevEnv = process.env['WEBPACK_SERVE'] === 'true';
const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      console.log('sending message ', channel);
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: any) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    invoke(channel: Channels, ...args: unknown[]) {
      return ipcRenderer.invoke(channel, ...args);
    },
  },
  isMac,
  isWindowsOS,
  isLinux,
  isDevEnv,
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;

interface ISSFWindow extends Window {
  ssf?: SSFApi;
}

const ssfWindow: ISSFWindow = window;

const createAPI = () => {
  // iframes (and any other non-top level frames) get no api access
  // http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t/326076
  if (window.self !== window.top) {
    return;
  }

  // note: window.open from main window (if in the same domain) will get
  // api access.  window.open in another domain will be opened in the default
  // browser (see: handler for event 'new-window' in windowMgr.js)

  //
  // API exposed to renderer process.
  //
  // @ts-ignore
  ssfWindow.ssf = new SSFApi();
  Object.freeze(ssfWindow.ssf);
};

createAPI();

if (ssfWindow.ssf) {
  // New context bridge api that exposes all the methods on to window object
  // For Mana to communicate with SDA
  contextBridge.exposeInMainWorld('manaSSF', {
    setIsMana: ssfWindow.ssf.setIsMana,
    Notification: ssfWindow.ssf.Notification,
    getMediaSource: ssfWindow.ssf.getMediaSource,
    activate: ssfWindow.ssf.activate,
    bringToFront: ssfWindow.ssf.bringToFront,
    getVersionInfo: ssfWindow.ssf.getVersionInfo,
    registerActivityDetection: ssfWindow.ssf.registerActivityDetection,
    registerDownloadHandler: ssfWindow.ssf.registerDownloadHandler,
    openDownloadedItem: ssfWindow.ssf.openDownloadedItem,
    showDownloadedItem: ssfWindow.ssf.showDownloadedItem,
    clearDownloadedItems: ssfWindow.ssf.clearDownloadedItems,
    registerBoundsChange: ssfWindow.ssf.registerBoundsChange,
    registerLogger: ssfWindow.ssf.registerLogger,
    registerProtocolHandler: ssfWindow.ssf.registerProtocolHandler,
    registerLogRetriever: ssfWindow.ssf.registerLogRetriever,
    sendLogs: ssfWindow.ssf.sendLogs,
    registerAnalyticsEvent: ssfWindow.ssf.registerAnalyticsEvent,
    ScreenSnippet: ssfWindow.ssf.ScreenSnippet,
    openScreenSnippet: ssfWindow.ssf.openScreenSnippet,
    closeScreenSnippet: ssfWindow.ssf.closeScreenSnippet,
    setBadgeCount: ssfWindow.ssf.setBadgeCount,
    setLocale: ssfWindow.ssf.setLocale,
    setIsInMeeting: ssfWindow.ssf.setIsInMeeting,
    showNotificationSettings: ssfWindow.ssf.showNotificationSettings,
    showScreenSharingIndicator: ssfWindow.ssf.showScreenSharingIndicator,
    openScreenSharingIndicator: ssfWindow.ssf.openScreenSharingIndicator,
    closeScreenSharingIndicator: ssfWindow.ssf.closeScreenSharingIndicator,
    registerRestartFloater: ssfWindow.ssf.registerRestartFloater,
    setCloudConfig: ssfWindow.ssf.setCloudConfig,
    checkMediaPermission: ssfWindow.ssf.checkMediaPermission,
    showNotification: ssfWindow.ssf.showNotification,
    closeNotification: ssfWindow.ssf.closeNotification,
    showCallNotification: ssfWindow.ssf.showCallNotification,
    closeCallNotification: ssfWindow.ssf.closeCallNotification,
    restartApp: ssfWindow.ssf.restartApp,
    closeAllWrapperWindows: ssfWindow.ssf.closeAllWrapperWindows,
    setZoomLevel: ssfWindow.ssf.setZoomLevel,
    getZoomLevel: ssfWindow.ssf.getZoomLevel,
    supportedSettings: ssfWindow.ssf.supportedSettings,
    getNativeWindowHandle: ssfWindow.ssf.getNativeWindowHandle,
    getCitrixMediaRedirectionStatus:
      ssfWindow.ssf.getCitrixMediaRedirectionStatus,
    registerClientBanner: ssfWindow.ssf.registerClientBanner,
    launchCloud9: ssfWindow.ssf.launchCloud9,
    terminateCloud9: ssfWindow.ssf.terminateCloud9,
    connectCloud9Pipe: ssfWindow.ssf.connectCloud9Pipe,
    updateAndRestart: ssfWindow.ssf.updateAndRestart,
    downloadUpdate: ssfWindow.ssf.downloadUpdate,
    checkForUpdates: ssfWindow.ssf.checkForUpdates,
    updateMyPresence: ssfWindow.ssf.updateMyPresence,
    getMyPresence: ssfWindow.ssf.getMyPresence,
    registerPhoneNumberServices: ssfWindow.ssf.registerPhoneNumberServices,
    unregisterPhoneNumberServices: ssfWindow.ssf.unregisterPhoneNumberServices,
  });
}

export class AppBridge {
  /**
   * Validates the incoming postMessage
   * events based on the host name
   *
   * @param event
   */
  private static isValidEvent(event): boolean {
    if (!event) {
      return false;
    }
    return event.source && event.source === window;
  }

  public origin: string = '';

  private readonly callbackHandlers = {
    onMessage: (event: MessageEvent) => this.handleMessage(event),
    onActivityCallback: (idleTime: number) => this.activityCallback(idleTime),
    onScreenSnippetCallback: (arg: IScreenSnippet) =>
      this.screenSnippetCallback(arg),
    onRegisterBoundsChangeCallback: (arg: IBoundsChange) =>
      this.registerBoundsChangeCallback(arg),
    onRegisterLoggerCallback: (
      msg: ILogMsg,
      logLevel: LogLevel,
      showInConsole: boolean
    ) => this.registerLoggerCallback(msg, logLevel, showInConsole),
    onRegisterProtocolHandlerCallback: (uri: string) =>
      this.protocolHandlerCallback(uri),
    onCollectLogsCallback: () => this.collectLogsCallback(),
    onScreenSharingIndicatorCallback: (arg: IScreenSharingIndicator) =>
      this.screenSharingIndicatorCallback(arg),
    onMediaSourceCallback: (
      error: IScreenSourceError | null,
      source: ICustomDesktopCapturerSource | undefined
    ): void => this.gotMediaSource(error, source),
    onNotificationCallback: (event, data) =>
      this.notificationCallback(event, data),
    onAnalyticsEventCallback: (data) => this.analyticsEventCallback(data),
    restartFloater: (data) => this.restartFloater(data),
    onDownloadItemCallback: (data) => this.onDownloadItemCallback(data),
  };

  constructor() {
    // starts with corporate pod and
    // will be updated with the global config url
    ipcRenderer
      .invoke(apiName.symphonyApi, {
        cmd: apiCmds.getCurrentOriginUrl,
      })
      .then((origin) => {
        this.origin = origin;
        // this.origin = '*'; // DEMO-APP: Comment this line back in only to test demo-app - DO NOT COMMIT
        ipcRenderer.send(apiName.symphonyApi, {
          cmd: apiCmds.setBroadcastMessage,
        });
        window.addEventListener('message', this.callbackHandlers.onMessage);
      }) // tslint:disable-next-line:no-console
      .catch((reason) => console.error(reason));

    ipcRenderer.on(apiCmds.onSwiftSearchMessage, (_event, [method, data]) => {
      this.broadcastMessage(method, data);
    });
  }

  /**
   * Switch case that validates and handle
   * incoming messages from postMessage
   *
   * Is only used for 1.5.
   *
   * @param event
   */
  private async handleMessage(event: MessageEvent): Promise<void> {
    if (!AppBridge.isValidEvent(event)) {
      return;
    }

    const { method, data } = event.data;
    switch (method) {
      case apiCmds.getVersionInfo:
        const versionInfo = await ssfWindow.ssf?.getVersionInfo();
        this.broadcastMessage('get-version-info-callback', {
          requestId: data.requestId,
          response: versionInfo,
        });
        break;
      case apiCmds.activate:
        ssfWindow.ssf?.activate(data as string);
        break;
      case apiCmds.bringToFront:
        const { windowName, reason } = data;
        ssfWindow.ssf?.bringToFront(windowName as string, reason as string);
        break;
      case apiCmds.setBadgeCount:
        if (typeof data === 'number') {
          ssfWindow.ssf?.setBadgeCount(data as number);
        }
        break;
      case apiCmds.openDownloadedItem:
        if (typeof data === 'string') {
          ssfWindow.ssf?.openDownloadedItem(data as string);
        }
        break;
      case apiCmds.showDownloadedItem:
        if (typeof data === 'string') {
          ssfWindow.ssf?.showDownloadedItem(data as string);
        }
        break;
      case apiCmds.clearDownloadedItems:
        ssfWindow.ssf?.clearDownloadedItems();
        break;
      case apiCmds.restartApp:
        ssfWindow.ssf?.restartApp();
        break;
      case apiCmds.setLocale:
        if (typeof data === 'string') {
          ssfWindow.ssf?.setLocale(data as string);
        }
        break;
      case apiCmds.registerActivityDetection:
        ssfWindow.ssf?.registerActivityDetection(
          data as number,
          this.callbackHandlers.onActivityCallback
        );
        break;
      case apiCmds.registerDownloadHandler:
        ssfWindow.ssf?.registerDownloadHandler(
          this.callbackHandlers.onDownloadItemCallback
        );
        break;
      case apiCmds.openScreenSnippet:
        ssfWindow.ssf?.openScreenSnippet(
          this.callbackHandlers.onScreenSnippetCallback
        );
        break;
      case apiCmds.closeScreenSnippet:
        ssfWindow.ssf?.closeScreenSnippet();
        break;
      case apiCmds.registerBoundsChange:
        ssfWindow.ssf?.registerBoundsChange(
          this.callbackHandlers.onRegisterBoundsChangeCallback
        );
        break;
      case apiCmds.registerLogger:
        ssfWindow.ssf?.registerLogger(
          this.callbackHandlers.onRegisterLoggerCallback
        );
        break;
      case apiCmds.registerProtocolHandler:
        ssfWindow.ssf?.registerProtocolHandler(
          this.callbackHandlers.onRegisterProtocolHandlerCallback
        );
        break;
      case apiCmds.registerLogRetriever:
        ssfWindow.ssf?.registerLogRetriever(
          this.callbackHandlers.onCollectLogsCallback,
          data
        );
        break;
      case apiCmds.sendLogs:
        ssfWindow.ssf?.sendLogs(data.logName, data.logFiles);
        break;
      case apiCmds.openScreenSharingIndicator:
        ssfWindow.ssf?.openScreenSharingIndicator(
          data as IScreenSharingIndicatorOptions,
          this.callbackHandlers.onScreenSharingIndicatorCallback
        );
        break;
      case apiCmds.closeScreenSharingIndicator:
        ssfWindow.ssf?.closeScreenSharingIndicator(data.streamId as string);
        break;
      case apiCmds.getMediaSource:
        await ssfWindow.ssf?.getMediaSource(
          data as ICustomSourcesOptions,
          this.callbackHandlers.onMediaSourceCallback
        );
        break;
      case apiCmds.notification:
        ssfWindow.ssf?.showNotification(
          data as INotificationData,
          this.callbackHandlers.onNotificationCallback
        );
        break;
      case apiCmds.closeNotification:
        await ssfWindow.ssf?.closeNotification(data as number);
        break;
      case apiCmds.showNotificationSettings:
        ssfWindow.ssf?.showNotificationSettings(data);
        break;
      case apiCmds.setIsInMeeting:
        if (typeof data === 'boolean') {
          ssfWindow.ssf?.setIsInMeeting(data as boolean);
        }
        break;
      case apiCmds.registerAnalyticsHandler:
        ssfWindow.ssf?.registerAnalyticsEvent(
          this.callbackHandlers.onAnalyticsEventCallback
        );
        break;
      case apiCmds.registerRestartFloater:
        ssfWindow.ssf?.registerRestartFloater(
          this.callbackHandlers.restartFloater
        );
        break;
      case apiCmds.setCloudConfig:
        ssfWindow.ssf?.setCloudConfig(data as object);
        break;
      case apiCmds.swiftSearch:
        ipcRenderer.send(apiName.symphonyApi, {
          cmd: apiCmds.handleSwiftSearchMessageEvents,
          swiftSearchData: data,
        });
        break;
      case apiCmds.getCPUUsage:
        const cpuUsage = await ssfWindow.ssf?.getCPUUsage();
        this.broadcastMessage('get-cpu-usage-callback', {
          requestId: data.requestId,
          response: cpuUsage,
        });
        break;
      case apiCmds.checkMediaPermission:
        const mediaPermission = await ssfWindow.ssf?.checkMediaPermission();
        this.broadcastMessage('check-media-permission-callback', {
          requestId: data.requestId,
          response: mediaPermission,
        });
        break;
    }
  }

  /**
   * Broadcast user activity
   * @param idleTime {number} - system idle tick
   */
  private activityCallback = (idleTime: number): void =>
    this.broadcastMessage('activity-callback', idleTime);

  /**
   * Broadcast snippet data
   * @param arg {IScreenSnippet}
   */
  private screenSnippetCallback = (arg: IScreenSnippet): void =>
    this.broadcastMessage('screen-snippet-callback', arg);

  /**
   * Broadcast bound changes
   * @param arg {IBoundsChange}
   */
  private registerBoundsChangeCallback = (arg: IBoundsChange): void =>
    this.broadcastMessage('bound-changes-callback', arg);

  /**
   * Broadcast logs
   * @param msg {ILogMsg}
   * @param logLevel {LogLevel}
   * @param showInConsole {boolean}
   */
  private registerLoggerCallback(
    msg: ILogMsg,
    logLevel: LogLevel,
    showInConsole: boolean
  ): void {
    this.broadcastMessage('logger-callback', { msg, logLevel, showInConsole });
  }

  /**
   * Broadcast protocol uri
   * @param uri {string}
   */
  private protocolHandlerCallback = (uri: string): void =>
    this.broadcastMessage('protocol-callback', uri);

  private collectLogsCallback = (): void =>
    this.broadcastMessage('collect-logs', undefined);

  /**
   * Broadcast event that stops screen sharing
   * @param arg {IScreenSharingIndicator}
   */
  private screenSharingIndicatorCallback(arg: IScreenSharingIndicator): void {
    this.broadcastMessage('screen-sharing-indicator-callback', arg);
  }

  /**
   * Broadcast analytics events data
   * @param arg {IAnalyticsData}
   */
  private analyticsEventCallback(arg: IAnalyticsData): void {
    this.broadcastMessage('analytics-event-callback', arg);
  }

  /**
   * Broadcast download item event
   * @param arg {object}
   */
  private onDownloadItemCallback(arg: object): void {
    this.broadcastMessage('download-handler-callback', arg);
  }

  /**
   * Broadcast to restart floater event with data
   * @param arg {IAnalyticsData}
   */
  private restartFloater(arg: IRestartFloaterData): void {
    this.broadcastMessage('restart-floater-callback', arg);
  }

  /**
   * Broadcast the user selected source
   * @param sourceError {IScreenSourceError}
   * @param selectedSource {ICustomDesktopCapturerSource}
   */
  private gotMediaSource(
    sourceError: IScreenSourceError | null,
    selectedSource: ICustomDesktopCapturerSource | undefined
  ): void {
    if (sourceError) {
      const { requestId, ...error } = sourceError;
      this.broadcastMessage('media-source-callback', { requestId, error });
      this.broadcastMessage('media-source-callback-v1', { requestId, error });
      return;
    }

    if (selectedSource && selectedSource.requestId) {
      const { requestId, ...source } = selectedSource;
      this.broadcastMessage('media-source-callback', {
        requestId,
        source,
        error: sourceError,
      });
      this.broadcastMessage('media-source-callback-v1', {
        requestId,
        response: { source, error: sourceError },
      });
    }
  }

  /**
   * Broadcast notification events
   *
   * @param event {string}
   * @param data {Object}
   */
  private notificationCallback(event, data) {
    this.broadcastMessage(event, data);
  }

  /**
   * Method that broadcast messages to a specific origin via postMessage
   *
   * @param method {string}
   * @param data {any}
   */
  private broadcastMessage(method: string, data: any): void {
    ipcRenderer
      .invoke(apiName.symphonyApi, {
        cmd: apiCmds.getCurrentOriginUrl,
      })
      .then((origin) => {
        window.postMessage({ method, data }, origin);
      });
  }
}

const appBridge = new AppBridge();

export default appBridge;
