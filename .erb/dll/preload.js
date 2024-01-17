(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/ssf-api.ts":
/*!****************************!*\
  !*** ./src/app/ssf-api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSFApi: () => (/* binding */ SSFApi)
/* harmony export */ });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var _common_api_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/api-interface */ "./src/common/api-interface.ts");
/* harmony import */ var _common_i18n_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/i18n-preload */ "./src/common/i18n-preload.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
/* harmony import */ var renderer_components_desktop_capturer_desktop_capturer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! renderer/components/desktop-capturer/desktop-capturer */ "./src/renderer/components/desktop-capturer/desktop-capturer.ts");
/* harmony import */ var _common_ipcEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/ipcEvent */ "./src/common/ipcEvent.ts");







// import SSFNotificationHandler from './notification-ssf-handler';
// import { ScreenSnippetBcHandler } from './screen-snippet-bc-handler';
const SUPPORTED_SETTINGS = ['flashing-notifications'];
const MAIN_WINDOW_NAME = 'main';
let isAltKey = false;
let isMenuOpen = false;
const local = {
    ipcRenderer: electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer,
};
const notificationActionCallbacks = new Map();
const callNotificationActionCallbacks = new Map();
const DEFAULT_THROTTLE = 1000;
// Throttle func
const throttledSetBadgeCount = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((count) => {
    local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.setBadgeCount,
        count,
    });
}, DEFAULT_THROTTLE);
const throttledSetLocale = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((locale) => {
    local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.setLocale,
        locale,
    });
}, DEFAULT_THROTTLE);
const throttledActivate = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((windowName) => {
    local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.activate,
        windowName,
    });
}, DEFAULT_THROTTLE);
const throttledBringToFront = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((windowName, reason) => {
    local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.bringToFront,
        windowName,
        reason,
    });
}, DEFAULT_THROTTLE);
const throttledCloseScreenShareIndicator = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((streamId) => {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.closeWindow,
        windowType: 'screen-sharing-indicator',
        winKey: streamId,
    });
}, DEFAULT_THROTTLE);
const throttledSetIsInMeetingStatus = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((isInMeeting) => {
    local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.setIsInMeeting,
        isInMeeting,
    });
}, DEFAULT_THROTTLE);
const throttledSetCloudConfig = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((data) => {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.setCloudConfig,
        cloudConfig: data,
    });
}, DEFAULT_THROTTLE);
const throttledOpenDownloadedItem = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((id) => {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.openDownloadedItem,
        id,
    });
}, DEFAULT_THROTTLE);
const throttledShowDownloadedItem = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((id) => {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.showDownloadedItem,
        id,
    });
}, DEFAULT_THROTTLE);
const throttledClearDownloadedItems = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)(() => {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.clearDownloadedItems,
    });
}, DEFAULT_THROTTLE);
const throttledRestart = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)(() => {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.restartApp,
    });
}, DEFAULT_THROTTLE);
const throttledSetZoomLevel = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((zoomLevel) => {
    local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.setZoomLevel,
        zoomLevel,
    });
}, DEFAULT_THROTTLE);
let nextIndicatorId = 0;
class SSFApi {
    constructor() {
        // public Notification = SSFNotificationHandler; // tslint:disable-line
        /**
         * Implements equivalent of desktopCapturer.getSources - that works in
         * a sandboxed renderer process.
         * see: https://electron.atom.io/docs/api/desktop-capturer/
         * for interface: see documentation in desktopCapturer/getSource.js
         *
         * This opens a window and displays all the desktop sources
         * and returns selected source
         */
        this.getMediaSource = renderer_components_desktop_capturer_desktop_capturer__WEBPACK_IMPORTED_MODULE_5__.getSource;
    }
    /**
     * Brings window forward and gives focus.
     *
     * @param  {String} windowName - Name of window. Note: main window name is 'main'
     */
    activate(windowName) {
        if (typeof windowName === 'string') {
            throttledActivate(windowName);
        }
    }
    /**
     * Brings window forward and gives focus.
     *
     * @param  {String} windowName Name of window. Note: main window name is 'main'
     * @param {String} reason, The reason for which the window is to be activated
     */
    bringToFront(windowName, reason) {
        if (typeof windowName === 'string') {
            throttledBringToFront(windowName, reason);
        }
    }
    /**
     * Method that returns various version info
     */
    getVersionInfo() {
        const appName = _package_json__WEBPACK_IMPORTED_MODULE_1__.name;
        const appVer = _package_json__WEBPACK_IMPORTED_MODULE_1__.version;
        const cpuArch = process.arch || '';
        return Promise.resolve({
            containerIdentifier: appName,
            containerVer: appVer,
            buildNumber: _package_json__WEBPACK_IMPORTED_MODULE_1__.buildNumber,
            apiVer: '3.0.0',
            cpuArch,
            // Only need to bump if there are any breaking changes.
            searchApiVer: _package_json__WEBPACK_IMPORTED_MODULE_1__.searchAPIVersion,
        });
    }
    /**
     * Allows JS to register a activity detector that can be used by electron main process.
     *
     * @param  {Object} period - minimum user idle time in millisecond
     * @param  {Object} activityDetectionCallback - function that can be called accepting
     * @example registerActivityDetection(40000, func)
     */
    registerActivityDetection(period, activityDetectionCallback) {
        if (typeof activityDetectionCallback === 'function') {
            local.activityDetectionCallback = activityDetectionCallback;
            // only main window can register
            local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.registerActivityDetection,
                period,
            });
        }
    }
    /**
     * Registers the download handler
     * @param downloadManagerCallback Callback to be triggered by the download handler
     */
    registerDownloadHandler(downloadManagerCallback) {
        if (typeof downloadManagerCallback === 'function') {
            local.downloadManagerCallback = downloadManagerCallback;
        }
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.registerDownloadHandler,
        });
    }
    /**
     * Allows JS to register a callback to be invoked when size/positions
     * changes for any pop-out window (i.e., window.open). The main
     * process will emit IPC event 'boundsChange' (see below). Currently
     * only one window can register for bounds change.
     * @param  {Function} callback Function invoked when bounds changes.
     */
    registerBoundsChange(callback) {
        if (typeof callback === 'function') {
            local.boundsChangeCallback = callback;
        }
    }
    /**
     * Allows JS to register a logger that can be used by electron main process.
     * @param  {Object} logger  function that can be called accepting
     * object: {
     *  logLevel: 'ERROR'|'CONFLICT'|'WARN'|'ACTION'|'INFO'|'DEBUG',
     *  logDetails: String
     *  }
     */
    registerLogger(logger) {
        if (typeof logger === 'function') {
            local.logger = logger;
            // only main window can register
            local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.registerLogger,
            });
        }
    }
    /**
     * Allows JS to register a protocol handler that can be used by the
     * electron main process.
     *
     * @param protocolHandler {Function} callback will be called when app is
     * invoked with registered protocol (e.g., symphony). The callback
     * receives a single string argument: full uri that the app was
     * invoked with e.g., symphony://?streamId=xyz123&streamType=chatroom
     *
     * Note: this function should only be called after client app is fully
     * able for protocolHandler callback to be invoked.  It is possible
     * the app was started using protocol handler, in this case as soon as
     * this registration func is invoked then the protocolHandler callback
     * will be immediately called.
     */
    registerProtocolHandler(protocolHandler) {
        if (typeof protocolHandler === 'function') {
            local.protocolActionCallback = protocolHandler;
            local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.registerProtocolHandler,
            });
        }
    }
    /**
     * Allows JS to register a log retriever that can be used by the
     * electron main process to retrieve current logs.
     */
    registerLogRetriever(collectLogs, logName) {
        if (typeof collectLogs === 'function') {
            if (!local.collectLogsCallback) {
                local.collectLogsCallback = new Array();
            }
            local.collectLogsCallback.push(collectLogs);
            local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.registerLogRetriever,
                logName,
            });
        }
    }
    /**
     * Send log files to main process when requested.
     */
    sendLogs(logName, logFiles) {
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.sendLogs,
            logs: { logName, logFiles },
        });
    }
    /**
     * Allows JS to register analytics event handler
     * to pass analytics event data
     *
     * @param analyticsEventHandler
     */
    registerAnalyticsEvent(analyticsEventHandler) {
        if (typeof analyticsEventHandler === 'function') {
            local.analyticsEventHandler = analyticsEventHandler;
            local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.registerAnalyticsHandler,
            });
        }
    }
    /**
     * Expose old screen snippet api to support backward compatibility
     *
     * @deprecated
     */
    // tslint:disable-next-line
    // public ScreenSnippet = ScreenSnippetBcHandler;
    /**
     * Update presence of current user
     * @param callback (presence:IPresenceStatus)=>void
     * if none is provided then the old logic will be triggered.
     * I dont send this event to main-api-handler because this will only act as a callback assignment
     * It will only trigger if you hit any button at presence-status-handler
     *
     */
    updateMyPresence(callback) {
        if (typeof callback === 'function') {
            local.updateMyPresenceCallback = callback;
        }
    }
    /**
     * Get presence of current user
     * @param myPresence IPresenceStatus
     */
    getMyPresence(myPresence) {
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.getMyPresence,
            status: myPresence,
        });
    }
    openScreenSnippet(screenSnippetCallback, hideOnCapture) {
        if (typeof screenSnippetCallback === 'function') {
            local.screenSnippetCallback = screenSnippetCallback;
            if (hideOnCapture) {
                local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                    cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.openScreenSnippet,
                    hideOnCapture,
                });
            }
            else {
                local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                    cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.openScreenSnippet,
                });
            }
        }
    }
    /**
     * Cancel a screen capture in progress
     */
    closeScreenSnippet() {
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.closeScreenSnippet,
        });
    }
    /**
     * Auto update
     */
    // public autoUpdate(filename: string): void {
    //   local.ipcRenderer.send(apiName.symphonyApi, {
    //     cmd: apiCmds.autoUpdate,
    //     filename,
    //   });
    // }
    /**
     * Sets the count on the tray icon to the given number.
     *
     * @param {number} count  count to be displayed
     * note: count of 0 will remove the displayed count.
     * note: for mac the number displayed will be 1 to infinity
     * note: for windows the number displayed will be 1 to 99 and 99+
     */
    setBadgeCount(count) {
        throttledSetBadgeCount(count);
    }
    /**
     * Sets the language which updates the application locale
     *
     * @param {string} locale - language identifier and a region identifier
     * @example: setLocale(en-US | ja-JP)
     */
    setLocale(locale) {
        if (typeof locale === 'string') {
            _common_i18n_preload__WEBPACK_IMPORTED_MODULE_3__.i18n.setLocale(locale);
            throttledSetLocale(locale);
        }
    }
    /**
     * Sets if the user is in an active meeting
     * will be used to handle memory refresh functionality
     */
    setIsInMeeting(isInMeeting) {
        throttledSetIsInMeetingStatus(isInMeeting);
    }
    /**
     * Opens a modal window to configure notification preference.
     */
    showNotificationSettings(data) {
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.showNotificationSettings,
            windowName: MAIN_WINDOW_NAME,
            theme: data,
        });
    }
    /**
     * Shows a banner that informs user that the screen is being shared.
     *
     * @param options object with following fields:
     *    - stream https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/MediaStream object.
     *             The indicator automatically destroys itself when stream becomes inactive (see MediaStream.active).
     *    - displayId id of the display that is being shared or that contains the shared app
     * @param callback callback function that will be called to handle events.
     * Callback receives event object { type: string }. Types:
     *    - 'error' - error occured. Event object contains 'reason' field.
     *    - 'stopRequested' - user clicked "Stop Sharing" button.
     */
    showScreenSharingIndicator(options, callback) {
        const { displayId, stream } = options;
        if (!stream || !stream.active || stream.getVideoTracks().length !== 1) {
            callback({ type: 'error', reason: 'bad stream' });
            return;
        }
        if (displayId && typeof displayId !== 'string') {
            callback({ type: 'error', reason: 'bad displayId' });
            return;
        }
        const destroy = () => {
            throttledCloseScreenShareIndicator(stream.id);
            stream.removeEventListener('inactive', destroy);
        };
        stream.addEventListener('inactive', destroy);
        if (typeof callback === 'function') {
            local.screenSharingIndicatorCallback = callback;
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.openScreenSharingIndicator,
                displayId,
                id: ++nextIndicatorId,
                streamId: stream.id,
            });
        }
    }
    /**
     * Shows a banner that informs user that the screen is being shared.
     *
     * @param options object with following fields:
     *    - streamId unique id of stream
     *    - displayId id of the display that is being shared or that contains the shared app
     *    - requestId id to match the exact request
     * @param callback callback function that will be called to handle events.
     * Callback receives event object { type: string }. Types:
     *    - 'error' - error occured. Event object contains 'reason' field.
     *    - 'stopRequested' - user clicked "Stop Sharing" button.
     */
    openScreenSharingIndicator(options, callback) {
        const { displayId, requestId, streamId } = options;
        if (typeof callback === 'function') {
            local.screenSharingIndicatorCallback = callback;
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.openScreenSharingIndicator,
                displayId,
                id: requestId,
                streamId,
            });
        }
    }
    /**
     * Closes the screen sharing indicator
     */
    closeScreenSharingIndicator(winKey) {
        throttledCloseScreenShareIndicator(winKey);
    }
    /**
     * Allows JS to register a function to restart floater
     * @param callback
     */
    registerRestartFloater(callback) {
        local.restartFloater = callback;
    }
    /**
     * Allows JS to set the PMP & ACP cloud config
     *
     * @param data {ICloudConfig}
     */
    setCloudConfig(data) {
        throttledSetCloudConfig(data);
    }
    /**
     * Open Downloaded item
     * @param id ID of the item
     */
    openDownloadedItem(id) {
        throttledOpenDownloadedItem(id);
    }
    /**
     * Show downloaded item in finder / explorer
     * @param id ID of the item
     */
    showDownloadedItem(id) {
        throttledShowDownloadedItem(id);
    }
    /**
     * Clears downloaded items
     */
    clearDownloadedItems() {
        throttledClearDownloadedItems();
    }
    /**
     * Restart the app
     */
    restartApp() {
        throttledRestart();
    }
    /**
     * get CPU usage
     */
    async getCPUUsage() {
        return Promise.resolve(await process.getCPUUsage());
    }
    /**
     * Check media permission
     */
    async checkMediaPermission() {
        const mediaStatus = (await electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.getMediaAccessStatus,
        }));
        return Promise.resolve({
            camera: mediaStatus.camera,
            microphone: mediaStatus.microphone,
            screen: mediaStatus.screen,
        });
    }
    /**
     * Sets whether the client is running on mana
     * @param isMana
     */
    setIsMana(isMana) {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.setIsMana,
            isMana,
        });
    }
    /**
     * Closes all browser windows on SDA side, such as notifications, Screen snippet window, popped out chats etc
     */
    closeAllWrapperWindows() {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.closeAllWrapperWindows,
        });
    }
    /**
     * Displays a notification from the main process
     * @param notificationOpts {INotificationData}
     * @param notificationCallback {NotificationActionCallback}
     */
    showNotification(notificationOpts, notificationCallback) {
        // Store callbacks based on notification id so,
        // we can use this to trigger on notification action
        if (typeof notificationOpts.id === 'number') {
            notificationActionCallbacks.set(notificationOpts.id, notificationCallback);
        }
        // ipc does not support sending Functions, Promises, Symbols, WeakMaps,
        // or WeakSets will throw an exception
        if (notificationOpts.callback) {
            delete notificationOpts.callback;
        }
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.showNotification,
            notificationOpts,
        });
    }
    /**
     * Closes a specific notification based on id
     * @param notificationId {number} Id of a notification
     */
    closeNotification(notificationId) {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.closeNotification,
            notificationId,
        });
    }
    /**
     * Displays a call notification from the main process
     * @param notificationOpts {INotificationData}
     * @param notificationCallback {NotificationActionCallback}
     */
    showCallNotification(notificationOpts, notificationCallback) {
        // Store callbacks based on notification id so,
        // we can use this to trigger on notification action
        if (typeof notificationOpts.id === 'number') {
            callNotificationActionCallbacks.set(notificationOpts.id, notificationCallback);
        }
        // ipc does not support sending Functions, Promises, Symbols, WeakMaps,
        // or WeakSets will throw an exception
        if (notificationOpts.callback) {
            delete notificationOpts.callback;
        }
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.showCallNotification,
            notificationOpts,
        });
    }
    /**
     * Closes a specific call notification based on id
     * @param notificationId {number} Id of a notification
     */
    closeCallNotification(notificationId) {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.closeCallNotification,
            notificationId,
        });
    }
    /**
     * Get zoom level
     *
     */
    getZoomLevel() {
        return new Promise((resolve) => {
            resolve(electron__WEBPACK_IMPORTED_MODULE_0__.webFrame.getZoomFactor());
        });
    }
    /**
     * Sets zoom level
     *
     * @param {string} zoomLevel - language identifier and a region identifier
     * @example: setZoomLevel(0.9)
     */
    setZoomLevel(zoomLevel) {
        if (typeof zoomLevel === 'number') {
            throttledSetZoomLevel(zoomLevel);
        }
    }
    /**
     * Get SDA supported settings.
     * @returns list of supported features
     */
    supportedSettings() {
        return SUPPORTED_SETTINGS || [];
    }
    /**
     * Get native window handle of the window, by default where the renderer is displayed,
     * or optionally another window identified by its name.
     * @param windowName optional window name, defaults to current renderer window
     * @returns the platform-specific handle of the window.
     */
    getNativeWindowHandle(windowName) {
        if (!windowName) {
            windowName = window.name || 'main';
        }
        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.getNativeWindowHandle,
            windowName,
        });
    }
    /**
     * Retrieves the current status of Citrix' media redirection feature
     * @returns status
     */
    getCitrixMediaRedirectionStatus() {
        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.getCitrixMediaRedirectionStatus,
        });
    }
    /**
     * Allows JS to register a function to display a client banner
     * @param callback
     */
    registerClientBanner(callback) {
        if (!local.showClientBannerCallback) {
            local.showClientBannerCallback = new Array();
        }
        if (typeof callback === 'function') {
            local.showClientBannerCallback.push(callback);
        }
    }
    /**
     * Connects to a Cloud9 pipe
     *
     * @param pipe pipe name
     * @param onData callback that is invoked when data is received over the connection
     * @param onClose callback that is invoked when the connection is closed by the remote side
     * @returns Cloud9 pipe instance promise
     */
    connectCloud9Pipe(pipe, onData, onClose) {
        if (typeof pipe === 'string' &&
            typeof onData === 'function' &&
            typeof onClose === 'function') {
            if (local.c9PipeEventCallback) {
                return Promise.reject("Can't connect to pipe, already connected");
            }
            return new Promise((resolve, reject) => {
                local.c9PipeEventCallback = (event, arg) => {
                    switch (event) {
                        case 'connected':
                            const ret = {
                                write: (data) => {
                                    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                                        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.writeCloud9Pipe,
                                        data,
                                    });
                                },
                                close: () => {
                                    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                                        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.closeCloud9Pipe,
                                    });
                                },
                            };
                            resolve(ret);
                            break;
                        case 'connection-failed':
                            local.c9PipeEventCallback = undefined;
                            reject(arg);
                            break;
                        case 'data':
                            onData(arg);
                            break;
                        case 'close':
                            local.c9PipeEventCallback = undefined;
                            onClose();
                            break;
                    }
                };
                electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
                    cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.connectCloud9Pipe,
                    pipe,
                });
            });
        }
        return Promise.reject('Invalid arguments');
    }
    /**
     * Launches the Cloud9 client.
     */
    launchCloud9(callback) {
        local.c9MessageCallback = callback;
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.launchCloud9,
        });
    }
    /**
     * Terminates the Cloud9 client.
     */
    terminateCloud9() {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.terminateCloud9,
        });
    }
    /**
     * Allows JS to install new update and restart SDA
     */
    updateAndRestart() {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.updateAndRestart,
        });
    }
    /**
     * Allows JS to download the latest SDA updates
     */
    downloadUpdate() {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.downloadUpdate,
        });
    }
    /**
     * Allows JS to check for updates
     */
    checkForUpdates(autoUpdateTrigger) {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.checkForUpdates,
            autoUpdateTrigger,
        });
    }
    /**
     * Allows JS to register SDA for phone numbers clicks
     * @param {Function} phoneNumberCallback callback function invoked when receiving a phone number for calls/sms
     */
    registerPhoneNumberServices(protocols, phoneNumberCallback) {
        if (typeof phoneNumberCallback === 'function') {
            local.phoneNumberCallback = phoneNumberCallback;
        }
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.registerPhoneNumberServices,
            protocols,
        });
    }
    /**
     * Allows JS to unregister app to sms/call protocols
     * @param protocol protocol to be unregistered.
     */
    unregisterPhoneNumberServices(protocols) {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.unregisterPhoneNumberServices,
            protocols,
        });
    }
}
/**
 * Ipc events
 */
/**
 * An event triggered by the main process
 * to construct a canvas for the Windows badge count image
 *
 * @param {IBadgeCount} arg {
 *     count: number
 * }
 */
local.ipcRenderer.on('create-badge-data-url', (_event, arg) => {
    const count = (arg && arg.count) || 0;
    // create 32 x 32 img
    const radius = 16;
    const canvas = document.createElement('canvas');
    canvas.height = radius * 2;
    canvas.width = radius * 2;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        const text = count > 99 ? '99+' : count.toString();
        if (text.length > 2) {
            ctx.font = 'bold 18px sans-serif';
            ctx.fillText(text, radius, 22);
        }
        else if (text.length > 1) {
            ctx.font = 'bold 24px sans-serif';
            ctx.fillText(text, radius, 24);
        }
        else {
            ctx.font = 'bold 26px sans-serif';
            ctx.fillText(text, radius, 26);
        }
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.badgeDataUrl,
            count,
            dataUrl,
        });
    }
});
local.ipcRenderer.on('send-presence-status-data', (_event, arg) => {
    if (typeof local.updateMyPresenceCallback === 'function') {
        local.updateMyPresenceCallback(arg);
    }
});
/**
 * An event triggered by the main process
 * when the snippet is complete
 *
 * @param {IScreenSnippet} arg {
 *     message: string,
 *     data: base64,
 *     type: 'ERROR' | 'image/jpg;base64',
 * }
 */
local.ipcRenderer.on('screen-snippet-data', (_event, arg) => {
    if (typeof arg === 'object' &&
        typeof local.screenSnippetCallback === 'function') {
        local.screenSnippetCallback(arg);
    }
});
local.ipcRenderer.on('collect-logs', (_event) => {
    if (local.collectLogsCallback) {
        for (const callback of local.collectLogsCallback) {
            callback();
        }
    }
});
/**
 * An event triggered by the main process
 * for ever few minutes if the user is active
 *
 * @param {number} idleTime - current system idle tick
 */
local.ipcRenderer.on('activity', (_event, idleTime) => {
    if (typeof idleTime === 'number' &&
        typeof local.activityDetectionCallback === 'function') {
        local.activityDetectionCallback(idleTime);
    }
});
local.ipcRenderer.on('download-completed', (_event, downloadItem) => {
    if (typeof downloadItem === 'object' &&
        typeof local.downloadManagerCallback === 'function') {
        local.downloadManagerCallback({
            status: 'download-completed',
            item: downloadItem,
        });
    }
});
local.ipcRenderer.on('download-failed', (_event) => {
    if (typeof local.downloadManagerCallback === 'function') {
        local.downloadManagerCallback({ status: 'download-failed' });
    }
});
/**
 * An event triggered by the main process
 * Whenever some Window position or dimension changes
 *
 * @param {IBoundsChange} arg {
 *     x: number,
 *     y: number,
 *     height: number,
 *     width: number,
 *     windowName: string
 * }
 *
 */
local.ipcRenderer.on('boundsChange', (_event, arg) => {
    const { x, y, height, width, windowName } = arg;
    if (x &&
        y &&
        height &&
        width &&
        windowName &&
        typeof local.boundsChangeCallback === 'function') {
        local.boundsChangeCallback({
            x,
            y,
            height,
            width,
            windowName,
        });
    }
});
/**
 * An event triggered by the main process
 * when the screen sharing has been stopper
 */
local.ipcRenderer.on(_common_ipcEvent__WEBPACK_IMPORTED_MODULE_6__.ScreenShareEvents.STOPPED, (_event, id) => {
    if (typeof local.screenSharingIndicatorCallback === 'function') {
        local.screenSharingIndicatorCallback({
            type: 'stopRequested',
            requestId: id,
        });
    }
});
/**
 * An event triggered by the main process
 * for send logs on to web app
 *
 * @param {object} arg {
 *      msgs: ILogMsg[],
 *      logLevel: LogLevel,
 *      showInConsole: boolean
 * }
 *
 */
local.ipcRenderer.on('log', (_event, arg) => {
    if (arg && local.logger) {
        local.logger(arg.msgs || [], arg.logLevel, arg.showInConsole);
    }
});
/**
 * An event triggered by the main process for processing protocol urls
 * @param {String} arg - the protocol url
 */
local.ipcRenderer.on('protocol-action', (_event, arg) => {
    if (typeof local.protocolActionCallback === 'function' &&
        typeof arg === 'string') {
        local.protocolActionCallback(arg);
    }
});
local.ipcRenderer.on('analytics-callback', (_event, arg) => {
    if (typeof local.analyticsEventHandler === 'function' && arg) {
        local.analyticsEventHandler(arg);
    }
});
/**
 * An event triggered by the main process to restart the child window
 * @param {IRestartFloaterData}
 */
local.ipcRenderer.on('restart-floater', (_event, { windowName, bounds }) => {
    if (typeof local.restartFloater === 'function' && windowName) {
        local.restartFloater({ windowName, bounds });
    }
});
/**
 * An event triggered by the main process on notification actions
 * @param {INotificationData}
 */
local.ipcRenderer.on('notification-actions', (_event, args) => {
    const callback = notificationActionCallbacks.get(args.data.id);
    const { data } = args;
    data.notificationData = args.notificationData;
    if (args && callback) {
        callback(args.event, data);
    }
});
/**
 * An event triggered by the main process on call notification actions
 * @param {ICallNotificationData}
 */
local.ipcRenderer.on('call-notification-actions', (_event, args) => {
    const callback = callNotificationActionCallbacks.get(args.data.id);
    const { data } = args;
    data.notificationData = args.notificationData;
    if (args && callback) {
        callback(args.event, data);
    }
});
/**
 * An event triggered by the main process on updating the cloud config
 * @param {string[]}
 */
local.ipcRenderer.on('display-client-banner', (_event, args) => {
    if (local.showClientBannerCallback) {
        for (const callback of local.showClientBannerCallback) {
            if (args.data) {
                callback(args.reason, args.action, args.data);
                return;
            }
            callback(args.reason, args.action);
        }
    }
});
/**
 * An event triggered by the main process when a cloud9 pipe event occurs
 */
local.ipcRenderer.on('c9-pipe-event', (_event, args) => {
    local.c9PipeEventCallback?.call(null, args.event, args?.arg);
});
/**
 * An event triggered by the main process when the status of the cloud9 client changes
 */
local.ipcRenderer.on('c9-status-event', (_event, args) => {
    local.c9MessageCallback?.call(null, args?.status);
});
/**
 * An event triggered by the main process
 * to forward clicked phone number
 *
 * @param {string} phoneNumber - phone number received by SDA
 */
local.ipcRenderer.on('phone-number-received', (_event, phoneNumber) => {
    if (typeof phoneNumber === 'string' &&
        typeof local.phoneNumberCallback === 'function') {
        local.phoneNumberCallback(phoneNumber);
    }
});
// Invoked whenever the app is reloaded/navigated
const sanitize = () => {
    if (window.name === _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.mainWindowName) {
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.sanitize,
            windowName: window.name,
        });
    }
};
// listens for the online/offline events and updates the main process
const updateOnlineStatus = () => {
    local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
        cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.isOnline,
        isOnline: window.navigator.onLine,
    });
};
// Handle key down events
const throttledKeyDown = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((event) => {
    isAltKey = event.keyCode === _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.KeyCodes.Alt;
    if (event.keyCode === _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.KeyCodes.Esc) {
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.keyPress,
            keyCode: event.keyCode,
        });
    }
}, 500);
// Handle key up events
const throttledKeyUp = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)((event) => {
    if (isAltKey && (event.keyCode === _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.KeyCodes.Alt || _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.KeyCodes.Esc)) {
        isMenuOpen = !isMenuOpen;
    }
    if (isAltKey && isMenuOpen && event.keyCode === _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.KeyCodes.Alt) {
        local.ipcRenderer.send(_common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiName.symphonyApi, {
            cmd: _common_api_interface__WEBPACK_IMPORTED_MODULE_2__.apiCmds.keyPress,
            keyCode: event.keyCode,
        });
    }
}, 500);
// Handle mouse down event
const throttleMouseDown = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.throttle)(() => {
    if (isAltKey && isMenuOpen) {
        isMenuOpen = !isMenuOpen;
    }
}, 500);
/**
 * Window Events
 */
window.addEventListener('beforeunload', sanitize, false);
window.addEventListener('offline', updateOnlineStatus, false);
window.addEventListener('online', updateOnlineStatus, false);
window.addEventListener('keyup', throttledKeyUp, true);
window.addEventListener('keydown', throttledKeyDown, true);
window.addEventListener('mousedown', throttleMouseDown, { capture: true });


/***/ }),

/***/ "./src/common/api-interface.ts":
/*!*************************************!*\
  !*** ./src/common/api-interface.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPresenceStatusCategory: () => (/* binding */ EPresenceStatusCategory),
/* harmony export */   EPresenceStatusGroup: () => (/* binding */ EPresenceStatusGroup),
/* harmony export */   KeyCodes: () => (/* binding */ KeyCodes),
/* harmony export */   NOTIFICATION_WINDOW_TITLE: () => (/* binding */ NOTIFICATION_WINDOW_TITLE),
/* harmony export */   NotificationActions: () => (/* binding */ NotificationActions),
/* harmony export */   PhoneNumberProtocol: () => (/* binding */ PhoneNumberProtocol),
/* harmony export */   apiCmds: () => (/* binding */ apiCmds),
/* harmony export */   apiName: () => (/* binding */ apiName)
/* harmony export */ });
var apiCmds;
(function (apiCmds) {
    apiCmds["isOnline"] = "is-online";
    apiCmds["getVersionInfo"] = "get-version-info";
    apiCmds["registerLogger"] = "register-logger";
    apiCmds["setBadgeCount"] = "set-badge-count";
    apiCmds["badgeDataUrl"] = "badge-data-url";
    apiCmds["activate"] = "activate";
    apiCmds["registerBoundsChange"] = "register-bounds-change";
    apiCmds["registerProtocolHandler"] = "register-protocol-handler";
    apiCmds["registerLogRetriever"] = "register-log-retriever";
    apiCmds["sendLogs"] = "send-logs";
    apiCmds["registerAnalyticsHandler"] = "register-analytics-handler";
    apiCmds["registerActivityDetection"] = "register-activity-detection";
    apiCmds["showNotificationSettings"] = "show-notification-settings";
    apiCmds["sanitize"] = "sanitize";
    apiCmds["bringToFront"] = "bring-to-front";
    apiCmds["openScreenPickerWindow"] = "open-screen-picker-window";
    apiCmds["popupMenu"] = "popup-menu";
    apiCmds["optimizeMemoryConsumption"] = "optimize-memory-consumption";
    apiCmds["optimizeMemoryRegister"] = "optimize-memory-register";
    apiCmds["setIsInMeeting"] = "set-is-in-meeting";
    apiCmds["setLocale"] = "set-locale";
    apiCmds["openScreenSnippet"] = "open-screen-snippet";
    apiCmds["closeScreenSnippet"] = "close-screen-snippet";
    apiCmds["screenSnippetAnalyticsData"] = "snippet-analytics-data";
    apiCmds["keyPress"] = "key-press";
    apiCmds["closeWindow"] = "close-window";
    apiCmds["openScreenSharingIndicator"] = "open-screen-sharing-indicator";
    apiCmds["closeScreenSharingIndicator"] = "close-screen-sharing-indicator";
    apiCmds["downloadManagerAction"] = "download-manager-action";
    apiCmds["getMediaSource"] = "get-media-source";
    apiCmds["notification"] = "notification";
    apiCmds["closeNotification"] = "close-notification";
    apiCmds["closeCallNotification"] = "close-call-notification";
    apiCmds["memoryInfo"] = "memory-info";
    apiCmds["swiftSearch"] = "swift-search";
    apiCmds["getConfigUrl"] = "get-config-url";
    apiCmds["registerRestartFloater"] = "register-restart-floater";
    apiCmds["setCloudConfig"] = "set-cloud-config";
    apiCmds["getCPUUsage"] = "get-cpu-usage";
    apiCmds["checkMediaPermission"] = "check-media-permission";
    apiCmds["registerDownloadHandler"] = "register-download-handler";
    apiCmds["openDownloadedItem"] = "open-downloaded-item";
    apiCmds["showDownloadedItem"] = "show-downloaded-item";
    apiCmds["clearDownloadedItems"] = "clear-downloaded-items";
    apiCmds["restartApp"] = "restart-app";
    apiCmds["setIsMana"] = "set-is-mana";
    apiCmds["showNotification"] = "show-notification";
    apiCmds["showCallNotification"] = "show-call-notification";
    apiCmds["closeAllWrapperWindows"] = "close-all-windows";
    apiCmds["setZoomLevel"] = "set-zoom-level";
    apiCmds["aboutAppClipBoardData"] = "about-app-clip-board-data";
    apiCmds["closeMainWindow"] = "close-main-window";
    apiCmds["minimizeMainWindow"] = "minimize-main-window";
    apiCmds["maximizeMainWindow"] = "maximize-main-window";
    apiCmds["unmaximizeMainWindow"] = "unmaximize-main-window";
    apiCmds["getCurrentOriginUrl"] = "get-current-origin-url";
    apiCmds["isAeroGlassEnabled"] = "is-aero-glass-enabled";
    apiCmds["showScreenSharePermissionDialog"] = "show-screen-share-permission-dialog";
    apiCmds["getMediaAccessStatus"] = "get-media-access-status";
    apiCmds["setBroadcastMessage"] = "set-broadcast-message";
    apiCmds["handleSwiftSearchMessageEvents"] = "handle-shift-search-message-events";
    apiCmds["onSwiftSearchMessage"] = "on-shift-search-message";
    apiCmds["getNativeWindowHandle"] = "get-native-window-handle";
    apiCmds["getCitrixMediaRedirectionStatus"] = "get-citrix-media-redirection-status";
    apiCmds["getSources"] = "getSources";
    apiCmds["launchCloud9"] = "launch-cloud9";
    apiCmds["terminateCloud9"] = "terminate-cloud9";
    apiCmds["connectCloud9Pipe"] = "connect-cloud9-pipe";
    apiCmds["writeCloud9Pipe"] = "write-cloud9-pipe";
    apiCmds["closeCloud9Pipe"] = "close-cloud9-pipe";
    apiCmds["updateAndRestart"] = "update-and-restart";
    apiCmds["downloadUpdate"] = "download-update";
    apiCmds["checkForUpdates"] = "check-for-updates";
    apiCmds["browserLogin"] = "browser-login";
    apiCmds["updateMyPresence"] = "update-my-presence";
    apiCmds["getMyPresence"] = "get-my-presence";
    apiCmds["updateSymphonyTray"] = "update-system-tray";
    apiCmds["registerPhoneNumberServices"] = "register-phone-numbers-services";
    apiCmds["unregisterPhoneNumberServices"] = "unregister-phone-numbers-services";
})(apiCmds || (apiCmds = {}));
var apiName;
(function (apiName) {
    apiName["symphonyApi"] = "symphony-api";
    apiName["mainWindowName"] = "main";
    apiName["notificationWindowName"] = "notification-window";
    apiName["welcomeScreenName"] = "welcome-screen";
    apiName["snippingToolWindowName"] = "snipping-tool-window";
})(apiName || (apiName = {}));
const NOTIFICATION_WINDOW_TITLE = 'Notification - Symphony';
var EPresenceStatusCategory;
(function (EPresenceStatusCategory) {
    EPresenceStatusCategory["ONLINE"] = "ONLINE";
    EPresenceStatusCategory["OFFLINE"] = "OFFLINE";
    EPresenceStatusCategory["AWAY"] = "AWAY";
    EPresenceStatusCategory["DO_NOT_DISTURB"] = "DO_NOT_DISTURB";
    EPresenceStatusCategory["BUSY"] = "BUSY";
    EPresenceStatusCategory["ON_THE_PHONE"] = "ON_THE_PHONE";
    EPresenceStatusCategory["AVAILABLE"] = "AVAILABLE";
    EPresenceStatusCategory["OUT_OF_OFFICE"] = "OUT_OF_OFFICE";
    EPresenceStatusCategory["IN_A_MEETING"] = "IN_A_MEETING";
    EPresenceStatusCategory["BE_RIGHT_BACK"] = "BE_RIGHT_BACK";
    EPresenceStatusCategory["OFF_WORK"] = "OFF_WORK";
    EPresenceStatusCategory["NO_PRESENCE"] = "NO_PRESENCE";
})(EPresenceStatusCategory || (EPresenceStatusCategory = {}));
var EPresenceStatusGroup;
(function (EPresenceStatusGroup) {
    EPresenceStatusGroup["ONLINE"] = "online";
    EPresenceStatusGroup["BUSY"] = "busy";
    EPresenceStatusGroup["IDLE"] = "idle";
    EPresenceStatusGroup["OFFLINE"] = "offline";
    EPresenceStatusGroup["ABSENT"] = "absent";
    EPresenceStatusGroup["MEETING"] = "meeting";
    EPresenceStatusGroup["HIDE_PRESENCE"] = "hide";
})(EPresenceStatusGroup || (EPresenceStatusGroup = {}));
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["Esc"] = 27] = "Esc";
    KeyCodes[KeyCodes["Alt"] = 18] = "Alt";
})(KeyCodes || (KeyCodes = {}));
var NotificationActions;
(function (NotificationActions) {
    NotificationActions["notificationClicked"] = "notification-clicked";
    NotificationActions["notificationClosed"] = "notification-closed";
    NotificationActions["notificationReply"] = "notification-reply";
    NotificationActions["notificationIgnore"] = "notification-ignore";
    NotificationActions["notificationAccept"] = "notification-accept";
    NotificationActions["notificationReject"] = "notification-reject";
})(NotificationActions || (NotificationActions = {}));
var PhoneNumberProtocol;
(function (PhoneNumberProtocol) {
    PhoneNumberProtocol["Tel"] = "tel";
    PhoneNumberProtocol["Sms"] = "sms";
})(PhoneNumberProtocol || (PhoneNumberProtocol = {}));


/***/ }),

/***/ "./src/common/env.ts":
/*!***************************!*\
  !*** ./src/common/env.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElectronQA: () => (/* binding */ isElectronQA),
/* harmony export */   isLinux: () => (/* binding */ isLinux),
/* harmony export */   isMac: () => (/* binding */ isMac),
/* harmony export */   isWindowsOS: () => (/* binding */ isWindowsOS)
/* harmony export */ });
const isElectronQA = !!process.env.ELECTRON_QA;
const isMac = process.platform === 'darwin';
const isWindowsOS = process.platform === 'win32';
const isLinux = process.platform === 'linux';


/***/ }),

/***/ "./src/common/i18n-preload.ts":
/*!************************************!*\
  !*** ./src/common/i18n-preload.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i18n: () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/common/utils.ts");

const localeCodeRegex = /^([a-z]{2})-([A-Z]{2})$/;
class Translation {
    constructor() {
        this.locale = 'en-US';
        this.loadedResources = {};
    }
    /**
     * Returns translated string with respect to value, resource & name space
     *
     * @param value {string} key field in the resources
     * @param resource {string} current locale resource
     * @param namespace {string} name space in the resource
     */
    static translate(value, resource, namespace) {
        return resource
            ? Translation.getResource(resource, namespace)[value] || value
            : value;
    }
    /**
     * Apply the locale for translation
     *
     * @param locale
     */
    setLocale(locale) {
        const localeMatch = locale.match(localeCodeRegex);
        if (!locale && (!localeMatch || localeMatch.length < 1)) {
            return;
        }
        this.locale = locale;
    }
    /**
     * Gets the current locale
     *
     * @return LocaleType {string}
     */
    getLocale() {
        return this.locale;
    }
    /**
     * fetches and returns the translated value
     *
     * @param value {string}
     * @param namespace {string}
     * @example t('translate and formats {data} ', namespace)({ data: 'string' })
     * @returns translate and formats string
     */
    t(value, namespace) {
        return (args) => {
            if (this.loadedResources && this.loadedResources[this.locale]) {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatString)(Translation.translate(value, this.loadedResources[this.locale], namespace), args);
            }
            const resource = this.loadResource(this.locale);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatString)(Translation.translate(value, resource, namespace) || value, args);
        };
    }
    /**
     * Keeps ref of loaded resources from the main process
     *
     * @param locale {LocaleType}
     * @param resource {JSON}
     */
    setResource(locale, resource) {
        this.locale = locale;
        this.loadedResources = resource;
    }
    /**
     * Reads the resources dir and returns the data
     *
     * @param locale
     */
    loadResource(locale) {
        return this.loadedResources[locale];
    }
}
Translation.getResource = (resource, namespace) => (namespace ? resource[namespace] : resource);
const i18n = new Translation();



/***/ }),

/***/ "./src/common/ipcEvent.ts":
/*!********************************!*\
  !*** ./src/common/ipcEvent.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutAppEvents: () => (/* binding */ AboutAppEvents),
/* harmony export */   BasicAuthEvents: () => (/* binding */ BasicAuthEvents),
/* harmony export */   CallNotificationEvents: () => (/* binding */ CallNotificationEvents),
/* harmony export */   LoadingScreenEvents: () => (/* binding */ LoadingScreenEvents),
/* harmony export */   NotificationEvents: () => (/* binding */ NotificationEvents),
/* harmony export */   NotificationSettingsEvents: () => (/* binding */ NotificationSettingsEvents),
/* harmony export */   ScreenPickerEvents: () => (/* binding */ ScreenPickerEvents),
/* harmony export */   ScreenShareEvents: () => (/* binding */ ScreenShareEvents),
/* harmony export */   ScreenShareIndicatorEvents: () => (/* binding */ ScreenShareIndicatorEvents),
/* harmony export */   ScreenShotAnnotationEvents: () => (/* binding */ ScreenShotAnnotationEvents),
/* harmony export */   TitleBarEvents: () => (/* binding */ TitleBarEvents)
/* harmony export */ });
var ScreenShotAnnotationEvents;
(function (ScreenShotAnnotationEvents) {
    ScreenShotAnnotationEvents["COPY_TO_CLIPBOARD"] = "copy-to-clipboard";
    ScreenShotAnnotationEvents["SAVE_AS"] = "save-as";
    ScreenShotAnnotationEvents["CLOSE"] = "close-snippet";
    ScreenShotAnnotationEvents["ANALYTICS"] = "snippet-analytics-data";
    ScreenShotAnnotationEvents["UPLOAD_SNIPPET"] = "upload-snippet";
    ScreenShotAnnotationEvents["DATA"] = "snipping-tool-data";
})(ScreenShotAnnotationEvents || (ScreenShotAnnotationEvents = {}));
var AboutAppEvents;
(function (AboutAppEvents) {
    AboutAppEvents["DATA"] = "about-app-data";
    AboutAppEvents["CLOSE"] = "close-about-app";
    AboutAppEvents["POD_UPDATED"] = "user-pod-updated";
})(AboutAppEvents || (AboutAppEvents = {}));
var NotificationSettingsEvents;
(function (NotificationSettingsEvents) {
    NotificationSettingsEvents["DATA"] = "notification-settings-data";
    NotificationSettingsEvents["UPDATE_SETTINGS"] = "notification-settings-update";
})(NotificationSettingsEvents || (NotificationSettingsEvents = {}));
var NotificationEvents;
(function (NotificationEvents) {
    NotificationEvents["DATA"] = "notification-data";
    NotificationEvents["CLICKED"] = "notification-clicked";
    NotificationEvents["CLOSE"] = "close-notification";
    NotificationEvents["MOUSE_ENTER"] = "notification-mouseenter";
    NotificationEvents["MOUSE_LEAVE"] = "notification-mouseleave";
    NotificationEvents["ON_IGNORE"] = "notification-on-ignore";
    NotificationEvents["ON_REPLY"] = "notification-on-reply";
    NotificationEvents["SHOW_REPLY"] = "show-reply";
})(NotificationEvents || (NotificationEvents = {}));
var ScreenShareIndicatorEvents;
(function (ScreenShareIndicatorEvents) {
    ScreenShareIndicatorEvents["DATA"] = "screen-sharing-indicator-data";
})(ScreenShareIndicatorEvents || (ScreenShareIndicatorEvents = {}));
var ScreenShareEvents;
(function (ScreenShareEvents) {
    ScreenShareEvents["STOP"] = "stop-screen-sharing";
    ScreenShareEvents["START"] = "start-share";
    ScreenShareEvents["ARGV"] = "screen-share-argv";
    ScreenShareEvents["IS_ENABLED"] = "is-screen-share-enabled";
    ScreenShareEvents["STOPPED"] = "screen-sharing-stopped";
})(ScreenShareEvents || (ScreenShareEvents = {}));
var ScreenPickerEvents;
(function (ScreenPickerEvents) {
    ScreenPickerEvents["DATA"] = "screen-picker-data";
    ScreenPickerEvents["SOURCE_SELECT"] = "screen-source-select";
    ScreenPickerEvents["SOURCE_SELECTED"] = "screen-source-selected";
})(ScreenPickerEvents || (ScreenPickerEvents = {}));
var CallNotificationEvents;
(function (CallNotificationEvents) {
    CallNotificationEvents["CLICKED"] = "call-notification-clicked";
    CallNotificationEvents["ON_ACCEPT"] = "call-notification-on-accept";
    CallNotificationEvents["ON_REJECT"] = "call-notification-on-reject";
    CallNotificationEvents["DATA"] = "call-notification-data";
})(CallNotificationEvents || (CallNotificationEvents = {}));
var TitleBarEvents;
(function (TitleBarEvents) {
    TitleBarEvents["MAXIMIZE"] = "maximize";
    TitleBarEvents["UNMAXIMIZE"] = "unmaximize";
    TitleBarEvents["MOVE"] = "move";
    TitleBarEvents["DISABLE_ACTION_BUTTON"] = "disable-action-button";
})(TitleBarEvents || (TitleBarEvents = {}));
var LoadingScreenEvents;
(function (LoadingScreenEvents) {
    LoadingScreenEvents["RELOAD"] = "reload-symphony";
    LoadingScreenEvents["QUIT"] = "quit-symphony";
    LoadingScreenEvents["DATA"] = "loading-screen-data";
})(LoadingScreenEvents || (LoadingScreenEvents = {}));
var BasicAuthEvents;
(function (BasicAuthEvents) {
    BasicAuthEvents["DATA"] = "basic-auth-data";
    BasicAuthEvents["LOGIN"] = "basic-auth-login";
    BasicAuthEvents["CLOSED"] = "basic-auth-closed";
})(BasicAuthEvents || (BasicAuthEvents = {}));


/***/ }),

/***/ "./src/common/utils.ts":
/*!*****************************!*\
  !*** ./src/common/utils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DelayedFunctionQueue: () => (/* binding */ DelayedFunctionQueue),
/* harmony export */   arrayEquals: () => (/* binding */ arrayEquals),
/* harmony export */   calculatePercentage: () => (/* binding */ calculatePercentage),
/* harmony export */   compareVersions: () => (/* binding */ compareVersions),
/* harmony export */   filterOutSelectedValues: () => (/* binding */ filterOutSelectedValues),
/* harmony export */   formatString: () => (/* binding */ formatString),
/* harmony export */   getCommandLineArgs: () => (/* binding */ getCommandLineArgs),
/* harmony export */   getDifferenceInDays: () => (/* binding */ getDifferenceInDays),
/* harmony export */   getGuid: () => (/* binding */ getGuid),
/* harmony export */   getRandomTime: () => (/* binding */ getRandomTime),
/* harmony export */   isUrl: () => (/* binding */ isUrl),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
// regex match the semver (semantic version) this checks for the pattern X.Y.Z
// ex-valid  v1.2.0, 1.2.0, 2.3.4-r51
const semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(?:-[\da-z-]+(?:\.[\da-z-]+)*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?)?)?$/i;
const patch = /-([0-9A-Za-z-.]+)/;
/**
 * Splits the versions
 * into major, minor and patch
 * @param v
 * @returns {String[]}
 */
const split = (v) => {
    const temp = v.replace(/^v/, '').split('.');
    const arr = temp.splice(0, 2);
    arr.push(temp.join('.'));
    return arr;
};
/**
 * This function tries to parse the version string
 * @param v Version string
 */
const tryParse = (v) => {
    return Number.isNaN(Number(v)) ? v : Number(v);
};
/**
 * Validates the version
 * with the semver regex and returns
 * -1 if not valid else 1
 * @param version
 * @returns {number}
 */
const validate = (version) => {
    if (!semver.test(version)) {
        return -1;
    }
    return 1;
};
/**
 * Compares the v1 version with the v2 version
 * for all major, minor, patch
 * if v1 > v2 returns 1
 * if v1 < v2 returns -1
 * if v1 = v2 returns 0
 * @param v1
 * @param v2
 * @returns {number}
 */
const compareVersions = (v1, v2) => {
    if (validate(v1) === -1 || validate(v2) === -1) {
        return -1;
    }
    const s1 = split(v1);
    const s2 = split(v2);
    for (let i = 0; i < 3; i++) {
        const n1 = parseInt(s1[i] || '0', 10);
        const n2 = parseInt(s2[i] || '0', 10);
        if (n1 > n2) {
            return 1;
        }
        if (n2 > n1) {
            return -1;
        }
    }
    if ([s1[2], s2[2]].every(patch.test.bind(patch))) {
        // @ts-ignore
        const p1 = patch.exec(s1[2])[1].split('.').map(tryParse);
        // @ts-ignore
        const p2 = patch.exec(s2[2])[1].split('.').map(tryParse);
        for (let k = 0; k < Math.max(p1.length, p2.length); k++) {
            if (p1[k] === undefined ||
                (typeof p2[k] === 'string' && typeof p1[k] === 'number')) {
                return -1;
            }
            if (p2[k] === undefined ||
                (typeof p1[k] === 'string' && typeof p2[k] === 'number')) {
                return 1;
            }
            if (p1[k] > p2[k]) {
                return 1;
            }
            if (p2[k] > p1[k]) {
                return -1;
            }
        }
    }
    else if ([s1[2], s2[2]].some(patch.test.bind(patch))) {
        return patch.test(s1[2]) ? -1 : 1;
    }
    return 0;
};
/**
 * Search given argv for argName using exact match or starts with. Comparison is case insensitive
 * @param  {Array} argv       Array of strings
 * @param  {String} argName   Arg name to search for.
 * @param  {Boolean} exactMatch  If true then look for exact match otherwise
 * try finding arg that starts with argName.
 * @return {String}           If found, returns the arg, otherwise null.
 */
const getCommandLineArgs = (argv, argName, exactMatch) => {
    if (!Array.isArray(argv)) {
        throw new Error(`get-command-line-args: TypeError invalid func arg, must be an array: ${argv}`);
    }
    const argNameToFind = argName.toLocaleLowerCase();
    for (let i = 0, len = argv.length; i < len; i++) {
        const arg = argv[i].toLocaleLowerCase();
        if ((exactMatch && arg === argNameToFind) ||
            (!exactMatch && arg.startsWith(argNameToFind))) {
            return argv[i];
        }
    }
    return null;
};
/**
 * Generates a guid,
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 *
 * @return {String} guid value in string
 */
const getGuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0; // tslint:disable-line:no-bitwise
        const v = c === 'x' ? r : (r & 0x3) | 0x8; // tslint:disable-line:no-bitwise
        return v.toString(16);
    });
};
/**
 * Picks a filtered list of values
 * in a given object based on fields
 * @param object Object to be filtered
 * @param fields Fields to be picked
 */
const pick = (object, fields) => {
    const obj = {};
    for (const field of fields) {
        if (object[field] !== undefined && object[field] !== null) {
            obj[field] = object[field];
        }
    }
    return obj;
};
/**
 * Filters out truthy values
 *
 * @param data {Object} { test: true, test1: false, test2: 'NOT_SET' }
 * @param values {Array} [ true, "NOT_SET" ]
 * @return {Object} { test1: false }
 */
const filterOutSelectedValues = (data, values) => {
    if (!data) {
        return {};
    }
    return Object.keys(data).reduce((obj, key) => {
        if (Array.isArray(data[key]) && data[key].length <= 0) {
            return obj;
        }
        if (values.indexOf(data[key]) <= -1) {
            obj[key] = data[key];
        }
        return obj;
    }, {});
};
/**
 * Limits your function to be called at most every milliseconds
 *
 * @param func
 * @param wait
 * @example const throttled = throttle(anyFunc, 500);
 */
const throttle = (func, wait) => {
    if (wait <= 0) {
        throw Error('throttle: invalid throttleTime arg, must be a number: ' + wait);
    }
    let timer;
    let lastRan = 0;
    return (...args) => {
        if (!lastRan) {
            func.apply(null, args);
            lastRan = Date.now();
        }
        else {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if (Date.now() - lastRan >= wait) {
                    func.apply(null, args);
                    lastRan = Date.now();
                }
            }, wait - (Date.now() - lastRan));
        }
    };
};
/**
 * Formats a string with dynamic values
 * @param str {String} String to be formatted
 * @param data {Object} - Data to be added
 *
 * @example
 * StringFormat('this will log {time}', { time: '1234' })
 *
 * result:
 * this will log 1234
 *
 * @return {*}
 */
const formatString = (str, data) => {
    if (!str || !data) {
        return str;
    }
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            return str.replace(/({([^}]+)})/g, (i) => {
                const replacedKey = i.replace(/{/, '').replace(/}/, '');
                return data[replacedKey] ? data[replacedKey] : replacedKey;
            });
        }
    }
    return str;
};
/**
 * Calculates the percentage of a number with the given percentage
 * @param value
 * @param percentage
 */
const calculatePercentage = (value, percentage) => {
    return value * percentage * 0.01;
};
/**
 * Compares two arrays and returns true if they are equal
 * @param a string[]
 * @param b string[]
 */
const arrayEquals = (a, b) => {
    return (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]));
};
/**
 * Returns a random number that is between (min - max)
 * if min is 4hrs and max is 12hrs then the
 * returned value will be a random b/w 4 - 12 hrs
 *
 * @param min {number} - millisecond
 * @param max {number} - millisecond
 */
const getRandomTime = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * Gets the difference between 2 Dates in Days
 *
 * @param startDate
 * @param endDate
 *
 * @return number
 */
const getDifferenceInDays = (startDate, endDate) => {
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(Number(endDate.getTime()) - Number(startDate.getTime())) / msInDay);
};
const isUrl = (str) => {
    try {
        return Boolean(new URL(str).protocol === 'https:');
    }
    catch (_e) {
        return false;
    }
};
/**
 * Queues and delays function call with a given delay
 */
class DelayedFunctionQueue {
    constructor(delay = 100) {
        this.delay = delay;
        this.queue = [];
        this.timer = null;
    }
    /**
     * Add a function to the queue
     * @param func
     * @param args
     */
    add(func, ...args) {
        const boundFunc = () => func(...args);
        this.queue.push(boundFunc);
        if (!this.timer) {
            this.timer = setInterval(() => {
                const func = this.queue.shift();
                if (func) {
                    func();
                }
                else {
                    if (this.timer) {
                        clearInterval(this.timer);
                    }
                    this.timer = null;
                }
            }, this.delay);
        }
    }
}


/***/ }),

/***/ "./src/renderer/components/desktop-capturer/desktop-capturer.ts":
/*!**********************************************************************!*\
  !*** ./src/renderer/components/desktop-capturer/desktop-capturer.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSource: () => (/* binding */ getSource)
/* harmony export */ });
/* harmony import */ var common_api_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/api-interface */ "./src/common/api-interface.ts");
/* harmony import */ var common_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/env */ "./src/common/env.ts");
/* harmony import */ var common_ipcEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/ipcEvent */ "./src/common/ipcEvent.ts");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_3__);




const includes = [''].includes;
let nextId = 0;
let isScreenShareEnabled = false;
let screenShareArgv;
const getNextId = () => ++nextId;
/**
 * Checks if the options and their types are valid
 * @param options |options.type| can not be empty and has to include 'window' or 'screen'.
 * @returns {boolean}
 */
const isValid = (options) => {
    return ((options !== null ? options.types : undefined) !== null &&
        Array.isArray(options.types));
};
/**
 * Gets the sources for capturing screens / windows
 *
 * @param options {SourcesOptions}
 * @param callback {CallbackType}
 * @returns {*}
 */
const getSource = async (options, callback) => {
    let captureWindow;
    let captureScreen;
    let id;
    const sourcesOpts = [];
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
    if (common_env__WEBPACK_IMPORTED_MODULE_1__.isWindowsOS && captureWindow) {
        /**
         * Sets the captureWindow to false if Desktop composition
         * is disabled otherwise true
         *
         * Setting captureWindow to false returns only screen sources
         * @type {boolean}
         */
        captureWindow = await window.electron.ipcRenderer.invoke(common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiName.symphonyApi, {
            cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiCmds.isAeroGlassEnabled,
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
        await electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.invoke(common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiName.symphonyApi, {
            cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiCmds.showScreenSharePermissionDialog,
        });
        callback({
            name: 'Permission Denied',
            message: 'Permission Denied',
            requestId,
        });
        return;
    }
    id = getNextId();
    const sources = await electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.invoke(common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiName.symphonyApi, {
        cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiCmds.getSources,
        types: sourcesOpts,
        thumbnailSize: updatedOptions.thumbnailSize,
    });
    // Auto select screen source based on args for testing only
    if (screenShareArgv) {
        const title = screenShareArgv.substr(screenShareArgv.indexOf('=') + 1);
        const filteredSource = sources.filter((source) => source.name === title);
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
        .filter((source) => source.name !== common_api_interface__WEBPACK_IMPORTED_MODULE_0__.NOTIFICATION_WINDOW_TITLE)
        .map((source) => {
        return {
            ...source,
            ...{
                thumbnail: source.thumbnail.toDataURL(),
            },
        };
    });
    electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.send(common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiName.symphonyApi, {
        cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiCmds.openScreenPickerWindow,
        id,
        sources: updatedSources,
    });
    const successCallback = (_e, source) => {
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
    electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.once(common_ipcEvent__WEBPACK_IMPORTED_MODULE_2__.ScreenShareEvents.START + id, successCallback);
    return null;
};
// event that updates screen share argv
electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.once(common_ipcEvent__WEBPACK_IMPORTED_MODULE_2__.ScreenShareEvents.ARGV, (_event, arg) => {
    if (typeof arg === 'string') {
        screenShareArgv = arg;
    }
});
// event that updates screen share permission
electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.on(common_ipcEvent__WEBPACK_IMPORTED_MODULE_2__.ScreenShareEvents.IS_ENABLED, (_event, canShareScreen) => {
    if (typeof canShareScreen === 'boolean' && canShareScreen) {
        isScreenShareEnabled = canShareScreen;
    }
});


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"symphony","productName":"Symphony","version":"24.2.0","clientVersion":"2.0.1","buildNumber":"0","searchAPIVersion":"1.55.3","sfeVersion":"0","sfeClientType":"2.0","description":"Symphony desktop app (Foundation ODP)","author":"Symphony OSS <help@finos.org>","main":"./src/app/init.ts","scripts":{"build":"concurrently \\"npm run build:main\\" \\"npm run build:renderer\\"","build:dll":"cross-env NODE_ENV=development TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.renderer.dev.dll.ts","build:main":"cross-env NODE_ENV=production TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.main.prod.ts","build:renderer":"cross-env NODE_ENV=production TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.renderer.prod.ts","postinstall":"ts-node .erb/scripts/check-native-dep.js && electron-builder install-app-deps && npm run build:dll","lint":"cross-env NODE_ENV=development eslint . --ext .js,.jsx,.ts,.tsx","package":"ts-node ./.erb/scripts/clean.js dist && npm run build && electron-builder build --publish never && npm run build:dll","rebuild":"electron-rebuild --parallel --types prod,dev,optional --module-dir release/app","start":"ts-node ./.erb/scripts/check-port-in-use.js && npm run start:renderer","start:main":"cross-env NODE_ENV=development electronmon -r ts-node/register/transpile-only .","start:preload":"cross-env NODE_ENV=development TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.preload.dev.ts","start:renderer":"cross-env NODE_ENV=development TS_NODE_TRANSPILE_ONLY=true webpack serve --config ./.erb/configs/webpack.config.renderer.dev.ts","test":"jest"},"build":{"appId":"com.symphony.electron-desktop","compression":"store","artifactName":"${productName}-${version}-${os}.${ext}","asar":true,"asarUnpack":"**\\\\*.{node,dll}","files":["dist","node_modules","package.json"],"extraFiles":["config/Symphony.config","config/InstallVariant.info","node_modules/screen-share-indicator-frame/SymphonyScreenShareIndicator"],"nsis":{"perMachine":false,"oneClick":true,"allowToChangeInstallationDirectory":false,"allowElevation":false,"include":"build/installer.nsh","uninstallDisplayName":"${productName}"},"mac":{"category":"public.app-category.business","icon":"images/icon.icns","entitlements":"entitlements.mac.plist","notarize":false,"entitlementsInherit":"entitlements.mac.plist","extendInfo":{"CFBundleURLTypes":[{"CFBundleTypeRole":"Viewer","CFBundleURLName":"SymTel","CFBundleURLSchemes":["tel"]}]},"gatekeeperAssess":true,"hardenedRuntime":true,"target":["dir","zip"]},"win":{"icon":"images/icon.ico","target":["dir","nsis"],"extraFiles":[{"from":"node_modules/screen-share-indicator-frame/ScreenShareIndicatorFrame.exe","to":"ScreenShareIndicatorFrame.exe"},{"from":"node_modules/screen-snippet/ScreenSnippet.exe","to":"ScreenSnippet.exe"},{"from":"node_modules/symphony-native-window-handle-helper/SymphonyNativeWindowHandleHelper.exe","to":"SymphonyNativeWindowHandleHelper.exe"},{"from":"node_modules/@symphony/symphony-c9-shell/shell","to":"cloud9/shell","filter":["**/*"]}]},"linux":{"category":"Network;InstantMessaging;Chat","desktop":{"StartupWMClass":"Symphony"},"target":["deb","rpm"],"icon":"images/linux"},"directories":{"app":"release/app","buildResources":"assets","output":"release/build"},"extraResources":["./assets/**"]},"repository":{"type":"git","url":"git+https://github.com/finos/SymphonyElectron.git"},"keywords":["Symphony","start"],"license":"Apache-2.0","bugs":{"url":"https://support.symphony.com"},"browserslist":[],"prettier":{"singleQuote":true,"overrides":[{"files":[".prettierrc",".eslintrc"],"options":{"parser":"json"}}]},"jest":{"moduleDirectories":["node_modules","release/app/node_modules","src"],"moduleFileExtensions":["js","jsx","ts","tsx","json"],"moduleNameMapper":{"\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/.erb/mocks/fileMock.js","\\\\.(css|less|sass|scss)$":"identity-obj-proxy"},"setupFiles":["./.erb/scripts/check-build-exists.ts"],"testEnvironment":"jsdom","testEnvironmentOptions":{"url":"http://localhost/"},"testPathIgnorePatterns":["release/app/dist",".erb/dll"],"transform":{"\\\\.(ts|tsx|js|jsx)$":"ts-jest"}},"dependencies":{"classnames":"^2.2.6","electron-debug":"^3.2.0","electron-log":"^4.4.8","electron-updater":"^5.3.0","lazy-brush":"^2.0.1","react":"^18.2.0","react-dom":"^18.2.0","react-router-dom":"^6.11.2","save-svg-as-png":"^1.4.17","systeminformation":"^5.21.22"},"devDependencies":{"@electron/notarize":"^1.2.3","@electron/rebuild":"^3.2.13","@pmmmwh/react-refresh-webpack-plugin":"^0.5.10","@svgr/webpack":"^8.0.1","@teamsupercell/typings-for-css-modules-loader":"^2.5.2","@testing-library/jest-dom":"^5.16.5","@testing-library/react":"^14.0.0","@types/fs-extra":"^9.0.0","@types/jest":"^29.5.2","@types/node":"20.2.5","@types/react":"^18.2.8","@types/react-dom":"^18.2.4","@types/react-test-renderer":"^18.0.0","@types/terser-webpack-plugin":"^5.0.4","@types/webpack-bundle-analyzer":"^4.6.0","@typescript-eslint/eslint-plugin":"^5.59.8","@typescript-eslint/parser":"^5.59.8","archiver":"^5.3.1","async.map":"0.5.2","browserslist-config-erb":"^0.0.3","chalk":"^4.1.2","concurrently":"^8.1.0","core-js":"^3.30.2","cross-env":"^7.0.3","css-loader":"^6.8.1","css-minimizer-webpack-plugin":"^5.0.0","del":"3.0.0","detect-port":"^1.5.1","electron":"latest","electron-builder":"^24.2.1","electron-devtools-installer":"^3.2.0","electron-dl":"^3.5.1","electron-fetch":"^1.9.1","electronmon":"^2.0.2","eslint":"^8.42.0","eslint-config-airbnb-base":"^15.0.0","eslint-config-erb":"^4.0.6","eslint-import-resolver-typescript":"^3.5.5","eslint-import-resolver-webpack":"^0.13.2","eslint-plugin-compat":"^4.1.4","eslint-plugin-import":"^2.27.5","eslint-plugin-jest":"^27.2.1","eslint-plugin-jsx-a11y":"^6.7.1","eslint-plugin-promise":"^6.1.1","eslint-plugin-react":"^7.32.2","eslint-plugin-react-hooks":"^4.6.0","file-loader":"^6.2.0","filesize":"^10.0.12","html-webpack-plugin":"^5.5.1","husky":"^4.3.8","identity-obj-proxy":"^3.0.0","jest":"^29.5.0","jest-environment-jsdom":"^29.5.0","less":"^4.2.0","less-loader":"^11.1.3","mini-css-extract-plugin":"^2.7.6","prettier":"^2.8.8","react-refresh":"^0.14.0","react-test-renderer":"^18.2.0","rimraf":"^5.0.1","sass":"^1.62.1","sass-loader":"^13.3.1","shell-path":"^3.0.0","style-loader":"^3.3.3","terser-webpack-plugin":"^5.3.9","ts-jest":"^29.1.0","ts-loader":"^9.4.3","ts-node":"^10.9.1","tsconfig-paths-webpack-plugin":"^4.0.1","typescript":"^5.1.3","url-loader":"^4.1.1","webpack":"^5.85.0","webpack-bundle-analyzer":"^4.9.0","webpack-cli":"^5.1.1","webpack-dev-server":"^4.15.0","webpack-merge":"^5.9.0","winreg":"^1.2.5"},"optionalDependencies":{"@symphony/symphony-c9-shell":"3.29.0-0.98.3.175","screen-share-indicator-frame":"git+https://github.com/finos/ScreenShareIndicatorFrame.git#v1.4.13","screen-snippet":"git+https://github.com/finos/ScreenSnippet2.git#9.2.2","symphony-native-window-handle-helper":"github:finos/SymphonyWindowsHwndHelper#1.0.1"},"devEngines":{"node":">=18.x","npm":">=7.x"},"electronmon":{"patterns":["!**/**","src/app/**","config/**"],"logLevel":"quiet"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/app/preload.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBridge: () => (/* binding */ AppBridge),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_api_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/api-interface */ "./src/common/api-interface.ts");
/* harmony import */ var _ssf_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ssf-api */ "./src/app/ssf-api.ts");
/* harmony import */ var common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/env */ "./src/common/env.ts");
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */




const isDevEnv = process.env['WEBPACK_SERVE'] === 'true';
const electronHandler = {
    ipcRenderer: {
        sendMessage(channel, ...args) {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(channel, ...args);
        },
        on(channel, func) {
            const subscription = (_event, ...args) => func(...args);
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(channel, subscription);
            return () => {
                electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.removeListener(channel, subscription);
            };
        },
        once(channel, func) {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.once(channel, (_event, ...args) => func(...args));
        },
        invoke(channel, ...args) {
            return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(channel, ...args);
        }
    },
    isMac: common_env__WEBPACK_IMPORTED_MODULE_3__.isMac,
    isWindowsOS: common_env__WEBPACK_IMPORTED_MODULE_3__.isWindowsOS,
    isLinux: common_env__WEBPACK_IMPORTED_MODULE_3__.isLinux,
    isDevEnv
};
electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('electron', electronHandler);
const ssfWindow = window;
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
    ssfWindow.ssf = new _ssf_api__WEBPACK_IMPORTED_MODULE_2__.SSFApi();
    Object.freeze(ssfWindow.ssf);
};
createAPI();
if (ssfWindow.ssf) {
    // New context bridge api that exposes all the methods on to window object
    // For Mana to communicate with SDA
    electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('manaSSF', {
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
        getCitrixMediaRedirectionStatus: ssfWindow.ssf.getCitrixMediaRedirectionStatus,
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
class AppBridge {
    /**
     * Validates the incoming postMessage
     * events based on the host name
     *
     * @param event
     */
    static isValidEvent(event) {
        if (!event) {
            return false;
        }
        return event.source && event.source === window;
    }
    constructor() {
        this.origin = '';
        this.callbackHandlers = {
            onMessage: (event) => this.handleMessage(event),
            onActivityCallback: (idleTime) => this.activityCallback(idleTime),
            onScreenSnippetCallback: (arg) => this.screenSnippetCallback(arg),
            onRegisterBoundsChangeCallback: (arg) => this.registerBoundsChangeCallback(arg),
            onRegisterLoggerCallback: (msg, logLevel, showInConsole) => this.registerLoggerCallback(msg, logLevel, showInConsole),
            onRegisterProtocolHandlerCallback: (uri) => this.protocolHandlerCallback(uri),
            onCollectLogsCallback: () => this.collectLogsCallback(),
            onScreenSharingIndicatorCallback: (arg) => this.screenSharingIndicatorCallback(arg),
            onMediaSourceCallback: (error, source) => this.gotMediaSource(error, source),
            onNotificationCallback: (event, data) => this.notificationCallback(event, data),
            onAnalyticsEventCallback: (data) => this.analyticsEventCallback(data),
            restartFloater: (data) => this.restartFloater(data),
            onDownloadItemCallback: (data) => this.onDownloadItemCallback(data),
        };
        /**
         * Broadcast user activity
         * @param idleTime {number} - system idle tick
         */
        this.activityCallback = (idleTime) => this.broadcastMessage('activity-callback', idleTime);
        /**
         * Broadcast snippet data
         * @param arg {IScreenSnippet}
         */
        this.screenSnippetCallback = (arg) => this.broadcastMessage('screen-snippet-callback', arg);
        /**
         * Broadcast bound changes
         * @param arg {IBoundsChange}
         */
        this.registerBoundsChangeCallback = (arg) => this.broadcastMessage('bound-changes-callback', arg);
        /**
         * Broadcast protocol uri
         * @param uri {string}
         */
        this.protocolHandlerCallback = (uri) => this.broadcastMessage('protocol-callback', uri);
        this.collectLogsCallback = () => this.broadcastMessage('collect-logs', undefined);
        // starts with corporate pod and
        // will be updated with the global config url
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer
            .invoke(common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiName.symphonyApi, {
            cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.getCurrentOriginUrl,
        })
            .then((origin) => {
            this.origin = origin;
            // this.origin = '*'; // DEMO-APP: Comment this line back in only to test demo-app - DO NOT COMMIT
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiName.symphonyApi, {
                cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.setBroadcastMessage,
            });
            window.addEventListener('message', this.callbackHandlers.onMessage);
        }) // tslint:disable-next-line:no-console
            .catch((reason) => console.error(reason));
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.onSwiftSearchMessage, (_event, [method, data]) => {
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
    async handleMessage(event) {
        if (!AppBridge.isValidEvent(event)) {
            return;
        }
        const { method, data } = event.data;
        switch (method) {
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.getVersionInfo:
                const versionInfo = await ssfWindow.ssf?.getVersionInfo();
                this.broadcastMessage('get-version-info-callback', {
                    requestId: data.requestId,
                    response: versionInfo,
                });
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.activate:
                ssfWindow.ssf?.activate(data);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.bringToFront:
                const { windowName, reason } = data;
                ssfWindow.ssf?.bringToFront(windowName, reason);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.setBadgeCount:
                if (typeof data === 'number') {
                    ssfWindow.ssf?.setBadgeCount(data);
                }
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.openDownloadedItem:
                if (typeof data === 'string') {
                    ssfWindow.ssf?.openDownloadedItem(data);
                }
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.showDownloadedItem:
                if (typeof data === 'string') {
                    ssfWindow.ssf?.showDownloadedItem(data);
                }
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.clearDownloadedItems:
                ssfWindow.ssf?.clearDownloadedItems();
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.restartApp:
                ssfWindow.ssf?.restartApp();
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.setLocale:
                if (typeof data === 'string') {
                    ssfWindow.ssf?.setLocale(data);
                }
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerActivityDetection:
                ssfWindow.ssf?.registerActivityDetection(data, this.callbackHandlers.onActivityCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerDownloadHandler:
                ssfWindow.ssf?.registerDownloadHandler(this.callbackHandlers.onDownloadItemCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.openScreenSnippet:
                ssfWindow.ssf?.openScreenSnippet(this.callbackHandlers.onScreenSnippetCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.closeScreenSnippet:
                ssfWindow.ssf?.closeScreenSnippet();
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerBoundsChange:
                ssfWindow.ssf?.registerBoundsChange(this.callbackHandlers.onRegisterBoundsChangeCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerLogger:
                ssfWindow.ssf?.registerLogger(this.callbackHandlers.onRegisterLoggerCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerProtocolHandler:
                ssfWindow.ssf?.registerProtocolHandler(this.callbackHandlers.onRegisterProtocolHandlerCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerLogRetriever:
                ssfWindow.ssf?.registerLogRetriever(this.callbackHandlers.onCollectLogsCallback, data);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.sendLogs:
                ssfWindow.ssf?.sendLogs(data.logName, data.logFiles);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.openScreenSharingIndicator:
                ssfWindow.ssf?.openScreenSharingIndicator(data, this.callbackHandlers.onScreenSharingIndicatorCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.closeScreenSharingIndicator:
                ssfWindow.ssf?.closeScreenSharingIndicator(data.streamId);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.getMediaSource:
                await ssfWindow.ssf?.getMediaSource(data, this.callbackHandlers.onMediaSourceCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.notification:
                ssfWindow.ssf?.showNotification(data, this.callbackHandlers.onNotificationCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.closeNotification:
                await ssfWindow.ssf?.closeNotification(data);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.showNotificationSettings:
                ssfWindow.ssf?.showNotificationSettings(data);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.setIsInMeeting:
                if (typeof data === 'boolean') {
                    ssfWindow.ssf?.setIsInMeeting(data);
                }
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerAnalyticsHandler:
                ssfWindow.ssf?.registerAnalyticsEvent(this.callbackHandlers.onAnalyticsEventCallback);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.registerRestartFloater:
                ssfWindow.ssf?.registerRestartFloater(this.callbackHandlers.restartFloater);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.setCloudConfig:
                ssfWindow.ssf?.setCloudConfig(data);
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.swiftSearch:
                electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiName.symphonyApi, {
                    cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.handleSwiftSearchMessageEvents,
                    swiftSearchData: data,
                });
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.getCPUUsage:
                const cpuUsage = await ssfWindow.ssf?.getCPUUsage();
                this.broadcastMessage('get-cpu-usage-callback', {
                    requestId: data.requestId,
                    response: cpuUsage,
                });
                break;
            case common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.checkMediaPermission:
                const mediaPermission = await ssfWindow.ssf?.checkMediaPermission();
                this.broadcastMessage('check-media-permission-callback', {
                    requestId: data.requestId,
                    response: mediaPermission,
                });
                break;
        }
    }
    /**
     * Broadcast logs
     * @param msg {ILogMsg}
     * @param logLevel {LogLevel}
     * @param showInConsole {boolean}
     */
    registerLoggerCallback(msg, logLevel, showInConsole) {
        this.broadcastMessage('logger-callback', { msg, logLevel, showInConsole });
    }
    /**
     * Broadcast event that stops screen sharing
     * @param arg {IScreenSharingIndicator}
     */
    screenSharingIndicatorCallback(arg) {
        this.broadcastMessage('screen-sharing-indicator-callback', arg);
    }
    /**
     * Broadcast analytics events data
     * @param arg {IAnalyticsData}
     */
    analyticsEventCallback(arg) {
        this.broadcastMessage('analytics-event-callback', arg);
    }
    /**
     * Broadcast download item event
     * @param arg {object}
     */
    onDownloadItemCallback(arg) {
        this.broadcastMessage('download-handler-callback', arg);
    }
    /**
     * Broadcast to restart floater event with data
     * @param arg {IAnalyticsData}
     */
    restartFloater(arg) {
        this.broadcastMessage('restart-floater-callback', arg);
    }
    /**
     * Broadcast the user selected source
     * @param sourceError {IScreenSourceError}
     * @param selectedSource {ICustomDesktopCapturerSource}
     */
    gotMediaSource(sourceError, selectedSource) {
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
    notificationCallback(event, data) {
        this.broadcastMessage(event, data);
    }
    /**
     * Method that broadcast messages to a specific origin via postMessage
     *
     * @param method {string}
     * @param data {any}
     */
    broadcastMessage(method, data) {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer
            .invoke(common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiName.symphonyApi, {
            cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_1__.apiCmds.getCurrentOriginUrl,
        })
            .then((origin) => {
            window.postMessage({ method, data }, origin);
        });
    }
}
const appBridge = new AppBridge();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appBridge);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpRDtBQU1yQjtBQXlCSztBQUN5QjtBQUNmO0FBQ3VDO0FBQzNCO0FBQ3ZELG1FQUFtRTtBQUNuRSx3RUFBd0U7QUFFeEUsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDdEQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7QUFFaEMsSUFBSSxRQUFRLEdBQVksS0FBSyxDQUFDO0FBQzlCLElBQUksVUFBVSxHQUFZLEtBQUssQ0FBQztBQXVCaEMsTUFBTSxLQUFLLEdBQWlCO0lBQzFCLFdBQVc7Q0FDWixDQUFDO0FBRUYsTUFBTSwyQkFBMkIsR0FBRyxJQUFJLEdBQUcsRUFHeEMsQ0FBQztBQUVKLE1BQU0sK0JBQStCLEdBQUcsSUFBSSxHQUFHLEVBRzVDLENBQUM7QUFFSixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUU5QixnQkFBZ0I7QUFDaEIsTUFBTSxzQkFBc0IsR0FBRyx1REFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDaEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsYUFBYTtRQUMxQixLQUFLO0tBQ04sQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFckIsTUFBTSxrQkFBa0IsR0FBRyx1REFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDN0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsU0FBUztRQUN0QixNQUFNO0tBQ1AsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFckIsTUFBTSxpQkFBaUIsR0FBRyx1REFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7SUFDaEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsUUFBUTtRQUNyQixVQUFVO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFckIsTUFBTSxxQkFBcUIsR0FBRyx1REFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzVELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1FBQzFDLEdBQUcsRUFBRSwwREFBTyxDQUFDLFlBQVk7UUFDekIsVUFBVTtRQUNWLE1BQU07S0FDUCxDQUFDLENBQUM7QUFDTCxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUVyQixNQUFNLGtDQUFrQyxHQUFHLHVEQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUMvRCxpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtRQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxXQUFXO1FBQ3hCLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsTUFBTSxFQUFFLFFBQVE7S0FDakIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFckIsTUFBTSw2QkFBNkIsR0FBRyx1REFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7SUFDN0QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsY0FBYztRQUMzQixXQUFXO0tBQ1osQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFckIsTUFBTSx1QkFBdUIsR0FBRyx1REFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDaEQsaURBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDcEMsR0FBRyxFQUFFLDBEQUFPLENBQUMsY0FBYztRQUMzQixXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUVyQixNQUFNLDJCQUEyQixHQUFHLHVEQUFRLENBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRTtJQUMxRCxpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtRQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxrQkFBa0I7UUFDL0IsRUFBRTtLQUNILENBQUMsQ0FBQztBQUNMLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXJCLE1BQU0sMkJBQTJCLEdBQUcsdURBQVEsQ0FBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQzFELGlEQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1FBQ3BDLEdBQUcsRUFBRSwwREFBTyxDQUFDLGtCQUFrQjtRQUMvQixFQUFFO0tBQ0gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFckIsTUFBTSw2QkFBNkIsR0FBRyx1REFBUSxDQUFDLEdBQUcsRUFBRTtJQUNsRCxpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtRQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxvQkFBb0I7S0FDbEMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFFckIsTUFBTSxnQkFBZ0IsR0FBRyx1REFBUSxDQUFDLEdBQUcsRUFBRTtJQUNyQyxpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtRQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxVQUFVO0tBQ3hCLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXJCLE1BQU0scUJBQXFCLEdBQUcsdURBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO0lBQ25ELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1FBQzFDLEdBQUcsRUFBRSwwREFBTyxDQUFDLFlBQVk7UUFDekIsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXJCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQUVqQixNQUFNLE1BQU07SUFBbkI7UUFDRSx1RUFBdUU7UUFFdkU7Ozs7Ozs7O1dBUUc7UUFDSSxtQkFBYyxHQUFHLDRGQUFTLENBQUM7SUFtd0JwQyxDQUFDO0lBandCQzs7OztPQUlHO0lBQ0ksUUFBUSxDQUFDLFVBQWtCO1FBQ2hDLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDbkMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFlBQVksQ0FBQyxVQUFrQixFQUFFLE1BQWM7UUFDcEQsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDbkIsTUFBTSxPQUFPLEdBQUcsK0NBQUksQ0FBQztRQUNyQixNQUFNLE1BQU0sR0FBRyxrREFBTyxDQUFDO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRW5DLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNyQixtQkFBbUIsRUFBRSxPQUFPO1lBQzVCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLFdBQVc7WUFDWCxNQUFNLEVBQUUsT0FBTztZQUNmLE9BQU87WUFDUCx1REFBdUQ7WUFDdkQsWUFBWSxFQUFFLDJEQUFnQjtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kseUJBQXlCLENBQzlCLE1BQWMsRUFDZCx5QkFBZ0Q7UUFFaEQsSUFBSSxPQUFPLHlCQUF5QixLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQ3BELEtBQUssQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztZQUU1RCxnQ0FBZ0M7WUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQzFDLEdBQUcsRUFBRSwwREFBTyxDQUFDLHlCQUF5QjtnQkFDdEMsTUFBTTthQUNQLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksdUJBQXVCLENBQzVCLHVCQUEyQztRQUUzQyxJQUFJLE9BQU8sdUJBQXVCLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDbEQsS0FBSyxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBQzFELENBQUM7UUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyx1QkFBdUI7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLG9CQUFvQixDQUFDLFFBQXNDO1FBQ2hFLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDbkMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxjQUFjLENBQ25CLE1BQTBFO1FBRTFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDakMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFdEIsZ0NBQWdDO1lBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO2dCQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxjQUFjO2FBQzVCLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7O09BY0c7SUFDSSx1QkFBdUIsQ0FBQyxlQUFlO1FBQzVDLElBQUksT0FBTyxlQUFlLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDMUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLGVBQWUsQ0FBQztZQUUvQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsdUJBQXVCO2FBQ3JDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0JBQW9CLENBQUMsV0FBdUIsRUFBRSxPQUFlO1FBQ2xFLElBQUksT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMvQixLQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQztZQUN0RCxDQUFDO1lBQ0QsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU1QyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsb0JBQW9CO2dCQUNqQyxPQUFPO2FBQ1IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVEsQ0FBQyxPQUFlLEVBQUUsUUFBUTtRQUN2QyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxRQUFRO1lBQ3JCLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksc0JBQXNCLENBQUMscUJBQXFCO1FBQ2pELElBQUksT0FBTyxxQkFBcUIsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNoRCxLQUFLLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7WUFFcEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQzFDLEdBQUcsRUFBRSwwREFBTyxDQUFDLHdCQUF3QjthQUN0QyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwyQkFBMkI7SUFDM0IsaURBQWlEO0lBRWpEOzs7Ozs7O09BT0c7SUFDSSxnQkFBZ0IsQ0FDckIsUUFBcUQ7UUFFckQsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNuQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksYUFBYSxDQUFDLFVBQTJCO1FBQzlDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1lBQzFDLEdBQUcsRUFBRSwwREFBTyxDQUFDLGFBQWE7WUFDMUIsTUFBTSxFQUFFLFVBQVU7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWFNLGlCQUFpQixDQUN0QixxQkFBb0QsRUFDcEQsYUFBdUI7UUFFdkIsSUFBSSxPQUFPLHFCQUFxQixLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQ2hELEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztZQUVwRCxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUNsQixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtvQkFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsaUJBQWlCO29CQUM5QixhQUFhO2lCQUNkLENBQUMsQ0FBQztZQUNMLENBQUM7aUJBQU0sQ0FBQztnQkFDTixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtvQkFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsaUJBQWlCO2lCQUMvQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLGtCQUFrQjtRQUN2QixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxrQkFBa0I7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOENBQThDO0lBQzlDLGtEQUFrRDtJQUNsRCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixJQUFJO0lBRUo7Ozs7Ozs7T0FPRztJQUNJLGFBQWEsQ0FBQyxLQUFhO1FBQ2hDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFNBQVMsQ0FBQyxNQUFNO1FBQ3JCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDL0Isc0RBQUksQ0FBQyxTQUFTLENBQUMsTUFBb0IsQ0FBQyxDQUFDO1lBQ3JDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksY0FBYyxDQUFDLFdBQVc7UUFDL0IsNkJBQTZCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0JBQXdCLENBQUMsSUFBWTtRQUMxQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyx3QkFBd0I7WUFDckMsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNJLDBCQUEwQixDQUMvQixPQUF1QyxFQUN2QyxRQUFRO1FBRVIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFFdEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN0RSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxTQUFTLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDL0MsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUNyRCxPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNuQixrQ0FBa0MsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDbkMsS0FBSyxDQUFDLDhCQUE4QixHQUFHLFFBQVEsQ0FBQztZQUNoRCxpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtnQkFDcEMsR0FBRyxFQUFFLDBEQUFPLENBQUMsMEJBQTBCO2dCQUN2QyxTQUFTO2dCQUNULEVBQUUsRUFBRSxFQUFFLGVBQWU7Z0JBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTthQUNwQixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ksMEJBQTBCLENBQy9CLE9BQXVDLEVBQ3ZDLFFBQVE7UUFFUixNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFFbkQsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNuQyxLQUFLLENBQUMsOEJBQThCLEdBQUcsUUFBUSxDQUFDO1lBQ2hELGlEQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQywwQkFBMEI7Z0JBQ3ZDLFNBQVM7Z0JBQ1QsRUFBRSxFQUFFLFNBQVM7Z0JBQ2IsUUFBUTthQUNULENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSwyQkFBMkIsQ0FBQyxNQUFjO1FBQy9DLGtDQUFrQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQkFBc0IsQ0FDM0IsUUFBNkM7UUFFN0MsS0FBSyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjLENBQUMsSUFBUTtRQUM1Qix1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0JBQWtCLENBQUMsRUFBVTtRQUNsQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0JBQWtCLENBQUMsRUFBVTtRQUNsQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxvQkFBb0I7UUFDekIsNkJBQTZCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsV0FBVztRQUN0QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsb0JBQW9CO1FBQy9CLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBTSxpREFBVyxDQUFDLE1BQU0sQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUNqRSxHQUFHLEVBQUUsMERBQU8sQ0FBQyxvQkFBb0I7U0FDbEMsQ0FBQyxDQUFxQixDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNyQixNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07WUFDMUIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxVQUFVO1lBQ2xDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksU0FBUyxDQUFDLE1BQWU7UUFDOUIsaURBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDcEMsR0FBRyxFQUFFLDBEQUFPLENBQUMsU0FBUztZQUN0QixNQUFNO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksc0JBQXNCO1FBQzNCLGlEQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3BDLEdBQUcsRUFBRSwwREFBTyxDQUFDLHNCQUFzQjtTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQixDQUNyQixnQkFBbUMsRUFDbkMsb0JBQWdEO1FBRWhELCtDQUErQztRQUMvQyxvREFBb0Q7UUFDcEQsSUFBSSxPQUFPLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUM1QywyQkFBMkIsQ0FBQyxHQUFHLENBQzdCLGdCQUFnQixDQUFDLEVBQUUsRUFDbkIsb0JBQW9CLENBQ3JCLENBQUM7UUFDSixDQUFDO1FBQ0QsdUVBQXVFO1FBQ3ZFLHNDQUFzQztRQUN0QyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ25DLENBQUM7UUFDRCxpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxnQkFBZ0I7WUFDN0IsZ0JBQWdCO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQkFBaUIsQ0FBQyxjQUFzQjtRQUM3QyxpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxpQkFBaUI7WUFDOUIsY0FBYztTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0JBQW9CLENBQ3pCLGdCQUF1QyxFQUN2QyxvQkFBZ0Q7UUFFaEQsK0NBQStDO1FBQy9DLG9EQUFvRDtRQUNwRCxJQUFJLE9BQU8sZ0JBQWdCLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzVDLCtCQUErQixDQUFDLEdBQUcsQ0FDakMsZ0JBQWdCLENBQUMsRUFBRSxFQUNuQixvQkFBb0IsQ0FDckIsQ0FBQztRQUNKLENBQUM7UUFDRCx1RUFBdUU7UUFDdkUsc0NBQXNDO1FBQ3RDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQztRQUNELGlEQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3BDLEdBQUcsRUFBRSwwREFBTyxDQUFDLG9CQUFvQjtZQUNqQyxnQkFBZ0I7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHFCQUFxQixDQUFDLGNBQXNCO1FBQ2pELGlEQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3BDLEdBQUcsRUFBRSwwREFBTyxDQUFDLHFCQUFxQjtZQUNsQyxjQUFjO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFlBQVk7UUFDakIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyw4Q0FBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxZQUFZLENBQUMsU0FBUztRQUMzQixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUJBQWlCO1FBQ3RCLE9BQU8sa0JBQWtCLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHFCQUFxQixDQUFDLFVBQW1CO1FBQzlDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNoQixVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7UUFDckMsQ0FBQztRQUNELE9BQU8saURBQVcsQ0FBQyxNQUFNLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDN0MsR0FBRyxFQUFFLDBEQUFPLENBQUMscUJBQXFCO1lBQ2xDLFVBQVU7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksK0JBQStCO1FBQ3BDLE9BQU8saURBQVcsQ0FBQyxNQUFNLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDN0MsR0FBRyxFQUFFLDBEQUFPLENBQUMsK0JBQStCO1NBQzdDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQkFBb0IsQ0FDekIsUUFBNEQ7UUFFNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3BDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQ25DLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksaUJBQWlCLENBQ3RCLElBQVksRUFDWixNQUFrQyxFQUNsQyxPQUFtQjtRQUVuQixJQUNFLE9BQU8sSUFBSSxLQUFLLFFBQVE7WUFDeEIsT0FBTyxNQUFNLEtBQUssVUFBVTtZQUM1QixPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQzdCLENBQUM7WUFDRCxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM5QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBYyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbEQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUMsS0FBYSxFQUFFLEdBQVMsRUFBRSxFQUFFO29CQUN2RCxRQUFRLEtBQUssRUFBRSxDQUFDO3dCQUNkLEtBQUssV0FBVzs0QkFDZCxNQUFNLEdBQUcsR0FBRztnQ0FDVixLQUFLLEVBQUUsQ0FBQyxJQUFnQixFQUFFLEVBQUU7b0NBQzFCLGlEQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO3dDQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxlQUFlO3dDQUM1QixJQUFJO3FDQUNMLENBQUMsQ0FBQztnQ0FDTCxDQUFDO2dDQUNELEtBQUssRUFBRSxHQUFHLEVBQUU7b0NBQ1YsaURBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7d0NBQ3BDLEdBQUcsRUFBRSwwREFBTyxDQUFDLGVBQWU7cUNBQzdCLENBQUMsQ0FBQztnQ0FDTCxDQUFDOzZCQUNGLENBQUM7NEJBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNiLE1BQU07d0JBQ1IsS0FBSyxtQkFBbUI7NEJBQ3RCLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7NEJBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDWixNQUFNO3dCQUNSLEtBQUssTUFBTTs0QkFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ1osTUFBTTt3QkFDUixLQUFLLE9BQU87NEJBQ1YsS0FBSyxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQzs0QkFDdEMsT0FBTyxFQUFFLENBQUM7NEJBQ1YsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUMsQ0FBQztnQkFDRixpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtvQkFDcEMsR0FBRyxFQUFFLDBEQUFPLENBQUMsaUJBQWlCO29CQUM5QixJQUFJO2lCQUNMLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVksQ0FBQyxRQUF3QztRQUMxRCxLQUFLLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQ25DLGlEQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3BDLEdBQUcsRUFBRSwwREFBTyxDQUFDLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNwQixpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxlQUFlO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGdCQUFnQjtRQUNyQixpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxnQkFBZ0I7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixpREFBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUNwQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxjQUFjO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWUsQ0FBQyxpQkFBcUM7UUFDMUQsaURBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDcEMsR0FBRyxFQUFFLDBEQUFPLENBQUMsZUFBZTtZQUM1QixpQkFBaUI7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDJCQUEyQixDQUNoQyxTQUFnQyxFQUNoQyxtQkFBMEM7UUFFMUMsSUFBSSxPQUFPLG1CQUFtQixLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsaURBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDcEMsR0FBRyxFQUFFLDBEQUFPLENBQUMsMkJBQTJCO1lBQ3hDLFNBQVM7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQTZCLENBQUMsU0FBZ0M7UUFDbkUsaURBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDcEMsR0FBRyxFQUFFLDBEQUFPLENBQUMsNkJBQTZCO1lBQzFDLFNBQVM7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFFRDs7R0FFRztBQUVIOzs7Ozs7O0dBT0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDbEIsdUJBQXVCLEVBQ3ZCLENBQUMsTUFBYSxFQUFFLEdBQWlCLEVBQUUsRUFBRTtJQUNuQyxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRDLHFCQUFxQjtJQUNyQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNSLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN6QixHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUV4QixNQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDcEIsR0FBRyxDQUFDLElBQUksR0FBRyxzQkFBc0IsQ0FBQztZQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMzQixHQUFHLENBQUMsSUFBSSxHQUFHLHNCQUFzQixDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBQU0sQ0FBQztZQUNOLEdBQUcsQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLENBQUM7WUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVuRCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxZQUFZO1lBQ3pCLEtBQUs7WUFDTCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMsQ0FDRixDQUFDO0FBRUYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2xCLDJCQUEyQixFQUMzQixDQUFDLE1BQWEsRUFBRSxHQUE0QixFQUFFLEVBQUU7SUFDOUMsSUFBSSxPQUFPLEtBQUssQ0FBQyx3QkFBd0IsS0FBSyxVQUFVLEVBQUUsQ0FBQztRQUN6RCxLQUFLLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztBQUNILENBQUMsQ0FDRixDQUFDO0FBRUY7Ozs7Ozs7OztHQVNHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2xCLHFCQUFxQixFQUNyQixDQUFDLE1BQWEsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDckMsSUFDRSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLHFCQUFxQixLQUFLLFVBQVUsRUFDakQsQ0FBQztRQUNELEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUM7QUFFRixLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFhLEVBQUUsRUFBRTtJQUNyRCxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzlCLEtBQUssTUFBTSxRQUFRLElBQUksS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDakQsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7O0dBS0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFhLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQ25FLElBQ0UsT0FBTyxRQUFRLEtBQUssUUFBUTtRQUM1QixPQUFPLEtBQUssQ0FBQyx5QkFBeUIsS0FBSyxVQUFVLEVBQ3JELENBQUM7UUFDRCxLQUFLLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2xCLG9CQUFvQixFQUNwQixDQUFDLE1BQWEsRUFBRSxZQUEyQixFQUFFLEVBQUU7SUFDN0MsSUFDRSxPQUFPLFlBQVksS0FBSyxRQUFRO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLHVCQUF1QixLQUFLLFVBQVUsRUFDbkQsQ0FBQztRQUNELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUM1QixNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLElBQUksRUFBRSxZQUFZO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQztBQUVGLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBYSxFQUFFLEVBQUU7SUFDeEQsSUFBSSxPQUFPLEtBQUssQ0FBQyx1QkFBdUIsS0FBSyxVQUFVLEVBQUUsQ0FBQztRQUN4RCxLQUFLLENBQUMsdUJBQXVCLENBQUMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVIOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFrQixFQUFRLEVBQUU7SUFDeEUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDaEQsSUFDRSxDQUFDO1FBQ0QsQ0FBQztRQUNELE1BQU07UUFDTixLQUFLO1FBQ0wsVUFBVTtRQUNWLE9BQU8sS0FBSyxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFDaEQsQ0FBQztRQUNELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN6QixDQUFDO1lBQ0QsQ0FBQztZQUNELE1BQU07WUFDTixLQUFLO1lBQ0wsVUFBVTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVIOzs7R0FHRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLCtEQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUM3RCxJQUFJLE9BQU8sS0FBSyxDQUFDLDhCQUE4QixLQUFLLFVBQVUsRUFBRSxDQUFDO1FBQy9ELEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztZQUNuQyxJQUFJLEVBQUUsZUFBZTtZQUNyQixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVIOzs7Ozs7Ozs7O0dBVUc7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDMUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEUsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUg7OztHQUdHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBVyxFQUFFLEVBQUU7SUFDOUQsSUFDRSxPQUFPLEtBQUssQ0FBQyxzQkFBc0IsS0FBSyxVQUFVO1FBQ2xELE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFDdkIsQ0FBQztRQUNELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFXLEVBQUUsRUFBRTtJQUNqRSxJQUFJLE9BQU8sS0FBSyxDQUFDLHFCQUFxQixLQUFLLFVBQVUsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3RCxLQUFLLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUg7OztHQUdHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2xCLGlCQUFpQixFQUNqQixDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQXVCLEVBQUUsRUFBRTtJQUN0RCxJQUFJLE9BQU8sS0FBSyxDQUFDLGNBQWMsS0FBSyxVQUFVLElBQUksVUFBVSxFQUFFLENBQUM7UUFDN0QsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQztBQUVGOzs7R0FHRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQzVELE1BQU0sUUFBUSxHQUFHLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSDs7O0dBR0c7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNqRSxNQUFNLFFBQVEsR0FBRywrQkFBK0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUMsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUg7OztHQUdHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDN0QsSUFBSSxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNuQyxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3RELElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxPQUFPO1lBQ1QsQ0FBQztZQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDckQsS0FBSyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ3ZELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMsQ0FBQztBQUVIOzs7OztHQUtHO0FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ2xCLHVCQUF1QixFQUN2QixDQUFDLE1BQWEsRUFBRSxXQUFtQixFQUFFLEVBQUU7SUFDckMsSUFDRSxPQUFPLFdBQVcsS0FBSyxRQUFRO1FBQy9CLE9BQU8sS0FBSyxDQUFDLG1CQUFtQixLQUFLLFVBQVUsRUFDL0MsQ0FBQztRQUNELEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUM7QUFFRixpREFBaUQ7QUFDakQsTUFBTSxRQUFRLEdBQUcsR0FBUyxFQUFFO0lBQzFCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSywwREFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDBEQUFPLENBQUMsV0FBVyxFQUFFO1lBQzFDLEdBQUcsRUFBRSwwREFBTyxDQUFDLFFBQVE7WUFDckIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixxRUFBcUU7QUFDckUsTUFBTSxrQkFBa0IsR0FBRyxHQUFTLEVBQUU7SUFDcEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMERBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDMUMsR0FBRyxFQUFFLDBEQUFPLENBQUMsUUFBUTtRQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNO0tBQ2xDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLHlCQUF5QjtBQUN6QixNQUFNLGdCQUFnQixHQUFHLHVEQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUMxQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sS0FBSywyREFBUSxDQUFDLEdBQUcsQ0FBQztJQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssMkRBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRVIsdUJBQXVCO0FBQ3ZCLE1BQU0sY0FBYyxHQUFHLHVEQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUN4QyxJQUFJLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssMkRBQVEsQ0FBQyxHQUFHLElBQUksMkRBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2pFLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxRQUFRLElBQUksVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssMkRBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3RCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQywwREFBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxHQUFHLEVBQUUsMERBQU8sQ0FBQyxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRVIsMEJBQTBCO0FBQzFCLE1BQU0saUJBQWlCLEdBQUcsdURBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDdEMsSUFBSSxRQUFRLElBQUksVUFBVSxFQUFFLENBQUM7UUFDM0IsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7QUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFUjs7R0FFRztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzN4QzNFLElBQVksT0FnRlg7QUFoRkQsV0FBWSxPQUFPO0lBQ2pCLGlDQUFzQjtJQUN0Qiw4Q0FBbUM7SUFDbkMsNkNBQWtDO0lBQ2xDLDRDQUFpQztJQUNqQywwQ0FBK0I7SUFDL0IsZ0NBQXFCO0lBQ3JCLDBEQUErQztJQUMvQyxnRUFBcUQ7SUFDckQsMERBQStDO0lBQy9DLGlDQUFzQjtJQUN0QixrRUFBdUQ7SUFDdkQsb0VBQXlEO0lBQ3pELGtFQUF1RDtJQUN2RCxnQ0FBcUI7SUFDckIsMENBQStCO0lBQy9CLCtEQUFvRDtJQUNwRCxtQ0FBd0I7SUFDeEIsb0VBQXlEO0lBQ3pELDhEQUFtRDtJQUNuRCwrQ0FBb0M7SUFDcEMsbUNBQXdCO0lBQ3hCLG9EQUF5QztJQUN6QyxzREFBMkM7SUFDM0MsZ0VBQXFEO0lBQ3JELGlDQUFzQjtJQUN0Qix1Q0FBNEI7SUFDNUIsdUVBQTREO0lBQzVELHlFQUE4RDtJQUM5RCw0REFBaUQ7SUFDakQsOENBQW1DO0lBQ25DLHdDQUE2QjtJQUM3QixtREFBd0M7SUFDeEMsNERBQWlEO0lBQ2pELHFDQUEwQjtJQUMxQix1Q0FBNEI7SUFDNUIsMENBQStCO0lBQy9CLDhEQUFtRDtJQUNuRCw4Q0FBbUM7SUFDbkMsd0NBQTZCO0lBQzdCLDBEQUErQztJQUMvQyxnRUFBcUQ7SUFDckQsc0RBQTJDO0lBQzNDLHNEQUEyQztJQUMzQywwREFBK0M7SUFDL0MscUNBQTBCO0lBQzFCLG9DQUF5QjtJQUN6QixpREFBc0M7SUFDdEMsMERBQStDO0lBQy9DLHVEQUE0QztJQUM1QywwQ0FBK0I7SUFDL0IsOERBQW1EO0lBQ25ELGdEQUFxQztJQUNyQyxzREFBMkM7SUFDM0Msc0RBQTJDO0lBQzNDLDBEQUErQztJQUMvQyx5REFBOEM7SUFDOUMsdURBQTRDO0lBQzVDLGtGQUF1RTtJQUN2RSwyREFBZ0Q7SUFDaEQsd0RBQTZDO0lBQzdDLGdGQUFxRTtJQUNyRSwyREFBZ0Q7SUFDaEQsNkRBQWtEO0lBQ2xELGtGQUF1RTtJQUN2RSxvQ0FBeUI7SUFDekIseUNBQThCO0lBQzlCLCtDQUFvQztJQUNwQyxvREFBeUM7SUFDekMsZ0RBQXFDO0lBQ3JDLGdEQUFxQztJQUNyQyxrREFBdUM7SUFDdkMsNkNBQWtDO0lBQ2xDLGdEQUFxQztJQUNyQyx5Q0FBOEI7SUFDOUIsa0RBQXVDO0lBQ3ZDLDRDQUFpQztJQUNqQyxvREFBeUM7SUFDekMsMEVBQStEO0lBQy9ELDhFQUFtRTtBQUNyRSxDQUFDLEVBaEZXLE9BQU8sS0FBUCxPQUFPLFFBZ0ZsQjtBQUVELElBQVksT0FNWDtBQU5ELFdBQVksT0FBTztJQUNqQix1Q0FBNEI7SUFDNUIsa0NBQXVCO0lBQ3ZCLHlEQUE4QztJQUM5QywrQ0FBb0M7SUFDcEMsMERBQStDO0FBQ2pELENBQUMsRUFOVyxPQUFPLEtBQVAsT0FBTyxRQU1sQjtBQUVNLE1BQU0seUJBQXlCLEdBQUcseUJBQXlCLENBQUM7QUEyR25FLElBQVksdUJBYVg7QUFiRCxXQUFZLHVCQUF1QjtJQUNqQyw0Q0FBbUI7SUFDbkIsOENBQXFCO0lBQ3JCLHdDQUFlO0lBQ2YsNERBQW1DO0lBQ25DLHdDQUFlO0lBQ2Ysd0RBQStCO0lBQy9CLGtEQUF5QjtJQUN6QiwwREFBaUM7SUFDakMsd0RBQStCO0lBQy9CLDBEQUFpQztJQUNqQyxnREFBdUI7SUFDdkIsc0RBQTZCO0FBQy9CLENBQUMsRUFiVyx1QkFBdUIsS0FBdkIsdUJBQXVCLFFBYWxDO0FBRUQsSUFBWSxvQkFRWDtBQVJELFdBQVksb0JBQW9CO0lBQzlCLHlDQUFpQjtJQUNqQixxQ0FBYTtJQUNiLHFDQUFhO0lBQ2IsMkNBQW1CO0lBQ25CLHlDQUFpQjtJQUNqQiwyQ0FBbUI7SUFDbkIsOENBQXNCO0FBQ3hCLENBQUMsRUFSVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBUS9CO0FBaUJELElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNsQixzQ0FBUTtJQUNSLHNDQUFRO0FBQ1YsQ0FBQyxFQUhXLFFBQVEsS0FBUixRQUFRLFFBR25CO0FBc0RELElBQVksbUJBT1g7QUFQRCxXQUFZLG1CQUFtQjtJQUM3QixtRUFBNEM7SUFDNUMsaUVBQTBDO0lBQzFDLCtEQUF3QztJQUN4QyxpRUFBMEM7SUFDMUMsaUVBQTBDO0lBQzFDLGlFQUEwQztBQUM1QyxDQUFDLEVBUFcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQU85QjtBQTJHRCxJQUFZLG1CQUdYO0FBSEQsV0FBWSxtQkFBbUI7SUFDN0Isa0NBQVc7SUFDWCxrQ0FBVztBQUNiLENBQUMsRUFIVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBRzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Wk0sTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBRS9DLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO0FBQzVDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDO0FBQ2pELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmI7QUFFdkMsTUFBTSxlQUFlLEdBQUcseUJBQXlCLENBQUM7QUFNbEQsTUFBTSxXQUFXO0lBQWpCO1FBdUJVLFdBQU0sR0FBZSxPQUFPLENBQUM7UUFFN0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7SUF3RXZDLENBQUM7SUFoR0M7Ozs7OztPQU1HO0lBQ0ssTUFBTSxDQUFDLFNBQVMsQ0FDdEIsS0FBYSxFQUNiLFFBQXFCLEVBQ3JCLFNBQTZCO1FBRTdCLE9BQU8sUUFBUTtZQUNiLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLO1lBQzlELENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDO0lBV0Q7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxNQUFrQjtRQUNqQyxNQUFNLFdBQVcsR0FBb0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3hELE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxTQUFTO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksQ0FBQyxDQUFDLEtBQWEsRUFBRSxTQUFrQjtRQUN4QyxPQUFPLENBQUMsSUFBYSxFQUFVLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQzlELE9BQU8sb0RBQVksQ0FDakIsV0FBVyxDQUFDLFNBQVMsQ0FDbkIsS0FBSyxFQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUNqQyxTQUFTLENBQ1YsRUFDRCxJQUFJLENBQ0wsQ0FBQztZQUNKLENBQUM7WUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxPQUFPLG9EQUFZLENBQ2pCLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxLQUFLLEVBQzFELElBQUksQ0FDTCxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksV0FBVyxDQUFDLE1BQWtCLEVBQUUsUUFBYztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLFlBQVksQ0FBQyxNQUFrQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7QUE5RWMsdUJBQVcsR0FBRyxDQUMzQixRQUFjLEVBQ2QsU0FBNkIsRUFDdkIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBOEUxRCxNQUFNLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R2hCLElBQVksMEJBT1g7QUFQRCxXQUFZLDBCQUEwQjtJQUNwQyxxRUFBdUM7SUFDdkMsaURBQW1CO0lBQ25CLHFEQUF1QjtJQUN2QixrRUFBb0M7SUFDcEMsK0RBQWlDO0lBQ2pDLHlEQUEyQjtBQUM3QixDQUFDLEVBUFcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQU9yQztBQUVELElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN4Qix5Q0FBdUI7SUFDdkIsMkNBQXlCO0lBQ3pCLGtEQUFnQztBQUNsQyxDQUFDLEVBSlcsY0FBYyxLQUFkLGNBQWMsUUFJekI7QUFFRCxJQUFZLDBCQUdYO0FBSEQsV0FBWSwwQkFBMEI7SUFDcEMsaUVBQW1DO0lBQ25DLDhFQUFnRDtBQUNsRCxDQUFDLEVBSFcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQUdyQztBQUVELElBQVksa0JBU1g7QUFURCxXQUFZLGtCQUFrQjtJQUM1QixnREFBMEI7SUFDMUIsc0RBQWdDO0lBQ2hDLGtEQUE0QjtJQUM1Qiw2REFBdUM7SUFDdkMsNkRBQXVDO0lBQ3ZDLDBEQUFvQztJQUNwQyx3REFBa0M7SUFDbEMsK0NBQXlCO0FBQzNCLENBQUMsRUFUVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBUzdCO0FBRUQsSUFBWSwwQkFFWDtBQUZELFdBQVksMEJBQTBCO0lBQ3BDLG9FQUFzQztBQUN4QyxDQUFDLEVBRlcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQUVyQztBQUVELElBQVksaUJBTVg7QUFORCxXQUFZLGlCQUFpQjtJQUMzQixpREFBNEI7SUFDNUIsMENBQXFCO0lBQ3JCLCtDQUEwQjtJQUMxQiwyREFBc0M7SUFDdEMsdURBQWtDO0FBQ3BDLENBQUMsRUFOVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBTTVCO0FBRUQsSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzVCLGlEQUEyQjtJQUMzQiw0REFBc0M7SUFDdEMsZ0VBQTBDO0FBQzVDLENBQUMsRUFKVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBSTdCO0FBRUQsSUFBWSxzQkFLWDtBQUxELFdBQVksc0JBQXNCO0lBQ2hDLCtEQUFxQztJQUNyQyxtRUFBeUM7SUFDekMsbUVBQXlDO0lBQ3pDLHlEQUErQjtBQUNqQyxDQUFDLEVBTFcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQUtqQztBQUVELElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4Qix1Q0FBcUI7SUFDckIsMkNBQXlCO0lBQ3pCLCtCQUFhO0lBQ2IsaUVBQStDO0FBQ2pELENBQUMsRUFMVyxjQUFjLEtBQWQsY0FBYyxRQUt6QjtBQUVELElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM3QixpREFBMEI7SUFDMUIsNkNBQXNCO0lBQ3RCLG1EQUE0QjtBQUM5QixDQUFDLEVBSlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUk5QjtBQUVELElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QiwyQ0FBd0I7SUFDeEIsNkNBQTBCO0lBQzFCLCtDQUE0QjtBQUM5QixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFRCw4RUFBOEU7QUFDOUUscUNBQXFDO0FBQ3JDLE1BQU0sTUFBTSxHQUNWLCtHQUErRyxDQUFDO0FBQ2xILE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDO0FBRWxDOzs7OztHQUtHO0FBQ0gsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQVksRUFBRTtJQUNwQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQVMsRUFBbUIsRUFBRTtJQUM5QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBZSxFQUFVLEVBQUU7SUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7OztHQVNHO0FBQ0ksTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFVLEVBQUU7SUFDaEUsSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXJCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0QyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pELGFBQWE7UUFDYixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsYUFBYTtRQUNiLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hELElBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7Z0JBQ25CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUN4RCxDQUFDO2dCQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDO1lBQ0QsSUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUztnQkFDbkIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQ3hELENBQUM7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBRUQsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO1NBQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRjs7Ozs7OztHQU9HO0FBQ0ksTUFBTSxrQkFBa0IsR0FBRyxDQUNoQyxJQUFjLEVBQ2QsT0FBZSxFQUNmLFVBQW1CLEVBQ0osRUFBRTtJQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0VBQXdFLElBQUksRUFBRSxDQUMvRSxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRWxELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxJQUNFLENBQUMsVUFBVSxJQUFJLEdBQUcsS0FBSyxhQUFhLENBQUM7WUFDckMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQzlDLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLE9BQU8sR0FBRyxHQUFXLEVBQUU7SUFDbEMsT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUNBQWlDO1FBQ3JFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsaUNBQWlDO1FBQzVFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0ksTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNmLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSSxNQUFNLHVCQUF1QixHQUFHLENBQUMsSUFBWSxFQUFFLE1BQU0sRUFBVSxFQUFFO0lBQ3RFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDM0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdEQsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSSxNQUFNLFFBQVEsR0FBRyxDQUN0QixJQUF1QixFQUN2QixJQUFZLEVBQ1MsRUFBRTtJQUN2QixJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNkLE1BQU0sS0FBSyxDQUNULHdEQUF3RCxHQUFHLElBQUksQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLEtBQXFCLENBQUM7SUFDMUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRWhCLE9BQU8sQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBQ0QsS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUNJLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBVyxFQUFFLElBQWEsRUFBVSxFQUFFO0lBQ2pFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3BELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDeEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzdELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSSxNQUFNLG1CQUFtQixHQUFHLENBQUMsS0FBYSxFQUFFLFVBQWtCLEVBQUUsRUFBRTtJQUN2RSxPQUFPLEtBQUssR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSSxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQVcsRUFBRSxDQUFXLEVBQUUsRUFBRTtJQUN0RCxPQUFPLENBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTTtRQUNyQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7R0FPRztBQUNJLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBVSxFQUFFO0lBQ2hFLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzNELENBQUMsQ0FBQztBQUVGOzs7Ozs7O0dBT0c7QUFDSSxNQUFNLG1CQUFtQixHQUFHLENBQUMsU0FBZSxFQUFFLE9BQWEsRUFBVSxFQUFFO0lBQzVFLE1BQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUM1RSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUssTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFXLEVBQVcsRUFBRTtJQUM1QyxJQUFJLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDWixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNJLE1BQU0sb0JBQW9CO0lBSS9CLFlBQW9CLFFBQWdCLEdBQUc7UUFBbkIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUgvQixVQUFLLEdBQW9DLEVBQUUsQ0FBQztRQUM1QyxVQUFLLEdBQTBCLElBQUksQ0FBQztJQUVGLENBQUM7SUFFM0M7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBQyxJQUE4QixFQUFFLEdBQUcsSUFBVztRQUN2RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDVCxJQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ2YsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztvQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDcEIsQ0FBQztZQUNILENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VmtGO0FBQzFDO0FBQ1c7QUFDMEI7QUFJOUUsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFFL0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUM7QUFDakMsSUFBSSxlQUF1QixDQUFDO0FBb0I1QixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztBQUVqQzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLEdBQUcsQ0FBQyxPQUE4QixFQUFFLEVBQUU7SUFDakQsT0FBTyxDQUNMLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSTtRQUN2RCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNJLE1BQU0sU0FBUyxHQUFHLEtBQUssRUFDNUIsT0FBOEIsRUFDOUIsUUFBc0IsRUFDdEIsRUFBRTtJQUNGLElBQUksYUFBYSxDQUFDO0lBQ2xCLElBQUksYUFBYSxDQUFDO0lBQ2xCLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxXQUFXLEdBQWEsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQztZQUNQLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixTQUFTO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsT0FBTztJQUNULENBQUM7SUFDRCxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxjQUFjLENBQUMsYUFBYSxHQUFHO1lBQzdCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksbURBQVcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNqQzs7Ozs7O1dBTUc7UUFDSCxhQUFhLEdBQUcsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMseURBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDNUUsR0FBRyxFQUFFLHlEQUFPLENBQUMsa0JBQWtCO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2xCLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksYUFBYSxFQUFFLENBQUM7UUFDbEIsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscURBQXFEO0lBQ3JELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFCLE1BQU0saURBQVcsQ0FBQyxNQUFNLENBQUMseURBQU8sQ0FBQyxXQUFXLEVBQUU7WUFDNUMsR0FBRyxFQUFFLHlEQUFPLENBQUMsK0JBQStCO1NBQzdDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQztZQUNQLElBQUksRUFBRSxtQkFBbUI7WUFDekIsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixTQUFTO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsT0FBTztJQUNULENBQUM7SUFFRCxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDakIsTUFBTSxPQUFPLEdBQTRCLE1BQU0saURBQVcsQ0FBQyxNQUFNLENBQy9ELHlEQUFPLENBQUMsV0FBVyxFQUNuQjtRQUNFLEdBQUcsRUFBRSx5REFBTyxDQUFDLFVBQVU7UUFDdkIsS0FBSyxFQUFFLFdBQVc7UUFDbEIsYUFBYSxFQUFFLGNBQWMsQ0FBQyxhQUFhO0tBQzVDLENBQ0YsQ0FBQztJQUNGLDJEQUEyRDtJQUMzRCxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RSxNQUFNLGNBQWMsR0FBNEIsT0FBTyxDQUFDLE1BQU0sQ0FDNUQsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUNsQyxDQUFDO1FBRUYsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDL0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUNuRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QixNQUFNLFdBQVcsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQ2pELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sY0FBYyxHQUFHLE9BQU87U0FDM0IsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLDJFQUF5QixDQUFDO1NBQzdELEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2QsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULEdBQUc7Z0JBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2FBQ3hDO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsaURBQVcsQ0FBQyxJQUFJLENBQUMseURBQU8sQ0FBQyxXQUFXLEVBQUU7UUFDdEMsR0FBRyxFQUFFLHlEQUFPLENBQUMsc0JBQXNCO1FBQ25DLEVBQUU7UUFDRixPQUFPLEVBQUUsY0FBYztLQUN4QixDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQU8sRUFBRSxNQUE2QixFQUFFLEVBQUU7UUFDakUseURBQXlEO1FBQ3pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLG1FQUFtRTtZQUNuRSxvQkFBb0I7WUFDcEIsNEJBQTRCO1lBQzVCLCtCQUErQjtZQUMvQixlQUFlO1lBQ2YsTUFBTTtRQUNSLENBQUM7UUFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztJQUNGLGlEQUFXLENBQUMsSUFBSSxDQUFDLDhEQUFpQixDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEUsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRix1Q0FBdUM7QUFDdkMsaURBQVcsQ0FBQyxJQUFJLENBQUMsOERBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3ZELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDNUIsZUFBZSxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCw2Q0FBNkM7QUFDN0MsaURBQVcsQ0FBQyxFQUFFLENBQUMsOERBQWlCLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxFQUFFO0lBQ3RFLElBQUksT0FBTyxjQUFjLEtBQUssU0FBUyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQzFELG9CQUFvQixHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDeExIOzs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsaURBQWlEO0FBQ2pELGdDQUFnQztBQUM2QztBQUM4SDtBQUN4SztBQUdzQjtBQUt6RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLE1BQU0sQ0FBQztBQUN6RCxNQUFNLGVBQWUsR0FBRztJQUN0QixXQUFXLEVBQUU7UUFDWCxXQUFXLENBQUMsT0FBaUIsRUFBRSxHQUFHLElBQWU7WUFDL0MsaURBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELEVBQUUsQ0FBQyxPQUFpQixFQUFFLElBQTRCO1lBQ2hELE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBd0IsRUFBRSxHQUFHLElBQWUsRUFBRSxFQUFFLENBQ3BFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2hCLGlEQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUV0QyxPQUFPLEdBQUcsRUFBRTtnQkFDVixpREFBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksQ0FBQyxPQUFpQixFQUFFLElBQWtDO1lBQ3hELGlEQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQWlCLEVBQUUsR0FBRyxJQUFlO1lBQzFDLE9BQU8saURBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQztLQUNGO0lBQ0QsS0FBSztJQUNMLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtDQUNULENBQUM7QUFFRixtREFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQVE3RCxNQUFNLFNBQVMsR0FBZSxNQUFNLENBQUM7QUFFckMsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO0lBQ3JCLGlFQUFpRTtJQUNqRSxvSUFBb0k7SUFDcEksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixPQUFPO0lBQ1QsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSwyRUFBMkU7SUFDM0UsZ0VBQWdFO0lBRWhFLEVBQUU7SUFDRixtQ0FBbUM7SUFDbkMsRUFBRTtJQUNGLGFBQWE7SUFDYixTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksNENBQU0sRUFBRSxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGLFNBQVMsRUFBRSxDQUFDO0FBRVosSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbEIsMEVBQTBFO0lBQzFFLG1DQUFtQztJQUNuQyxtREFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtRQUN6QyxTQUFTLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTO1FBQ2xDLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDeEMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYztRQUM1QyxRQUFRLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRO1FBQ2hDLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDeEMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYztRQUM1Qyx5QkFBeUIsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QjtRQUNsRSx1QkFBdUIsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QjtRQUM5RCxrQkFBa0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtRQUNwRCxrQkFBa0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtRQUNwRCxvQkFBb0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtRQUN4RCxvQkFBb0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtRQUN4RCxjQUFjLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjO1FBQzVDLHVCQUF1QixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCO1FBQzlELG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CO1FBQ3hELFFBQVEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVE7UUFDaEMsc0JBQXNCLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0I7UUFDNUQsYUFBYSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYTtRQUMxQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtRQUNsRCxrQkFBa0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtRQUNwRCxhQUFhLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhO1FBQzFDLFNBQVMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVM7UUFDbEMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYztRQUM1Qyx3QkFBd0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QjtRQUNoRSwwQkFBMEIsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQjtRQUNwRSwwQkFBMEIsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQjtRQUNwRSwyQkFBMkIsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUEyQjtRQUN0RSxzQkFBc0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQjtRQUM1RCxjQUFjLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjO1FBQzVDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CO1FBQ3hELGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO1FBQ2hELGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCO1FBQ2xELG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CO1FBQ3hELHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCO1FBQzFELFVBQVUsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVU7UUFDcEMsc0JBQXNCLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0I7UUFDNUQsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUN4QyxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQ3hDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCO1FBQ2xELHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCO1FBQzFELCtCQUErQixFQUM3QixTQUFTLENBQUMsR0FBRyxDQUFDLCtCQUErQjtRQUMvQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtRQUN4RCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1FBQ3hDLGVBQWUsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWU7UUFDOUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7UUFDbEQsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7UUFDaEQsY0FBYyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYztRQUM1QyxlQUFlLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlO1FBQzlDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO1FBQ2hELGFBQWEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWE7UUFDMUMsMkJBQTJCLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBMkI7UUFDdEUsNkJBQTZCLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkI7S0FDM0UsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUlNLE1BQU0sU0FBUztJQUNwQjs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDakQsQ0FBQztJQWdDRDtRQTlCTyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRVYscUJBQWdCLEdBQUc7WUFDbEMsU0FBUyxFQUFFLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDN0Qsa0JBQWtCLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQ3pFLHVCQUF1QixFQUFFLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQy9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDakMsOEJBQThCLEVBQUUsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FDckQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQztZQUN4Qyx3QkFBd0IsRUFBRSxDQUN4QixHQUFZLEVBQ1osUUFBa0IsRUFDbEIsYUFBc0IsRUFDdEIsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQztZQUM5RCxpQ0FBaUMsRUFBRSxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQ2pELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUM7WUFDbkMscUJBQXFCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3ZELGdDQUFnQyxFQUFFLENBQUMsR0FBNEIsRUFBRSxFQUFFLENBQ2pFLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUM7WUFDMUMscUJBQXFCLEVBQUUsQ0FDckIsS0FBZ0MsRUFDaEMsTUFBZ0QsRUFDMUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUM3QyxzQkFBc0IsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUN0QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztZQUN4Qyx3QkFBd0IsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztZQUNyRSxjQUFjLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ25ELHNCQUFzQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO1NBQ3BFLENBQUM7UUF3TEY7OztXQUdHO1FBQ0sscUJBQWdCLEdBQUcsQ0FBQyxRQUFnQixFQUFRLEVBQUUsQ0FDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXZEOzs7V0FHRztRQUNLLDBCQUFxQixHQUFHLENBQUMsR0FBbUIsRUFBUSxFQUFFLENBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4RDs7O1dBR0c7UUFDSyxpQ0FBNEIsR0FBRyxDQUFDLEdBQWtCLEVBQVEsRUFBRSxDQUNsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFnQnZEOzs7V0FHRztRQUNLLDRCQUF1QixHQUFHLENBQUMsR0FBVyxFQUFRLEVBQUUsQ0FDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLHdCQUFtQixHQUFHLEdBQVMsRUFBRSxDQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBaE9qRCxnQ0FBZ0M7UUFDaEMsNkNBQTZDO1FBQzdDLGlEQUFXO2FBQ1IsTUFBTSxDQUFDLHlEQUFPLENBQUMsV0FBVyxFQUFFO1lBQzNCLEdBQUcsRUFBRSx5REFBTyxDQUFDLG1CQUFtQjtTQUNqQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixrR0FBa0c7WUFDbEcsaURBQVcsQ0FBQyxJQUFJLENBQUMseURBQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLEdBQUcsRUFBRSx5REFBTyxDQUFDLG1CQUFtQjthQUNqQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7YUFDeEMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFNUMsaURBQVcsQ0FBQyxFQUFFLENBQUMseURBQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBbUI7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNwQyxRQUFRLE1BQU0sRUFBRSxDQUFDO1lBQ2YsS0FBSyx5REFBTyxDQUFDLGNBQWM7Z0JBQ3pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sU0FBUyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixFQUFFO29CQUNqRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLFFBQVEsRUFBRSxXQUFXO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxRQUFRO2dCQUNuQixTQUFTLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFjLENBQUMsQ0FBQztnQkFDeEMsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxZQUFZO2dCQUN2QixNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDcEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsVUFBb0IsRUFBRSxNQUFnQixDQUFDLENBQUM7Z0JBQ3BFLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsYUFBYTtnQkFDeEIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztvQkFDN0IsU0FBUyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsSUFBYyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBQ0QsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxrQkFBa0I7Z0JBQzdCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQzdCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsSUFBYyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxrQkFBa0I7Z0JBQzdCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQzdCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsSUFBYyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxvQkFBb0I7Z0JBQy9CLFNBQVMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztnQkFDdEMsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxVQUFVO2dCQUNyQixTQUFTLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsS0FBSyx5REFBTyxDQUFDLFNBQVM7Z0JBQ3BCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQzdCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQWMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMseUJBQXlCO2dCQUNwQyxTQUFTLENBQUMsR0FBRyxFQUFFLHlCQUF5QixDQUN0QyxJQUFjLEVBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUN6QyxDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsdUJBQXVCO2dCQUNsQyxTQUFTLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQzdDLENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxpQkFBaUI7Z0JBQzVCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ2hGLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsa0JBQWtCO2dCQUM3QixTQUFTLENBQUMsR0FBRyxFQUFFLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3BDLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsb0JBQW9CO2dCQUMvQixTQUFTLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsOEJBQThCLENBQ3JELENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxjQUFjO2dCQUN6QixTQUFTLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDOUUsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyx1QkFBdUI7Z0JBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBaUMsQ0FDeEQsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyx5REFBTyxDQUFDLG9CQUFvQjtnQkFDL0IsU0FBUyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUMzQyxJQUFJLENBQ0wsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyx5REFBTyxDQUFDLFFBQVE7Z0JBQ25CLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRCxNQUFNO1lBQ1IsS0FBSyx5REFBTyxDQUFDLDBCQUEwQjtnQkFDckMsU0FBUyxDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FDdkMsSUFBc0MsRUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUN2RCxDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsMkJBQTJCO2dCQUN0QyxTQUFTLENBQUMsR0FBRyxFQUFFLDJCQUEyQixDQUFDLElBQUksQ0FBQyxRQUFrQixDQUFDLENBQUM7Z0JBQ3BFLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsY0FBYztnQkFDekIsTUFBTSxTQUFTLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FDakMsSUFBNkIsRUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUM1QyxDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsWUFBWTtnQkFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FDN0IsSUFBeUIsRUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUM3QyxDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsaUJBQWlCO2dCQUM1QixNQUFNLFNBQVMsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsSUFBYyxDQUFDLENBQUM7Z0JBQ3ZELE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsd0JBQXdCO2dCQUNuQyxTQUFTLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyx5REFBTyxDQUFDLGNBQWM7Z0JBQ3pCLElBQUksT0FBTyxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLElBQWUsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUNELE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsd0JBQXdCO2dCQUNuQyxTQUFTLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQy9DLENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxzQkFBc0I7Z0JBQ2pDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNO1lBQ1IsS0FBSyx5REFBTyxDQUFDLGNBQWM7Z0JBQ3pCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLElBQWMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyx5REFBTyxDQUFDLFdBQVc7Z0JBQ3RCLGlEQUFXLENBQUMsSUFBSSxDQUFDLHlEQUFPLENBQUMsV0FBVyxFQUFFO29CQUNwQyxHQUFHLEVBQUUseURBQU8sQ0FBQyw4QkFBOEI7b0JBQzNDLGVBQWUsRUFBRSxJQUFJO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUsseURBQU8sQ0FBQyxXQUFXO2dCQUN0QixNQUFNLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRTtvQkFDOUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO29CQUN6QixRQUFRLEVBQUUsUUFBUTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLHlEQUFPLENBQUMsb0JBQW9CO2dCQUMvQixNQUFNLGVBQWUsR0FBRyxNQUFNLFNBQVMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlDQUFpQyxFQUFFO29CQUN2RCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLFFBQVEsRUFBRSxlQUFlO2lCQUMxQixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtRQUNWLENBQUM7SUFDSCxDQUFDO0lBdUJEOzs7OztPQUtHO0lBQ0ssc0JBQXNCLENBQzVCLEdBQVksRUFDWixRQUFrQixFQUNsQixhQUFzQjtRQUV0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQVlEOzs7T0FHRztJQUNLLDhCQUE4QixDQUFDLEdBQTRCO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssc0JBQXNCLENBQUMsR0FBbUI7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7O09BR0c7SUFDSyxzQkFBc0IsQ0FBQyxHQUFXO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssY0FBYyxDQUFDLEdBQXdCO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGNBQWMsQ0FDcEIsV0FBc0MsRUFDdEMsY0FBd0Q7UUFFeEQsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoQixNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsV0FBVyxDQUFDO1lBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9DLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUM7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFO2dCQUM3QyxTQUFTO2dCQUNULE1BQU07Z0JBQ04sS0FBSyxFQUFFLFdBQVc7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixFQUFFO2dCQUNoRCxTQUFTO2dCQUNULFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2FBQ3pDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGdCQUFnQixDQUFDLE1BQWMsRUFBRSxJQUFTO1FBQ2hELGlEQUFXO2FBQ1IsTUFBTSxDQUFDLHlEQUFPLENBQUMsV0FBVyxFQUFFO1lBQzNCLEdBQUcsRUFBRSx5REFBTyxDQUFDLG1CQUFtQjtTQUNqQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGO0FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUVsQyxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zeW1waG9ueS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvLi9zcmMvYXBwL3NzZi1hcGkudHMiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvLi9zcmMvY29tbW9uL2FwaS1pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvLi9zcmMvY29tbW9uL2Vudi50cyIsIndlYnBhY2s6Ly9zeW1waG9ueS8uL3NyYy9jb21tb24vaTE4bi1wcmVsb2FkLnRzIiwid2VicGFjazovL3N5bXBob255Ly4vc3JjL2NvbW1vbi9pcGNFdmVudC50cyIsIndlYnBhY2s6Ly9zeW1waG9ueS8uL3NyYy9jb21tb24vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvLi9zcmMvcmVuZGVyZXIvY29tcG9uZW50cy9kZXNrdG9wLWNhcHR1cmVyL2Rlc2t0b3AtY2FwdHVyZXIudHMiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N5bXBob255L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zeW1waG9ueS8uL3NyYy9hcHAvcHJlbG9hZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgaXBjUmVuZGVyZXIsIHdlYkZyYW1lIH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtcbiAgYnVpbGROdW1iZXIsXG4gIG5hbWUsXG4gIHNlYXJjaEFQSVZlcnNpb24sXG4gIHZlcnNpb24sXG59IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBBdXRvVXBkYXRlVHJpZ2dlciB9IGZyb20gJy4vYXV0by11cGRhdGUtaGFuZGxlcic7XG5pbXBvcnQge1xuICBhcGlDbWRzLFxuICBhcGlOYW1lLFxuICBDb25maWdVcGRhdGVUeXBlLFxuICBFUHJlc2VuY2VTdGF0dXNDYXRlZ29yeSxcbiAgSUJvdW5kc0NoYW5nZSxcbiAgSUNhbGxOb3RpZmljYXRpb25EYXRhLFxuICBJQ2xvdWQ5UGlwZSxcbiAgSUNQVVVzYWdlLFxuICBJTG9nTXNnLFxuICBJTWVkaWFQZXJtaXNzaW9uLFxuICBJTm90aWZpY2F0aW9uRGF0YSxcbiAgSVByZXNlbmNlU3RhdHVzLFxuICBJUmVzdGFydEZsb2F0ZXJEYXRhLFxuICBJU2NyZWVuU2hhcmluZ0luZGljYXRvcixcbiAgSVNjcmVlblNoYXJpbmdJbmRpY2F0b3JPcHRpb25zLFxuICBJU2NyZWVuU25pcHBldCxcbiAgSVN0YXR1c0JhZGdlLFxuICBJVmVyc2lvbkluZm8sXG4gIEtleUNvZGVzLFxuICBMb2dMZXZlbCxcbiAgTm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2ssXG4gIFBob25lTnVtYmVyUHJvdG9jb2wsXG59IGZyb20gJy4uL2NvbW1vbi9hcGktaW50ZXJmYWNlJztcbmltcG9ydCB7IGkxOG4sIExvY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vaTE4bi1wcmVsb2FkJztcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IGdldFNvdXJjZSB9IGZyb20gJ3JlbmRlcmVyL2NvbXBvbmVudHMvZGVza3RvcC1jYXB0dXJlci9kZXNrdG9wLWNhcHR1cmVyJztcbmltcG9ydCB7IFNjcmVlblNoYXJlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2lwY0V2ZW50Jztcbi8vIGltcG9ydCBTU0ZOb3RpZmljYXRpb25IYW5kbGVyIGZyb20gJy4vbm90aWZpY2F0aW9uLXNzZi1oYW5kbGVyJztcbi8vIGltcG9ydCB7IFNjcmVlblNuaXBwZXRCY0hhbmRsZXIgfSBmcm9tICcuL3NjcmVlbi1zbmlwcGV0LWJjLWhhbmRsZXInO1xuXG5jb25zdCBTVVBQT1JURURfU0VUVElOR1MgPSBbJ2ZsYXNoaW5nLW5vdGlmaWNhdGlvbnMnXTtcbmNvbnN0IE1BSU5fV0lORE9XX05BTUUgPSAnbWFpbic7XG5cbmxldCBpc0FsdEtleTogYm9vbGVhbiA9IGZhbHNlO1xubGV0IGlzTWVudU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxPYmplY3Qge1xuICAvLyBpcGNSZW5kZXJlcjtcbiAgbG9nZ2VyPzogKG1zZzogSUxvZ01zZywgbG9nTGV2ZWw6IExvZ0xldmVsLCBzaG93SW5Db25zb2xlOiBib29sZWFuKSA9PiB2b2lkO1xuICBhY3Rpdml0eURldGVjdGlvbkNhbGxiYWNrPzogKGFyZzogbnVtYmVyKSA9PiB2b2lkO1xuICBkb3dubG9hZE1hbmFnZXJDYWxsYmFjaz86IChhcmc/OiBhbnkpID0+IHZvaWQ7XG4gIHNjcmVlblNuaXBwZXRDYWxsYmFjaz86IChhcmc6IElTY3JlZW5TbmlwcGV0KSA9PiB2b2lkO1xuICBib3VuZHNDaGFuZ2VDYWxsYmFjaz86IChhcmc6IElCb3VuZHNDaGFuZ2UpID0+IHZvaWQ7XG4gIHNjcmVlblNoYXJpbmdJbmRpY2F0b3JDYWxsYmFjaz86IChhcmc6IElTY3JlZW5TaGFyaW5nSW5kaWNhdG9yKSA9PiB2b2lkO1xuICBwcm90b2NvbEFjdGlvbkNhbGxiYWNrPzogKGFyZzogc3RyaW5nKSA9PiB2b2lkO1xuICBjb2xsZWN0TG9nc0NhbGxiYWNrPzogQXJyYXk8KCkgPT4gdm9pZD47XG4gIGFuYWx5dGljc0V2ZW50SGFuZGxlcj86IChhcmc6IGFueSkgPT4gdm9pZDtcbiAgcmVzdGFydEZsb2F0ZXI/OiAoYXJnOiBJUmVzdGFydEZsb2F0ZXJEYXRhKSA9PiB2b2lkO1xuICBzaG93Q2xpZW50QmFubmVyQ2FsbGJhY2s/OiBBcnJheTxcbiAgICAocmVhc29uOiBzdHJpbmcsIGFjdGlvbjogQ29uZmlnVXBkYXRlVHlwZSwgZGF0YT86IG9iamVjdCkgPT4gdm9pZFxuICA+O1xuICBjOVBpcGVFdmVudENhbGxiYWNrPzogKGV2ZW50OiBzdHJpbmcsIGFyZz86IGFueSkgPT4gdm9pZDtcbiAgLy8gYzlNZXNzYWdlQ2FsbGJhY2s/OiAoc3RhdHVzOiBJU2hlbGxTdGF0dXMpID0+IHZvaWQ7XG4gIHVwZGF0ZU15UHJlc2VuY2VDYWxsYmFjaz86IChwcmVzZW5jZTogRVByZXNlbmNlU3RhdHVzQ2F0ZWdvcnkpID0+IHZvaWQ7XG4gIHBob25lTnVtYmVyQ2FsbGJhY2s/OiAoYXJnOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGxvY2FsOiBJTG9jYWxPYmplY3QgPSB7XG4gIGlwY1JlbmRlcmVyLFxufTtcblxuY29uc3Qgbm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2tzID0gbmV3IE1hcDxcbiAgbnVtYmVyLFxuICBOb3RpZmljYXRpb25BY3Rpb25DYWxsYmFja1xuPigpO1xuXG5jb25zdCBjYWxsTm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2tzID0gbmV3IE1hcDxcbiAgbnVtYmVyLFxuICBOb3RpZmljYXRpb25BY3Rpb25DYWxsYmFja1xuPigpO1xuXG5jb25zdCBERUZBVUxUX1RIUk9UVExFID0gMTAwMDtcblxuLy8gVGhyb3R0bGUgZnVuY1xuY29uc3QgdGhyb3R0bGVkU2V0QmFkZ2VDb3VudCA9IHRocm90dGxlKChjb3VudCkgPT4ge1xuICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuc2V0QmFkZ2VDb3VudCxcbiAgICBjb3VudCxcbiAgfSk7XG59LCBERUZBVUxUX1RIUk9UVExFKTtcblxuY29uc3QgdGhyb3R0bGVkU2V0TG9jYWxlID0gdGhyb3R0bGUoKGxvY2FsZSkgPT4ge1xuICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuc2V0TG9jYWxlLFxuICAgIGxvY2FsZSxcbiAgfSk7XG59LCBERUZBVUxUX1RIUk9UVExFKTtcblxuY29uc3QgdGhyb3R0bGVkQWN0aXZhdGUgPSB0aHJvdHRsZSgod2luZG93TmFtZSkgPT4ge1xuICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuYWN0aXZhdGUsXG4gICAgd2luZG93TmFtZSxcbiAgfSk7XG59LCBERUZBVUxUX1RIUk9UVExFKTtcblxuY29uc3QgdGhyb3R0bGVkQnJpbmdUb0Zyb250ID0gdGhyb3R0bGUoKHdpbmRvd05hbWUsIHJlYXNvbikgPT4ge1xuICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuYnJpbmdUb0Zyb250LFxuICAgIHdpbmRvd05hbWUsXG4gICAgcmVhc29uLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRDbG9zZVNjcmVlblNoYXJlSW5kaWNhdG9yID0gdGhyb3R0bGUoKHN0cmVhbUlkKSA9PiB7XG4gIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5jbG9zZVdpbmRvdyxcbiAgICB3aW5kb3dUeXBlOiAnc2NyZWVuLXNoYXJpbmctaW5kaWNhdG9yJyxcbiAgICB3aW5LZXk6IHN0cmVhbUlkLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRTZXRJc0luTWVldGluZ1N0YXR1cyA9IHRocm90dGxlKChpc0luTWVldGluZykgPT4ge1xuICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuc2V0SXNJbk1lZXRpbmcsXG4gICAgaXNJbk1lZXRpbmcsXG4gIH0pO1xufSwgREVGQVVMVF9USFJPVFRMRSk7XG5cbmNvbnN0IHRocm90dGxlZFNldENsb3VkQ29uZmlnID0gdGhyb3R0bGUoKGRhdGEpID0+IHtcbiAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgY21kOiBhcGlDbWRzLnNldENsb3VkQ29uZmlnLFxuICAgIGNsb3VkQ29uZmlnOiBkYXRhLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRPcGVuRG93bmxvYWRlZEl0ZW0gPSB0aHJvdHRsZSgoaWQ6IHN0cmluZykgPT4ge1xuICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMub3BlbkRvd25sb2FkZWRJdGVtLFxuICAgIGlkLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRTaG93RG93bmxvYWRlZEl0ZW0gPSB0aHJvdHRsZSgoaWQ6IHN0cmluZykgPT4ge1xuICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuc2hvd0Rvd25sb2FkZWRJdGVtLFxuICAgIGlkLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRDbGVhckRvd25sb2FkZWRJdGVtcyA9IHRocm90dGxlKCgpID0+IHtcbiAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgY21kOiBhcGlDbWRzLmNsZWFyRG93bmxvYWRlZEl0ZW1zLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRSZXN0YXJ0ID0gdGhyb3R0bGUoKCkgPT4ge1xuICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMucmVzdGFydEFwcCxcbiAgfSk7XG59LCBERUZBVUxUX1RIUk9UVExFKTtcblxuY29uc3QgdGhyb3R0bGVkU2V0Wm9vbUxldmVsID0gdGhyb3R0bGUoKHpvb21MZXZlbCkgPT4ge1xuICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuc2V0Wm9vbUxldmVsLFxuICAgIHpvb21MZXZlbCxcbiAgfSk7XG59LCBERUZBVUxUX1RIUk9UVExFKTtcblxubGV0IG5leHRJbmRpY2F0b3JJZCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBTU0ZBcGkge1xuICAvLyBwdWJsaWMgTm90aWZpY2F0aW9uID0gU1NGTm90aWZpY2F0aW9uSGFuZGxlcjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzIGVxdWl2YWxlbnQgb2YgZGVza3RvcENhcHR1cmVyLmdldFNvdXJjZXMgLSB0aGF0IHdvcmtzIGluXG4gICAqIGEgc2FuZGJveGVkIHJlbmRlcmVyIHByb2Nlc3MuXG4gICAqIHNlZTogaHR0cHM6Ly9lbGVjdHJvbi5hdG9tLmlvL2RvY3MvYXBpL2Rlc2t0b3AtY2FwdHVyZXIvXG4gICAqIGZvciBpbnRlcmZhY2U6IHNlZSBkb2N1bWVudGF0aW9uIGluIGRlc2t0b3BDYXB0dXJlci9nZXRTb3VyY2UuanNcbiAgICpcbiAgICogVGhpcyBvcGVucyBhIHdpbmRvdyBhbmQgZGlzcGxheXMgYWxsIHRoZSBkZXNrdG9wIHNvdXJjZXNcbiAgICogYW5kIHJldHVybnMgc2VsZWN0ZWQgc291cmNlXG4gICAqL1xuICBwdWJsaWMgZ2V0TWVkaWFTb3VyY2UgPSBnZXRTb3VyY2U7XG5cbiAgLyoqXG4gICAqIEJyaW5ncyB3aW5kb3cgZm9yd2FyZCBhbmQgZ2l2ZXMgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gd2luZG93TmFtZSAtIE5hbWUgb2Ygd2luZG93LiBOb3RlOiBtYWluIHdpbmRvdyBuYW1lIGlzICdtYWluJ1xuICAgKi9cbiAgcHVibGljIGFjdGl2YXRlKHdpbmRvd05hbWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm90dGxlZEFjdGl2YXRlKHdpbmRvd05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCcmluZ3Mgd2luZG93IGZvcndhcmQgYW5kIGdpdmVzIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHdpbmRvd05hbWUgTmFtZSBvZiB3aW5kb3cuIE5vdGU6IG1haW4gd2luZG93IG5hbWUgaXMgJ21haW4nXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZWFzb24sIFRoZSByZWFzb24gZm9yIHdoaWNoIHRoZSB3aW5kb3cgaXMgdG8gYmUgYWN0aXZhdGVkXG4gICAqL1xuICBwdWJsaWMgYnJpbmdUb0Zyb250KHdpbmRvd05hbWU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvd05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdHRsZWRCcmluZ1RvRnJvbnQod2luZG93TmFtZSwgcmVhc29uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgcmV0dXJucyB2YXJpb3VzIHZlcnNpb24gaW5mb1xuICAgKi9cbiAgcHVibGljIGdldFZlcnNpb25JbmZvKCk6IFByb21pc2U8SVZlcnNpb25JbmZvPiB7XG4gICAgY29uc3QgYXBwTmFtZSA9IG5hbWU7XG4gICAgY29uc3QgYXBwVmVyID0gdmVyc2lvbjtcbiAgICBjb25zdCBjcHVBcmNoID0gcHJvY2Vzcy5hcmNoIHx8ICcnO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBjb250YWluZXJJZGVudGlmaWVyOiBhcHBOYW1lLFxuICAgICAgY29udGFpbmVyVmVyOiBhcHBWZXIsXG4gICAgICBidWlsZE51bWJlcixcbiAgICAgIGFwaVZlcjogJzMuMC4wJyxcbiAgICAgIGNwdUFyY2gsXG4gICAgICAvLyBPbmx5IG5lZWQgdG8gYnVtcCBpZiB0aGVyZSBhcmUgYW55IGJyZWFraW5nIGNoYW5nZXMuXG4gICAgICBzZWFyY2hBcGlWZXI6IHNlYXJjaEFQSVZlcnNpb24sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIEpTIHRvIHJlZ2lzdGVyIGEgYWN0aXZpdHkgZGV0ZWN0b3IgdGhhdCBjYW4gYmUgdXNlZCBieSBlbGVjdHJvbiBtYWluIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gcGVyaW9kIC0gbWluaW11bSB1c2VyIGlkbGUgdGltZSBpbiBtaWxsaXNlY29uZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGFjdGl2aXR5RGV0ZWN0aW9uQ2FsbGJhY2sgLSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWQgYWNjZXB0aW5nXG4gICAqIEBleGFtcGxlIHJlZ2lzdGVyQWN0aXZpdHlEZXRlY3Rpb24oNDAwMDAsIGZ1bmMpXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJBY3Rpdml0eURldGVjdGlvbihcbiAgICBwZXJpb2Q6IG51bWJlcixcbiAgICBhY3Rpdml0eURldGVjdGlvbkNhbGxiYWNrOiAoYXJnOiBudW1iZXIpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBhY3Rpdml0eURldGVjdGlvbkNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbC5hY3Rpdml0eURldGVjdGlvbkNhbGxiYWNrID0gYWN0aXZpdHlEZXRlY3Rpb25DYWxsYmFjaztcblxuICAgICAgLy8gb25seSBtYWluIHdpbmRvdyBjYW4gcmVnaXN0ZXJcbiAgICAgIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgICBjbWQ6IGFwaUNtZHMucmVnaXN0ZXJBY3Rpdml0eURldGVjdGlvbixcbiAgICAgICAgcGVyaW9kLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgZG93bmxvYWQgaGFuZGxlclxuICAgKiBAcGFyYW0gZG93bmxvYWRNYW5hZ2VyQ2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIGJ5IHRoZSBkb3dubG9hZCBoYW5kbGVyXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJEb3dubG9hZEhhbmRsZXIoXG4gICAgZG93bmxvYWRNYW5hZ2VyQ2FsbGJhY2s6IChhcmc6IGFueSkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRvd25sb2FkTWFuYWdlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbC5kb3dubG9hZE1hbmFnZXJDYWxsYmFjayA9IGRvd25sb2FkTWFuYWdlckNhbGxiYWNrO1xuICAgIH1cblxuICAgIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnJlZ2lzdGVyRG93bmxvYWRIYW5kbGVyLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byByZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgd2hlbiBzaXplL3Bvc2l0aW9uc1xuICAgKiBjaGFuZ2VzIGZvciBhbnkgcG9wLW91dCB3aW5kb3cgKGkuZS4sIHdpbmRvdy5vcGVuKS4gVGhlIG1haW5cbiAgICogcHJvY2VzcyB3aWxsIGVtaXQgSVBDIGV2ZW50ICdib3VuZHNDaGFuZ2UnIChzZWUgYmVsb3cpLiBDdXJyZW50bHlcbiAgICogb25seSBvbmUgd2luZG93IGNhbiByZWdpc3RlciBmb3IgYm91bmRzIGNoYW5nZS5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIGludm9rZWQgd2hlbiBib3VuZHMgY2hhbmdlcy5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckJvdW5kc0NoYW5nZShjYWxsYmFjazogKGFyZzogSUJvdW5kc0NoYW5nZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLmJvdW5kc0NoYW5nZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byByZWdpc3RlciBhIGxvZ2dlciB0aGF0IGNhbiBiZSB1c2VkIGJ5IGVsZWN0cm9uIG1haW4gcHJvY2Vzcy5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBsb2dnZXIgIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCBhY2NlcHRpbmdcbiAgICogb2JqZWN0OiB7XG4gICAqICBsb2dMZXZlbDogJ0VSUk9SJ3wnQ09ORkxJQ1QnfCdXQVJOJ3wnQUNUSU9OJ3wnSU5GTyd8J0RFQlVHJyxcbiAgICogIGxvZ0RldGFpbHM6IFN0cmluZ1xuICAgKiAgfVxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyTG9nZ2VyKFxuICAgIGxvZ2dlcjogKG1zZzogSUxvZ01zZywgbG9nTGV2ZWw6IExvZ0xldmVsLCBzaG93SW5Db25zb2xlOiBib29sZWFuKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgbG9nZ2VyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbC5sb2dnZXIgPSBsb2dnZXI7XG5cbiAgICAgIC8vIG9ubHkgbWFpbiB3aW5kb3cgY2FuIHJlZ2lzdGVyXG4gICAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLnJlZ2lzdGVyTG9nZ2VyLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byByZWdpc3RlciBhIHByb3RvY29sIGhhbmRsZXIgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGVcbiAgICogZWxlY3Ryb24gbWFpbiBwcm9jZXNzLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvdG9jb2xIYW5kbGVyIHtGdW5jdGlvbn0gY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhcHAgaXNcbiAgICogaW52b2tlZCB3aXRoIHJlZ2lzdGVyZWQgcHJvdG9jb2wgKGUuZy4sIHN5bXBob255KS4gVGhlIGNhbGxiYWNrXG4gICAqIHJlY2VpdmVzIGEgc2luZ2xlIHN0cmluZyBhcmd1bWVudDogZnVsbCB1cmkgdGhhdCB0aGUgYXBwIHdhc1xuICAgKiBpbnZva2VkIHdpdGggZS5nLiwgc3ltcGhvbnk6Ly8/c3RyZWFtSWQ9eHl6MTIzJnN0cmVhbVR5cGU9Y2hhdHJvb21cbiAgICpcbiAgICogTm90ZTogdGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBiZSBjYWxsZWQgYWZ0ZXIgY2xpZW50IGFwcCBpcyBmdWxseVxuICAgKiBhYmxlIGZvciBwcm90b2NvbEhhbmRsZXIgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC4gIEl0IGlzIHBvc3NpYmxlXG4gICAqIHRoZSBhcHAgd2FzIHN0YXJ0ZWQgdXNpbmcgcHJvdG9jb2wgaGFuZGxlciwgaW4gdGhpcyBjYXNlIGFzIHNvb24gYXNcbiAgICogdGhpcyByZWdpc3RyYXRpb24gZnVuYyBpcyBpbnZva2VkIHRoZW4gdGhlIHByb3RvY29sSGFuZGxlciBjYWxsYmFja1xuICAgKiB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlclByb3RvY29sSGFuZGxlcihwcm90b2NvbEhhbmRsZXIpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHByb3RvY29sSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwucHJvdG9jb2xBY3Rpb25DYWxsYmFjayA9IHByb3RvY29sSGFuZGxlcjtcblxuICAgICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5yZWdpc3RlclByb3RvY29sSGFuZGxlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gcmVnaXN0ZXIgYSBsb2cgcmV0cmlldmVyIHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhlXG4gICAqIGVsZWN0cm9uIG1haW4gcHJvY2VzcyB0byByZXRyaWV2ZSBjdXJyZW50IGxvZ3MuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJMb2dSZXRyaWV2ZXIoY29sbGVjdExvZ3M6ICgpID0+IHZvaWQsIGxvZ05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29sbGVjdExvZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICghbG9jYWwuY29sbGVjdExvZ3NDYWxsYmFjaykge1xuICAgICAgICBsb2NhbC5jb2xsZWN0TG9nc0NhbGxiYWNrID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG4gICAgICB9XG4gICAgICBsb2NhbC5jb2xsZWN0TG9nc0NhbGxiYWNrLnB1c2goY29sbGVjdExvZ3MpO1xuXG4gICAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLnJlZ2lzdGVyTG9nUmV0cmlldmVyLFxuICAgICAgICBsb2dOYW1lLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgbG9nIGZpbGVzIHRvIG1haW4gcHJvY2VzcyB3aGVuIHJlcXVlc3RlZC5cbiAgICovXG4gIHB1YmxpYyBzZW5kTG9ncyhsb2dOYW1lOiBzdHJpbmcsIGxvZ0ZpbGVzKTogdm9pZCB7XG4gICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuc2VuZExvZ3MsXG4gICAgICBsb2dzOiB7IGxvZ05hbWUsIGxvZ0ZpbGVzIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIEpTIHRvIHJlZ2lzdGVyIGFuYWx5dGljcyBldmVudCBoYW5kbGVyXG4gICAqIHRvIHBhc3MgYW5hbHl0aWNzIGV2ZW50IGRhdGFcbiAgICpcbiAgICogQHBhcmFtIGFuYWx5dGljc0V2ZW50SGFuZGxlclxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyQW5hbHl0aWNzRXZlbnQoYW5hbHl0aWNzRXZlbnRIYW5kbGVyKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBhbmFseXRpY3NFdmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLmFuYWx5dGljc0V2ZW50SGFuZGxlciA9IGFuYWx5dGljc0V2ZW50SGFuZGxlcjtcblxuICAgICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5yZWdpc3RlckFuYWx5dGljc0hhbmRsZXIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhwb3NlIG9sZCBzY3JlZW4gc25pcHBldCBhcGkgdG8gc3VwcG9ydCBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgLy8gcHVibGljIFNjcmVlblNuaXBwZXQgPSBTY3JlZW5TbmlwcGV0QmNIYW5kbGVyO1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgcHJlc2VuY2Ugb2YgY3VycmVudCB1c2VyXG4gICAqIEBwYXJhbSBjYWxsYmFjayAocHJlc2VuY2U6SVByZXNlbmNlU3RhdHVzKT0+dm9pZFxuICAgKiBpZiBub25lIGlzIHByb3ZpZGVkIHRoZW4gdGhlIG9sZCBsb2dpYyB3aWxsIGJlIHRyaWdnZXJlZC5cbiAgICogSSBkb250IHNlbmQgdGhpcyBldmVudCB0byBtYWluLWFwaS1oYW5kbGVyIGJlY2F1c2UgdGhpcyB3aWxsIG9ubHkgYWN0IGFzIGEgY2FsbGJhY2sgYXNzaWdubWVudFxuICAgKiBJdCB3aWxsIG9ubHkgdHJpZ2dlciBpZiB5b3UgaGl0IGFueSBidXR0b24gYXQgcHJlc2VuY2Utc3RhdHVzLWhhbmRsZXJcbiAgICpcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVNeVByZXNlbmNlKFxuICAgIGNhbGxiYWNrOiAoY2F0ZWdvcnk6IEVQcmVzZW5jZVN0YXR1c0NhdGVnb3J5KSA9PiB2b2lkXG4gICkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLnVwZGF0ZU15UHJlc2VuY2VDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJlc2VuY2Ugb2YgY3VycmVudCB1c2VyXG4gICAqIEBwYXJhbSBteVByZXNlbmNlIElQcmVzZW5jZVN0YXR1c1xuICAgKi9cbiAgcHVibGljIGdldE15UHJlc2VuY2UobXlQcmVzZW5jZTogSVByZXNlbmNlU3RhdHVzKSB7XG4gICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuZ2V0TXlQcmVzZW5jZSxcbiAgICAgIHN0YXR1czogbXlQcmVzZW5jZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyB1c2VyIHRvIGNhcHR1cmUgcG9ydGlvbiBvZiBzY3JlZW4uXG4gICAqIFRoZXJlIGlzIGEgbWV0aG9kIG92ZXJsb2FkIG9mIHRoaXMgd2l0aCBhZGRpdGlvbmFsIHBhcmFtIGFsbG93cyB1c2VyIHRvIGhpZGUgU0RBLFxuICAgKiBpZiBub25lIGlzIHByb3ZpZGVkIHRoZW4gdGhlIG9sZCBsb2dpYyB3aWxsIGJlIHRyaWdnZXJlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wZW5TY3JlZW5TbmlwcGV0IHtmdW5jdGlvbn1cbiAgICovXG4gIHB1YmxpYyBvcGVuU2NyZWVuU25pcHBldChcbiAgICBzY3JlZW5TbmlwcGV0Q2FsbGJhY2s6IChhcmc6IElTY3JlZW5TbmlwcGV0KSA9PiB2b2lkXG4gICk6IHZvaWQ7XG5cbiAgcHVibGljIG9wZW5TY3JlZW5TbmlwcGV0KFxuICAgIHNjcmVlblNuaXBwZXRDYWxsYmFjazogKGFyZzogSVNjcmVlblNuaXBwZXQpID0+IHZvaWQsXG4gICAgaGlkZU9uQ2FwdHVyZT86IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBzY3JlZW5TbmlwcGV0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLnNjcmVlblNuaXBwZXRDYWxsYmFjayA9IHNjcmVlblNuaXBwZXRDYWxsYmFjaztcblxuICAgICAgaWYgKGhpZGVPbkNhcHR1cmUpIHtcbiAgICAgICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgICAgY21kOiBhcGlDbWRzLm9wZW5TY3JlZW5TbmlwcGV0LFxuICAgICAgICAgIGhpZGVPbkNhcHR1cmUsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgICAgY21kOiBhcGlDbWRzLm9wZW5TY3JlZW5TbmlwcGV0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGEgc2NyZWVuIGNhcHR1cmUgaW4gcHJvZ3Jlc3NcbiAgICovXG4gIHB1YmxpYyBjbG9zZVNjcmVlblNuaXBwZXQoKTogdm9pZCB7XG4gICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuY2xvc2VTY3JlZW5TbmlwcGV0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG8gdXBkYXRlXG4gICAqL1xuICAvLyBwdWJsaWMgYXV0b1VwZGF0ZShmaWxlbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIC8vICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gIC8vICAgICBjbWQ6IGFwaUNtZHMuYXV0b1VwZGF0ZSxcbiAgLy8gICAgIGZpbGVuYW1lLFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvdW50IG9uIHRoZSB0cmF5IGljb24gdG8gdGhlIGdpdmVuIG51bWJlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50ICBjb3VudCB0byBiZSBkaXNwbGF5ZWRcbiAgICogbm90ZTogY291bnQgb2YgMCB3aWxsIHJlbW92ZSB0aGUgZGlzcGxheWVkIGNvdW50LlxuICAgKiBub3RlOiBmb3IgbWFjIHRoZSBudW1iZXIgZGlzcGxheWVkIHdpbGwgYmUgMSB0byBpbmZpbml0eVxuICAgKiBub3RlOiBmb3Igd2luZG93cyB0aGUgbnVtYmVyIGRpc3BsYXllZCB3aWxsIGJlIDEgdG8gOTkgYW5kIDk5K1xuICAgKi9cbiAgcHVibGljIHNldEJhZGdlQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRocm90dGxlZFNldEJhZGdlQ291bnQoY291bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxhbmd1YWdlIHdoaWNoIHVwZGF0ZXMgdGhlIGFwcGxpY2F0aW9uIGxvY2FsZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlIC0gbGFuZ3VhZ2UgaWRlbnRpZmllciBhbmQgYSByZWdpb24gaWRlbnRpZmllclxuICAgKiBAZXhhbXBsZTogc2V0TG9jYWxlKGVuLVVTIHwgamEtSlApXG4gICAqL1xuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgbG9jYWxlID09PSAnc3RyaW5nJykge1xuICAgICAgaTE4bi5zZXRMb2NhbGUobG9jYWxlIGFzIExvY2FsZVR5cGUpO1xuICAgICAgdGhyb3R0bGVkU2V0TG9jYWxlKGxvY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgaWYgdGhlIHVzZXIgaXMgaW4gYW4gYWN0aXZlIG1lZXRpbmdcbiAgICogd2lsbCBiZSB1c2VkIHRvIGhhbmRsZSBtZW1vcnkgcmVmcmVzaCBmdW5jdGlvbmFsaXR5XG4gICAqL1xuICBwdWJsaWMgc2V0SXNJbk1lZXRpbmcoaXNJbk1lZXRpbmcpOiB2b2lkIHtcbiAgICB0aHJvdHRsZWRTZXRJc0luTWVldGluZ1N0YXR1cyhpc0luTWVldGluZyk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBtb2RhbCB3aW5kb3cgdG8gY29uZmlndXJlIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlLlxuICAgKi9cbiAgcHVibGljIHNob3dOb3RpZmljYXRpb25TZXR0aW5ncyhkYXRhOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5zaG93Tm90aWZpY2F0aW9uU2V0dGluZ3MsXG4gICAgICB3aW5kb3dOYW1lOiBNQUlOX1dJTkRPV19OQU1FLFxuICAgICAgdGhlbWU6IGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYSBiYW5uZXIgdGhhdCBpbmZvcm1zIHVzZXIgdGhhdCB0aGUgc2NyZWVuIGlzIGJlaW5nIHNoYXJlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHdpdGggZm9sbG93aW5nIGZpZWxkczpcbiAgICogICAgLSBzdHJlYW0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhU3RyZWFtL01lZGlhU3RyZWFtIG9iamVjdC5cbiAgICogICAgICAgICAgICAgVGhlIGluZGljYXRvciBhdXRvbWF0aWNhbGx5IGRlc3Ryb3lzIGl0c2VsZiB3aGVuIHN0cmVhbSBiZWNvbWVzIGluYWN0aXZlIChzZWUgTWVkaWFTdHJlYW0uYWN0aXZlKS5cbiAgICogICAgLSBkaXNwbGF5SWQgaWQgb2YgdGhlIGRpc3BsYXkgdGhhdCBpcyBiZWluZyBzaGFyZWQgb3IgdGhhdCBjb250YWlucyB0aGUgc2hhcmVkIGFwcFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB0byBoYW5kbGUgZXZlbnRzLlxuICAgKiBDYWxsYmFjayByZWNlaXZlcyBldmVudCBvYmplY3QgeyB0eXBlOiBzdHJpbmcgfS4gVHlwZXM6XG4gICAqICAgIC0gJ2Vycm9yJyAtIGVycm9yIG9jY3VyZWQuIEV2ZW50IG9iamVjdCBjb250YWlucyAncmVhc29uJyBmaWVsZC5cbiAgICogICAgLSAnc3RvcFJlcXVlc3RlZCcgLSB1c2VyIGNsaWNrZWQgXCJTdG9wIFNoYXJpbmdcIiBidXR0b24uXG4gICAqL1xuICBwdWJsaWMgc2hvd1NjcmVlblNoYXJpbmdJbmRpY2F0b3IoXG4gICAgb3B0aW9uczogSVNjcmVlblNoYXJpbmdJbmRpY2F0b3JPcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHsgZGlzcGxheUlkLCBzdHJlYW0gfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIXN0cmVhbSB8fCAhc3RyZWFtLmFjdGl2ZSB8fCBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggIT09IDEpIHtcbiAgICAgIGNhbGxiYWNrKHsgdHlwZTogJ2Vycm9yJywgcmVhc29uOiAnYmFkIHN0cmVhbScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkaXNwbGF5SWQgJiYgdHlwZW9mIGRpc3BsYXlJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNhbGxiYWNrKHsgdHlwZTogJ2Vycm9yJywgcmVhc29uOiAnYmFkIGRpc3BsYXlJZCcgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRocm90dGxlZENsb3NlU2NyZWVuU2hhcmVJbmRpY2F0b3Ioc3RyZWFtLmlkKTtcbiAgICAgIHN0cmVhbS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbmFjdGl2ZScsIGRlc3Ryb3kpO1xuICAgIH07XG5cbiAgICBzdHJlYW0uYWRkRXZlbnRMaXN0ZW5lcignaW5hY3RpdmUnLCBkZXN0cm95KTtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLnNjcmVlblNoYXJpbmdJbmRpY2F0b3JDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5vcGVuU2NyZWVuU2hhcmluZ0luZGljYXRvcixcbiAgICAgICAgZGlzcGxheUlkLFxuICAgICAgICBpZDogKytuZXh0SW5kaWNhdG9ySWQsXG4gICAgICAgIHN0cmVhbUlkOiBzdHJlYW0uaWQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYSBiYW5uZXIgdGhhdCBpbmZvcm1zIHVzZXIgdGhhdCB0aGUgc2NyZWVuIGlzIGJlaW5nIHNoYXJlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHdpdGggZm9sbG93aW5nIGZpZWxkczpcbiAgICogICAgLSBzdHJlYW1JZCB1bmlxdWUgaWQgb2Ygc3RyZWFtXG4gICAqICAgIC0gZGlzcGxheUlkIGlkIG9mIHRoZSBkaXNwbGF5IHRoYXQgaXMgYmVpbmcgc2hhcmVkIG9yIHRoYXQgY29udGFpbnMgdGhlIHNoYXJlZCBhcHBcbiAgICogICAgLSByZXF1ZXN0SWQgaWQgdG8gbWF0Y2ggdGhlIGV4YWN0IHJlcXVlc3RcbiAgICogQHBhcmFtIGNhbGxiYWNrIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgdG8gaGFuZGxlIGV2ZW50cy5cbiAgICogQ2FsbGJhY2sgcmVjZWl2ZXMgZXZlbnQgb2JqZWN0IHsgdHlwZTogc3RyaW5nIH0uIFR5cGVzOlxuICAgKiAgICAtICdlcnJvcicgLSBlcnJvciBvY2N1cmVkLiBFdmVudCBvYmplY3QgY29udGFpbnMgJ3JlYXNvbicgZmllbGQuXG4gICAqICAgIC0gJ3N0b3BSZXF1ZXN0ZWQnIC0gdXNlciBjbGlja2VkIFwiU3RvcCBTaGFyaW5nXCIgYnV0dG9uLlxuICAgKi9cbiAgcHVibGljIG9wZW5TY3JlZW5TaGFyaW5nSW5kaWNhdG9yKFxuICAgIG9wdGlvbnM6IElTY3JlZW5TaGFyaW5nSW5kaWNhdG9yT3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApOiB2b2lkIHtcbiAgICBjb25zdCB7IGRpc3BsYXlJZCwgcmVxdWVzdElkLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLnNjcmVlblNoYXJpbmdJbmRpY2F0b3JDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5vcGVuU2NyZWVuU2hhcmluZ0luZGljYXRvcixcbiAgICAgICAgZGlzcGxheUlkLFxuICAgICAgICBpZDogcmVxdWVzdElkLFxuICAgICAgICBzdHJlYW1JZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHNjcmVlbiBzaGFyaW5nIGluZGljYXRvclxuICAgKi9cbiAgcHVibGljIGNsb3NlU2NyZWVuU2hhcmluZ0luZGljYXRvcih3aW5LZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRocm90dGxlZENsb3NlU2NyZWVuU2hhcmVJbmRpY2F0b3Iod2luS2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gcmVnaXN0ZXIgYSBmdW5jdGlvbiB0byByZXN0YXJ0IGZsb2F0ZXJcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJSZXN0YXJ0RmxvYXRlcihcbiAgICBjYWxsYmFjazogKGFyZ3M6IElSZXN0YXJ0RmxvYXRlckRhdGEpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgbG9jYWwucmVzdGFydEZsb2F0ZXIgPSBjYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gc2V0IHRoZSBQTVAgJiBBQ1AgY2xvdWQgY29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIHtJQ2xvdWRDb25maWd9XG4gICAqL1xuICBwdWJsaWMgc2V0Q2xvdWRDb25maWcoZGF0YToge30pOiB2b2lkIHtcbiAgICB0aHJvdHRsZWRTZXRDbG91ZENvbmZpZyhkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIERvd25sb2FkZWQgaXRlbVxuICAgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIGl0ZW1cbiAgICovXG4gIHB1YmxpYyBvcGVuRG93bmxvYWRlZEl0ZW0oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRocm90dGxlZE9wZW5Eb3dubG9hZGVkSXRlbShpZCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBkb3dubG9hZGVkIGl0ZW0gaW4gZmluZGVyIC8gZXhwbG9yZXJcbiAgICogQHBhcmFtIGlkIElEIG9mIHRoZSBpdGVtXG4gICAqL1xuICBwdWJsaWMgc2hvd0Rvd25sb2FkZWRJdGVtKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aHJvdHRsZWRTaG93RG93bmxvYWRlZEl0ZW0oaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBkb3dubG9hZGVkIGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgY2xlYXJEb3dubG9hZGVkSXRlbXMoKTogdm9pZCB7XG4gICAgdGhyb3R0bGVkQ2xlYXJEb3dubG9hZGVkSXRlbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0YXJ0IHRoZSBhcHBcbiAgICovXG4gIHB1YmxpYyByZXN0YXJ0QXBwKCk6IHZvaWQge1xuICAgIHRocm90dGxlZFJlc3RhcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgQ1BVIHVzYWdlXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0Q1BVVXNhZ2UoKTogUHJvbWlzZTxJQ1BVVXNhZ2U+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGF3YWl0IHByb2Nlc3MuZ2V0Q1BVVXNhZ2UoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbWVkaWEgcGVybWlzc2lvblxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNoZWNrTWVkaWFQZXJtaXNzaW9uKCk6IFByb21pc2U8SU1lZGlhUGVybWlzc2lvbj4ge1xuICAgIGNvbnN0IG1lZGlhU3RhdHVzID0gKGF3YWl0IGlwY1JlbmRlcmVyLmludm9rZShhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuZ2V0TWVkaWFBY2Nlc3NTdGF0dXMsXG4gICAgfSkpIGFzIElNZWRpYVBlcm1pc3Npb247XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBjYW1lcmE6IG1lZGlhU3RhdHVzLmNhbWVyYSxcbiAgICAgIG1pY3JvcGhvbmU6IG1lZGlhU3RhdHVzLm1pY3JvcGhvbmUsXG4gICAgICBzY3JlZW46IG1lZGlhU3RhdHVzLnNjcmVlbixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdGhlIGNsaWVudCBpcyBydW5uaW5nIG9uIG1hbmFcbiAgICogQHBhcmFtIGlzTWFuYVxuICAgKi9cbiAgcHVibGljIHNldElzTWFuYShpc01hbmE6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5zZXRJc01hbmEsXG4gICAgICBpc01hbmEsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBicm93c2VyIHdpbmRvd3Mgb24gU0RBIHNpZGUsIHN1Y2ggYXMgbm90aWZpY2F0aW9ucywgU2NyZWVuIHNuaXBwZXQgd2luZG93LCBwb3BwZWQgb3V0IGNoYXRzIGV0Y1xuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsV3JhcHBlcldpbmRvd3MoKTogdm9pZCB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuY2xvc2VBbGxXcmFwcGVyV2luZG93cyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBtYWluIHByb2Nlc3NcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk9wdHMge0lOb3RpZmljYXRpb25EYXRhfVxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uQ2FsbGJhY2sge05vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrfVxuICAgKi9cbiAgcHVibGljIHNob3dOb3RpZmljYXRpb24oXG4gICAgbm90aWZpY2F0aW9uT3B0czogSU5vdGlmaWNhdGlvbkRhdGEsXG4gICAgbm90aWZpY2F0aW9uQ2FsbGJhY2s6IE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrXG4gICk6IHZvaWQge1xuICAgIC8vIFN0b3JlIGNhbGxiYWNrcyBiYXNlZCBvbiBub3RpZmljYXRpb24gaWQgc28sXG4gICAgLy8gd2UgY2FuIHVzZSB0aGlzIHRvIHRyaWdnZXIgb24gbm90aWZpY2F0aW9uIGFjdGlvblxuICAgIGlmICh0eXBlb2Ygbm90aWZpY2F0aW9uT3B0cy5pZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIG5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrcy5zZXQoXG4gICAgICAgIG5vdGlmaWNhdGlvbk9wdHMuaWQsXG4gICAgICAgIG5vdGlmaWNhdGlvbkNhbGxiYWNrXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBpcGMgZG9lcyBub3Qgc3VwcG9ydCBzZW5kaW5nIEZ1bmN0aW9ucywgUHJvbWlzZXMsIFN5bWJvbHMsIFdlYWtNYXBzLFxuICAgIC8vIG9yIFdlYWtTZXRzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uXG4gICAgaWYgKG5vdGlmaWNhdGlvbk9wdHMuY2FsbGJhY2spIHtcbiAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25PcHRzLmNhbGxiYWNrO1xuICAgIH1cbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5zaG93Tm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uT3B0cyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYSBzcGVjaWZpYyBub3RpZmljYXRpb24gYmFzZWQgb24gaWRcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtudW1iZXJ9IElkIG9mIGEgbm90aWZpY2F0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xvc2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLmNsb3NlTm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uSWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgYSBjYWxsIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBtYWluIHByb2Nlc3NcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk9wdHMge0lOb3RpZmljYXRpb25EYXRhfVxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uQ2FsbGJhY2sge05vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrfVxuICAgKi9cbiAgcHVibGljIHNob3dDYWxsTm90aWZpY2F0aW9uKFxuICAgIG5vdGlmaWNhdGlvbk9wdHM6IElDYWxsTm90aWZpY2F0aW9uRGF0YSxcbiAgICBub3RpZmljYXRpb25DYWxsYmFjazogTm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2tcbiAgKTogdm9pZCB7XG4gICAgLy8gU3RvcmUgY2FsbGJhY2tzIGJhc2VkIG9uIG5vdGlmaWNhdGlvbiBpZCBzbyxcbiAgICAvLyB3ZSBjYW4gdXNlIHRoaXMgdG8gdHJpZ2dlciBvbiBub3RpZmljYXRpb24gYWN0aW9uXG4gICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb25PcHRzLmlkID09PSAnbnVtYmVyJykge1xuICAgICAgY2FsbE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrcy5zZXQoXG4gICAgICAgIG5vdGlmaWNhdGlvbk9wdHMuaWQsXG4gICAgICAgIG5vdGlmaWNhdGlvbkNhbGxiYWNrXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBpcGMgZG9lcyBub3Qgc3VwcG9ydCBzZW5kaW5nIEZ1bmN0aW9ucywgUHJvbWlzZXMsIFN5bWJvbHMsIFdlYWtNYXBzLFxuICAgIC8vIG9yIFdlYWtTZXRzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uXG4gICAgaWYgKG5vdGlmaWNhdGlvbk9wdHMuY2FsbGJhY2spIHtcbiAgICAgIGRlbGV0ZSBub3RpZmljYXRpb25PcHRzLmNhbGxiYWNrO1xuICAgIH1cbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5zaG93Q2FsbE5vdGlmaWNhdGlvbixcbiAgICAgIG5vdGlmaWNhdGlvbk9wdHMsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGEgc3BlY2lmaWMgY2FsbCBub3RpZmljYXRpb24gYmFzZWQgb24gaWRcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtudW1iZXJ9IElkIG9mIGEgbm90aWZpY2F0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xvc2VDYWxsTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5jbG9zZUNhbGxOb3RpZmljYXRpb24sXG4gICAgICBub3RpZmljYXRpb25JZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgem9vbSBsZXZlbFxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldFpvb21MZXZlbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh3ZWJGcmFtZS5nZXRab29tRmFjdG9yKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgem9vbSBsZXZlbFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gem9vbUxldmVsIC0gbGFuZ3VhZ2UgaWRlbnRpZmllciBhbmQgYSByZWdpb24gaWRlbnRpZmllclxuICAgKiBAZXhhbXBsZTogc2V0Wm9vbUxldmVsKDAuOSlcbiAgICovXG4gIHB1YmxpYyBzZXRab29tTGV2ZWwoem9vbUxldmVsKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB6b29tTGV2ZWwgPT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdHRsZWRTZXRab29tTGV2ZWwoem9vbUxldmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IFNEQSBzdXBwb3J0ZWQgc2V0dGluZ3MuXG4gICAqIEByZXR1cm5zIGxpc3Qgb2Ygc3VwcG9ydGVkIGZlYXR1cmVzXG4gICAqL1xuICBwdWJsaWMgc3VwcG9ydGVkU2V0dGluZ3MoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBTVVBQT1JURURfU0VUVElOR1MgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5hdGl2ZSB3aW5kb3cgaGFuZGxlIG9mIHRoZSB3aW5kb3csIGJ5IGRlZmF1bHQgd2hlcmUgdGhlIHJlbmRlcmVyIGlzIGRpc3BsYXllZCxcbiAgICogb3Igb3B0aW9uYWxseSBhbm90aGVyIHdpbmRvdyBpZGVudGlmaWVkIGJ5IGl0cyBuYW1lLlxuICAgKiBAcGFyYW0gd2luZG93TmFtZSBvcHRpb25hbCB3aW5kb3cgbmFtZSwgZGVmYXVsdHMgdG8gY3VycmVudCByZW5kZXJlciB3aW5kb3dcbiAgICogQHJldHVybnMgdGhlIHBsYXRmb3JtLXNwZWNpZmljIGhhbmRsZSBvZiB0aGUgd2luZG93LlxuICAgKi9cbiAgcHVibGljIGdldE5hdGl2ZVdpbmRvd0hhbmRsZSh3aW5kb3dOYW1lPzogc3RyaW5nKTogUHJvbWlzZTxCdWZmZXI+IHtcbiAgICBpZiAoIXdpbmRvd05hbWUpIHtcbiAgICAgIHdpbmRvd05hbWUgPSB3aW5kb3cubmFtZSB8fCAnbWFpbic7XG4gICAgfVxuICAgIHJldHVybiBpcGNSZW5kZXJlci5pbnZva2UoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLmdldE5hdGl2ZVdpbmRvd0hhbmRsZSxcbiAgICAgIHdpbmRvd05hbWUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBjdXJyZW50IHN0YXR1cyBvZiBDaXRyaXgnIG1lZGlhIHJlZGlyZWN0aW9uIGZlYXR1cmVcbiAgICogQHJldHVybnMgc3RhdHVzXG4gICAqL1xuICBwdWJsaWMgZ2V0Q2l0cml4TWVkaWFSZWRpcmVjdGlvblN0YXR1cygpOiBQcm9taXNlPFJlZGlyZWN0aW9uU3RhdHVzPiB7XG4gICAgcmV0dXJuIGlwY1JlbmRlcmVyLmludm9rZShhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuZ2V0Q2l0cml4TWVkaWFSZWRpcmVjdGlvblN0YXR1cyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gcmVnaXN0ZXIgYSBmdW5jdGlvbiB0byBkaXNwbGF5IGEgY2xpZW50IGJhbm5lclxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckNsaWVudEJhbm5lcihcbiAgICBjYWxsYmFjazogKHJlYXNvbjogc3RyaW5nLCBhY3Rpb246IENvbmZpZ1VwZGF0ZVR5cGUpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFsb2NhbC5zaG93Q2xpZW50QmFubmVyQ2FsbGJhY2spIHtcbiAgICAgIGxvY2FsLnNob3dDbGllbnRCYW5uZXJDYWxsYmFjayA9IG5ldyBBcnJheTwoKSA9PiB2b2lkPigpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbC5zaG93Q2xpZW50QmFubmVyQ2FsbGJhY2sucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRvIGEgQ2xvdWQ5IHBpcGVcbiAgICpcbiAgICogQHBhcmFtIHBpcGUgcGlwZSBuYW1lXG4gICAqIEBwYXJhbSBvbkRhdGEgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gZGF0YSBpcyByZWNlaXZlZCBvdmVyIHRoZSBjb25uZWN0aW9uXG4gICAqIEBwYXJhbSBvbkNsb3NlIGNhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZCBieSB0aGUgcmVtb3RlIHNpZGVcbiAgICogQHJldHVybnMgQ2xvdWQ5IHBpcGUgaW5zdGFuY2UgcHJvbWlzZVxuICAgKi9cbiAgcHVibGljIGNvbm5lY3RDbG91ZDlQaXBlKFxuICAgIHBpcGU6IHN0cmluZyxcbiAgICBvbkRhdGE6IChkYXRhOiBVaW50OEFycmF5KSA9PiB2b2lkLFxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgKTogUHJvbWlzZTxJQ2xvdWQ5UGlwZT4ge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwaXBlID09PSAnc3RyaW5nJyAmJlxuICAgICAgdHlwZW9mIG9uRGF0YSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdHlwZW9mIG9uQ2xvc2UgPT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIGlmIChsb2NhbC5jOVBpcGVFdmVudENhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkNhbid0IGNvbm5lY3QgdG8gcGlwZSwgYWxyZWFkeSBjb25uZWN0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxJQ2xvdWQ5UGlwZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsb2NhbC5jOVBpcGVFdmVudENhbGxiYWNrID0gKGV2ZW50OiBzdHJpbmcsIGFyZz86IGFueSkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RlZCc6XG4gICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcbiAgICAgICAgICAgICAgICB3cml0ZTogKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgICAgICAgICAgICAgICBjbWQ6IGFwaUNtZHMud3JpdGVDbG91ZDlQaXBlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNtZDogYXBpQ21kcy5jbG9zZUNsb3VkOVBpcGUsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29ubmVjdGlvbi1mYWlsZWQnOlxuICAgICAgICAgICAgICBsb2NhbC5jOVBpcGVFdmVudENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICByZWplY3QoYXJnKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICAgICAgb25EYXRhKGFyZyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgICBsb2NhbC5jOVBpcGVFdmVudENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgICAgY21kOiBhcGlDbWRzLmNvbm5lY3RDbG91ZDlQaXBlLFxuICAgICAgICAgIHBpcGUsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyB0aGUgQ2xvdWQ5IGNsaWVudC5cbiAgICovXG4gIHB1YmxpYyBsYXVuY2hDbG91ZDkoY2FsbGJhY2s6IChzdGF0dXM6IElTaGVsbFN0YXR1cykgPT4gdm9pZCk6IHZvaWQge1xuICAgIGxvY2FsLmM5TWVzc2FnZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMubGF1bmNoQ2xvdWQ5LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlcm1pbmF0ZXMgdGhlIENsb3VkOSBjbGllbnQuXG4gICAqL1xuICBwdWJsaWMgdGVybWluYXRlQ2xvdWQ5KCk6IHZvaWQge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnRlcm1pbmF0ZUNsb3VkOSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gaW5zdGFsbCBuZXcgdXBkYXRlIGFuZCByZXN0YXJ0IFNEQVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZUFuZFJlc3RhcnQoKTogdm9pZCB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMudXBkYXRlQW5kUmVzdGFydCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gZG93bmxvYWQgdGhlIGxhdGVzdCBTREEgdXBkYXRlc1xuICAgKi9cbiAgcHVibGljIGRvd25sb2FkVXBkYXRlKCk6IHZvaWQge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLmRvd25sb2FkVXBkYXRlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byBjaGVjayBmb3IgdXBkYXRlc1xuICAgKi9cbiAgcHVibGljIGNoZWNrRm9yVXBkYXRlcyhhdXRvVXBkYXRlVHJpZ2dlcj86IEF1dG9VcGRhdGVUcmlnZ2VyKTogdm9pZCB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuY2hlY2tGb3JVcGRhdGVzLFxuICAgICAgYXV0b1VwZGF0ZVRyaWdnZXIsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIEpTIHRvIHJlZ2lzdGVyIFNEQSBmb3IgcGhvbmUgbnVtYmVycyBjbGlja3NcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGhvbmVOdW1iZXJDYWxsYmFjayBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIHdoZW4gcmVjZWl2aW5nIGEgcGhvbmUgbnVtYmVyIGZvciBjYWxscy9zbXNcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlclBob25lTnVtYmVyU2VydmljZXMoXG4gICAgcHJvdG9jb2xzOiBQaG9uZU51bWJlclByb3RvY29sW10sXG4gICAgcGhvbmVOdW1iZXJDYWxsYmFjazogKGFyZzogc3RyaW5nKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgcGhvbmVOdW1iZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwucGhvbmVOdW1iZXJDYWxsYmFjayA9IHBob25lTnVtYmVyQ2FsbGJhY2s7XG4gICAgfVxuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyxcbiAgICAgIHByb3RvY29scyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gdW5yZWdpc3RlciBhcHAgdG8gc21zL2NhbGwgcHJvdG9jb2xzXG4gICAqIEBwYXJhbSBwcm90b2NvbCBwcm90b2NvbCB0byBiZSB1bnJlZ2lzdGVyZWQuXG4gICAqL1xuICBwdWJsaWMgdW5yZWdpc3RlclBob25lTnVtYmVyU2VydmljZXMocHJvdG9jb2xzOiBQaG9uZU51bWJlclByb3RvY29sW10pIHtcbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy51bnJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyxcbiAgICAgIHByb3RvY29scyxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIElwYyBldmVudHNcbiAqL1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzXG4gKiB0byBjb25zdHJ1Y3QgYSBjYW52YXMgZm9yIHRoZSBXaW5kb3dzIGJhZGdlIGNvdW50IGltYWdlXG4gKlxuICogQHBhcmFtIHtJQmFkZ2VDb3VudH0gYXJnIHtcbiAqICAgICBjb3VudDogbnVtYmVyXG4gKiB9XG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKFxuICAnY3JlYXRlLWJhZGdlLWRhdGEtdXJsJyxcbiAgKF9ldmVudDogRXZlbnQsIGFyZzogSVN0YXR1c0JhZGdlKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSAoYXJnICYmIGFyZy5jb3VudCkgfHwgMDtcblxuICAgIC8vIGNyZWF0ZSAzMiB4IDMyIGltZ1xuICAgIGNvbnN0IHJhZGl1cyA9IDE2O1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSByYWRpdXMgKiAyO1xuICAgIGNhbnZhcy53aWR0aCA9IHJhZGl1cyAqIDI7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKHJhZGl1cywgcmFkaXVzLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG5cbiAgICAgIGNvbnN0IHRleHQgPSBjb3VudCA+IDk5ID8gJzk5KycgOiBjb3VudC50b1N0cmluZygpO1xuICAgICAgaWYgKHRleHQubGVuZ3RoID4gMikge1xuICAgICAgICBjdHguZm9udCA9ICdib2xkIDE4cHggc2Fucy1zZXJpZic7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCByYWRpdXMsIDIyKTtcbiAgICAgIH0gZWxzZSBpZiAodGV4dC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGN0eC5mb250ID0gJ2JvbGQgMjRweCBzYW5zLXNlcmlmJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHJhZGl1cywgMjQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmZvbnQgPSAnYm9sZCAyNnB4IHNhbnMtc2VyaWYnO1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgcmFkaXVzLCAyNik7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJywgMS4wKTtcblxuICAgICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5iYWRnZURhdGFVcmwsXG4gICAgICAgIGNvdW50LFxuICAgICAgICBkYXRhVXJsLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4pO1xuXG5sb2NhbC5pcGNSZW5kZXJlci5vbihcbiAgJ3NlbmQtcHJlc2VuY2Utc3RhdHVzLWRhdGEnLFxuICAoX2V2ZW50OiBFdmVudCwgYXJnOiBFUHJlc2VuY2VTdGF0dXNDYXRlZ29yeSkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWwudXBkYXRlTXlQcmVzZW5jZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbC51cGRhdGVNeVByZXNlbmNlQ2FsbGJhY2soYXJnKTtcbiAgICB9XG4gIH1cbik7XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3NcbiAqIHdoZW4gdGhlIHNuaXBwZXQgaXMgY29tcGxldGVcbiAqXG4gKiBAcGFyYW0ge0lTY3JlZW5TbmlwcGV0fSBhcmcge1xuICogICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAqICAgICBkYXRhOiBiYXNlNjQsXG4gKiAgICAgdHlwZTogJ0VSUk9SJyB8ICdpbWFnZS9qcGc7YmFzZTY0JyxcbiAqIH1cbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oXG4gICdzY3JlZW4tc25pcHBldC1kYXRhJyxcbiAgKF9ldmVudDogRXZlbnQsIGFyZzogSVNjcmVlblNuaXBwZXQpID0+IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIGxvY2FsLnNjcmVlblNuaXBwZXRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgbG9jYWwuc2NyZWVuU25pcHBldENhbGxiYWNrKGFyZyk7XG4gICAgfVxuICB9XG4pO1xuXG5sb2NhbC5pcGNSZW5kZXJlci5vbignY29sbGVjdC1sb2dzJywgKF9ldmVudDogRXZlbnQpID0+IHtcbiAgaWYgKGxvY2FsLmNvbGxlY3RMb2dzQ2FsbGJhY2spIHtcbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGxvY2FsLmNvbGxlY3RMb2dzQ2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2Vzc1xuICogZm9yIGV2ZXIgZmV3IG1pbnV0ZXMgaWYgdGhlIHVzZXIgaXMgYWN0aXZlXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGlkbGVUaW1lIC0gY3VycmVudCBzeXN0ZW0gaWRsZSB0aWNrXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdhY3Rpdml0eScsIChfZXZlbnQ6IEV2ZW50LCBpZGxlVGltZTogbnVtYmVyKSA9PiB7XG4gIGlmIChcbiAgICB0eXBlb2YgaWRsZVRpbWUgPT09ICdudW1iZXInICYmXG4gICAgdHlwZW9mIGxvY2FsLmFjdGl2aXR5RGV0ZWN0aW9uQ2FsbGJhY2sgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgbG9jYWwuYWN0aXZpdHlEZXRlY3Rpb25DYWxsYmFjayhpZGxlVGltZSk7XG4gIH1cbn0pO1xuXG5sb2NhbC5pcGNSZW5kZXJlci5vbihcbiAgJ2Rvd25sb2FkLWNvbXBsZXRlZCcsXG4gIChfZXZlbnQ6IEV2ZW50LCBkb3dubG9hZEl0ZW06IElEb3dubG9hZEl0ZW0pID0+IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgZG93bmxvYWRJdGVtID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIGxvY2FsLmRvd25sb2FkTWFuYWdlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICBsb2NhbC5kb3dubG9hZE1hbmFnZXJDYWxsYmFjayh7XG4gICAgICAgIHN0YXR1czogJ2Rvd25sb2FkLWNvbXBsZXRlZCcsXG4gICAgICAgIGl0ZW06IGRvd25sb2FkSXRlbSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuKTtcblxubG9jYWwuaXBjUmVuZGVyZXIub24oJ2Rvd25sb2FkLWZhaWxlZCcsIChfZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIGlmICh0eXBlb2YgbG9jYWwuZG93bmxvYWRNYW5hZ2VyQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsb2NhbC5kb3dubG9hZE1hbmFnZXJDYWxsYmFjayh7IHN0YXR1czogJ2Rvd25sb2FkLWZhaWxlZCcgfSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzXG4gKiBXaGVuZXZlciBzb21lIFdpbmRvdyBwb3NpdGlvbiBvciBkaW1lbnNpb24gY2hhbmdlc1xuICpcbiAqIEBwYXJhbSB7SUJvdW5kc0NoYW5nZX0gYXJnIHtcbiAqICAgICB4OiBudW1iZXIsXG4gKiAgICAgeTogbnVtYmVyLFxuICogICAgIGhlaWdodDogbnVtYmVyLFxuICogICAgIHdpZHRoOiBudW1iZXIsXG4gKiAgICAgd2luZG93TmFtZTogc3RyaW5nXG4gKiB9XG4gKlxuICovXG5sb2NhbC5pcGNSZW5kZXJlci5vbignYm91bmRzQ2hhbmdlJywgKF9ldmVudCwgYXJnOiBJQm91bmRzQ2hhbmdlKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgd2luZG93TmFtZSB9ID0gYXJnO1xuICBpZiAoXG4gICAgeCAmJlxuICAgIHkgJiZcbiAgICBoZWlnaHQgJiZcbiAgICB3aWR0aCAmJlxuICAgIHdpbmRvd05hbWUgJiZcbiAgICB0eXBlb2YgbG9jYWwuYm91bmRzQ2hhbmdlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgbG9jYWwuYm91bmRzQ2hhbmdlQ2FsbGJhY2soe1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIHdpbmRvd05hbWUsXG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzXG4gKiB3aGVuIHRoZSBzY3JlZW4gc2hhcmluZyBoYXMgYmVlbiBzdG9wcGVyXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKFNjcmVlblNoYXJlRXZlbnRzLlNUT1BQRUQsIChfZXZlbnQsIGlkKSA9PiB7XG4gIGlmICh0eXBlb2YgbG9jYWwuc2NyZWVuU2hhcmluZ0luZGljYXRvckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbG9jYWwuc2NyZWVuU2hhcmluZ0luZGljYXRvckNhbGxiYWNrKHtcbiAgICAgIHR5cGU6ICdzdG9wUmVxdWVzdGVkJyxcbiAgICAgIHJlcXVlc3RJZDogaWQsXG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzXG4gKiBmb3Igc2VuZCBsb2dzIG9uIHRvIHdlYiBhcHBcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gYXJnIHtcbiAqICAgICAgbXNnczogSUxvZ01zZ1tdLFxuICogICAgICBsb2dMZXZlbDogTG9nTGV2ZWwsXG4gKiAgICAgIHNob3dJbkNvbnNvbGU6IGJvb2xlYW5cbiAqIH1cbiAqXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdsb2cnLCAoX2V2ZW50LCBhcmcpID0+IHtcbiAgaWYgKGFyZyAmJiBsb2NhbC5sb2dnZXIpIHtcbiAgICBsb2NhbC5sb2dnZXIoYXJnLm1zZ3MgfHwgW10sIGFyZy5sb2dMZXZlbCwgYXJnLnNob3dJbkNvbnNvbGUpO1xuICB9XG59KTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2VzcyBmb3IgcHJvY2Vzc2luZyBwcm90b2NvbCB1cmxzXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJnIC0gdGhlIHByb3RvY29sIHVybFxuICovXG5sb2NhbC5pcGNSZW5kZXJlci5vbigncHJvdG9jb2wtYWN0aW9uJywgKF9ldmVudCwgYXJnOiBzdHJpbmcpID0+IHtcbiAgaWYgKFxuICAgIHR5cGVvZiBsb2NhbC5wcm90b2NvbEFjdGlvbkNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZydcbiAgKSB7XG4gICAgbG9jYWwucHJvdG9jb2xBY3Rpb25DYWxsYmFjayhhcmcpO1xuICB9XG59KTtcblxubG9jYWwuaXBjUmVuZGVyZXIub24oJ2FuYWx5dGljcy1jYWxsYmFjaycsIChfZXZlbnQsIGFyZzogb2JqZWN0KSA9PiB7XG4gIGlmICh0eXBlb2YgbG9jYWwuYW5hbHl0aWNzRXZlbnRIYW5kbGVyID09PSAnZnVuY3Rpb24nICYmIGFyZykge1xuICAgIGxvY2FsLmFuYWx5dGljc0V2ZW50SGFuZGxlcihhcmcpO1xuICB9XG59KTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2VzcyB0byByZXN0YXJ0IHRoZSBjaGlsZCB3aW5kb3dcbiAqIEBwYXJhbSB7SVJlc3RhcnRGbG9hdGVyRGF0YX1cbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oXG4gICdyZXN0YXJ0LWZsb2F0ZXInLFxuICAoX2V2ZW50LCB7IHdpbmRvd05hbWUsIGJvdW5kcyB9OiBJUmVzdGFydEZsb2F0ZXJEYXRhKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbC5yZXN0YXJ0RmxvYXRlciA9PT0gJ2Z1bmN0aW9uJyAmJiB3aW5kb3dOYW1lKSB7XG4gICAgICBsb2NhbC5yZXN0YXJ0RmxvYXRlcih7IHdpbmRvd05hbWUsIGJvdW5kcyB9KTtcbiAgICB9XG4gIH1cbik7XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3Mgb24gbm90aWZpY2F0aW9uIGFjdGlvbnNcbiAqIEBwYXJhbSB7SU5vdGlmaWNhdGlvbkRhdGF9XG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdub3RpZmljYXRpb24tYWN0aW9ucycsIChfZXZlbnQsIGFyZ3MpID0+IHtcbiAgY29uc3QgY2FsbGJhY2sgPSBub3RpZmljYXRpb25BY3Rpb25DYWxsYmFja3MuZ2V0KGFyZ3MuZGF0YS5pZCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXJncztcbiAgZGF0YS5ub3RpZmljYXRpb25EYXRhID0gYXJncy5ub3RpZmljYXRpb25EYXRhO1xuICBpZiAoYXJncyAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKGFyZ3MuZXZlbnQsIGRhdGEpO1xuICB9XG59KTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2VzcyBvbiBjYWxsIG5vdGlmaWNhdGlvbiBhY3Rpb25zXG4gKiBAcGFyYW0ge0lDYWxsTm90aWZpY2F0aW9uRGF0YX1cbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oJ2NhbGwtbm90aWZpY2F0aW9uLWFjdGlvbnMnLCAoX2V2ZW50LCBhcmdzKSA9PiB7XG4gIGNvbnN0IGNhbGxiYWNrID0gY2FsbE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrcy5nZXQoYXJncy5kYXRhLmlkKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhcmdzO1xuICBkYXRhLm5vdGlmaWNhdGlvbkRhdGEgPSBhcmdzLm5vdGlmaWNhdGlvbkRhdGE7XG4gIGlmIChhcmdzICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soYXJncy5ldmVudCwgZGF0YSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzIG9uIHVwZGF0aW5nIHRoZSBjbG91ZCBjb25maWdcbiAqIEBwYXJhbSB7c3RyaW5nW119XG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdkaXNwbGF5LWNsaWVudC1iYW5uZXInLCAoX2V2ZW50LCBhcmdzKSA9PiB7XG4gIGlmIChsb2NhbC5zaG93Q2xpZW50QmFubmVyQ2FsbGJhY2spIHtcbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGxvY2FsLnNob3dDbGllbnRCYW5uZXJDYWxsYmFjaykge1xuICAgICAgaWYgKGFyZ3MuZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhhcmdzLnJlYXNvbiwgYXJncy5hY3Rpb24sIGFyZ3MuZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKGFyZ3MucmVhc29uLCBhcmdzLmFjdGlvbik7XG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2VzcyB3aGVuIGEgY2xvdWQ5IHBpcGUgZXZlbnQgb2NjdXJzXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdjOS1waXBlLWV2ZW50JywgKF9ldmVudCwgYXJncykgPT4ge1xuICBsb2NhbC5jOVBpcGVFdmVudENhbGxiYWNrPy5jYWxsKG51bGwsIGFyZ3MuZXZlbnQsIGFyZ3M/LmFyZyk7XG59KTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2VzcyB3aGVuIHRoZSBzdGF0dXMgb2YgdGhlIGNsb3VkOSBjbGllbnQgY2hhbmdlc1xuICovXG5sb2NhbC5pcGNSZW5kZXJlci5vbignYzktc3RhdHVzLWV2ZW50JywgKF9ldmVudCwgYXJncykgPT4ge1xuICBsb2NhbC5jOU1lc3NhZ2VDYWxsYmFjaz8uY2FsbChudWxsLCBhcmdzPy5zdGF0dXMpO1xufSk7XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3NcbiAqIHRvIGZvcndhcmQgY2xpY2tlZCBwaG9uZSBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGhvbmVOdW1iZXIgLSBwaG9uZSBudW1iZXIgcmVjZWl2ZWQgYnkgU0RBXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKFxuICAncGhvbmUtbnVtYmVyLXJlY2VpdmVkJyxcbiAgKF9ldmVudDogRXZlbnQsIHBob25lTnVtYmVyOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgcGhvbmVOdW1iZXIgPT09ICdzdHJpbmcnICYmXG4gICAgICB0eXBlb2YgbG9jYWwucGhvbmVOdW1iZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgbG9jYWwucGhvbmVOdW1iZXJDYWxsYmFjayhwaG9uZU51bWJlcik7XG4gICAgfVxuICB9XG4pO1xuXG4vLyBJbnZva2VkIHdoZW5ldmVyIHRoZSBhcHAgaXMgcmVsb2FkZWQvbmF2aWdhdGVkXG5jb25zdCBzYW5pdGl6ZSA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKHdpbmRvdy5uYW1lID09PSBhcGlOYW1lLm1haW5XaW5kb3dOYW1lKSB7XG4gICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuc2FuaXRpemUsXG4gICAgICB3aW5kb3dOYW1lOiB3aW5kb3cubmFtZSxcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gbGlzdGVucyBmb3IgdGhlIG9ubGluZS9vZmZsaW5lIGV2ZW50cyBhbmQgdXBkYXRlcyB0aGUgbWFpbiBwcm9jZXNzXG5jb25zdCB1cGRhdGVPbmxpbmVTdGF0dXMgPSAoKTogdm9pZCA9PiB7XG4gIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5pc09ubGluZSxcbiAgICBpc09ubGluZTogd2luZG93Lm5hdmlnYXRvci5vbkxpbmUsXG4gIH0pO1xufTtcblxuLy8gSGFuZGxlIGtleSBkb3duIGV2ZW50c1xuY29uc3QgdGhyb3R0bGVkS2V5RG93biA9IHRocm90dGxlKChldmVudCkgPT4ge1xuICBpc0FsdEtleSA9IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkFsdDtcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVzYykge1xuICAgIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLmtleVByZXNzLFxuICAgICAga2V5Q29kZTogZXZlbnQua2V5Q29kZSxcbiAgICB9KTtcbiAgfVxufSwgNTAwKTtcblxuLy8gSGFuZGxlIGtleSB1cCBldmVudHNcbmNvbnN0IHRocm90dGxlZEtleVVwID0gdGhyb3R0bGUoKGV2ZW50KSA9PiB7XG4gIGlmIChpc0FsdEtleSAmJiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQWx0IHx8IEtleUNvZGVzLkVzYykpIHtcbiAgICBpc01lbnVPcGVuID0gIWlzTWVudU9wZW47XG4gIH1cbiAgaWYgKGlzQWx0S2V5ICYmIGlzTWVudU9wZW4gJiYgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQWx0KSB7XG4gICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMua2V5UHJlc3MsXG4gICAgICBrZXlDb2RlOiBldmVudC5rZXlDb2RlLFxuICAgIH0pO1xuICB9XG59LCA1MDApO1xuXG4vLyBIYW5kbGUgbW91c2UgZG93biBldmVudFxuY29uc3QgdGhyb3R0bGVNb3VzZURvd24gPSB0aHJvdHRsZSgoKSA9PiB7XG4gIGlmIChpc0FsdEtleSAmJiBpc01lbnVPcGVuKSB7XG4gICAgaXNNZW51T3BlbiA9ICFpc01lbnVPcGVuO1xuICB9XG59LCA1MDApO1xuXG4vKipcbiAqIFdpbmRvdyBFdmVudHNcbiAqL1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgc2FuaXRpemUsIGZhbHNlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgdXBkYXRlT25saW5lU3RhdHVzLCBmYWxzZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgdXBkYXRlT25saW5lU3RhdHVzLCBmYWxzZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aHJvdHRsZWRLZXlVcCwgdHJ1ZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRocm90dGxlZEtleURvd24sIHRydWUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRocm90dGxlTW91c2VEb3duLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4iLCJpbXBvcnQgeyBOYXRpdmVJbWFnZSwgU2l6ZSwgVHJheSB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IEF1dG9VcGRhdGVUcmlnZ2VyIH0gZnJvbSAnYXBwL2F1dG8tdXBkYXRlLWhhbmRsZXInO1xuXG5leHBvcnQgZW51bSBhcGlDbWRzIHtcbiAgaXNPbmxpbmUgPSAnaXMtb25saW5lJyxcbiAgZ2V0VmVyc2lvbkluZm8gPSAnZ2V0LXZlcnNpb24taW5mbycsXG4gIHJlZ2lzdGVyTG9nZ2VyID0gJ3JlZ2lzdGVyLWxvZ2dlcicsXG4gIHNldEJhZGdlQ291bnQgPSAnc2V0LWJhZGdlLWNvdW50JyxcbiAgYmFkZ2VEYXRhVXJsID0gJ2JhZGdlLWRhdGEtdXJsJyxcbiAgYWN0aXZhdGUgPSAnYWN0aXZhdGUnLFxuICByZWdpc3RlckJvdW5kc0NoYW5nZSA9ICdyZWdpc3Rlci1ib3VuZHMtY2hhbmdlJyxcbiAgcmVnaXN0ZXJQcm90b2NvbEhhbmRsZXIgPSAncmVnaXN0ZXItcHJvdG9jb2wtaGFuZGxlcicsXG4gIHJlZ2lzdGVyTG9nUmV0cmlldmVyID0gJ3JlZ2lzdGVyLWxvZy1yZXRyaWV2ZXInLFxuICBzZW5kTG9ncyA9ICdzZW5kLWxvZ3MnLFxuICByZWdpc3RlckFuYWx5dGljc0hhbmRsZXIgPSAncmVnaXN0ZXItYW5hbHl0aWNzLWhhbmRsZXInLFxuICByZWdpc3RlckFjdGl2aXR5RGV0ZWN0aW9uID0gJ3JlZ2lzdGVyLWFjdGl2aXR5LWRldGVjdGlvbicsXG4gIHNob3dOb3RpZmljYXRpb25TZXR0aW5ncyA9ICdzaG93LW5vdGlmaWNhdGlvbi1zZXR0aW5ncycsXG4gIHNhbml0aXplID0gJ3Nhbml0aXplJyxcbiAgYnJpbmdUb0Zyb250ID0gJ2JyaW5nLXRvLWZyb250JyxcbiAgb3BlblNjcmVlblBpY2tlcldpbmRvdyA9ICdvcGVuLXNjcmVlbi1waWNrZXItd2luZG93JyxcbiAgcG9wdXBNZW51ID0gJ3BvcHVwLW1lbnUnLFxuICBvcHRpbWl6ZU1lbW9yeUNvbnN1bXB0aW9uID0gJ29wdGltaXplLW1lbW9yeS1jb25zdW1wdGlvbicsXG4gIG9wdGltaXplTWVtb3J5UmVnaXN0ZXIgPSAnb3B0aW1pemUtbWVtb3J5LXJlZ2lzdGVyJyxcbiAgc2V0SXNJbk1lZXRpbmcgPSAnc2V0LWlzLWluLW1lZXRpbmcnLFxuICBzZXRMb2NhbGUgPSAnc2V0LWxvY2FsZScsXG4gIG9wZW5TY3JlZW5TbmlwcGV0ID0gJ29wZW4tc2NyZWVuLXNuaXBwZXQnLFxuICBjbG9zZVNjcmVlblNuaXBwZXQgPSAnY2xvc2Utc2NyZWVuLXNuaXBwZXQnLFxuICBzY3JlZW5TbmlwcGV0QW5hbHl0aWNzRGF0YSA9ICdzbmlwcGV0LWFuYWx5dGljcy1kYXRhJyxcbiAga2V5UHJlc3MgPSAna2V5LXByZXNzJyxcbiAgY2xvc2VXaW5kb3cgPSAnY2xvc2Utd2luZG93JyxcbiAgb3BlblNjcmVlblNoYXJpbmdJbmRpY2F0b3IgPSAnb3Blbi1zY3JlZW4tc2hhcmluZy1pbmRpY2F0b3InLFxuICBjbG9zZVNjcmVlblNoYXJpbmdJbmRpY2F0b3IgPSAnY2xvc2Utc2NyZWVuLXNoYXJpbmctaW5kaWNhdG9yJyxcbiAgZG93bmxvYWRNYW5hZ2VyQWN0aW9uID0gJ2Rvd25sb2FkLW1hbmFnZXItYWN0aW9uJyxcbiAgZ2V0TWVkaWFTb3VyY2UgPSAnZ2V0LW1lZGlhLXNvdXJjZScsXG4gIG5vdGlmaWNhdGlvbiA9ICdub3RpZmljYXRpb24nLFxuICBjbG9zZU5vdGlmaWNhdGlvbiA9ICdjbG9zZS1ub3RpZmljYXRpb24nLFxuICBjbG9zZUNhbGxOb3RpZmljYXRpb24gPSAnY2xvc2UtY2FsbC1ub3RpZmljYXRpb24nLFxuICBtZW1vcnlJbmZvID0gJ21lbW9yeS1pbmZvJyxcbiAgc3dpZnRTZWFyY2ggPSAnc3dpZnQtc2VhcmNoJyxcbiAgZ2V0Q29uZmlnVXJsID0gJ2dldC1jb25maWctdXJsJyxcbiAgcmVnaXN0ZXJSZXN0YXJ0RmxvYXRlciA9ICdyZWdpc3Rlci1yZXN0YXJ0LWZsb2F0ZXInLFxuICBzZXRDbG91ZENvbmZpZyA9ICdzZXQtY2xvdWQtY29uZmlnJyxcbiAgZ2V0Q1BVVXNhZ2UgPSAnZ2V0LWNwdS11c2FnZScsXG4gIGNoZWNrTWVkaWFQZXJtaXNzaW9uID0gJ2NoZWNrLW1lZGlhLXBlcm1pc3Npb24nLFxuICByZWdpc3RlckRvd25sb2FkSGFuZGxlciA9ICdyZWdpc3Rlci1kb3dubG9hZC1oYW5kbGVyJyxcbiAgb3BlbkRvd25sb2FkZWRJdGVtID0gJ29wZW4tZG93bmxvYWRlZC1pdGVtJyxcbiAgc2hvd0Rvd25sb2FkZWRJdGVtID0gJ3Nob3ctZG93bmxvYWRlZC1pdGVtJyxcbiAgY2xlYXJEb3dubG9hZGVkSXRlbXMgPSAnY2xlYXItZG93bmxvYWRlZC1pdGVtcycsXG4gIHJlc3RhcnRBcHAgPSAncmVzdGFydC1hcHAnLFxuICBzZXRJc01hbmEgPSAnc2V0LWlzLW1hbmEnLFxuICBzaG93Tm90aWZpY2F0aW9uID0gJ3Nob3ctbm90aWZpY2F0aW9uJyxcbiAgc2hvd0NhbGxOb3RpZmljYXRpb24gPSAnc2hvdy1jYWxsLW5vdGlmaWNhdGlvbicsXG4gIGNsb3NlQWxsV3JhcHBlcldpbmRvd3MgPSAnY2xvc2UtYWxsLXdpbmRvd3MnLFxuICBzZXRab29tTGV2ZWwgPSAnc2V0LXpvb20tbGV2ZWwnLFxuICBhYm91dEFwcENsaXBCb2FyZERhdGEgPSAnYWJvdXQtYXBwLWNsaXAtYm9hcmQtZGF0YScsXG4gIGNsb3NlTWFpbldpbmRvdyA9ICdjbG9zZS1tYWluLXdpbmRvdycsXG4gIG1pbmltaXplTWFpbldpbmRvdyA9ICdtaW5pbWl6ZS1tYWluLXdpbmRvdycsXG4gIG1heGltaXplTWFpbldpbmRvdyA9ICdtYXhpbWl6ZS1tYWluLXdpbmRvdycsXG4gIHVubWF4aW1pemVNYWluV2luZG93ID0gJ3VubWF4aW1pemUtbWFpbi13aW5kb3cnLFxuICBnZXRDdXJyZW50T3JpZ2luVXJsID0gJ2dldC1jdXJyZW50LW9yaWdpbi11cmwnLFxuICBpc0Flcm9HbGFzc0VuYWJsZWQgPSAnaXMtYWVyby1nbGFzcy1lbmFibGVkJyxcbiAgc2hvd1NjcmVlblNoYXJlUGVybWlzc2lvbkRpYWxvZyA9ICdzaG93LXNjcmVlbi1zaGFyZS1wZXJtaXNzaW9uLWRpYWxvZycsXG4gIGdldE1lZGlhQWNjZXNzU3RhdHVzID0gJ2dldC1tZWRpYS1hY2Nlc3Mtc3RhdHVzJyxcbiAgc2V0QnJvYWRjYXN0TWVzc2FnZSA9ICdzZXQtYnJvYWRjYXN0LW1lc3NhZ2UnLFxuICBoYW5kbGVTd2lmdFNlYXJjaE1lc3NhZ2VFdmVudHMgPSAnaGFuZGxlLXNoaWZ0LXNlYXJjaC1tZXNzYWdlLWV2ZW50cycsXG4gIG9uU3dpZnRTZWFyY2hNZXNzYWdlID0gJ29uLXNoaWZ0LXNlYXJjaC1tZXNzYWdlJyxcbiAgZ2V0TmF0aXZlV2luZG93SGFuZGxlID0gJ2dldC1uYXRpdmUtd2luZG93LWhhbmRsZScsXG4gIGdldENpdHJpeE1lZGlhUmVkaXJlY3Rpb25TdGF0dXMgPSAnZ2V0LWNpdHJpeC1tZWRpYS1yZWRpcmVjdGlvbi1zdGF0dXMnLFxuICBnZXRTb3VyY2VzID0gJ2dldFNvdXJjZXMnLFxuICBsYXVuY2hDbG91ZDkgPSAnbGF1bmNoLWNsb3VkOScsXG4gIHRlcm1pbmF0ZUNsb3VkOSA9ICd0ZXJtaW5hdGUtY2xvdWQ5JyxcbiAgY29ubmVjdENsb3VkOVBpcGUgPSAnY29ubmVjdC1jbG91ZDktcGlwZScsXG4gIHdyaXRlQ2xvdWQ5UGlwZSA9ICd3cml0ZS1jbG91ZDktcGlwZScsXG4gIGNsb3NlQ2xvdWQ5UGlwZSA9ICdjbG9zZS1jbG91ZDktcGlwZScsXG4gIHVwZGF0ZUFuZFJlc3RhcnQgPSAndXBkYXRlLWFuZC1yZXN0YXJ0JyxcbiAgZG93bmxvYWRVcGRhdGUgPSAnZG93bmxvYWQtdXBkYXRlJyxcbiAgY2hlY2tGb3JVcGRhdGVzID0gJ2NoZWNrLWZvci11cGRhdGVzJyxcbiAgYnJvd3NlckxvZ2luID0gJ2Jyb3dzZXItbG9naW4nLFxuICB1cGRhdGVNeVByZXNlbmNlID0gJ3VwZGF0ZS1teS1wcmVzZW5jZScsXG4gIGdldE15UHJlc2VuY2UgPSAnZ2V0LW15LXByZXNlbmNlJyxcbiAgdXBkYXRlU3ltcGhvbnlUcmF5ID0gJ3VwZGF0ZS1zeXN0ZW0tdHJheScsXG4gIHJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyA9ICdyZWdpc3Rlci1waG9uZS1udW1iZXJzLXNlcnZpY2VzJyxcbiAgdW5yZWdpc3RlclBob25lTnVtYmVyU2VydmljZXMgPSAndW5yZWdpc3Rlci1waG9uZS1udW1iZXJzLXNlcnZpY2VzJyxcbn1cblxuZXhwb3J0IGVudW0gYXBpTmFtZSB7XG4gIHN5bXBob255QXBpID0gJ3N5bXBob255LWFwaScsXG4gIG1haW5XaW5kb3dOYW1lID0gJ21haW4nLFxuICBub3RpZmljYXRpb25XaW5kb3dOYW1lID0gJ25vdGlmaWNhdGlvbi13aW5kb3cnLFxuICB3ZWxjb21lU2NyZWVuTmFtZSA9ICd3ZWxjb21lLXNjcmVlbicsXG4gIHNuaXBwaW5nVG9vbFdpbmRvd05hbWUgPSAnc25pcHBpbmctdG9vbC13aW5kb3cnLFxufVxuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1dJTkRPV19USVRMRSA9ICdOb3RpZmljYXRpb24gLSBTeW1waG9ueSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwaUFyZ3Mge1xuICBtZW1vcnlJbmZvOiBFbGVjdHJvbi5Qcm9jZXNzTWVtb3J5SW5mbztcbiAgd29yZDogc3RyaW5nO1xuICBjbWQ6IGFwaUNtZHM7XG4gIGlzT25saW5lOiBib29sZWFuO1xuICBjb3VudDogbnVtYmVyO1xuICBkYXRhVXJsOiBzdHJpbmc7XG4gIHdpbmRvd05hbWU6IHN0cmluZztcbiAgcGVyaW9kOiBudW1iZXI7XG4gIHJlYXNvbjogc3RyaW5nO1xuICBzb3VyY2VzOiBFbGVjdHJvbi5EZXNrdG9wQ2FwdHVyZXJTb3VyY2VbXTtcbiAgaWQ6IG51bWJlcjtcbiAgY3B1VXNhZ2U6IEVsZWN0cm9uLkNQVVVzYWdlO1xuICBpc0luTWVldGluZzogYm9vbGVhbjtcbiAgbG9jYWxlOiBzdHJpbmc7XG4gIGtleUNvZGU6IG51bWJlcjtcbiAgd2luZG93VHlwZTogV2luZG93VHlwZXM7XG4gIHdpbktleTogc3RyaW5nO1xuICBzdHJlYW1JZDogc3RyaW5nO1xuICBkaXNwbGF5SWQ6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIGxvZ05hbWU6IHN0cmluZztcbiAgbG9nczogSUxvZ3M7XG4gIGNsb3VkQ29uZmlnOiBvYmplY3Q7XG4gIGlzTWFuYTogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uT3B0czogb2JqZWN0O1xuICBub3RpZmljYXRpb25JZDogbnVtYmVyO1xuICB0aGVtZTogVGhlbWVzO1xuICB6b29tTGV2ZWw6IG51bWJlcjtcbiAgZmlsZW5hbWU6IHN0cmluZztcbiAgY2xpcGJvYXJkOiBzdHJpbmc7XG4gIGNsaXBib2FyZFR5cGU6ICdjbGlwYm9hcmQnIHwgJ3NlbGVjdGlvbic7XG4gIHJlcXVlc3RJZDogbnVtYmVyO1xuICBtZWRpYVN0YXR1czogSU1lZGlhUGVybWlzc2lvbjtcbiAgbmV3UG9kVXJsOiBzdHJpbmc7XG4gIHN0YXJ0VXJsOiBzdHJpbmc7XG4gIGlzUG9kQ29uZmlndXJlZDogYm9vbGVhbjtcbiAgaXNCcm93c2VyTG9naW5FbmFibGVkOiBib29sZWFuO1xuICBicm93c2VyTG9naW5BdXRvQ29ubmVjdDogYm9vbGVhbjtcbiAgc3dpZnRTZWFyY2hEYXRhOiBhbnk7XG4gIHR5cGVzOiBzdHJpbmdbXTtcbiAgdGh1bWJuYWlsU2l6ZTogU2l6ZTtcbiAgcGlwZTogc3RyaW5nO1xuICBkYXRhOiBVaW50OEFycmF5O1xuICBhdXRvVXBkYXRlVHJpZ2dlcjogQXV0b1VwZGF0ZVRyaWdnZXI7XG4gIGhpZGVPbkNhcHR1cmU6IGJvb2xlYW47XG4gIHN0YXR1czogSVByZXNlbmNlU3RhdHVzO1xuICBwcm90b2NvbHM6IFBob25lTnVtYmVyUHJvdG9jb2xbXTtcbn1cblxuZXhwb3J0IHR5cGUgVGhlbWVzID0gJ2xpZ2h0JyB8ICdkYXJrJztcblxuZXhwb3J0IHR5cGUgV2luZG93VHlwZXMgPVxuICB8ICdzY3JlZW4tcGlja2VyJ1xuICB8ICdzY3JlZW4tc2hhcmluZy1pbmRpY2F0b3InXG4gIHwgJ25vdGlmaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJhZGdlQ291bnQge1xuICBjb3VudDogbnVtYmVyO1xufVxuXG4vKipcbiAqIFNjcmVlbiBzbmlwcGV0XG4gKi9cbmV4cG9ydCB0eXBlIFNjcmVlblNuaXBwZXREYXRhVHlwZSA9ICdFUlJPUicgfCAnaW1hZ2UvcG5nO2Jhc2U2NCcgfCAnSElERV9TREEnO1xuZXhwb3J0IGludGVyZmFjZSBJU2NyZWVuU25pcHBldCB7XG4gIGRhdGE/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHR5cGU6IFNjcmVlblNuaXBwZXREYXRhVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQm91bmRzQ2hhbmdlIGV4dGVuZHMgRWxlY3Ryb24uUmVjdGFuZ2xlIHtcbiAgd2luZG93TmFtZTogc3RyaW5nO1xufVxuXG4vLyBQcmVzZW5jZSBTdGF0dXNcbmV4cG9ydCBpbnRlcmZhY2UgSVRodW1iYXJCdXR0b24ge1xuICBpY29uOiBOYXRpdmVJbWFnZTtcbiAgY2xpY2s6ICgpID0+IHZvaWQ7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIGZsYWdzPzogQXJyYXk8XG4gICAgfCAnZW5hYmxlZCdcbiAgICB8ICdkaXNhYmxlZCdcbiAgICB8ICdkaXNtaXNzb25jbGljaydcbiAgICB8ICdub2JhY2tncm91bmQnXG4gICAgfCAnaGlkZGVuJ1xuICAgIHwgJ25vbmludGVyYWN0aXZlJ1xuICA+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0dXNCYWRnZSBleHRlbmRzIElCYWRnZUNvdW50IHtcbiAgc3RhdHVzQ2F0ZWdvcnk6IEVQcmVzZW5jZVN0YXR1c0NhdGVnb3J5O1xuICBzdGF0dXNHcm91cDogRVByZXNlbmNlU3RhdHVzR3JvdXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyYXkge1xuICBjdXJyZW50OiBUcmF5IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJlc2VuY2VTdG9yZSB7XG4gIHN0YXR1c0JhZGdlOiBJU3RhdHVzQmFkZ2U7XG4gIHByZXNlbmNlU3RhdHVzOiBJUHJlc2VuY2VTdGF0dXM7XG59XG5cbmV4cG9ydCBlbnVtIEVQcmVzZW5jZVN0YXR1c0NhdGVnb3J5IHtcbiAgJ09OTElORScgPSAnT05MSU5FJyxcbiAgJ09GRkxJTkUnID0gJ09GRkxJTkUnLFxuICAnQVdBWScgPSAnQVdBWScsXG4gICdET19OT1RfRElTVFVSQicgPSAnRE9fTk9UX0RJU1RVUkInLFxuICAnQlVTWScgPSAnQlVTWScsXG4gICdPTl9USEVfUEhPTkUnID0gJ09OX1RIRV9QSE9ORScsXG4gICdBVkFJTEFCTEUnID0gJ0FWQUlMQUJMRScsXG4gICdPVVRfT0ZfT0ZGSUNFJyA9ICdPVVRfT0ZfT0ZGSUNFJyxcbiAgJ0lOX0FfTUVFVElORycgPSAnSU5fQV9NRUVUSU5HJyxcbiAgJ0JFX1JJR0hUX0JBQ0snID0gJ0JFX1JJR0hUX0JBQ0snLFxuICAnT0ZGX1dPUksnID0gJ09GRl9XT1JLJyxcbiAgJ05PX1BSRVNFTkNFJyA9ICdOT19QUkVTRU5DRScsXG59XG5cbmV4cG9ydCBlbnVtIEVQcmVzZW5jZVN0YXR1c0dyb3VwIHtcbiAgT05MSU5FID0gJ29ubGluZScsXG4gIEJVU1kgPSAnYnVzeScsXG4gIElETEUgPSAnaWRsZScsXG4gIE9GRkxJTkUgPSAnb2ZmbGluZScsXG4gIEFCU0VOVCA9ICdhYnNlbnQnLFxuICBNRUVUSU5HID0gJ21lZXRpbmcnLFxuICBISURFX1BSRVNFTkNFID0gJ2hpZGUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcmVzZW5jZVN0YXR1cyB7XG4gIHN0YXR1c0NhdGVnb3J5OiBFUHJlc2VuY2VTdGF0dXNDYXRlZ29yeTtcbiAgc3RhdHVzR3JvdXA6IEVQcmVzZW5jZVN0YXR1c0dyb3VwO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBTY3JlZW4gc2hhcmluZyBpbmRpY2F0b3JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2NyZWVuU2hhcmluZ0luZGljYXRvciB7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVxdWVzdElkOiBudW1iZXI7XG4gIHJlYXNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gS2V5Q29kZXMge1xuICBFc2MgPSAyNyxcbiAgQWx0ID0gMTgsXG59XG5cbnR5cGUgVGhlbWUgPSAnJyB8ICdsaWdodCcgfCAnZGFyayc7XG50eXBlIENhbGxUeXBlID0gJ0lNJyB8ICdST09NJyB8ICdPVEhFUic7XG5cbi8qKlxuICogTm90aWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbkRhdGEge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGZsYXNoOiBib29sZWFuO1xuICBjb2xvcjogc3RyaW5nO1xuICB0YWc6IHN0cmluZztcbiAgc3RpY2t5OiBib29sZWFuO1xuICBjb21wYW55OiBzdHJpbmc7XG4gIGRpc3BsYXlUaW1lOiBudW1iZXI7XG4gIGlzRXh0ZXJuYWw6IGJvb2xlYW47XG4gIGlzVXBkYXRlZDogYm9vbGVhbjtcbiAgdGhlbWU6IFRoZW1lO1xuICBpc0VsZWN0cm9uTm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgY2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xuICBoYXNJZ25vcmU/OiBib29sZWFuO1xuICBoYXNSZXBseT86IGJvb2xlYW47XG4gIGhhc01lbnRpb24/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE5vdGlmaWNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDYWxsTm90aWZpY2F0aW9uRGF0YSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbXBhbnk6IHN0cmluZztcbiAgaXNFeHRlcm5hbDogYm9vbGVhbjtcbiAgdGhlbWU6IFRoZW1lO1xuICBwcmltYXJ5VGV4dDogc3RyaW5nO1xuICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHNlY29uZGFyeVRleHQ/OiBzdHJpbmc7XG4gIGNvbXBhbnlJY29uVXJsPzogc3RyaW5nO1xuICBwcm9maWxlUGxhY2VIb2xkZXJUZXh0OiBzdHJpbmc7XG4gIGFjdGlvbkljb25Vcmw/OiBzdHJpbmc7XG4gIGNhbGxUeXBlOiBDYWxsVHlwZTtcbiAgc2hvdWxkRGlzcGxheUJhZGdlOiBib29sZWFuO1xuICBhY2NlcHRCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHJlamVjdEJ1dHRvblRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uQWN0aW9ucyB7XG4gIG5vdGlmaWNhdGlvbkNsaWNrZWQgPSAnbm90aWZpY2F0aW9uLWNsaWNrZWQnLFxuICBub3RpZmljYXRpb25DbG9zZWQgPSAnbm90aWZpY2F0aW9uLWNsb3NlZCcsXG4gIG5vdGlmaWNhdGlvblJlcGx5ID0gJ25vdGlmaWNhdGlvbi1yZXBseScsXG4gIG5vdGlmaWNhdGlvbklnbm9yZSA9ICdub3RpZmljYXRpb24taWdub3JlJyxcbiAgbm90aWZpY2F0aW9uQWNjZXB0ID0gJ25vdGlmaWNhdGlvbi1hY2NlcHQnLFxuICBub3RpZmljYXRpb25SZWplY3QgPSAnbm90aWZpY2F0aW9uLXJlamVjdCcsXG59XG5cbi8qKlxuICogU2NyZWVuIHNoYXJpbmcgSW5kaWNhdG9yXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNjcmVlblNoYXJpbmdJbmRpY2F0b3JPcHRpb25zIHtcbiAgZGlzcGxheUlkOiBzdHJpbmc7XG4gIHJlcXVlc3RJZDogbnVtYmVyO1xuICBzdHJlYW1JZDogc3RyaW5nO1xuICBzdHJlYW0/OiBNZWRpYVN0cmVhbTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmVyc2lvbkluZm8ge1xuICBjb250YWluZXJJZGVudGlmaWVyOiBzdHJpbmc7XG4gIGNvbnRhaW5lclZlcjogc3RyaW5nO1xuICBidWlsZE51bWJlcjogc3RyaW5nO1xuICBhcGlWZXI6IHN0cmluZztcbiAgc2VhcmNoQXBpVmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNQVVVzYWdlIHtcbiAgcGVyY2VudENQVVVzYWdlOiBudW1iZXI7XG4gIGlkbGVXYWtldXBzUGVyU2Vjb25kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURvd25sb2FkTWFuYWdlciB7XG4gIF9pZDogc3RyaW5nO1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBmaWxlRGlzcGxheU5hbWU6IHN0cmluZztcbiAgc2F2ZWRQYXRoOiBzdHJpbmc7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGZsYXNoaW5nPzogYm9vbGVhbjtcbiAgY291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhUGVybWlzc2lvbiB7XG4gIGNhbWVyYTogJ25vdC1kZXRlcm1pbmVkJyB8ICdncmFudGVkJyB8ICdkZW5pZWQnIHwgJ3Jlc3RyaWN0ZWQnIHwgJ3Vua25vd24nO1xuICBtaWNyb3Bob25lOlxuICAgIHwgJ25vdC1kZXRlcm1pbmVkJ1xuICAgIHwgJ2dyYW50ZWQnXG4gICAgfCAnZGVuaWVkJ1xuICAgIHwgJ3Jlc3RyaWN0ZWQnXG4gICAgfCAndW5rbm93bic7XG4gIHNjcmVlbjogJ25vdC1kZXRlcm1pbmVkJyB8ICdncmFudGVkJyB8ICdkZW5pZWQnIHwgJ3Jlc3RyaWN0ZWQnIHwgJ3Vua25vd24nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dNc2cge1xuICBsZXZlbDogTG9nTGV2ZWw7XG4gIGRldGFpbHM6IGFueTtcbiAgc2hvd0luQ29uc29sZTogYm9vbGVhbjtcbiAgc3RhcnRUaW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIExvZ0xldmVsID1cbiAgfCAnZXJyb3InXG4gIHwgJ3dhcm4nXG4gIHwgJ2luZm8nXG4gIHwgJ3ZlcmJvc2UnXG4gIHwgJ2RlYnVnJ1xuICB8ICdzaWxseSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ0ZpbGUge1xuICBmaWxlbmFtZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dzIHtcbiAgbG9nTmFtZTogc3RyaW5nO1xuICBsb2dGaWxlczogSUxvZ0ZpbGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzdGFydEZsb2F0ZXJEYXRhIHtcbiAgd2luZG93TmFtZTogc3RyaW5nO1xuICBib3VuZHM6IEVsZWN0cm9uLlJlY3RhbmdsZTtcbn1cblxuZXhwb3J0IHR5cGUgUmVwbHkgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBFbGVjdHJvbk5vdGlmaWNhdGlvbkRhdGEgPSBSZXBseSB8IG9iamVjdDtcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrID0gKFxuICBldmVudDogTm90aWZpY2F0aW9uQWN0aW9ucyxcbiAgZGF0YTogSU5vdGlmaWNhdGlvbkRhdGFcbikgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQ29uZmlnVXBkYXRlVHlwZSA9ICdyZXN0YXJ0JyB8ICdyZWxvYWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDbG91ZDlQaXBlIHtcbiAgLyoqXG4gICAqIEFiaWxpdHkgdG8gd3JpdGUgaW4gQzkgbmFtZWQgcGlwZVxuICAgKi9cbiAgd3JpdGUoZGF0YTogVWludDhBcnJheSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFiaWxpdHkgdG8gY2xvc2UgbmFtZWQgcGlwZVxuICAgKi9cbiAgY2xvc2UoKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQXV0aFR5cGUgPSAncGFzc3dvcmQnIHwgJ3Nzbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhSZXNwb25zZSB7XG4gIHN0YXR1czogc3RyaW5nO1xuICBwb2RWZXJzaW9uOiBzdHJpbmc7XG4gIGF1dGhlbnRpY2F0aW9uVHlwZTogQXV0aFR5cGU7XG4gIHNzb0Rpc2FibGVkRm9yTW9iaWxlOiBib29sZWFuO1xuICBrZXltYW5hZ2VyVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFBob25lTnVtYmVyUHJvdG9jb2wge1xuICBUZWwgPSAndGVsJyxcbiAgU21zID0gJ3NtcycsXG59XG4iLCJleHBvcnQgY29uc3QgaXNFbGVjdHJvblFBID0gISFwcm9jZXNzLmVudi5FTEVDVFJPTl9RQTtcblxuZXhwb3J0IGNvbnN0IGlzTWFjID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2Rhcndpbic7XG5leHBvcnQgY29uc3QgaXNXaW5kb3dzT1MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuZXhwb3J0IGNvbnN0IGlzTGludXggPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnO1xuIiwiaW1wb3J0IHsgZm9ybWF0U3RyaW5nIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGxvY2FsZUNvZGVSZWdleCA9IC9eKFthLXpdezJ9KS0oW0EtWl17Mn0pJC87XG5cbmV4cG9ydCB0eXBlIExvY2FsZVR5cGUgPSAnZW4tVVMnIHwgJ2phLUpQJyB8ICdmci1GUic7XG5cbnR5cGUgZm9ybWF0dGVyRnVuY3Rpb24gPSAoYXJncz86IG9iamVjdCkgPT4gc3RyaW5nO1xuXG5jbGFzcyBUcmFuc2xhdGlvbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRyYW5zbGF0ZWQgc3RyaW5nIHdpdGggcmVzcGVjdCB0byB2YWx1ZSwgcmVzb3VyY2UgJiBuYW1lIHNwYWNlXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfSBrZXkgZmllbGQgaW4gdGhlIHJlc291cmNlc1xuICAgKiBAcGFyYW0gcmVzb3VyY2Uge3N0cmluZ30gY3VycmVudCBsb2NhbGUgcmVzb3VyY2VcbiAgICogQHBhcmFtIG5hbWVzcGFjZSB7c3RyaW5nfSBuYW1lIHNwYWNlIGluIHRoZSByZXNvdXJjZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNsYXRlKFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgcmVzb3VyY2U6IEpTT04gfCBudWxsLFxuICAgIG5hbWVzcGFjZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlc291cmNlXG4gICAgICA/IFRyYW5zbGF0aW9uLmdldFJlc291cmNlKHJlc291cmNlLCBuYW1lc3BhY2UpW3ZhbHVlXSB8fCB2YWx1ZVxuICAgICAgOiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldFJlc291cmNlID0gKFxuICAgIHJlc291cmNlOiBKU09OLFxuICAgIG5hbWVzcGFjZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICk6IEpTT04gPT4gKG5hbWVzcGFjZSA/IHJlc291cmNlW25hbWVzcGFjZV0gOiByZXNvdXJjZSk7XG5cbiAgcHJpdmF0ZSBsb2NhbGU6IExvY2FsZVR5cGUgPSAnZW4tVVMnO1xuXG4gIHByaXZhdGUgbG9hZGVkUmVzb3VyY2VzOiBvYmplY3QgPSB7fTtcblxuICAvKipcbiAgICogQXBwbHkgdGhlIGxvY2FsZSBmb3IgdHJhbnNsYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGxvY2FsZVxuICAgKi9cbiAgcHVibGljIHNldExvY2FsZShsb2NhbGU6IExvY2FsZVR5cGUpOiB2b2lkIHtcbiAgICBjb25zdCBsb2NhbGVNYXRjaDogc3RyaW5nW10gfCBudWxsID0gbG9jYWxlLm1hdGNoKGxvY2FsZUNvZGVSZWdleCk7XG4gICAgaWYgKCFsb2NhbGUgJiYgKCFsb2NhbGVNYXRjaCB8fCBsb2NhbGVNYXRjaC5sZW5ndGggPCAxKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgbG9jYWxlXG4gICAqXG4gICAqIEByZXR1cm4gTG9jYWxlVHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgcHVibGljIGdldExvY2FsZSgpOiBMb2NhbGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogZmV0Y2hlcyBhbmQgcmV0dXJucyB0aGUgdHJhbnNsYXRlZCB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHBhcmFtIG5hbWVzcGFjZSB7c3RyaW5nfVxuICAgKiBAZXhhbXBsZSB0KCd0cmFuc2xhdGUgYW5kIGZvcm1hdHMge2RhdGF9ICcsIG5hbWVzcGFjZSkoeyBkYXRhOiAnc3RyaW5nJyB9KVxuICAgKiBAcmV0dXJucyB0cmFuc2xhdGUgYW5kIGZvcm1hdHMgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgdCh2YWx1ZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpOiBmb3JtYXR0ZXJGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChhcmdzPzogb2JqZWN0KTogc3RyaW5nID0+IHtcbiAgICAgIGlmICh0aGlzLmxvYWRlZFJlc291cmNlcyAmJiB0aGlzLmxvYWRlZFJlc291cmNlc1t0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFN0cmluZyhcbiAgICAgICAgICBUcmFuc2xhdGlvbi50cmFuc2xhdGUoXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHRoaXMubG9hZGVkUmVzb3VyY2VzW3RoaXMubG9jYWxlXSxcbiAgICAgICAgICAgIG5hbWVzcGFjZVxuICAgICAgICAgICksXG4gICAgICAgICAgYXJnc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLmxvYWRSZXNvdXJjZSh0aGlzLmxvY2FsZSk7XG4gICAgICByZXR1cm4gZm9ybWF0U3RyaW5nKFxuICAgICAgICBUcmFuc2xhdGlvbi50cmFuc2xhdGUodmFsdWUsIHJlc291cmNlLCBuYW1lc3BhY2UpIHx8IHZhbHVlLFxuICAgICAgICBhcmdzXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogS2VlcHMgcmVmIG9mIGxvYWRlZCByZXNvdXJjZXMgZnJvbSB0aGUgbWFpbiBwcm9jZXNzXG4gICAqXG4gICAqIEBwYXJhbSBsb2NhbGUge0xvY2FsZVR5cGV9XG4gICAqIEBwYXJhbSByZXNvdXJjZSB7SlNPTn1cbiAgICovXG4gIHB1YmxpYyBzZXRSZXNvdXJjZShsb2NhbGU6IExvY2FsZVR5cGUsIHJlc291cmNlOiBKU09OKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5sb2FkZWRSZXNvdXJjZXMgPSByZXNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgcmVzb3VyY2VzIGRpciBhbmQgcmV0dXJucyB0aGUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gbG9jYWxlXG4gICAqL1xuICBwcml2YXRlIGxvYWRSZXNvdXJjZShsb2NhbGU6IExvY2FsZVR5cGUpOiBKU09OIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVkUmVzb3VyY2VzW2xvY2FsZV07XG4gIH1cbn1cblxuY29uc3QgaTE4biA9IG5ldyBUcmFuc2xhdGlvbigpO1xuXG5leHBvcnQgeyBpMThuIH07XG4iLCJleHBvcnQgZW51bSBTY3JlZW5TaG90QW5ub3RhdGlvbkV2ZW50cyB7XG4gIENPUFlfVE9fQ0xJUEJPQVJEID0gJ2NvcHktdG8tY2xpcGJvYXJkJyxcbiAgU0FWRV9BUyA9ICdzYXZlLWFzJyxcbiAgQ0xPU0UgPSAnY2xvc2Utc25pcHBldCcsXG4gIEFOQUxZVElDUyA9ICdzbmlwcGV0LWFuYWx5dGljcy1kYXRhJyxcbiAgVVBMT0FEX1NOSVBQRVQgPSAndXBsb2FkLXNuaXBwZXQnLFxuICBEQVRBID0gJ3NuaXBwaW5nLXRvb2wtZGF0YSdcbn1cblxuZXhwb3J0IGVudW0gQWJvdXRBcHBFdmVudHMge1xuICBEQVRBID0gJ2Fib3V0LWFwcC1kYXRhJyxcbiAgQ0xPU0UgPSAnY2xvc2UtYWJvdXQtYXBwJyxcbiAgUE9EX1VQREFURUQgPSAndXNlci1wb2QtdXBkYXRlZCdcbn1cblxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uU2V0dGluZ3NFdmVudHMge1xuICBEQVRBID0gJ25vdGlmaWNhdGlvbi1zZXR0aW5ncy1kYXRhJyxcbiAgVVBEQVRFX1NFVFRJTkdTID0gJ25vdGlmaWNhdGlvbi1zZXR0aW5ncy11cGRhdGUnXG59XG5cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbkV2ZW50cyB7XG4gIERBVEEgPSAnbm90aWZpY2F0aW9uLWRhdGEnLFxuICBDTElDS0VEID0gJ25vdGlmaWNhdGlvbi1jbGlja2VkJyxcbiAgQ0xPU0UgPSAnY2xvc2Utbm90aWZpY2F0aW9uJyxcbiAgTU9VU0VfRU5URVIgPSAnbm90aWZpY2F0aW9uLW1vdXNlZW50ZXInLFxuICBNT1VTRV9MRUFWRSA9ICdub3RpZmljYXRpb24tbW91c2VsZWF2ZScsXG4gIE9OX0lHTk9SRSA9ICdub3RpZmljYXRpb24tb24taWdub3JlJyxcbiAgT05fUkVQTFkgPSAnbm90aWZpY2F0aW9uLW9uLXJlcGx5JyxcbiAgU0hPV19SRVBMWSA9ICdzaG93LXJlcGx5J1xufVxuXG5leHBvcnQgZW51bSBTY3JlZW5TaGFyZUluZGljYXRvckV2ZW50cyB7XG4gIERBVEEgPSAnc2NyZWVuLXNoYXJpbmctaW5kaWNhdG9yLWRhdGEnXG59XG5cbmV4cG9ydCBlbnVtIFNjcmVlblNoYXJlRXZlbnRzIHtcbiAgU1RPUCA9ICdzdG9wLXNjcmVlbi1zaGFyaW5nJyxcbiAgU1RBUlQgPSAnc3RhcnQtc2hhcmUnLFxuICBBUkdWID0gJ3NjcmVlbi1zaGFyZS1hcmd2JyxcbiAgSVNfRU5BQkxFRCA9ICdpcy1zY3JlZW4tc2hhcmUtZW5hYmxlZCcsXG4gIFNUT1BQRUQgPSAnc2NyZWVuLXNoYXJpbmctc3RvcHBlZCdcbn1cblxuZXhwb3J0IGVudW0gU2NyZWVuUGlja2VyRXZlbnRzIHtcbiAgREFUQSA9ICdzY3JlZW4tcGlja2VyLWRhdGEnLFxuICBTT1VSQ0VfU0VMRUNUID0gJ3NjcmVlbi1zb3VyY2Utc2VsZWN0JyxcbiAgU09VUkNFX1NFTEVDVEVEID0gJ3NjcmVlbi1zb3VyY2Utc2VsZWN0ZWQnXG59XG5cbmV4cG9ydCBlbnVtIENhbGxOb3RpZmljYXRpb25FdmVudHMge1xuICBDTElDS0VEID0gJ2NhbGwtbm90aWZpY2F0aW9uLWNsaWNrZWQnLFxuICBPTl9BQ0NFUFQgPSAnY2FsbC1ub3RpZmljYXRpb24tb24tYWNjZXB0JyxcbiAgT05fUkVKRUNUID0gJ2NhbGwtbm90aWZpY2F0aW9uLW9uLXJlamVjdCcsXG4gIERBVEEgPSAnY2FsbC1ub3RpZmljYXRpb24tZGF0YSdcbn1cblxuZXhwb3J0IGVudW0gVGl0bGVCYXJFdmVudHMge1xuICBNQVhJTUlaRSA9ICdtYXhpbWl6ZScsXG4gIFVOTUFYSU1JWkUgPSAndW5tYXhpbWl6ZScsXG4gIE1PVkUgPSAnbW92ZScsXG4gIERJU0FCTEVfQUNUSU9OX0JVVFRPTiA9ICdkaXNhYmxlLWFjdGlvbi1idXR0b24nLCBcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1NjcmVlbkV2ZW50cyB7XG4gIFJFTE9BRCA9ICdyZWxvYWQtc3ltcGhvbnknLFxuICBRVUlUID0gJ3F1aXQtc3ltcGhvbnknLFxuICBEQVRBID0gJ2xvYWRpbmctc2NyZWVuLWRhdGEnXG59XG5cbmV4cG9ydCBlbnVtIEJhc2ljQXV0aEV2ZW50cyB7XG4gIERBVEEgPSAnYmFzaWMtYXV0aC1kYXRhJyxcbiAgTE9HSU4gPSAnYmFzaWMtYXV0aC1sb2dpbicsXG4gIENMT1NFRCA9ICdiYXNpYy1hdXRoLWNsb3NlZCdcbn1cblxuZXhwb3J0IHR5cGUgSXBjRXZlbnRzID0gU2NyZWVuU2hvdEFubm90YXRpb25FdmVudHMgfCBBYm91dEFwcEV2ZW50cyB8IE5vdGlmaWNhdGlvblNldHRpbmdzRXZlbnRzIHwgTm90aWZpY2F0aW9uRXZlbnRzIHwgU2NyZWVuU2hhcmVJbmRpY2F0b3JFdmVudHMgfCBTY3JlZW5TaGFyZUV2ZW50cyB8IFNjcmVlblBpY2tlckV2ZW50cyB8IENhbGxOb3RpZmljYXRpb25FdmVudHMgfCBMb2FkaW5nU2NyZWVuRXZlbnRzIHwgc3RyaW5nOyIsIi8vIHJlZ2V4IG1hdGNoIHRoZSBzZW12ZXIgKHNlbWFudGljIHZlcnNpb24pIHRoaXMgY2hlY2tzIGZvciB0aGUgcGF0dGVybiBYLlkuWlxuLy8gZXgtdmFsaWQgIHYxLjIuMCwgMS4yLjAsIDIuMy40LXI1MVxuY29uc3Qgc2VtdmVyID1cbiAgL152Pyg/OlxcZCspKFxcLig/Olt4Kl18XFxkKykoXFwuKD86W3gqXXxcXGQrKSg/Oi1bXFxkYS16LV0rKD86XFwuW1xcZGEtei1dKykqKT8oPzpcXCtbXFxkYS16LV0rKD86XFwuW1xcZGEtei1dKykqKT8pPyk/JC9pO1xuY29uc3QgcGF0Y2ggPSAvLShbMC05QS1aYS16LS5dKykvO1xuXG4vKipcbiAqIFNwbGl0cyB0aGUgdmVyc2lvbnNcbiAqIGludG8gbWFqb3IsIG1pbm9yIGFuZCBwYXRjaFxuICogQHBhcmFtIHZcbiAqIEByZXR1cm5zIHtTdHJpbmdbXX1cbiAqL1xuY29uc3Qgc3BsaXQgPSAodjogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCB0ZW1wID0gdi5yZXBsYWNlKC9edi8sICcnKS5zcGxpdCgnLicpO1xuICBjb25zdCBhcnIgPSB0ZW1wLnNwbGljZSgwLCAyKTtcbiAgYXJyLnB1c2godGVtcC5qb2luKCcuJykpO1xuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIHRoZSB2ZXJzaW9uIHN0cmluZ1xuICogQHBhcmFtIHYgVmVyc2lvbiBzdHJpbmdcbiAqL1xuY29uc3QgdHJ5UGFyc2UgPSAodjogc3RyaW5nKTogc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgcmV0dXJuIE51bWJlci5pc05hTihOdW1iZXIodikpID8gdiA6IE51bWJlcih2KTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoZSB2ZXJzaW9uXG4gKiB3aXRoIHRoZSBzZW12ZXIgcmVnZXggYW5kIHJldHVybnNcbiAqIC0xIGlmIG5vdCB2YWxpZCBlbHNlIDFcbiAqIEBwYXJhbSB2ZXJzaW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5jb25zdCB2YWxpZGF0ZSA9ICh2ZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICBpZiAoIXNlbXZlci50ZXN0KHZlcnNpb24pKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAxO1xufTtcblxuLyoqXG4gKiBDb21wYXJlcyB0aGUgdjEgdmVyc2lvbiB3aXRoIHRoZSB2MiB2ZXJzaW9uXG4gKiBmb3IgYWxsIG1ham9yLCBtaW5vciwgcGF0Y2hcbiAqIGlmIHYxID4gdjIgcmV0dXJucyAxXG4gKiBpZiB2MSA8IHYyIHJldHVybnMgLTFcbiAqIGlmIHYxID0gdjIgcmV0dXJucyAwXG4gKiBAcGFyYW0gdjFcbiAqIEBwYXJhbSB2MlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhcmVWZXJzaW9ucyA9ICh2MTogc3RyaW5nLCB2Mjogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgaWYgKHZhbGlkYXRlKHYxKSA9PT0gLTEgfHwgdmFsaWRhdGUodjIpID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbnN0IHMxID0gc3BsaXQodjEpO1xuICBjb25zdCBzMiA9IHNwbGl0KHYyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IG4xID0gcGFyc2VJbnQoczFbaV0gfHwgJzAnLCAxMCk7XG4gICAgY29uc3QgbjIgPSBwYXJzZUludChzMltpXSB8fCAnMCcsIDEwKTtcblxuICAgIGlmIChuMSA+IG4yKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKG4yID4gbjEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoW3MxWzJdLCBzMlsyXV0uZXZlcnkocGF0Y2gudGVzdC5iaW5kKHBhdGNoKSkpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcDEgPSBwYXRjaC5leGVjKHMxWzJdKVsxXS5zcGxpdCgnLicpLm1hcCh0cnlQYXJzZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHAyID0gcGF0Y2guZXhlYyhzMlsyXSlbMV0uc3BsaXQoJy4nKS5tYXAodHJ5UGFyc2UpO1xuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBNYXRoLm1heChwMS5sZW5ndGgsIHAyLmxlbmd0aCk7IGsrKykge1xuICAgICAgaWYgKFxuICAgICAgICBwMVtrXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICh0eXBlb2YgcDJba10gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBwMVtrXSA9PT0gJ251bWJlcicpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwMltrXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICh0eXBlb2YgcDFba10gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBwMltrXSA9PT0gJ251bWJlcicpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChwMVtrXSA+IHAyW2tdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKHAyW2tdID4gcDFba10pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChbczFbMl0sIHMyWzJdXS5zb21lKHBhdGNoLnRlc3QuYmluZChwYXRjaCkpKSB7XG4gICAgcmV0dXJuIHBhdGNoLnRlc3QoczFbMl0pID8gLTEgOiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG4vKipcbiAqIFNlYXJjaCBnaXZlbiBhcmd2IGZvciBhcmdOYW1lIHVzaW5nIGV4YWN0IG1hdGNoIG9yIHN0YXJ0cyB3aXRoLiBDb21wYXJpc29uIGlzIGNhc2UgaW5zZW5zaXRpdmVcbiAqIEBwYXJhbSAge0FycmF5fSBhcmd2ICAgICAgIEFycmF5IG9mIHN0cmluZ3NcbiAqIEBwYXJhbSAge1N0cmluZ30gYXJnTmFtZSAgIEFyZyBuYW1lIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0gIHtCb29sZWFufSBleGFjdE1hdGNoICBJZiB0cnVlIHRoZW4gbG9vayBmb3IgZXhhY3QgbWF0Y2ggb3RoZXJ3aXNlXG4gKiB0cnkgZmluZGluZyBhcmcgdGhhdCBzdGFydHMgd2l0aCBhcmdOYW1lLlxuICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgSWYgZm91bmQsIHJldHVybnMgdGhlIGFyZywgb3RoZXJ3aXNlIG51bGwuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21tYW5kTGluZUFyZ3MgPSAoXG4gIGFyZ3Y6IHN0cmluZ1tdLFxuICBhcmdOYW1lOiBzdHJpbmcsXG4gIGV4YWN0TWF0Y2g6IGJvb2xlYW5cbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJndikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgZ2V0LWNvbW1hbmQtbGluZS1hcmdzOiBUeXBlRXJyb3IgaW52YWxpZCBmdW5jIGFyZywgbXVzdCBiZSBhbiBhcnJheTogJHthcmd2fWBcbiAgICApO1xuICB9XG5cbiAgY29uc3QgYXJnTmFtZVRvRmluZCA9IGFyZ05hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJndi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGFyZyA9IGFyZ3ZbaV0udG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICAoZXhhY3RNYXRjaCAmJiBhcmcgPT09IGFyZ05hbWVUb0ZpbmQpIHx8XG4gICAgICAoIWV4YWN0TWF0Y2ggJiYgYXJnLnN0YXJ0c1dpdGgoYXJnTmFtZVRvRmluZCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gYXJndltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZ3VpZCxcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gZ3VpZCB2YWx1ZSBpbiBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEd1aWQgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2VcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUGlja3MgYSBmaWx0ZXJlZCBsaXN0IG9mIHZhbHVlc1xuICogaW4gYSBnaXZlbiBvYmplY3QgYmFzZWQgb24gZmllbGRzXG4gKiBAcGFyYW0gb2JqZWN0IE9iamVjdCB0byBiZSBmaWx0ZXJlZFxuICogQHBhcmFtIGZpZWxkcyBGaWVsZHMgdG8gYmUgcGlja2VkXG4gKi9cbmV4cG9ydCBjb25zdCBwaWNrID0gKG9iamVjdDogb2JqZWN0LCBmaWVsZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgIGlmIChvYmplY3RbZmllbGRdICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0W2ZpZWxkXSAhPT0gbnVsbCkge1xuICAgICAgb2JqW2ZpZWxkXSA9IG9iamVjdFtmaWVsZF07XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIEZpbHRlcnMgb3V0IHRydXRoeSB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0gZGF0YSB7T2JqZWN0fSB7IHRlc3Q6IHRydWUsIHRlc3QxOiBmYWxzZSwgdGVzdDI6ICdOT1RfU0VUJyB9XG4gKiBAcGFyYW0gdmFsdWVzIHtBcnJheX0gWyB0cnVlLCBcIk5PVF9TRVRcIiBdXG4gKiBAcmV0dXJuIHtPYmplY3R9IHsgdGVzdDE6IGZhbHNlIH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck91dFNlbGVjdGVkVmFsdWVzID0gKGRhdGE6IG9iamVjdCwgdmFsdWVzKTogb2JqZWN0ID0+IHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSAmJiBkYXRhW2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMuaW5kZXhPZihkYXRhW2tleV0pIDw9IC0xKSB7XG4gICAgICBvYmpba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBMaW1pdHMgeW91ciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYXQgbW9zdCBldmVyeSBtaWxsaXNlY29uZHNcbiAqXG4gKiBAcGFyYW0gZnVuY1xuICogQHBhcmFtIHdhaXRcbiAqIEBleGFtcGxlIGNvbnN0IHRocm90dGxlZCA9IHRocm90dGxlKGFueUZ1bmMsIDUwMCk7XG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChcbiAgZnVuYzogKC4uLmFyZ3MpID0+IHZvaWQsXG4gIHdhaXQ6IG51bWJlclxuKTogKCguLi5hcmdzKSA9PiB2b2lkKSA9PiB7XG4gIGlmICh3YWl0IDw9IDApIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICd0aHJvdHRsZTogaW52YWxpZCB0aHJvdHRsZVRpbWUgYXJnLCBtdXN0IGJlIGEgbnVtYmVyOiAnICsgd2FpdFxuICAgICk7XG4gIH1cblxuICBsZXQgdGltZXI6IE5vZGVKUy5UaW1lb3V0O1xuICBsZXQgbGFzdFJhbiA9IDA7XG5cbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBsYXN0UmFuID49IHdhaXQpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICB9LCB3YWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGEgc3RyaW5nIHdpdGggZHluYW1pYyB2YWx1ZXNcbiAqIEBwYXJhbSBzdHIge1N0cmluZ30gU3RyaW5nIHRvIGJlIGZvcm1hdHRlZFxuICogQHBhcmFtIGRhdGEge09iamVjdH0gLSBEYXRhIHRvIGJlIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIFN0cmluZ0Zvcm1hdCgndGhpcyB3aWxsIGxvZyB7dGltZX0nLCB7IHRpbWU6ICcxMjM0JyB9KVxuICpcbiAqIHJlc3VsdDpcbiAqIHRoaXMgd2lsbCBsb2cgMTIzNFxuICpcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtYXRTdHJpbmcgPSAoc3RyOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXN0ciB8fCAhZGF0YSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyh7KFtefV0rKX0pL2csIChpKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VkS2V5ID0gaS5yZXBsYWNlKC97LywgJycpLnJlcGxhY2UoL30vLCAnJyk7XG4gICAgICAgIHJldHVybiBkYXRhW3JlcGxhY2VkS2V5XSA/IGRhdGFbcmVwbGFjZWRLZXldIDogcmVwbGFjZWRLZXk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcGVyY2VudGFnZSBvZiBhIG51bWJlciB3aXRoIHRoZSBnaXZlbiBwZXJjZW50YWdlXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBwZXJjZW50YWdlXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQZXJjZW50YWdlID0gKHZhbHVlOiBudW1iZXIsIHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICByZXR1cm4gdmFsdWUgKiBwZXJjZW50YWdlICogMC4wMTtcbn07XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIGFycmF5cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGVxdWFsXG4gKiBAcGFyYW0gYSBzdHJpbmdbXVxuICogQHBhcmFtIGIgc3RyaW5nW11cbiAqL1xuZXhwb3J0IGNvbnN0IGFycmF5RXF1YWxzID0gKGE6IHN0cmluZ1tdLCBiOiBzdHJpbmdbXSkgPT4ge1xuICByZXR1cm4gKFxuICAgIEFycmF5LmlzQXJyYXkoYSkgJiZcbiAgICBBcnJheS5pc0FycmF5KGIpICYmXG4gICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgYS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBiW2luZGV4XSlcbiAgKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgdGhhdCBpcyBiZXR3ZWVuIChtaW4gLSBtYXgpXG4gKiBpZiBtaW4gaXMgNGhycyBhbmQgbWF4IGlzIDEyaHJzIHRoZW4gdGhlXG4gKiByZXR1cm5lZCB2YWx1ZSB3aWxsIGJlIGEgcmFuZG9tIGIvdyA0IC0gMTIgaHJzXG4gKlxuICogQHBhcmFtIG1pbiB7bnVtYmVyfSAtIG1pbGxpc2Vjb25kXG4gKiBAcGFyYW0gbWF4IHtudW1iZXJ9IC0gbWlsbGlzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJhbmRvbVRpbWUgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAyIERhdGVzIGluIERheXNcbiAqXG4gKiBAcGFyYW0gc3RhcnREYXRlXG4gKiBAcGFyYW0gZW5kRGF0ZVxuICpcbiAqIEByZXR1cm4gbnVtYmVyXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREaWZmZXJlbmNlSW5EYXlzID0gKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG1zSW5EYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICBNYXRoLmFicyhOdW1iZXIoZW5kRGF0ZS5nZXRUaW1lKCkpIC0gTnVtYmVyKHN0YXJ0RGF0ZS5nZXRUaW1lKCkpKSAvIG1zSW5EYXlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1VybCA9IChzdHI6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBCb29sZWFuKG5ldyBVUkwoc3RyKS5wcm90b2NvbCA9PT0gJ2h0dHBzOicpO1xuICB9IGNhdGNoIChfZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBRdWV1ZXMgYW5kIGRlbGF5cyBmdW5jdGlvbiBjYWxsIHdpdGggYSBnaXZlbiBkZWxheVxuICovXG5leHBvcnQgY2xhc3MgRGVsYXllZEZ1bmN0aW9uUXVldWUge1xuICBwcml2YXRlIHF1ZXVlOiBBcnJheTwoLi4uYXJnczogYW55W10pID0+IHZvaWQ+ID0gW107XG4gIHByaXZhdGUgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWxheTogbnVtYmVyID0gMTAwKSB7fVxuXG4gIC8qKlxuICAgKiBBZGQgYSBmdW5jdGlvbiB0byB0aGUgcXVldWVcbiAgICogQHBhcmFtIGZ1bmNcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHB1YmxpYyBhZGQoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGNvbnN0IGJvdW5kRnVuYyA9ICgpID0+IGZ1bmMoLi4uYXJncyk7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKGJvdW5kRnVuYyk7XG5cbiAgICBpZiAoIXRoaXMudGltZXIpIHtcbiAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgICAgZnVuYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5kZWxheSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOT1RJRklDQVRJT05fV0lORE9XX1RJVExFLCBhcGlDbWRzLCBhcGlOYW1lIH0gZnJvbSAnY29tbW9uL2FwaS1pbnRlcmZhY2UnO1xuaW1wb3J0IHsgaXNXaW5kb3dzT1MgfSBmcm9tICdjb21tb24vZW52JztcbmltcG9ydCB7IFNjcmVlblNoYXJlRXZlbnRzIH0gZnJvbSAnY29tbW9uL2lwY0V2ZW50JztcbmltcG9ydCB7IERlc2t0b3BDYXB0dXJlclNvdXJjZSwgU291cmNlc09wdGlvbnMsIGlwY1JlbmRlcmVyIH0gZnJvbSAnZWxlY3Ryb24nO1xuXG5cblxuY29uc3QgaW5jbHVkZXMgPSBbJyddLmluY2x1ZGVzO1xuXG5sZXQgbmV4dElkID0gMDtcbmxldCBpc1NjcmVlblNoYXJlRW5hYmxlZCA9IGZhbHNlO1xubGV0IHNjcmVlblNoYXJlQXJndjogc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21Tb3VyY2VzT3B0aW9ucyBleHRlbmRzIFNvdXJjZXNPcHRpb25zIHtcbiAgcmVxdWVzdElkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21EZXNrdG9wQ2FwdHVyZXJTb3VyY2UgZXh0ZW5kcyBEZXNrdG9wQ2FwdHVyZXJTb3VyY2Uge1xuICByZXF1ZXN0SWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2NyZWVuU291cmNlRXJyb3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgcmVxdWVzdElkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrVHlwZSA9IChcbiAgZXJyb3I6IElTY3JlZW5Tb3VyY2VFcnJvciB8IG51bGwsXG4gIHNvdXJjZT86IElDdXN0b21EZXNrdG9wQ2FwdHVyZXJTb3VyY2UsXG4pID0+IHZvaWQ7XG5jb25zdCBnZXROZXh0SWQgPSAoKSA9PiArK25leHRJZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG9wdGlvbnMgYW5kIHRoZWlyIHR5cGVzIGFyZSB2YWxpZFxuICogQHBhcmFtIG9wdGlvbnMgfG9wdGlvbnMudHlwZXwgY2FuIG5vdCBiZSBlbXB0eSBhbmQgaGFzIHRvIGluY2x1ZGUgJ3dpbmRvdycgb3IgJ3NjcmVlbicuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNWYWxpZCA9IChvcHRpb25zOiBJQ3VzdG9tU291cmNlc09wdGlvbnMpID0+IHtcbiAgcmV0dXJuIChcbiAgICAob3B0aW9ucyAhPT0gbnVsbCA/IG9wdGlvbnMudHlwZXMgOiB1bmRlZmluZWQpICE9PSBudWxsICYmXG4gICAgQXJyYXkuaXNBcnJheShvcHRpb25zLnR5cGVzKVxuICApO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBzb3VyY2VzIGZvciBjYXB0dXJpbmcgc2NyZWVucyAvIHdpbmRvd3NcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyB7U291cmNlc09wdGlvbnN9XG4gKiBAcGFyYW0gY2FsbGJhY2sge0NhbGxiYWNrVHlwZX1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgZ2V0U291cmNlID0gYXN5bmMgKFxuICBvcHRpb25zOiBJQ3VzdG9tU291cmNlc09wdGlvbnMsXG4gIGNhbGxiYWNrOiBDYWxsYmFja1R5cGUsXG4pID0+IHtcbiAgbGV0IGNhcHR1cmVXaW5kb3c7XG4gIGxldCBjYXB0dXJlU2NyZWVuO1xuICBsZXQgaWQ7XG4gIGNvbnN0IHNvdXJjZXNPcHRzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCB7IHJlcXVlc3RJZCwgLi4udXBkYXRlZE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gIGlmICghaXNWYWxpZChvcHRpb25zKSkge1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIG5hbWU6ICdJbnZhbGlkIG9wdGlvbnMnLFxuICAgICAgbWVzc2FnZTogJ0ludmFsaWQgb3B0aW9ucycsXG4gICAgICByZXF1ZXN0SWQsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNhcHR1cmVXaW5kb3cgPSBpbmNsdWRlcy5jYWxsKG9wdGlvbnMudHlwZXMsICd3aW5kb3cnKTtcbiAgY2FwdHVyZVNjcmVlbiA9IGluY2x1ZGVzLmNhbGwob3B0aW9ucy50eXBlcywgJ3NjcmVlbicpO1xuXG4gIGlmICghdXBkYXRlZE9wdGlvbnMudGh1bWJuYWlsU2l6ZSkge1xuICAgIHVwZGF0ZWRPcHRpb25zLnRodW1ibmFpbFNpemUgPSB7XG4gICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChpc1dpbmRvd3NPUyAmJiBjYXB0dXJlV2luZG93KSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY2FwdHVyZVdpbmRvdyB0byBmYWxzZSBpZiBEZXNrdG9wIGNvbXBvc2l0aW9uXG4gICAgICogaXMgZGlzYWJsZWQgb3RoZXJ3aXNlIHRydWVcbiAgICAgKlxuICAgICAqIFNldHRpbmcgY2FwdHVyZVdpbmRvdyB0byBmYWxzZSByZXR1cm5zIG9ubHkgc2NyZWVuIHNvdXJjZXNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjYXB0dXJlV2luZG93ID0gYXdhaXQgd2luZG93LmVsZWN0cm9uLmlwY1JlbmRlcmVyLmludm9rZShhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuaXNBZXJvR2xhc3NFbmFibGVkLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNhcHR1cmVXaW5kb3cpIHtcbiAgICBzb3VyY2VzT3B0cy5wdXNoKCd3aW5kb3cnKTtcbiAgfVxuICBpZiAoY2FwdHVyZVNjcmVlbikge1xuICAgIHNvdXJjZXNPcHRzLnB1c2goJ3NjcmVlbicpO1xuICB9XG5cbiAgLy8gZGlzcGxheXMgYSBkaWFsb2cgaWYgbWVkaWEgcGVybWlzc2lvbnMgYXJlIGRpc2FibGVcbiAgaWYgKCFpc1NjcmVlblNoYXJlRW5hYmxlZCkge1xuICAgIGF3YWl0IGlwY1JlbmRlcmVyLmludm9rZShhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuc2hvd1NjcmVlblNoYXJlUGVybWlzc2lvbkRpYWxvZyxcbiAgICB9KTtcbiAgICBjYWxsYmFjayh7XG4gICAgICBuYW1lOiAnUGVybWlzc2lvbiBEZW5pZWQnLFxuICAgICAgbWVzc2FnZTogJ1Blcm1pc3Npb24gRGVuaWVkJyxcbiAgICAgIHJlcXVlc3RJZCxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZCA9IGdldE5leHRJZCgpO1xuICBjb25zdCBzb3VyY2VzOiBEZXNrdG9wQ2FwdHVyZXJTb3VyY2VbXSA9IGF3YWl0IGlwY1JlbmRlcmVyLmludm9rZShcbiAgICBhcGlOYW1lLnN5bXBob255QXBpLFxuICAgIHtcbiAgICAgIGNtZDogYXBpQ21kcy5nZXRTb3VyY2VzLFxuICAgICAgdHlwZXM6IHNvdXJjZXNPcHRzLFxuICAgICAgdGh1bWJuYWlsU2l6ZTogdXBkYXRlZE9wdGlvbnMudGh1bWJuYWlsU2l6ZSxcbiAgICB9LFxuICApO1xuICAvLyBBdXRvIHNlbGVjdCBzY3JlZW4gc291cmNlIGJhc2VkIG9uIGFyZ3MgZm9yIHRlc3Rpbmcgb25seVxuICBpZiAoc2NyZWVuU2hhcmVBcmd2KSB7XG4gICAgY29uc3QgdGl0bGUgPSBzY3JlZW5TaGFyZUFyZ3Yuc3Vic3RyKHNjcmVlblNoYXJlQXJndi5pbmRleE9mKCc9JykgKyAxKTtcbiAgICBjb25zdCBmaWx0ZXJlZFNvdXJjZTogRGVza3RvcENhcHR1cmVyU291cmNlW10gPSBzb3VyY2VzLmZpbHRlcihcbiAgICAgIChzb3VyY2UpID0+IHNvdXJjZS5uYW1lID09PSB0aXRsZSxcbiAgICApO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsdGVyZWRTb3VyY2UpICYmIGZpbHRlcmVkU291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHsgLi4uZmlsdGVyZWRTb3VyY2VbMF0sIHJlcXVlc3RJZCB9O1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RTb3VyY2UgPSB7IC4uLnNvdXJjZXNbMF0sIHJlcXVlc3RJZCB9O1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGZpcnN0U291cmNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVkU291cmNlcyA9IHNvdXJjZXNcbiAgICAuZmlsdGVyKChzb3VyY2UpID0+IHNvdXJjZS5uYW1lICE9PSBOT1RJRklDQVRJT05fV0lORE9XX1RJVExFKVxuICAgIC5tYXAoKHNvdXJjZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc291cmNlLFxuICAgICAgICAuLi57XG4gICAgICAgICAgdGh1bWJuYWlsOiBzb3VyY2UudGh1bWJuYWlsLnRvRGF0YVVSTCgpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5vcGVuU2NyZWVuUGlja2VyV2luZG93LFxuICAgIGlkLFxuICAgIHNvdXJjZXM6IHVwZGF0ZWRTb3VyY2VzLFxuICB9KTtcblxuICBjb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSAoX2U6IGFueSwgc291cmNlOiBEZXNrdG9wQ2FwdHVyZXJTb3VyY2UpID0+IHtcbiAgICAvLyBDbGVhbmluZyB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgLy8gaXBjUmVuZGVyZXIucmVtb3ZlTGlzdGVuZXIoJ3N0YXJ0LXNoYXJlJyArIGlkLCBzdWNjZXNzQ2FsbGJhY2spO1xuICAgICAgLy8gcmV0dXJuIGNhbGxiYWNrKHtcbiAgICAgIC8vICAgbmFtZTogJ1VzZXIgQ2FuY2VsbGVkJyxcbiAgICAgIC8vICAgbWVzc2FnZTogJ1VzZXIgQ2FuY2VsbGVkJyxcbiAgICAgIC8vICAgcmVxdWVzdElkLFxuICAgICAgLy8gfSk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7IC4uLnNvdXJjZSwgLi4ueyByZXF1ZXN0SWQgfSB9KTtcbiAgfTtcbiAgaXBjUmVuZGVyZXIub25jZShTY3JlZW5TaGFyZUV2ZW50cy5TVEFSVCArIGlkLCBzdWNjZXNzQ2FsbGJhY2spO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIGV2ZW50IHRoYXQgdXBkYXRlcyBzY3JlZW4gc2hhcmUgYXJndlxuaXBjUmVuZGVyZXIub25jZShTY3JlZW5TaGFyZUV2ZW50cy5BUkdWLCAoX2V2ZW50LCBhcmcpID0+IHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgc2NyZWVuU2hhcmVBcmd2ID0gYXJnO1xuICB9XG59KTtcblxuLy8gZXZlbnQgdGhhdCB1cGRhdGVzIHNjcmVlbiBzaGFyZSBwZXJtaXNzaW9uXG5pcGNSZW5kZXJlci5vbihTY3JlZW5TaGFyZUV2ZW50cy5JU19FTkFCTEVELCAoX2V2ZW50LCBjYW5TaGFyZVNjcmVlbikgPT4ge1xuICBpZiAodHlwZW9mIGNhblNoYXJlU2NyZWVuID09PSAnYm9vbGVhbicgJiYgY2FuU2hhcmVTY3JlZW4pIHtcbiAgICBpc1NjcmVlblNoYXJlRW5hYmxlZCA9IGNhblNoYXJlU2NyZWVuO1xuICB9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IHsgYXBwLCBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgSXBjUmVuZGVyZXJFdmVudCB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7IGFwaUNtZHMsIGFwaU5hbWUsIElCb3VuZHNDaGFuZ2UsIElMb2dNc2csIElOb3RpZmljYXRpb25EYXRhLCBJUmVzdGFydEZsb2F0ZXJEYXRhLCBJU2NyZWVuU2hhcmluZ0luZGljYXRvciwgSVNjcmVlblNoYXJpbmdJbmRpY2F0b3JPcHRpb25zLCBJU2NyZWVuU25pcHBldCwgTG9nTGV2ZWwgfSBmcm9tICdjb21tb24vYXBpLWludGVyZmFjZSc7XG5pbXBvcnQgeyBTU0ZBcGkgfSBmcm9tICcuL3NzZi1hcGknO1xuaW1wb3J0IHsgSXBjRXZlbnRzIH0gZnJvbSAnY29tbW9uL2lwY0V2ZW50JztcbmltcG9ydCB7IElTY3JlZW5Tb3VyY2VFcnJvciwgSUN1c3RvbURlc2t0b3BDYXB0dXJlclNvdXJjZSwgSUN1c3RvbVNvdXJjZXNPcHRpb25zIH0gZnJvbSAncmVuZGVyZXIvY29tcG9uZW50cy9kZXNrdG9wLWNhcHR1cmVyL2Rlc2t0b3AtY2FwdHVyZXInO1xuaW1wb3J0IHsgaXNMaW51eCwgaXNNYWMsIGlzV2luZG93c09TIH0gZnJvbSAnY29tbW9uL2Vudic7XG5pbXBvcnQgeyBJQW5hbHl0aWNzRGF0YSB9IGZyb20gJy4vYmkvaW50ZXJmYWNlJztcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbHMgPSBJcGNFdmVudHMgfCAnd2VsY29tZScgfCBhcGlOYW1lLnN5bXBob255QXBpO1xuXG5jb25zdCBpc0RldkVudiA9IHByb2Nlc3MuZW52WydXRUJQQUNLX1NFUlZFJ10gPT09ICd0cnVlJztcbmNvbnN0IGVsZWN0cm9uSGFuZGxlciA9IHtcbiAgaXBjUmVuZGVyZXI6IHtcbiAgICBzZW5kTWVzc2FnZShjaGFubmVsOiBDaGFubmVscywgLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICBpcGNSZW5kZXJlci5zZW5kKGNoYW5uZWwsIC4uLmFyZ3MpO1xuICAgIH0sXG4gICAgb24oY2hhbm5lbDogQ2hhbm5lbHMsIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IChfZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsIC4uLmFyZ3M6IHVua25vd25bXSkgPT5cbiAgICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICAgIGlwY1JlbmRlcmVyLm9uKGNoYW5uZWwsIHN1YnNjcmlwdGlvbik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlwY1JlbmRlcmVyLnJlbW92ZUxpc3RlbmVyKGNoYW5uZWwsIHN1YnNjcmlwdGlvbik7XG4gICAgICB9O1xuICAgIH0sXG4gICAgb25jZShjaGFubmVsOiBDaGFubmVscywgZnVuYzogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZCkge1xuICAgICAgaXBjUmVuZGVyZXIub25jZShjaGFubmVsLCAoX2V2ZW50LCAuLi5hcmdzKSA9PiBmdW5jKC4uLmFyZ3MpKTtcbiAgICB9LFxuICAgIGludm9rZShjaGFubmVsOiBDaGFubmVscywgLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICByZXR1cm4gaXBjUmVuZGVyZXIuaW52b2tlKGNoYW5uZWwsIC4uLmFyZ3MpO1xuICAgIH1cbiAgfSxcbiAgaXNNYWMsXG4gIGlzV2luZG93c09TLFxuICBpc0xpbnV4LFxuICBpc0RldkVudlxufTtcblxuY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnZWxlY3Ryb24nLCBlbGVjdHJvbkhhbmRsZXIpO1xuXG5leHBvcnQgdHlwZSBFbGVjdHJvbkhhbmRsZXIgPSB0eXBlb2YgZWxlY3Ryb25IYW5kbGVyO1xuXG5pbnRlcmZhY2UgSVNTRldpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIHNzZj86IFNTRkFwaTtcbn1cblxuY29uc3Qgc3NmV2luZG93OiBJU1NGV2luZG93ID0gd2luZG93O1xuXG5jb25zdCBjcmVhdGVBUEkgPSAoKSA9PiB7XG4gIC8vIGlmcmFtZXMgKGFuZCBhbnkgb3RoZXIgbm9uLXRvcCBsZXZlbCBmcmFtZXMpIGdldCBubyBhcGkgYWNjZXNzXG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzI2MDY5L2hvdy10by1pZGVudGlmeS1pZi1hLXdlYnBhZ2UtaXMtYmVpbmctbG9hZGVkLWluc2lkZS1hbi1pZnJhbWUtb3ItZGlyZWN0bHktaW50by10LzMyNjA3NlxuICBpZiAod2luZG93LnNlbGYgIT09IHdpbmRvdy50b3ApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBub3RlOiB3aW5kb3cub3BlbiBmcm9tIG1haW4gd2luZG93IChpZiBpbiB0aGUgc2FtZSBkb21haW4pIHdpbGwgZ2V0XG4gIC8vIGFwaSBhY2Nlc3MuICB3aW5kb3cub3BlbiBpbiBhbm90aGVyIGRvbWFpbiB3aWxsIGJlIG9wZW5lZCBpbiB0aGUgZGVmYXVsdFxuICAvLyBicm93c2VyIChzZWU6IGhhbmRsZXIgZm9yIGV2ZW50ICduZXctd2luZG93JyBpbiB3aW5kb3dNZ3IuanMpXG5cbiAgLy9cbiAgLy8gQVBJIGV4cG9zZWQgdG8gcmVuZGVyZXIgcHJvY2Vzcy5cbiAgLy9cbiAgLy8gQHRzLWlnbm9yZVxuICBzc2ZXaW5kb3cuc3NmID0gbmV3IFNTRkFwaSgpO1xuICBPYmplY3QuZnJlZXplKHNzZldpbmRvdy5zc2YpO1xufTtcblxuY3JlYXRlQVBJKCk7XG5cbmlmIChzc2ZXaW5kb3cuc3NmKSB7XG4gIC8vIE5ldyBjb250ZXh0IGJyaWRnZSBhcGkgdGhhdCBleHBvc2VzIGFsbCB0aGUgbWV0aG9kcyBvbiB0byB3aW5kb3cgb2JqZWN0XG4gIC8vIEZvciBNYW5hIHRvIGNvbW11bmljYXRlIHdpdGggU0RBXG4gIGNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ21hbmFTU0YnLCB7XG4gICAgc2V0SXNNYW5hOiBzc2ZXaW5kb3cuc3NmLnNldElzTWFuYSxcbiAgICBOb3RpZmljYXRpb246IHNzZldpbmRvdy5zc2YuTm90aWZpY2F0aW9uLFxuICAgIGdldE1lZGlhU291cmNlOiBzc2ZXaW5kb3cuc3NmLmdldE1lZGlhU291cmNlLFxuICAgIGFjdGl2YXRlOiBzc2ZXaW5kb3cuc3NmLmFjdGl2YXRlLFxuICAgIGJyaW5nVG9Gcm9udDogc3NmV2luZG93LnNzZi5icmluZ1RvRnJvbnQsXG4gICAgZ2V0VmVyc2lvbkluZm86IHNzZldpbmRvdy5zc2YuZ2V0VmVyc2lvbkluZm8sXG4gICAgcmVnaXN0ZXJBY3Rpdml0eURldGVjdGlvbjogc3NmV2luZG93LnNzZi5yZWdpc3RlckFjdGl2aXR5RGV0ZWN0aW9uLFxuICAgIHJlZ2lzdGVyRG93bmxvYWRIYW5kbGVyOiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyRG93bmxvYWRIYW5kbGVyLFxuICAgIG9wZW5Eb3dubG9hZGVkSXRlbTogc3NmV2luZG93LnNzZi5vcGVuRG93bmxvYWRlZEl0ZW0sXG4gICAgc2hvd0Rvd25sb2FkZWRJdGVtOiBzc2ZXaW5kb3cuc3NmLnNob3dEb3dubG9hZGVkSXRlbSxcbiAgICBjbGVhckRvd25sb2FkZWRJdGVtczogc3NmV2luZG93LnNzZi5jbGVhckRvd25sb2FkZWRJdGVtcyxcbiAgICByZWdpc3RlckJvdW5kc0NoYW5nZTogc3NmV2luZG93LnNzZi5yZWdpc3RlckJvdW5kc0NoYW5nZSxcbiAgICByZWdpc3RlckxvZ2dlcjogc3NmV2luZG93LnNzZi5yZWdpc3RlckxvZ2dlcixcbiAgICByZWdpc3RlclByb3RvY29sSGFuZGxlcjogc3NmV2luZG93LnNzZi5yZWdpc3RlclByb3RvY29sSGFuZGxlcixcbiAgICByZWdpc3RlckxvZ1JldHJpZXZlcjogc3NmV2luZG93LnNzZi5yZWdpc3RlckxvZ1JldHJpZXZlcixcbiAgICBzZW5kTG9nczogc3NmV2luZG93LnNzZi5zZW5kTG9ncyxcbiAgICByZWdpc3RlckFuYWx5dGljc0V2ZW50OiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyQW5hbHl0aWNzRXZlbnQsXG4gICAgU2NyZWVuU25pcHBldDogc3NmV2luZG93LnNzZi5TY3JlZW5TbmlwcGV0LFxuICAgIG9wZW5TY3JlZW5TbmlwcGV0OiBzc2ZXaW5kb3cuc3NmLm9wZW5TY3JlZW5TbmlwcGV0LFxuICAgIGNsb3NlU2NyZWVuU25pcHBldDogc3NmV2luZG93LnNzZi5jbG9zZVNjcmVlblNuaXBwZXQsXG4gICAgc2V0QmFkZ2VDb3VudDogc3NmV2luZG93LnNzZi5zZXRCYWRnZUNvdW50LFxuICAgIHNldExvY2FsZTogc3NmV2luZG93LnNzZi5zZXRMb2NhbGUsXG4gICAgc2V0SXNJbk1lZXRpbmc6IHNzZldpbmRvdy5zc2Yuc2V0SXNJbk1lZXRpbmcsXG4gICAgc2hvd05vdGlmaWNhdGlvblNldHRpbmdzOiBzc2ZXaW5kb3cuc3NmLnNob3dOb3RpZmljYXRpb25TZXR0aW5ncyxcbiAgICBzaG93U2NyZWVuU2hhcmluZ0luZGljYXRvcjogc3NmV2luZG93LnNzZi5zaG93U2NyZWVuU2hhcmluZ0luZGljYXRvcixcbiAgICBvcGVuU2NyZWVuU2hhcmluZ0luZGljYXRvcjogc3NmV2luZG93LnNzZi5vcGVuU2NyZWVuU2hhcmluZ0luZGljYXRvcixcbiAgICBjbG9zZVNjcmVlblNoYXJpbmdJbmRpY2F0b3I6IHNzZldpbmRvdy5zc2YuY2xvc2VTY3JlZW5TaGFyaW5nSW5kaWNhdG9yLFxuICAgIHJlZ2lzdGVyUmVzdGFydEZsb2F0ZXI6IHNzZldpbmRvdy5zc2YucmVnaXN0ZXJSZXN0YXJ0RmxvYXRlcixcbiAgICBzZXRDbG91ZENvbmZpZzogc3NmV2luZG93LnNzZi5zZXRDbG91ZENvbmZpZyxcbiAgICBjaGVja01lZGlhUGVybWlzc2lvbjogc3NmV2luZG93LnNzZi5jaGVja01lZGlhUGVybWlzc2lvbixcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBzc2ZXaW5kb3cuc3NmLnNob3dOb3RpZmljYXRpb24sXG4gICAgY2xvc2VOb3RpZmljYXRpb246IHNzZldpbmRvdy5zc2YuY2xvc2VOb3RpZmljYXRpb24sXG4gICAgc2hvd0NhbGxOb3RpZmljYXRpb246IHNzZldpbmRvdy5zc2Yuc2hvd0NhbGxOb3RpZmljYXRpb24sXG4gICAgY2xvc2VDYWxsTm90aWZpY2F0aW9uOiBzc2ZXaW5kb3cuc3NmLmNsb3NlQ2FsbE5vdGlmaWNhdGlvbixcbiAgICByZXN0YXJ0QXBwOiBzc2ZXaW5kb3cuc3NmLnJlc3RhcnRBcHAsXG4gICAgY2xvc2VBbGxXcmFwcGVyV2luZG93czogc3NmV2luZG93LnNzZi5jbG9zZUFsbFdyYXBwZXJXaW5kb3dzLFxuICAgIHNldFpvb21MZXZlbDogc3NmV2luZG93LnNzZi5zZXRab29tTGV2ZWwsXG4gICAgZ2V0Wm9vbUxldmVsOiBzc2ZXaW5kb3cuc3NmLmdldFpvb21MZXZlbCxcbiAgICBzdXBwb3J0ZWRTZXR0aW5nczogc3NmV2luZG93LnNzZi5zdXBwb3J0ZWRTZXR0aW5ncyxcbiAgICBnZXROYXRpdmVXaW5kb3dIYW5kbGU6IHNzZldpbmRvdy5zc2YuZ2V0TmF0aXZlV2luZG93SGFuZGxlLFxuICAgIGdldENpdHJpeE1lZGlhUmVkaXJlY3Rpb25TdGF0dXM6XG4gICAgICBzc2ZXaW5kb3cuc3NmLmdldENpdHJpeE1lZGlhUmVkaXJlY3Rpb25TdGF0dXMsXG4gICAgcmVnaXN0ZXJDbGllbnRCYW5uZXI6IHNzZldpbmRvdy5zc2YucmVnaXN0ZXJDbGllbnRCYW5uZXIsXG4gICAgbGF1bmNoQ2xvdWQ5OiBzc2ZXaW5kb3cuc3NmLmxhdW5jaENsb3VkOSxcbiAgICB0ZXJtaW5hdGVDbG91ZDk6IHNzZldpbmRvdy5zc2YudGVybWluYXRlQ2xvdWQ5LFxuICAgIGNvbm5lY3RDbG91ZDlQaXBlOiBzc2ZXaW5kb3cuc3NmLmNvbm5lY3RDbG91ZDlQaXBlLFxuICAgIHVwZGF0ZUFuZFJlc3RhcnQ6IHNzZldpbmRvdy5zc2YudXBkYXRlQW5kUmVzdGFydCxcbiAgICBkb3dubG9hZFVwZGF0ZTogc3NmV2luZG93LnNzZi5kb3dubG9hZFVwZGF0ZSxcbiAgICBjaGVja0ZvclVwZGF0ZXM6IHNzZldpbmRvdy5zc2YuY2hlY2tGb3JVcGRhdGVzLFxuICAgIHVwZGF0ZU15UHJlc2VuY2U6IHNzZldpbmRvdy5zc2YudXBkYXRlTXlQcmVzZW5jZSxcbiAgICBnZXRNeVByZXNlbmNlOiBzc2ZXaW5kb3cuc3NmLmdldE15UHJlc2VuY2UsXG4gICAgcmVnaXN0ZXJQaG9uZU51bWJlclNlcnZpY2VzOiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyxcbiAgICB1bnJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlczogc3NmV2luZG93LnNzZi51bnJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyxcbiAgfSk7XG59XG5cblxuXG5leHBvcnQgY2xhc3MgQXBwQnJpZGdlIHtcbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgaW5jb21pbmcgcG9zdE1lc3NhZ2VcbiAgICogZXZlbnRzIGJhc2VkIG9uIHRoZSBob3N0IG5hbWVcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpc1ZhbGlkRXZlbnQoZXZlbnQpOiBib29sZWFuIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBldmVudC5zb3VyY2UgJiYgZXZlbnQuc291cmNlID09PSB3aW5kb3c7XG4gIH1cblxuICBwdWJsaWMgb3JpZ2luOiBzdHJpbmcgPSAnJztcblxuICBwcml2YXRlIHJlYWRvbmx5IGNhbGxiYWNrSGFuZGxlcnMgPSB7XG4gICAgb25NZXNzYWdlOiAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGV2ZW50KSxcbiAgICBvbkFjdGl2aXR5Q2FsbGJhY2s6IChpZGxlVGltZTogbnVtYmVyKSA9PiB0aGlzLmFjdGl2aXR5Q2FsbGJhY2soaWRsZVRpbWUpLFxuICAgIG9uU2NyZWVuU25pcHBldENhbGxiYWNrOiAoYXJnOiBJU2NyZWVuU25pcHBldCkgPT5cbiAgICAgIHRoaXMuc2NyZWVuU25pcHBldENhbGxiYWNrKGFyZyksXG4gICAgb25SZWdpc3RlckJvdW5kc0NoYW5nZUNhbGxiYWNrOiAoYXJnOiBJQm91bmRzQ2hhbmdlKSA9PlxuICAgICAgdGhpcy5yZWdpc3RlckJvdW5kc0NoYW5nZUNhbGxiYWNrKGFyZyksXG4gICAgb25SZWdpc3RlckxvZ2dlckNhbGxiYWNrOiAoXG4gICAgICBtc2c6IElMb2dNc2csXG4gICAgICBsb2dMZXZlbDogTG9nTGV2ZWwsXG4gICAgICBzaG93SW5Db25zb2xlOiBib29sZWFuLFxuICAgICkgPT4gdGhpcy5yZWdpc3RlckxvZ2dlckNhbGxiYWNrKG1zZywgbG9nTGV2ZWwsIHNob3dJbkNvbnNvbGUpLFxuICAgIG9uUmVnaXN0ZXJQcm90b2NvbEhhbmRsZXJDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PlxuICAgICAgdGhpcy5wcm90b2NvbEhhbmRsZXJDYWxsYmFjayh1cmkpLFxuICAgIG9uQ29sbGVjdExvZ3NDYWxsYmFjazogKCkgPT4gdGhpcy5jb2xsZWN0TG9nc0NhbGxiYWNrKCksXG4gICAgb25TY3JlZW5TaGFyaW5nSW5kaWNhdG9yQ2FsbGJhY2s6IChhcmc6IElTY3JlZW5TaGFyaW5nSW5kaWNhdG9yKSA9PlxuICAgICAgdGhpcy5zY3JlZW5TaGFyaW5nSW5kaWNhdG9yQ2FsbGJhY2soYXJnKSxcbiAgICBvbk1lZGlhU291cmNlQ2FsbGJhY2s6IChcbiAgICAgIGVycm9yOiBJU2NyZWVuU291cmNlRXJyb3IgfCBudWxsLFxuICAgICAgc291cmNlOiBJQ3VzdG9tRGVza3RvcENhcHR1cmVyU291cmNlIHwgdW5kZWZpbmVkLFxuICAgICk6IHZvaWQgPT4gdGhpcy5nb3RNZWRpYVNvdXJjZShlcnJvciwgc291cmNlKSxcbiAgICBvbk5vdGlmaWNhdGlvbkNhbGxiYWNrOiAoZXZlbnQsIGRhdGEpID0+XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbkNhbGxiYWNrKGV2ZW50LCBkYXRhKSxcbiAgICBvbkFuYWx5dGljc0V2ZW50Q2FsbGJhY2s6IChkYXRhKSA9PiB0aGlzLmFuYWx5dGljc0V2ZW50Q2FsbGJhY2soZGF0YSksXG4gICAgcmVzdGFydEZsb2F0ZXI6IChkYXRhKSA9PiB0aGlzLnJlc3RhcnRGbG9hdGVyKGRhdGEpLFxuICAgIG9uRG93bmxvYWRJdGVtQ2FsbGJhY2s6IChkYXRhKSA9PiB0aGlzLm9uRG93bmxvYWRJdGVtQ2FsbGJhY2soZGF0YSksXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gc3RhcnRzIHdpdGggY29ycG9yYXRlIHBvZCBhbmRcbiAgICAvLyB3aWxsIGJlIHVwZGF0ZWQgd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZyB1cmxcbiAgICBpcGNSZW5kZXJlclxuICAgICAgLmludm9rZShhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5nZXRDdXJyZW50T3JpZ2luVXJsLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChvcmlnaW4pID0+IHtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XG4gICAgICAgIC8vIHRoaXMub3JpZ2luID0gJyonOyAvLyBERU1PLUFQUDogQ29tbWVudCB0aGlzIGxpbmUgYmFjayBpbiBvbmx5IHRvIHRlc3QgZGVtby1hcHAgLSBETyBOT1QgQ09NTUlUXG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgICAgIGNtZDogYXBpQ21kcy5zZXRCcm9hZGNhc3RNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25NZXNzYWdlKTtcbiAgICAgIH0pIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAuY2F0Y2goKHJlYXNvbikgPT4gY29uc29sZS5lcnJvcihyZWFzb24pKTtcblxuICAgIGlwY1JlbmRlcmVyLm9uKGFwaUNtZHMub25Td2lmdFNlYXJjaE1lc3NhZ2UsIChfZXZlbnQsIFttZXRob2QsIGRhdGFdKSA9PiB7XG4gICAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UobWV0aG9kLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggY2FzZSB0aGF0IHZhbGlkYXRlcyBhbmQgaGFuZGxlXG4gICAqIGluY29taW5nIG1lc3NhZ2VzIGZyb20gcG9zdE1lc3NhZ2VcbiAgICpcbiAgICogSXMgb25seSB1c2VkIGZvciAxLjUuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIUFwcEJyaWRnZS5pc1ZhbGlkRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBtZXRob2QsIGRhdGEgfSA9IGV2ZW50LmRhdGE7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgYXBpQ21kcy5nZXRWZXJzaW9uSW5mbzpcbiAgICAgICAgY29uc3QgdmVyc2lvbkluZm8gPSBhd2FpdCBzc2ZXaW5kb3cuc3NmPy5nZXRWZXJzaW9uSW5mbygpO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2dldC12ZXJzaW9uLWluZm8tY2FsbGJhY2snLCB7XG4gICAgICAgICAgcmVxdWVzdElkOiBkYXRhLnJlcXVlc3RJZCxcbiAgICAgICAgICByZXNwb25zZTogdmVyc2lvbkluZm8sXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5hY3RpdmF0ZTpcbiAgICAgICAgc3NmV2luZG93LnNzZj8uYWN0aXZhdGUoZGF0YSBhcyBzdHJpbmcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5icmluZ1RvRnJvbnQ6XG4gICAgICAgIGNvbnN0IHsgd2luZG93TmFtZSwgcmVhc29uIH0gPSBkYXRhO1xuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5icmluZ1RvRnJvbnQod2luZG93TmFtZSBhcyBzdHJpbmcsIHJlYXNvbiBhcyBzdHJpbmcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5zZXRCYWRnZUNvdW50OlxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc3NmV2luZG93LnNzZj8uc2V0QmFkZ2VDb3VudChkYXRhIGFzIG51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMub3BlbkRvd25sb2FkZWRJdGVtOlxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc3NmV2luZG93LnNzZj8ub3BlbkRvd25sb2FkZWRJdGVtKGRhdGEgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5zaG93RG93bmxvYWRlZEl0ZW06XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBzc2ZXaW5kb3cuc3NmPy5zaG93RG93bmxvYWRlZEl0ZW0oZGF0YSBhcyBzdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmNsZWFyRG93bmxvYWRlZEl0ZW1zOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5jbGVhckRvd25sb2FkZWRJdGVtcygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZXN0YXJ0QXBwOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5yZXN0YXJ0QXBwKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnNldExvY2FsZTpcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHNzZldpbmRvdy5zc2Y/LnNldExvY2FsZShkYXRhIGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMucmVnaXN0ZXJBY3Rpdml0eURldGVjdGlvbjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJBY3Rpdml0eURldGVjdGlvbihcbiAgICAgICAgICBkYXRhIGFzIG51bWJlcixcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25BY3Rpdml0eUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlckRvd25sb2FkSGFuZGxlcjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJEb3dubG9hZEhhbmRsZXIoXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uRG93bmxvYWRJdGVtQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLm9wZW5TY3JlZW5TbmlwcGV0OlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5vcGVuU2NyZWVuU25pcHBldCh0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25TY3JlZW5TbmlwcGV0Q2FsbGJhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5jbG9zZVNjcmVlblNuaXBwZXQ6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LmNsb3NlU2NyZWVuU25pcHBldCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlckJvdW5kc0NoYW5nZTpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJCb3VuZHNDaGFuZ2UoXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uUmVnaXN0ZXJCb3VuZHNDaGFuZ2VDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMucmVnaXN0ZXJMb2dnZXI6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LnJlZ2lzdGVyTG9nZ2VyKHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vblJlZ2lzdGVyTG9nZ2VyQ2FsbGJhY2spO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlclByb3RvY29sSGFuZGxlcjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJQcm90b2NvbEhhbmRsZXIoXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uUmVnaXN0ZXJQcm90b2NvbEhhbmRsZXJDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMucmVnaXN0ZXJMb2dSZXRyaWV2ZXI6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LnJlZ2lzdGVyTG9nUmV0cmlldmVyKFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vbkNvbGxlY3RMb2dzQ2FsbGJhY2ssXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMuc2VuZExvZ3M6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LnNlbmRMb2dzKGRhdGEubG9nTmFtZSwgZGF0YS5sb2dGaWxlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLm9wZW5TY3JlZW5TaGFyaW5nSW5kaWNhdG9yOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5vcGVuU2NyZWVuU2hhcmluZ0luZGljYXRvcihcbiAgICAgICAgICBkYXRhIGFzIElTY3JlZW5TaGFyaW5nSW5kaWNhdG9yT3B0aW9ucyxcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25TY3JlZW5TaGFyaW5nSW5kaWNhdG9yQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmNsb3NlU2NyZWVuU2hhcmluZ0luZGljYXRvcjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8uY2xvc2VTY3JlZW5TaGFyaW5nSW5kaWNhdG9yKGRhdGEuc3RyZWFtSWQgYXMgc3RyaW5nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMuZ2V0TWVkaWFTb3VyY2U6XG4gICAgICAgIGF3YWl0IHNzZldpbmRvdy5zc2Y/LmdldE1lZGlhU291cmNlKFxuICAgICAgICAgIGRhdGEgYXMgSUN1c3RvbVNvdXJjZXNPcHRpb25zLFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vbk1lZGlhU291cmNlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLm5vdGlmaWNhdGlvbjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8uc2hvd05vdGlmaWNhdGlvbihcbiAgICAgICAgICBkYXRhIGFzIElOb3RpZmljYXRpb25EYXRhLFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vbk5vdGlmaWNhdGlvbkNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5jbG9zZU5vdGlmaWNhdGlvbjpcbiAgICAgICAgYXdhaXQgc3NmV2luZG93LnNzZj8uY2xvc2VOb3RpZmljYXRpb24oZGF0YSBhcyBudW1iZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5zaG93Tm90aWZpY2F0aW9uU2V0dGluZ3M6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LnNob3dOb3RpZmljYXRpb25TZXR0aW5ncyhkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMuc2V0SXNJbk1lZXRpbmc6XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgc3NmV2luZG93LnNzZj8uc2V0SXNJbk1lZXRpbmcoZGF0YSBhcyBib29sZWFuKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlckFuYWx5dGljc0hhbmRsZXI6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LnJlZ2lzdGVyQW5hbHl0aWNzRXZlbnQoXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uQW5hbHl0aWNzRXZlbnRDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMucmVnaXN0ZXJSZXN0YXJ0RmxvYXRlcjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJSZXN0YXJ0RmxvYXRlcih0aGlzLmNhbGxiYWNrSGFuZGxlcnMucmVzdGFydEZsb2F0ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5zZXRDbG91ZENvbmZpZzpcbiAgICAgICAgc3NmV2luZG93LnNzZj8uc2V0Q2xvdWRDb25maWcoZGF0YSBhcyBvYmplY3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5zd2lmdFNlYXJjaDpcbiAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgICAgY21kOiBhcGlDbWRzLmhhbmRsZVN3aWZ0U2VhcmNoTWVzc2FnZUV2ZW50cyxcbiAgICAgICAgICBzd2lmdFNlYXJjaERhdGE6IGRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5nZXRDUFVVc2FnZTpcbiAgICAgICAgY29uc3QgY3B1VXNhZ2UgPSBhd2FpdCBzc2ZXaW5kb3cuc3NmPy5nZXRDUFVVc2FnZSgpO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2dldC1jcHUtdXNhZ2UtY2FsbGJhY2snLCB7XG4gICAgICAgICAgcmVxdWVzdElkOiBkYXRhLnJlcXVlc3RJZCxcbiAgICAgICAgICByZXNwb25zZTogY3B1VXNhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5jaGVja01lZGlhUGVybWlzc2lvbjpcbiAgICAgICAgY29uc3QgbWVkaWFQZXJtaXNzaW9uID0gYXdhaXQgc3NmV2luZG93LnNzZj8uY2hlY2tNZWRpYVBlcm1pc3Npb24oKTtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdjaGVjay1tZWRpYS1wZXJtaXNzaW9uLWNhbGxiYWNrJywge1xuICAgICAgICAgIHJlcXVlc3RJZDogZGF0YS5yZXF1ZXN0SWQsXG4gICAgICAgICAgcmVzcG9uc2U6IG1lZGlhUGVybWlzc2lvbixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgdXNlciBhY3Rpdml0eVxuICAgKiBAcGFyYW0gaWRsZVRpbWUge251bWJlcn0gLSBzeXN0ZW0gaWRsZSB0aWNrXG4gICAqL1xuICBwcml2YXRlIGFjdGl2aXR5Q2FsbGJhY2sgPSAoaWRsZVRpbWU6IG51bWJlcik6IHZvaWQgPT5cbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2FjdGl2aXR5LWNhbGxiYWNrJywgaWRsZVRpbWUpO1xuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3Qgc25pcHBldCBkYXRhXG4gICAqIEBwYXJhbSBhcmcge0lTY3JlZW5TbmlwcGV0fVxuICAgKi9cbiAgcHJpdmF0ZSBzY3JlZW5TbmlwcGV0Q2FsbGJhY2sgPSAoYXJnOiBJU2NyZWVuU25pcHBldCk6IHZvaWQgPT5cbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ3NjcmVlbi1zbmlwcGV0LWNhbGxiYWNrJywgYXJnKTtcblxuICAvKipcbiAgICogQnJvYWRjYXN0IGJvdW5kIGNoYW5nZXNcbiAgICogQHBhcmFtIGFyZyB7SUJvdW5kc0NoYW5nZX1cbiAgICovXG4gIHByaXZhdGUgcmVnaXN0ZXJCb3VuZHNDaGFuZ2VDYWxsYmFjayA9IChhcmc6IElCb3VuZHNDaGFuZ2UpOiB2b2lkID0+XG4gICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdib3VuZC1jaGFuZ2VzLWNhbGxiYWNrJywgYXJnKTtcblxuICAvKipcbiAgICogQnJvYWRjYXN0IGxvZ3NcbiAgICogQHBhcmFtIG1zZyB7SUxvZ01zZ31cbiAgICogQHBhcmFtIGxvZ0xldmVsIHtMb2dMZXZlbH1cbiAgICogQHBhcmFtIHNob3dJbkNvbnNvbGUge2Jvb2xlYW59XG4gICAqL1xuICBwcml2YXRlIHJlZ2lzdGVyTG9nZ2VyQ2FsbGJhY2soXG4gICAgbXNnOiBJTG9nTXNnLFxuICAgIGxvZ0xldmVsOiBMb2dMZXZlbCxcbiAgICBzaG93SW5Db25zb2xlOiBib29sZWFuLFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2xvZ2dlci1jYWxsYmFjaycsIHsgbXNnLCBsb2dMZXZlbCwgc2hvd0luQ29uc29sZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgcHJvdG9jb2wgdXJpXG4gICAqIEBwYXJhbSB1cmkge3N0cmluZ31cbiAgICovXG4gIHByaXZhdGUgcHJvdG9jb2xIYW5kbGVyQ2FsbGJhY2sgPSAodXJpOiBzdHJpbmcpOiB2b2lkID0+XG4gICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdwcm90b2NvbC1jYWxsYmFjaycsIHVyaSk7XG5cbiAgcHJpdmF0ZSBjb2xsZWN0TG9nc0NhbGxiYWNrID0gKCk6IHZvaWQgPT5cbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2NvbGxlY3QtbG9ncycsIHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCBldmVudCB0aGF0IHN0b3BzIHNjcmVlbiBzaGFyaW5nXG4gICAqIEBwYXJhbSBhcmcge0lTY3JlZW5TaGFyaW5nSW5kaWNhdG9yfVxuICAgKi9cbiAgcHJpdmF0ZSBzY3JlZW5TaGFyaW5nSW5kaWNhdG9yQ2FsbGJhY2soYXJnOiBJU2NyZWVuU2hhcmluZ0luZGljYXRvcik6IHZvaWQge1xuICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnc2NyZWVuLXNoYXJpbmctaW5kaWNhdG9yLWNhbGxiYWNrJywgYXJnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgYW5hbHl0aWNzIGV2ZW50cyBkYXRhXG4gICAqIEBwYXJhbSBhcmcge0lBbmFseXRpY3NEYXRhfVxuICAgKi9cbiAgcHJpdmF0ZSBhbmFseXRpY3NFdmVudENhbGxiYWNrKGFyZzogSUFuYWx5dGljc0RhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2FuYWx5dGljcy1ldmVudC1jYWxsYmFjaycsIGFyZyk7XG4gIH1cblxuICAvKipcbiAgICogQnJvYWRjYXN0IGRvd25sb2FkIGl0ZW0gZXZlbnRcbiAgICogQHBhcmFtIGFyZyB7b2JqZWN0fVxuICAgKi9cbiAgcHJpdmF0ZSBvbkRvd25sb2FkSXRlbUNhbGxiYWNrKGFyZzogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdkb3dubG9hZC1oYW5kbGVyLWNhbGxiYWNrJywgYXJnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgdG8gcmVzdGFydCBmbG9hdGVyIGV2ZW50IHdpdGggZGF0YVxuICAgKiBAcGFyYW0gYXJnIHtJQW5hbHl0aWNzRGF0YX1cbiAgICovXG4gIHByaXZhdGUgcmVzdGFydEZsb2F0ZXIoYXJnOiBJUmVzdGFydEZsb2F0ZXJEYXRhKTogdm9pZCB7XG4gICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdyZXN0YXJ0LWZsb2F0ZXItY2FsbGJhY2snLCBhcmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCB0aGUgdXNlciBzZWxlY3RlZCBzb3VyY2VcbiAgICogQHBhcmFtIHNvdXJjZUVycm9yIHtJU2NyZWVuU291cmNlRXJyb3J9XG4gICAqIEBwYXJhbSBzZWxlY3RlZFNvdXJjZSB7SUN1c3RvbURlc2t0b3BDYXB0dXJlclNvdXJjZX1cbiAgICovXG4gIHByaXZhdGUgZ290TWVkaWFTb3VyY2UoXG4gICAgc291cmNlRXJyb3I6IElTY3JlZW5Tb3VyY2VFcnJvciB8IG51bGwsXG4gICAgc2VsZWN0ZWRTb3VyY2U6IElDdXN0b21EZXNrdG9wQ2FwdHVyZXJTb3VyY2UgfCB1bmRlZmluZWQsXG4gICk6IHZvaWQge1xuICAgIGlmIChzb3VyY2VFcnJvcikge1xuICAgICAgY29uc3QgeyByZXF1ZXN0SWQsIC4uLmVycm9yIH0gPSBzb3VyY2VFcnJvcjtcbiAgICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnbWVkaWEtc291cmNlLWNhbGxiYWNrJywgeyByZXF1ZXN0SWQsIGVycm9yIH0pO1xuICAgICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdtZWRpYS1zb3VyY2UtY2FsbGJhY2stdjEnLCB7IHJlcXVlc3RJZCwgZXJyb3IgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGVkU291cmNlICYmIHNlbGVjdGVkU291cmNlLnJlcXVlc3RJZCkge1xuICAgICAgY29uc3QgeyByZXF1ZXN0SWQsIC4uLnNvdXJjZSB9ID0gc2VsZWN0ZWRTb3VyY2U7XG4gICAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ21lZGlhLXNvdXJjZS1jYWxsYmFjaycsIHtcbiAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIGVycm9yOiBzb3VyY2VFcnJvcixcbiAgICAgIH0pO1xuICAgICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdtZWRpYS1zb3VyY2UtY2FsbGJhY2stdjEnLCB7XG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgcmVzcG9uc2U6IHsgc291cmNlLCBlcnJvcjogc291cmNlRXJyb3IgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3Qgbm90aWZpY2F0aW9uIGV2ZW50c1xuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ31cbiAgICogQHBhcmFtIGRhdGEge09iamVjdH1cbiAgICovXG4gIHByaXZhdGUgbm90aWZpY2F0aW9uQ2FsbGJhY2soZXZlbnQsIGRhdGEpIHtcbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoZXZlbnQsIGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGJyb2FkY2FzdCBtZXNzYWdlcyB0byBhIHNwZWNpZmljIG9yaWdpbiB2aWEgcG9zdE1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZGF0YSB7YW55fVxuICAgKi9cbiAgcHJpdmF0ZSBicm9hZGNhc3RNZXNzYWdlKG1ldGhvZDogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpcGNSZW5kZXJlclxuICAgICAgLmludm9rZShhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5nZXRDdXJyZW50T3JpZ2luVXJsLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChvcmlnaW4pID0+IHtcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgbWV0aG9kLCBkYXRhIH0sIG9yaWdpbik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBhcHBCcmlkZ2UgPSBuZXcgQXBwQnJpZGdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcEJyaWRnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==