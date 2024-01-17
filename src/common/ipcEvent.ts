export enum ScreenShotAnnotationEvents {
  COPY_TO_CLIPBOARD = 'copy-to-clipboard',
  SAVE_AS = 'save-as',
  CLOSE = 'close-snippet',
  ANALYTICS = 'snippet-analytics-data',
  UPLOAD_SNIPPET = 'upload-snippet',
  DATA = 'snipping-tool-data'
}

export enum AboutAppEvents {
  DATA = 'about-app-data',
  CLOSE = 'close-about-app',
  POD_UPDATED = 'user-pod-updated'
}

export enum NotificationSettingsEvents {
  DATA = 'notification-settings-data',
  UPDATE_SETTINGS = 'notification-settings-update'
}

export enum NotificationEvents {
  DATA = 'notification-data',
  CLICKED = 'notification-clicked',
  CLOSE = 'close-notification',
  MOUSE_ENTER = 'notification-mouseenter',
  MOUSE_LEAVE = 'notification-mouseleave',
  ON_IGNORE = 'notification-on-ignore',
  ON_REPLY = 'notification-on-reply',
  SHOW_REPLY = 'show-reply'
}

export enum ScreenShareIndicatorEvents {
  DATA = 'screen-sharing-indicator-data'
}

export enum ScreenShareEvents {
  STOP = 'stop-screen-sharing',
  START = 'start-share',
  ARGV = 'screen-share-argv',
  IS_ENABLED = 'is-screen-share-enabled',
  STOPPED = 'screen-sharing-stopped'
}

export enum ScreenPickerEvents {
  DATA = 'screen-picker-data',
  SOURCE_SELECT = 'screen-source-select',
  SOURCE_SELECTED = 'screen-source-selected'
}

export enum CallNotificationEvents {
  CLICKED = 'call-notification-clicked',
  ON_ACCEPT = 'call-notification-on-accept',
  ON_REJECT = 'call-notification-on-reject',
  DATA = 'call-notification-data'
}

export enum TitleBarEvents {
  MAXIMIZE = 'maximize',
  UNMAXIMIZE = 'unmaximize',
  MOVE = 'move',
  DISABLE_ACTION_BUTTON = 'disable-action-button', 
}

export enum LoadingScreenEvents {
  RELOAD = 'reload-symphony',
  QUIT = 'quit-symphony',
  DATA = 'loading-screen-data'
}

export enum BasicAuthEvents {
  DATA = 'basic-auth-data',
  LOGIN = 'basic-auth-login',
  CLOSED = 'basic-auth-closed'
}

export type IpcEvents = ScreenShotAnnotationEvents | AboutAppEvents | NotificationSettingsEvents | NotificationEvents | ScreenShareIndicatorEvents | ScreenShareEvents | ScreenPickerEvents | CallNotificationEvents | LoadingScreenEvents | string;