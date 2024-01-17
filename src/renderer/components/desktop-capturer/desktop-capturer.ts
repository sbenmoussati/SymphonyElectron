import { NOTIFICATION_WINDOW_TITLE, apiCmds, apiName } from 'common/api-interface';
import { isWindowsOS } from 'common/env';
import { ScreenShareEvents } from 'common/ipcEvent';
import { DesktopCapturerSource, SourcesOptions, ipcRenderer } from 'electron';



const includes = [''].includes;

let nextId = 0;
let isScreenShareEnabled = false;
let screenShareArgv: string;

export interface ICustomSourcesOptions extends SourcesOptions {
  requestId?: number;
}

export interface ICustomDesktopCapturerSource extends DesktopCapturerSource {
  requestId: number | undefined;
}

export interface IScreenSourceError {
  name: string;
  message: string;
  requestId: number | undefined;
}

export type CallbackType = (
  error: IScreenSourceError | null,
  source?: ICustomDesktopCapturerSource,
) => void;
const getNextId = () => ++nextId;

/**
 * Checks if the options and their types are valid
 * @param options |options.type| can not be empty and has to include 'window' or 'screen'.
 * @returns {boolean}
 */
const isValid = (options: ICustomSourcesOptions) => {
  return (
    (options !== null ? options.types : undefined) !== null &&
    Array.isArray(options.types)
  );
};

/**
 * Gets the sources for capturing screens / windows
 *
 * @param options {SourcesOptions}
 * @param callback {CallbackType}
 * @returns {*}
 */
export const getSource = async (
  options: ICustomSourcesOptions,
  callback: CallbackType,
) => {
  let captureWindow;
  let captureScreen;
  let id;
  const sourcesOpts: string[] = [];
  const { requestId, ...updatedOptions } = options;
  if (!isValid(options)) {
    callback({
      name: 'Invalid options',
      message: 'Invalid options',
      requestId,
    });
    return;
  }
  captureWindow = includes.call(options.types, 'window');
  captureScreen = includes.call(options.types, 'screen');

  if (!updatedOptions.thumbnailSize) {
    updatedOptions.thumbnailSize = {
      height: 150,
      width: 150,
    };
  }

  if (isWindowsOS && captureWindow) {
    /**
     * Sets the captureWindow to false if Desktop composition
     * is disabled otherwise true
     *
     * Setting captureWindow to false returns only screen sources
     * @type {boolean}
     */
    captureWindow = await window.electron.ipcRenderer.invoke(apiName.symphonyApi, {
      cmd: apiCmds.isAeroGlassEnabled,
    });
  }

  if (captureWindow) {
    sourcesOpts.push('window');
  }
  if (captureScreen) {
    sourcesOpts.push('screen');
  }

  // displays a dialog if media permissions are disable
  if (!isScreenShareEnabled) {
    await ipcRenderer.invoke(apiName.symphonyApi, {
      cmd: apiCmds.showScreenSharePermissionDialog,
    });
    callback({
      name: 'Permission Denied',
      message: 'Permission Denied',
      requestId,
    });
    return;
  }

  id = getNextId();
  const sources: DesktopCapturerSource[] = await ipcRenderer.invoke(
    apiName.symphonyApi,
    {
      cmd: apiCmds.getSources,
      types: sourcesOpts,
      thumbnailSize: updatedOptions.thumbnailSize,
    },
  );
  // Auto select screen source based on args for testing only
  if (screenShareArgv) {
    const title = screenShareArgv.substr(screenShareArgv.indexOf('=') + 1);
    const filteredSource: DesktopCapturerSource[] = sources.filter(
      (source) => source.name === title,
    );

    if (Array.isArray(filteredSource) && filteredSource.length > 0) {
      const source = { ...filteredSource[0], requestId };
      return callback(null, source);
    }

    if (sources.length > 0) {
      const firstSource = { ...sources[0], requestId };
      return callback(null, firstSource);
    }
  }

  const updatedSources = sources
    .filter((source) => source.name !== NOTIFICATION_WINDOW_TITLE)
    .map((source) => {
      return {
        ...source,
        ...{
          thumbnail: source.thumbnail.toDataURL(),
        },
      };
    });

    ipcRenderer.send(apiName.symphonyApi, {
    cmd: apiCmds.openScreenPickerWindow,
    id,
    sources: updatedSources,
  });

  const successCallback = (_e: any, source: DesktopCapturerSource) => {
    // Cleaning up the event listener to prevent memory leaks
    if (!source) {
      // ipcRenderer.removeListener('start-share' + id, successCallback);
      // return callback({
      //   name: 'User Cancelled',
      //   message: 'User Cancelled',
      //   requestId,
      // });
    }
    return callback(null, { ...source, ...{ requestId } });
  };
  ipcRenderer.once(ScreenShareEvents.START + id, successCallback);
  return null;
};

// event that updates screen share argv
ipcRenderer.once(ScreenShareEvents.ARGV, (_event, arg) => {
  if (typeof arg === 'string') {
    screenShareArgv = arg;
  }
});

// event that updates screen share permission
ipcRenderer.on(ScreenShareEvents.IS_ENABLED, (_event, canShareScreen) => {
  if (typeof canShareScreen === 'boolean' && canShareScreen) {
    isScreenShareEnabled = canShareScreen;
  }
});
