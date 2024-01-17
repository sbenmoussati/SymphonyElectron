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
    apiCmds["isMediaEnabled"] = "is-media-enabled";
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
        captureWindow = await electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.invoke(common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiName.symphonyApi, {
            cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiCmds.isAeroGlassEnabled,
        });
    }
    if (captureWindow) {
        sourcesOpts.push('window');
    }
    if (captureScreen) {
        sourcesOpts.push('screen');
    }
    const isEnabled = await electron__WEBPACK_IMPORTED_MODULE_3__.ipcRenderer.invoke(common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiName.symphonyApi, {
        cmd: common_api_interface__WEBPACK_IMPORTED_MODULE_0__.apiCmds.isMediaEnabled,
    });
    // displays a dialog if media permissions are disable
    if (!isEnabled) {
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
// // event that updates screen share permission
// ipcRenderer.on(ScreenShareEvents.IS_ENABLED, (event, canShareScreen) => {
//   console.log(event, canShareScreen);
//   if (typeof canShareScreen === 'boolean' && canShareScreen) {
//     isScreenShareEnabled = canShareScreen;
//   }
// });


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

module.exports = JSON.parse('{"name":"symphony","productName":"Symphony","version":"24.2.0","clientVersion":"2.0.1","buildNumber":"0","searchAPIVersion":"1.55.3","sfeVersion":"0","sfeClientType":"2.0","description":"Symphony desktop app (Foundation ODP)","author":"Symphony OSS <help@finos.org>","main":"./src/app/init.ts","scripts":{"build":"concurrently \\"npm run build:main\\" \\"npm run build:renderer\\"","build:dll":"cross-env NODE_ENV=development TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.renderer.dev.dll.ts","build:main":"cross-env NODE_ENV=production TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.main.prod.ts","build:renderer":"cross-env NODE_ENV=production TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.renderer.prod.ts","postinstall":"ts-node .erb/scripts/check-native-dep.js && electron-builder install-app-deps && npm run build:dll","lint":"cross-env NODE_ENV=development eslint . --ext .js,.jsx,.ts,.tsx","package":"ts-node ./.erb/scripts/clean.js dist && npm run build && electron-builder build --publish never && npm run build:dll","rebuild":"electron-rebuild --parallel --types prod,dev,optional --module-dir release/app","start":"ts-node ./.erb/scripts/check-port-in-use.js && npm run start:renderer","start:main":"cross-env NODE_ENV=development electronmon -r ts-node/register/transpile-only .","start:preload":"cross-env NODE_ENV=development TS_NODE_TRANSPILE_ONLY=true webpack --config ./.erb/configs/webpack.config.preload.dev.ts","start:renderer":"cross-env NODE_ENV=development TS_NODE_TRANSPILE_ONLY=true webpack serve --config ./.erb/configs/webpack.config.renderer.dev.ts","test":"jest"},"build":{"appId":"com.symphony.electron-desktop","compression":"maximum","artifactName":"${productName}-${version}-${os}.${ext}","asar":true,"asarUnpack":"**\\\\*.{node,dll}","files":["dist","node_modules","package.json"],"extraFiles":["config/Symphony.config","config/InstallVariant.info","node_modules/screen-share-indicator-frame/SymphonyScreenShareIndicator"],"nsis":{"perMachine":false,"oneClick":true,"allowToChangeInstallationDirectory":false,"allowElevation":false,"include":"build/installer.nsh","uninstallDisplayName":"${productName}"},"mac":{"category":"public.app-category.business","icon":"images/icon.icns","entitlements":"entitlements.mac.plist","notarize":false,"entitlementsInherit":"entitlements.mac.plist","extendInfo":{"CFBundleURLTypes":[{"CFBundleTypeRole":"Viewer","CFBundleURLName":"SymTel","CFBundleURLSchemes":["tel"]}]},"gatekeeperAssess":true,"hardenedRuntime":true,"target":["dir","zip"]},"win":{"icon":"images/icon.ico","target":["dir","nsis"],"extraFiles":[{"from":"node_modules/screen-share-indicator-frame/ScreenShareIndicatorFrame.exe","to":"ScreenShareIndicatorFrame.exe"},{"from":"node_modules/screen-snippet/ScreenSnippet.exe","to":"ScreenSnippet.exe"},{"from":"node_modules/symphony-native-window-handle-helper/SymphonyNativeWindowHandleHelper.exe","to":"SymphonyNativeWindowHandleHelper.exe"},{"from":"node_modules/@symphony/symphony-c9-shell/shell","to":"cloud9/shell","filter":["**/*"]}]},"linux":{"category":"Network;InstantMessaging;Chat","desktop":{"StartupWMClass":"Symphony"},"target":["deb","rpm"],"icon":"images/linux"},"directories":{"app":"release/app","buildResources":"assets","output":"release/build"},"extraResources":["./assets/**"]},"repository":{"type":"git","url":"git+https://github.com/finos/SymphonyElectron.git"},"keywords":["Symphony","start"],"license":"Apache-2.0","bugs":{"url":"https://support.symphony.com"},"browserslist":[],"prettier":{"singleQuote":true,"overrides":[{"files":[".prettierrc",".eslintrc"],"options":{"parser":"json"}}]},"jest":{"moduleDirectories":["node_modules","release/app/node_modules","src"],"moduleFileExtensions":["js","jsx","ts","tsx","json"],"moduleNameMapper":{"\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/.erb/mocks/fileMock.js","\\\\.(css|less|sass|scss)$":"identity-obj-proxy"},"setupFiles":["./.erb/scripts/check-build-exists.ts"],"testEnvironment":"jsdom","testEnvironmentOptions":{"url":"http://localhost/"},"testPathIgnorePatterns":["release/app/dist",".erb/dll"],"transform":{"\\\\.(ts|tsx|js|jsx)$":"ts-jest"}},"dependencies":{"classnames":"^2.2.6","electron-debug":"^3.2.0","electron-log":"^4.4.8","electron-updater":"^5.3.0","lazy-brush":"^2.0.1","react":"^18.2.0","react-dom":"^18.2.0","react-router-dom":"^6.11.2","save-svg-as-png":"^1.4.17","systeminformation":"^5.21.22"},"devDependencies":{"@electron/notarize":"^1.2.3","@electron/rebuild":"^3.2.13","@pmmmwh/react-refresh-webpack-plugin":"^0.5.10","@svgr/webpack":"^8.0.1","@teamsupercell/typings-for-css-modules-loader":"^2.5.2","@testing-library/jest-dom":"^5.16.5","@testing-library/react":"^14.0.0","@types/fs-extra":"^9.0.0","@types/jest":"^29.5.2","@types/node":"20.2.5","@types/react":"^18.2.8","@types/react-dom":"^18.2.4","@types/react-test-renderer":"^18.0.0","@types/terser-webpack-plugin":"^5.0.4","@types/webpack-bundle-analyzer":"^4.6.0","@typescript-eslint/eslint-plugin":"^5.59.8","@typescript-eslint/parser":"^5.59.8","archiver":"^5.3.1","async.map":"0.5.2","browserslist-config-erb":"^0.0.3","chalk":"^4.1.2","concurrently":"^8.1.0","core-js":"^3.30.2","cross-env":"^7.0.3","css-loader":"^6.8.1","css-minimizer-webpack-plugin":"^5.0.0","del":"3.0.0","detect-port":"^1.5.1","electron":"latest","electron-builder":"^24.2.1","electron-devtools-installer":"^3.2.0","electron-dl":"^3.5.1","electron-fetch":"^1.9.1","electronmon":"^2.0.2","eslint":"^8.42.0","eslint-config-airbnb-base":"^15.0.0","eslint-config-erb":"^4.0.6","eslint-import-resolver-typescript":"^3.5.5","eslint-import-resolver-webpack":"^0.13.2","eslint-plugin-compat":"^4.1.4","eslint-plugin-import":"^2.27.5","eslint-plugin-jest":"^27.2.1","eslint-plugin-jsx-a11y":"^6.7.1","eslint-plugin-promise":"^6.1.1","eslint-plugin-react":"^7.32.2","eslint-plugin-react-hooks":"^4.6.0","file-loader":"^6.2.0","filesize":"^10.0.12","html-webpack-plugin":"^5.5.1","husky":"^4.3.8","identity-obj-proxy":"^3.0.0","jest":"^29.5.0","jest-environment-jsdom":"^29.5.0","less":"^4.2.0","less-loader":"^11.1.3","mini-css-extract-plugin":"^2.7.6","prettier":"^2.8.8","react-refresh":"^0.14.0","react-test-renderer":"^18.2.0","rimraf":"^5.0.1","sass":"^1.62.1","sass-loader":"^13.3.1","shell-path":"^3.0.0","style-loader":"^3.3.3","terser-webpack-plugin":"^5.3.9","ts-jest":"^29.1.0","ts-loader":"^9.4.3","ts-node":"^10.9.1","tsconfig-paths-webpack-plugin":"^4.0.1","typescript":"^5.1.3","url-loader":"^4.1.1","webpack":"^5.85.0","webpack-bundle-analyzer":"^4.9.0","webpack-cli":"^5.1.1","webpack-dev-server":"^4.15.0","webpack-merge":"^5.9.0","winreg":"^1.2.5"},"optionalDependencies":{"@symphony/symphony-c9-shell":"3.29.0-0.98.3.175","screen-share-indicator-frame":"git+https://github.com/finos/ScreenShareIndicatorFrame.git#v1.4.13","screen-snippet":"git+https://github.com/finos/ScreenSnippet2.git#9.2.2","symphony-native-window-handle-helper":"github:finos/SymphonyWindowsHwndHelper#1.0.1"},"devEngines":{"node":">=18.x","npm":">=7.x"},"electronmon":{"patterns":["!**/**","src/app/**","config/**"],"logLevel":"quiet"}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsSUFBUztRQUNoRCxpREFBVzthQUNSLE1BQU0sQ0FBQyx5REFBTyxDQUFDLFdBQVcsRUFBRTtZQUMzQixHQUFHLEVBQUUseURBQU8sQ0FBQyxtQkFBbUI7U0FDakMsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRjtBQUVELE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFbEMsaUVBQWUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ltcGhvbnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3N5bXBob255Ly4vc3JjL2FwcC9zc2YtYXBpLnRzIiwid2VicGFjazovL3N5bXBob255Ly4vc3JjL2NvbW1vbi9hcGktaW50ZXJmYWNlLnRzIiwid2VicGFjazovL3N5bXBob255Ly4vc3JjL2NvbW1vbi9lbnYudHMiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvLi9zcmMvY29tbW9uL2kxOG4tcHJlbG9hZC50cyIsIndlYnBhY2s6Ly9zeW1waG9ueS8uL3NyYy9jb21tb24vaXBjRXZlbnQudHMiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvLi9zcmMvY29tbW9uL3V0aWxzLnRzIiwid2VicGFjazovL3N5bXBob255Ly4vc3JjL3JlbmRlcmVyL2NvbXBvbmVudHMvZGVza3RvcC1jYXB0dXJlci9kZXNrdG9wLWNhcHR1cmVyLnRzIiwid2VicGFjazovL3N5bXBob255L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL3N5bXBob255L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N5bXBob255L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N5bXBob255L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zeW1waG9ueS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N5bXBob255L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ltcGhvbnkvLi9zcmMvYXBwL3ByZWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCB7IGlwY1JlbmRlcmVyLCB3ZWJGcmFtZSB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7XG4gIGJ1aWxkTnVtYmVyLFxuICBuYW1lLFxuICBzZWFyY2hBUElWZXJzaW9uLFxuICB2ZXJzaW9uLFxufSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgQXV0b1VwZGF0ZVRyaWdnZXIgfSBmcm9tICcuL2F1dG8tdXBkYXRlLWhhbmRsZXInO1xuaW1wb3J0IHtcbiAgYXBpQ21kcyxcbiAgYXBpTmFtZSxcbiAgQ29uZmlnVXBkYXRlVHlwZSxcbiAgRVByZXNlbmNlU3RhdHVzQ2F0ZWdvcnksXG4gIElCb3VuZHNDaGFuZ2UsXG4gIElDYWxsTm90aWZpY2F0aW9uRGF0YSxcbiAgSUNsb3VkOVBpcGUsXG4gIElDUFVVc2FnZSxcbiAgSUxvZ01zZyxcbiAgSU1lZGlhUGVybWlzc2lvbixcbiAgSU5vdGlmaWNhdGlvbkRhdGEsXG4gIElQcmVzZW5jZVN0YXR1cyxcbiAgSVJlc3RhcnRGbG9hdGVyRGF0YSxcbiAgSVNjcmVlblNoYXJpbmdJbmRpY2F0b3IsXG4gIElTY3JlZW5TaGFyaW5nSW5kaWNhdG9yT3B0aW9ucyxcbiAgSVNjcmVlblNuaXBwZXQsXG4gIElTdGF0dXNCYWRnZSxcbiAgSVZlcnNpb25JbmZvLFxuICBLZXlDb2RlcyxcbiAgTG9nTGV2ZWwsXG4gIE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrLFxuICBQaG9uZU51bWJlclByb3RvY29sLFxufSBmcm9tICcuLi9jb21tb24vYXBpLWludGVyZmFjZSc7XG5pbXBvcnQgeyBpMThuLCBMb2NhbGVUeXBlIH0gZnJvbSAnLi4vY29tbW9uL2kxOG4tcHJlbG9hZCc7XG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBnZXRTb3VyY2UgfSBmcm9tICdyZW5kZXJlci9jb21wb25lbnRzL2Rlc2t0b3AtY2FwdHVyZXIvZGVza3RvcC1jYXB0dXJlcic7XG5pbXBvcnQgeyBTY3JlZW5TaGFyZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9pcGNFdmVudCc7XG4vLyBpbXBvcnQgU1NGTm90aWZpY2F0aW9uSGFuZGxlciBmcm9tICcuL25vdGlmaWNhdGlvbi1zc2YtaGFuZGxlcic7XG4vLyBpbXBvcnQgeyBTY3JlZW5TbmlwcGV0QmNIYW5kbGVyIH0gZnJvbSAnLi9zY3JlZW4tc25pcHBldC1iYy1oYW5kbGVyJztcblxuY29uc3QgU1VQUE9SVEVEX1NFVFRJTkdTID0gWydmbGFzaGluZy1ub3RpZmljYXRpb25zJ107XG5jb25zdCBNQUlOX1dJTkRPV19OQU1FID0gJ21haW4nO1xuXG5sZXQgaXNBbHRLZXk6IGJvb2xlYW4gPSBmYWxzZTtcbmxldCBpc01lbnVPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsT2JqZWN0IHtcbiAgLy8gaXBjUmVuZGVyZXI7XG4gIGxvZ2dlcj86IChtc2c6IElMb2dNc2csIGxvZ0xldmVsOiBMb2dMZXZlbCwgc2hvd0luQ29uc29sZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgYWN0aXZpdHlEZXRlY3Rpb25DYWxsYmFjaz86IChhcmc6IG51bWJlcikgPT4gdm9pZDtcbiAgZG93bmxvYWRNYW5hZ2VyQ2FsbGJhY2s/OiAoYXJnPzogYW55KSA9PiB2b2lkO1xuICBzY3JlZW5TbmlwcGV0Q2FsbGJhY2s/OiAoYXJnOiBJU2NyZWVuU25pcHBldCkgPT4gdm9pZDtcbiAgYm91bmRzQ2hhbmdlQ2FsbGJhY2s/OiAoYXJnOiBJQm91bmRzQ2hhbmdlKSA9PiB2b2lkO1xuICBzY3JlZW5TaGFyaW5nSW5kaWNhdG9yQ2FsbGJhY2s/OiAoYXJnOiBJU2NyZWVuU2hhcmluZ0luZGljYXRvcikgPT4gdm9pZDtcbiAgcHJvdG9jb2xBY3Rpb25DYWxsYmFjaz86IChhcmc6IHN0cmluZykgPT4gdm9pZDtcbiAgY29sbGVjdExvZ3NDYWxsYmFjaz86IEFycmF5PCgpID0+IHZvaWQ+O1xuICBhbmFseXRpY3NFdmVudEhhbmRsZXI/OiAoYXJnOiBhbnkpID0+IHZvaWQ7XG4gIHJlc3RhcnRGbG9hdGVyPzogKGFyZzogSVJlc3RhcnRGbG9hdGVyRGF0YSkgPT4gdm9pZDtcbiAgc2hvd0NsaWVudEJhbm5lckNhbGxiYWNrPzogQXJyYXk8XG4gICAgKHJlYXNvbjogc3RyaW5nLCBhY3Rpb246IENvbmZpZ1VwZGF0ZVR5cGUsIGRhdGE/OiBvYmplY3QpID0+IHZvaWRcbiAgPjtcbiAgYzlQaXBlRXZlbnRDYWxsYmFjaz86IChldmVudDogc3RyaW5nLCBhcmc/OiBhbnkpID0+IHZvaWQ7XG4gIC8vIGM5TWVzc2FnZUNhbGxiYWNrPzogKHN0YXR1czogSVNoZWxsU3RhdHVzKSA9PiB2b2lkO1xuICB1cGRhdGVNeVByZXNlbmNlQ2FsbGJhY2s/OiAocHJlc2VuY2U6IEVQcmVzZW5jZVN0YXR1c0NhdGVnb3J5KSA9PiB2b2lkO1xuICBwaG9uZU51bWJlckNhbGxiYWNrPzogKGFyZzogc3RyaW5nKSA9PiB2b2lkO1xuICBpcGNSZW5kZXJlcjogSXBjUmVuZGVyZXJcbn1cblxuY29uc3QgbG9jYWw6IElMb2NhbE9iamVjdCA9IHtcbiAgaXBjUmVuZGVyZXIsXG59O1xuXG5jb25zdCBub3RpZmljYXRpb25BY3Rpb25DYWxsYmFja3MgPSBuZXcgTWFwPFxuICBudW1iZXIsXG4gIE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrXG4+KCk7XG5cbmNvbnN0IGNhbGxOb3RpZmljYXRpb25BY3Rpb25DYWxsYmFja3MgPSBuZXcgTWFwPFxuICBudW1iZXIsXG4gIE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrXG4+KCk7XG5cbmNvbnN0IERFRkFVTFRfVEhST1RUTEUgPSAxMDAwO1xuXG4vLyBUaHJvdHRsZSBmdW5jXG5jb25zdCB0aHJvdHRsZWRTZXRCYWRnZUNvdW50ID0gdGhyb3R0bGUoKGNvdW50KSA9PiB7XG4gIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5zZXRCYWRnZUNvdW50LFxuICAgIGNvdW50LFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRTZXRMb2NhbGUgPSB0aHJvdHRsZSgobG9jYWxlKSA9PiB7XG4gIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5zZXRMb2NhbGUsXG4gICAgbG9jYWxlLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRBY3RpdmF0ZSA9IHRocm90dGxlKCh3aW5kb3dOYW1lKSA9PiB7XG4gIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5hY3RpdmF0ZSxcbiAgICB3aW5kb3dOYW1lLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRCcmluZ1RvRnJvbnQgPSB0aHJvdHRsZSgod2luZG93TmFtZSwgcmVhc29uKSA9PiB7XG4gIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5icmluZ1RvRnJvbnQsXG4gICAgd2luZG93TmFtZSxcbiAgICByZWFzb24sXG4gIH0pO1xufSwgREVGQVVMVF9USFJPVFRMRSk7XG5cbmNvbnN0IHRocm90dGxlZENsb3NlU2NyZWVuU2hhcmVJbmRpY2F0b3IgPSB0aHJvdHRsZSgoc3RyZWFtSWQpID0+IHtcbiAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgY21kOiBhcGlDbWRzLmNsb3NlV2luZG93LFxuICAgIHdpbmRvd1R5cGU6ICdzY3JlZW4tc2hhcmluZy1pbmRpY2F0b3InLFxuICAgIHdpbktleTogc3RyZWFtSWQsXG4gIH0pO1xufSwgREVGQVVMVF9USFJPVFRMRSk7XG5cbmNvbnN0IHRocm90dGxlZFNldElzSW5NZWV0aW5nU3RhdHVzID0gdGhyb3R0bGUoKGlzSW5NZWV0aW5nKSA9PiB7XG4gIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5zZXRJc0luTWVldGluZyxcbiAgICBpc0luTWVldGluZyxcbiAgfSk7XG59LCBERUZBVUxUX1RIUk9UVExFKTtcblxuY29uc3QgdGhyb3R0bGVkU2V0Q2xvdWRDb25maWcgPSB0aHJvdHRsZSgoZGF0YSkgPT4ge1xuICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuc2V0Q2xvdWRDb25maWcsXG4gICAgY2xvdWRDb25maWc6IGRhdGEsXG4gIH0pO1xufSwgREVGQVVMVF9USFJPVFRMRSk7XG5cbmNvbnN0IHRocm90dGxlZE9wZW5Eb3dubG9hZGVkSXRlbSA9IHRocm90dGxlKChpZDogc3RyaW5nKSA9PiB7XG4gIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5vcGVuRG93bmxvYWRlZEl0ZW0sXG4gICAgaWQsXG4gIH0pO1xufSwgREVGQVVMVF9USFJPVFRMRSk7XG5cbmNvbnN0IHRocm90dGxlZFNob3dEb3dubG9hZGVkSXRlbSA9IHRocm90dGxlKChpZDogc3RyaW5nKSA9PiB7XG4gIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5zaG93RG93bmxvYWRlZEl0ZW0sXG4gICAgaWQsXG4gIH0pO1xufSwgREVGQVVMVF9USFJPVFRMRSk7XG5cbmNvbnN0IHRocm90dGxlZENsZWFyRG93bmxvYWRlZEl0ZW1zID0gdGhyb3R0bGUoKCkgPT4ge1xuICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICBjbWQ6IGFwaUNtZHMuY2xlYXJEb3dubG9hZGVkSXRlbXMsXG4gIH0pO1xufSwgREVGQVVMVF9USFJPVFRMRSk7XG5cbmNvbnN0IHRocm90dGxlZFJlc3RhcnQgPSB0aHJvdHRsZSgoKSA9PiB7XG4gIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5yZXN0YXJ0QXBwLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5jb25zdCB0aHJvdHRsZWRTZXRab29tTGV2ZWwgPSB0aHJvdHRsZSgoem9vbUxldmVsKSA9PiB7XG4gIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5zZXRab29tTGV2ZWwsXG4gICAgem9vbUxldmVsLFxuICB9KTtcbn0sIERFRkFVTFRfVEhST1RUTEUpO1xuXG5sZXQgbmV4dEluZGljYXRvcklkID0gMDtcblxuZXhwb3J0IGNsYXNzIFNTRkFwaSB7XG4gIC8vIHB1YmxpYyBOb3RpZmljYXRpb24gPSBTU0ZOb3RpZmljYXRpb25IYW5kbGVyOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgLyoqXG4gICAqIEltcGxlbWVudHMgZXF1aXZhbGVudCBvZiBkZXNrdG9wQ2FwdHVyZXIuZ2V0U291cmNlcyAtIHRoYXQgd29ya3MgaW5cbiAgICogYSBzYW5kYm94ZWQgcmVuZGVyZXIgcHJvY2Vzcy5cbiAgICogc2VlOiBodHRwczovL2VsZWN0cm9uLmF0b20uaW8vZG9jcy9hcGkvZGVza3RvcC1jYXB0dXJlci9cbiAgICogZm9yIGludGVyZmFjZTogc2VlIGRvY3VtZW50YXRpb24gaW4gZGVza3RvcENhcHR1cmVyL2dldFNvdXJjZS5qc1xuICAgKlxuICAgKiBUaGlzIG9wZW5zIGEgd2luZG93IGFuZCBkaXNwbGF5cyBhbGwgdGhlIGRlc2t0b3Agc291cmNlc1xuICAgKiBhbmQgcmV0dXJucyBzZWxlY3RlZCBzb3VyY2VcbiAgICovXG4gIHB1YmxpYyBnZXRNZWRpYVNvdXJjZSA9IGdldFNvdXJjZTtcblxuICAvKipcbiAgICogQnJpbmdzIHdpbmRvdyBmb3J3YXJkIGFuZCBnaXZlcyBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSB3aW5kb3dOYW1lIC0gTmFtZSBvZiB3aW5kb3cuIE5vdGU6IG1haW4gd2luZG93IG5hbWUgaXMgJ21haW4nXG4gICAqL1xuICBwdWJsaWMgYWN0aXZhdGUod2luZG93TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3dOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3R0bGVkQWN0aXZhdGUod2luZG93TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJyaW5ncyB3aW5kb3cgZm9yd2FyZCBhbmQgZ2l2ZXMgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gd2luZG93TmFtZSBOYW1lIG9mIHdpbmRvdy4gTm90ZTogbWFpbiB3aW5kb3cgbmFtZSBpcyAnbWFpbidcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlYXNvbiwgVGhlIHJlYXNvbiBmb3Igd2hpY2ggdGhlIHdpbmRvdyBpcyB0byBiZSBhY3RpdmF0ZWRcbiAgICovXG4gIHB1YmxpYyBicmluZ1RvRnJvbnQod2luZG93TmFtZTogc3RyaW5nLCByZWFzb246IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm90dGxlZEJyaW5nVG9Gcm9udCh3aW5kb3dOYW1lLCByZWFzb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCByZXR1cm5zIHZhcmlvdXMgdmVyc2lvbiBpbmZvXG4gICAqL1xuICBwdWJsaWMgZ2V0VmVyc2lvbkluZm8oKTogUHJvbWlzZTxJVmVyc2lvbkluZm8+IHtcbiAgICBjb25zdCBhcHBOYW1lID0gbmFtZTtcbiAgICBjb25zdCBhcHBWZXIgPSB2ZXJzaW9uO1xuICAgIGNvbnN0IGNwdUFyY2ggPSBwcm9jZXNzLmFyY2ggfHwgJyc7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIGNvbnRhaW5lcklkZW50aWZpZXI6IGFwcE5hbWUsXG4gICAgICBjb250YWluZXJWZXI6IGFwcFZlcixcbiAgICAgIGJ1aWxkTnVtYmVyLFxuICAgICAgYXBpVmVyOiAnMy4wLjAnLFxuICAgICAgY3B1QXJjaCxcbiAgICAgIC8vIE9ubHkgbmVlZCB0byBidW1wIGlmIHRoZXJlIGFyZSBhbnkgYnJlYWtpbmcgY2hhbmdlcy5cbiAgICAgIHNlYXJjaEFwaVZlcjogc2VhcmNoQVBJVmVyc2lvbixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gcmVnaXN0ZXIgYSBhY3Rpdml0eSBkZXRlY3RvciB0aGF0IGNhbiBiZSB1c2VkIGJ5IGVsZWN0cm9uIG1haW4gcHJvY2Vzcy5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBwZXJpb2QgLSBtaW5pbXVtIHVzZXIgaWRsZSB0aW1lIGluIG1pbGxpc2Vjb25kXG4gICAqIEBwYXJhbSAge09iamVjdH0gYWN0aXZpdHlEZXRlY3Rpb25DYWxsYmFjayAtIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCBhY2NlcHRpbmdcbiAgICogQGV4YW1wbGUgcmVnaXN0ZXJBY3Rpdml0eURldGVjdGlvbig0MDAwMCwgZnVuYylcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckFjdGl2aXR5RGV0ZWN0aW9uKFxuICAgIHBlcmlvZDogbnVtYmVyLFxuICAgIGFjdGl2aXR5RGV0ZWN0aW9uQ2FsbGJhY2s6IChhcmc6IG51bWJlcikgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2aXR5RGV0ZWN0aW9uQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLmFjdGl2aXR5RGV0ZWN0aW9uQ2FsbGJhY2sgPSBhY3Rpdml0eURldGVjdGlvbkNhbGxiYWNrO1xuXG4gICAgICAvLyBvbmx5IG1haW4gd2luZG93IGNhbiByZWdpc3RlclxuICAgICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgIGNtZDogYXBpQ21kcy5yZWdpc3RlckFjdGl2aXR5RGV0ZWN0aW9uLFxuICAgICAgICBwZXJpb2QsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBkb3dubG9hZCBoYW5kbGVyXG4gICAqIEBwYXJhbSBkb3dubG9hZE1hbmFnZXJDYWxsYmFjayBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgYnkgdGhlIGRvd25sb2FkIGhhbmRsZXJcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckRvd25sb2FkSGFuZGxlcihcbiAgICBkb3dubG9hZE1hbmFnZXJDYWxsYmFjazogKGFyZzogYW55KSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgZG93bmxvYWRNYW5hZ2VyQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLmRvd25sb2FkTWFuYWdlckNhbGxiYWNrID0gZG93bmxvYWRNYW5hZ2VyQ2FsbGJhY2s7XG4gICAgfVxuXG4gICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMucmVnaXN0ZXJEb3dubG9hZEhhbmRsZXIsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIEpTIHRvIHJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aGVuIHNpemUvcG9zaXRpb25zXG4gICAqIGNoYW5nZXMgZm9yIGFueSBwb3Atb3V0IHdpbmRvdyAoaS5lLiwgd2luZG93Lm9wZW4pLiBUaGUgbWFpblxuICAgKiBwcm9jZXNzIHdpbGwgZW1pdCBJUEMgZXZlbnQgJ2JvdW5kc0NoYW5nZScgKHNlZSBiZWxvdykuIEN1cnJlbnRseVxuICAgKiBvbmx5IG9uZSB3aW5kb3cgY2FuIHJlZ2lzdGVyIGZvciBib3VuZHMgY2hhbmdlLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gaW52b2tlZCB3aGVuIGJvdW5kcyBjaGFuZ2VzLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyQm91bmRzQ2hhbmdlKGNhbGxiYWNrOiAoYXJnOiBJQm91bmRzQ2hhbmdlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwuYm91bmRzQ2hhbmdlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIEpTIHRvIHJlZ2lzdGVyIGEgbG9nZ2VyIHRoYXQgY2FuIGJlIHVzZWQgYnkgZWxlY3Ryb24gbWFpbiBwcm9jZXNzLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGxvZ2dlciAgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkIGFjY2VwdGluZ1xuICAgKiBvYmplY3Q6IHtcbiAgICogIGxvZ0xldmVsOiAnRVJST1InfCdDT05GTElDVCd8J1dBUk4nfCdBQ1RJT04nfCdJTkZPJ3wnREVCVUcnLFxuICAgKiAgbG9nRGV0YWlsczogU3RyaW5nXG4gICAqICB9XG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJMb2dnZXIoXG4gICAgbG9nZ2VyOiAobXNnOiBJTG9nTXNnLCBsb2dMZXZlbDogTG9nTGV2ZWwsIHNob3dJbkNvbnNvbGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBsb2dnZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLmxvZ2dlciA9IGxvZ2dlcjtcblxuICAgICAgLy8gb25seSBtYWluIHdpbmRvdyBjYW4gcmVnaXN0ZXJcbiAgICAgIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgICBjbWQ6IGFwaUNtZHMucmVnaXN0ZXJMb2dnZXIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIEpTIHRvIHJlZ2lzdGVyIGEgcHJvdG9jb2wgaGFuZGxlciB0aGF0IGNhbiBiZSB1c2VkIGJ5IHRoZVxuICAgKiBlbGVjdHJvbiBtYWluIHByb2Nlc3MuXG4gICAqXG4gICAqIEBwYXJhbSBwcm90b2NvbEhhbmRsZXIge0Z1bmN0aW9ufSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGFwcCBpc1xuICAgKiBpbnZva2VkIHdpdGggcmVnaXN0ZXJlZCBwcm90b2NvbCAoZS5nLiwgc3ltcGhvbnkpLiBUaGUgY2FsbGJhY2tcbiAgICogcmVjZWl2ZXMgYSBzaW5nbGUgc3RyaW5nIGFyZ3VtZW50OiBmdWxsIHVyaSB0aGF0IHRoZSBhcHAgd2FzXG4gICAqIGludm9rZWQgd2l0aCBlLmcuLCBzeW1waG9ueTovLz9zdHJlYW1JZD14eXoxMjMmc3RyZWFtVHlwZT1jaGF0cm9vbVxuICAgKlxuICAgKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhZnRlciBjbGllbnQgYXBwIGlzIGZ1bGx5XG4gICAqIGFibGUgZm9yIHByb3RvY29sSGFuZGxlciBjYWxsYmFjayB0byBiZSBpbnZva2VkLiAgSXQgaXMgcG9zc2libGVcbiAgICogdGhlIGFwcCB3YXMgc3RhcnRlZCB1c2luZyBwcm90b2NvbCBoYW5kbGVyLCBpbiB0aGlzIGNhc2UgYXMgc29vbiBhc1xuICAgKiB0aGlzIHJlZ2lzdHJhdGlvbiBmdW5jIGlzIGludm9rZWQgdGhlbiB0aGUgcHJvdG9jb2xIYW5kbGVyIGNhbGxiYWNrXG4gICAqIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyUHJvdG9jb2xIYW5kbGVyKHByb3RvY29sSGFuZGxlcik6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgcHJvdG9jb2xIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbC5wcm90b2NvbEFjdGlvbkNhbGxiYWNrID0gcHJvdG9jb2xIYW5kbGVyO1xuXG4gICAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLnJlZ2lzdGVyUHJvdG9jb2xIYW5kbGVyLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byByZWdpc3RlciBhIGxvZyByZXRyaWV2ZXIgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGVcbiAgICogZWxlY3Ryb24gbWFpbiBwcm9jZXNzIHRvIHJldHJpZXZlIGN1cnJlbnQgbG9ncy5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlckxvZ1JldHJpZXZlcihjb2xsZWN0TG9nczogKCkgPT4gdm9pZCwgbG9nTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBjb2xsZWN0TG9ncyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKCFsb2NhbC5jb2xsZWN0TG9nc0NhbGxiYWNrKSB7XG4gICAgICAgIGxvY2FsLmNvbGxlY3RMb2dzQ2FsbGJhY2sgPSBuZXcgQXJyYXk8KCkgPT4gdm9pZD4oKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsLmNvbGxlY3RMb2dzQ2FsbGJhY2sucHVzaChjb2xsZWN0TG9ncyk7XG5cbiAgICAgIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgICBjbWQ6IGFwaUNtZHMucmVnaXN0ZXJMb2dSZXRyaWV2ZXIsXG4gICAgICAgIGxvZ05hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBsb2cgZmlsZXMgdG8gbWFpbiBwcm9jZXNzIHdoZW4gcmVxdWVzdGVkLlxuICAgKi9cbiAgcHVibGljIHNlbmRMb2dzKGxvZ05hbWU6IHN0cmluZywgbG9nRmlsZXMpOiB2b2lkIHtcbiAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5zZW5kTG9ncyxcbiAgICAgIGxvZ3M6IHsgbG9nTmFtZSwgbG9nRmlsZXMgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gcmVnaXN0ZXIgYW5hbHl0aWNzIGV2ZW50IGhhbmRsZXJcbiAgICogdG8gcGFzcyBhbmFseXRpY3MgZXZlbnQgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gYW5hbHl0aWNzRXZlbnRIYW5kbGVyXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJBbmFseXRpY3NFdmVudChhbmFseXRpY3NFdmVudEhhbmRsZXIpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGFuYWx5dGljc0V2ZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwuYW5hbHl0aWNzRXZlbnRIYW5kbGVyID0gYW5hbHl0aWNzRXZlbnRIYW5kbGVyO1xuXG4gICAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLnJlZ2lzdGVyQW5hbHl0aWNzSGFuZGxlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvc2Ugb2xkIHNjcmVlbiBzbmlwcGV0IGFwaSB0byBzdXBwb3J0IGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAvLyBwdWJsaWMgU2NyZWVuU25pcHBldCA9IFNjcmVlblNuaXBwZXRCY0hhbmRsZXI7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBwcmVzZW5jZSBvZiBjdXJyZW50IHVzZXJcbiAgICogQHBhcmFtIGNhbGxiYWNrIChwcmVzZW5jZTpJUHJlc2VuY2VTdGF0dXMpPT52b2lkXG4gICAqIGlmIG5vbmUgaXMgcHJvdmlkZWQgdGhlbiB0aGUgb2xkIGxvZ2ljIHdpbGwgYmUgdHJpZ2dlcmVkLlxuICAgKiBJIGRvbnQgc2VuZCB0aGlzIGV2ZW50IHRvIG1haW4tYXBpLWhhbmRsZXIgYmVjYXVzZSB0aGlzIHdpbGwgb25seSBhY3QgYXMgYSBjYWxsYmFjayBhc3NpZ25tZW50XG4gICAqIEl0IHdpbGwgb25seSB0cmlnZ2VyIGlmIHlvdSBoaXQgYW55IGJ1dHRvbiBhdCBwcmVzZW5jZS1zdGF0dXMtaGFuZGxlclxuICAgKlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZU15UHJlc2VuY2UoXG4gICAgY2FsbGJhY2s6IChjYXRlZ29yeTogRVByZXNlbmNlU3RhdHVzQ2F0ZWdvcnkpID0+IHZvaWRcbiAgKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwudXBkYXRlTXlQcmVzZW5jZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwcmVzZW5jZSBvZiBjdXJyZW50IHVzZXJcbiAgICogQHBhcmFtIG15UHJlc2VuY2UgSVByZXNlbmNlU3RhdHVzXG4gICAqL1xuICBwdWJsaWMgZ2V0TXlQcmVzZW5jZShteVByZXNlbmNlOiBJUHJlc2VuY2VTdGF0dXMpIHtcbiAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5nZXRNeVByZXNlbmNlLFxuICAgICAgc3RhdHVzOiBteVByZXNlbmNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IHVzZXIgdG8gY2FwdHVyZSBwb3J0aW9uIG9mIHNjcmVlbi5cbiAgICogVGhlcmUgaXMgYSBtZXRob2Qgb3ZlcmxvYWQgb2YgdGhpcyB3aXRoIGFkZGl0aW9uYWwgcGFyYW0gYWxsb3dzIHVzZXIgdG8gaGlkZSBTREEsXG4gICAqIGlmIG5vbmUgaXMgcHJvdmlkZWQgdGhlbiB0aGUgb2xkIGxvZ2ljIHdpbGwgYmUgdHJpZ2dlcmVkLlxuICAgKlxuICAgKiBAcGFyYW0gb3BlblNjcmVlblNuaXBwZXQge2Z1bmN0aW9ufVxuICAgKi9cbiAgcHVibGljIG9wZW5TY3JlZW5TbmlwcGV0KFxuICAgIHNjcmVlblNuaXBwZXRDYWxsYmFjazogKGFyZzogSVNjcmVlblNuaXBwZXQpID0+IHZvaWRcbiAgKTogdm9pZDtcblxuICBwdWJsaWMgb3BlblNjcmVlblNuaXBwZXQoXG4gICAgc2NyZWVuU25pcHBldENhbGxiYWNrOiAoYXJnOiBJU2NyZWVuU25pcHBldCkgPT4gdm9pZCxcbiAgICBoaWRlT25DYXB0dXJlPzogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHNjcmVlblNuaXBwZXRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwuc2NyZWVuU25pcHBldENhbGxiYWNrID0gc2NyZWVuU25pcHBldENhbGxiYWNrO1xuXG4gICAgICBpZiAoaGlkZU9uQ2FwdHVyZSkge1xuICAgICAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgICBjbWQ6IGFwaUNtZHMub3BlblNjcmVlblNuaXBwZXQsXG4gICAgICAgICAgaGlkZU9uQ2FwdHVyZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgICBjbWQ6IGFwaUNtZHMub3BlblNjcmVlblNuaXBwZXQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgYSBzY3JlZW4gY2FwdHVyZSBpbiBwcm9ncmVzc1xuICAgKi9cbiAgcHVibGljIGNsb3NlU2NyZWVuU25pcHBldCgpOiB2b2lkIHtcbiAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5jbG9zZVNjcmVlblNuaXBwZXQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXV0byB1cGRhdGVcbiAgICovXG4gIC8vIHB1YmxpYyBhdXRvVXBkYXRlKGZpbGVuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgLy8gICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgLy8gICAgIGNtZDogYXBpQ21kcy5hdXRvVXBkYXRlLFxuICAvLyAgICAgZmlsZW5hbWUsXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY291bnQgb24gdGhlIHRyYXkgaWNvbiB0byB0aGUgZ2l2ZW4gbnVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgIGNvdW50IHRvIGJlIGRpc3BsYXllZFxuICAgKiBub3RlOiBjb3VudCBvZiAwIHdpbGwgcmVtb3ZlIHRoZSBkaXNwbGF5ZWQgY291bnQuXG4gICAqIG5vdGU6IGZvciBtYWMgdGhlIG51bWJlciBkaXNwbGF5ZWQgd2lsbCBiZSAxIHRvIGluZmluaXR5XG4gICAqIG5vdGU6IGZvciB3aW5kb3dzIHRoZSBudW1iZXIgZGlzcGxheWVkIHdpbGwgYmUgMSB0byA5OSBhbmQgOTkrXG4gICAqL1xuICBwdWJsaWMgc2V0QmFkZ2VDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhyb3R0bGVkU2V0QmFkZ2VDb3VudChjb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbGFuZ3VhZ2Ugd2hpY2ggdXBkYXRlcyB0aGUgYXBwbGljYXRpb24gbG9jYWxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGUgLSBsYW5ndWFnZSBpZGVudGlmaWVyIGFuZCBhIHJlZ2lvbiBpZGVudGlmaWVyXG4gICAqIEBleGFtcGxlOiBzZXRMb2NhbGUoZW4tVVMgfCBqYS1KUClcbiAgICovXG4gIHB1YmxpYyBzZXRMb2NhbGUobG9jYWxlKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpMThuLnNldExvY2FsZShsb2NhbGUgYXMgTG9jYWxlVHlwZSk7XG4gICAgICB0aHJvdHRsZWRTZXRMb2NhbGUobG9jYWxlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBpZiB0aGUgdXNlciBpcyBpbiBhbiBhY3RpdmUgbWVldGluZ1xuICAgKiB3aWxsIGJlIHVzZWQgdG8gaGFuZGxlIG1lbW9yeSByZWZyZXNoIGZ1bmN0aW9uYWxpdHlcbiAgICovXG4gIHB1YmxpYyBzZXRJc0luTWVldGluZyhpc0luTWVldGluZyk6IHZvaWQge1xuICAgIHRocm90dGxlZFNldElzSW5NZWV0aW5nU3RhdHVzKGlzSW5NZWV0aW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIG1vZGFsIHdpbmRvdyB0byBjb25maWd1cmUgbm90aWZpY2F0aW9uIHByZWZlcmVuY2UuXG4gICAqL1xuICBwdWJsaWMgc2hvd05vdGlmaWNhdGlvblNldHRpbmdzKGRhdGE6IHN0cmluZyk6IHZvaWQge1xuICAgIGxvY2FsLmlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnNob3dOb3RpZmljYXRpb25TZXR0aW5ncyxcbiAgICAgIHdpbmRvd05hbWU6IE1BSU5fV0lORE9XX05BTUUsXG4gICAgICB0aGVtZTogZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhIGJhbm5lciB0aGF0IGluZm9ybXMgdXNlciB0aGF0IHRoZSBzY3JlZW4gaXMgYmVpbmcgc2hhcmVkLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3Qgd2l0aCBmb2xsb3dpbmcgZmllbGRzOlxuICAgKiAgICAtIHN0cmVhbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTWVkaWFTdHJlYW0vTWVkaWFTdHJlYW0gb2JqZWN0LlxuICAgKiAgICAgICAgICAgICBUaGUgaW5kaWNhdG9yIGF1dG9tYXRpY2FsbHkgZGVzdHJveXMgaXRzZWxmIHdoZW4gc3RyZWFtIGJlY29tZXMgaW5hY3RpdmUgKHNlZSBNZWRpYVN0cmVhbS5hY3RpdmUpLlxuICAgKiAgICAtIGRpc3BsYXlJZCBpZCBvZiB0aGUgZGlzcGxheSB0aGF0IGlzIGJlaW5nIHNoYXJlZCBvciB0aGF0IGNvbnRhaW5zIHRoZSBzaGFyZWQgYXBwXG4gICAqIEBwYXJhbSBjYWxsYmFjayBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHRvIGhhbmRsZSBldmVudHMuXG4gICAqIENhbGxiYWNrIHJlY2VpdmVzIGV2ZW50IG9iamVjdCB7IHR5cGU6IHN0cmluZyB9LiBUeXBlczpcbiAgICogICAgLSAnZXJyb3InIC0gZXJyb3Igb2NjdXJlZC4gRXZlbnQgb2JqZWN0IGNvbnRhaW5zICdyZWFzb24nIGZpZWxkLlxuICAgKiAgICAtICdzdG9wUmVxdWVzdGVkJyAtIHVzZXIgY2xpY2tlZCBcIlN0b3AgU2hhcmluZ1wiIGJ1dHRvbi5cbiAgICovXG4gIHB1YmxpYyBzaG93U2NyZWVuU2hhcmluZ0luZGljYXRvcihcbiAgICBvcHRpb25zOiBJU2NyZWVuU2hhcmluZ0luZGljYXRvck9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgeyBkaXNwbGF5SWQsIHN0cmVhbSB9ID0gb3B0aW9ucztcblxuICAgIGlmICghc3RyZWFtIHx8ICFzdHJlYW0uYWN0aXZlIHx8IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgY2FsbGJhY2soeyB0eXBlOiAnZXJyb3InLCByZWFzb246ICdiYWQgc3RyZWFtJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRpc3BsYXlJZCAmJiB0eXBlb2YgZGlzcGxheUlkICE9PSAnc3RyaW5nJykge1xuICAgICAgY2FsbGJhY2soeyB0eXBlOiAnZXJyb3InLCByZWFzb246ICdiYWQgZGlzcGxheUlkJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgdGhyb3R0bGVkQ2xvc2VTY3JlZW5TaGFyZUluZGljYXRvcihzdHJlYW0uaWQpO1xuICAgICAgc3RyZWFtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2luYWN0aXZlJywgZGVzdHJveSk7XG4gICAgfTtcblxuICAgIHN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdpbmFjdGl2ZScsIGRlc3Ryb3kpO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwuc2NyZWVuU2hhcmluZ0luZGljYXRvckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLm9wZW5TY3JlZW5TaGFyaW5nSW5kaWNhdG9yLFxuICAgICAgICBkaXNwbGF5SWQsXG4gICAgICAgIGlkOiArK25leHRJbmRpY2F0b3JJZCxcbiAgICAgICAgc3RyZWFtSWQ6IHN0cmVhbS5pZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhIGJhbm5lciB0aGF0IGluZm9ybXMgdXNlciB0aGF0IHRoZSBzY3JlZW4gaXMgYmVpbmcgc2hhcmVkLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3Qgd2l0aCBmb2xsb3dpbmcgZmllbGRzOlxuICAgKiAgICAtIHN0cmVhbUlkIHVuaXF1ZSBpZCBvZiBzdHJlYW1cbiAgICogICAgLSBkaXNwbGF5SWQgaWQgb2YgdGhlIGRpc3BsYXkgdGhhdCBpcyBiZWluZyBzaGFyZWQgb3IgdGhhdCBjb250YWlucyB0aGUgc2hhcmVkIGFwcFxuICAgKiAgICAtIHJlcXVlc3RJZCBpZCB0byBtYXRjaCB0aGUgZXhhY3QgcmVxdWVzdFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB0byBoYW5kbGUgZXZlbnRzLlxuICAgKiBDYWxsYmFjayByZWNlaXZlcyBldmVudCBvYmplY3QgeyB0eXBlOiBzdHJpbmcgfS4gVHlwZXM6XG4gICAqICAgIC0gJ2Vycm9yJyAtIGVycm9yIG9jY3VyZWQuIEV2ZW50IG9iamVjdCBjb250YWlucyAncmVhc29uJyBmaWVsZC5cbiAgICogICAgLSAnc3RvcFJlcXVlc3RlZCcgLSB1c2VyIGNsaWNrZWQgXCJTdG9wIFNoYXJpbmdcIiBidXR0b24uXG4gICAqL1xuICBwdWJsaWMgb3BlblNjcmVlblNoYXJpbmdJbmRpY2F0b3IoXG4gICAgb3B0aW9uczogSVNjcmVlblNoYXJpbmdJbmRpY2F0b3JPcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHsgZGlzcGxheUlkLCByZXF1ZXN0SWQsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbG9jYWwuc2NyZWVuU2hhcmluZ0luZGljYXRvckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLm9wZW5TY3JlZW5TaGFyaW5nSW5kaWNhdG9yLFxuICAgICAgICBkaXNwbGF5SWQsXG4gICAgICAgIGlkOiByZXF1ZXN0SWQsXG4gICAgICAgIHN0cmVhbUlkLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc2NyZWVuIHNoYXJpbmcgaW5kaWNhdG9yXG4gICAqL1xuICBwdWJsaWMgY2xvc2VTY3JlZW5TaGFyaW5nSW5kaWNhdG9yKHdpbktleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhyb3R0bGVkQ2xvc2VTY3JlZW5TaGFyZUluZGljYXRvcih3aW5LZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byByZWdpc3RlciBhIGZ1bmN0aW9uIHRvIHJlc3RhcnQgZmxvYXRlclxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlclJlc3RhcnRGbG9hdGVyKFxuICAgIGNhbGxiYWNrOiAoYXJnczogSVJlc3RhcnRGbG9hdGVyRGF0YSkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBsb2NhbC5yZXN0YXJ0RmxvYXRlciA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byBzZXQgdGhlIFBNUCAmIEFDUCBjbG91ZCBjb25maWdcbiAgICpcbiAgICogQHBhcmFtIGRhdGEge0lDbG91ZENvbmZpZ31cbiAgICovXG4gIHB1YmxpYyBzZXRDbG91ZENvbmZpZyhkYXRhOiB7fSk6IHZvaWQge1xuICAgIHRocm90dGxlZFNldENsb3VkQ29uZmlnKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gRG93bmxvYWRlZCBpdGVtXG4gICAqIEBwYXJhbSBpZCBJRCBvZiB0aGUgaXRlbVxuICAgKi9cbiAgcHVibGljIG9wZW5Eb3dubG9hZGVkSXRlbShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhyb3R0bGVkT3BlbkRvd25sb2FkZWRJdGVtKGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGRvd25sb2FkZWQgaXRlbSBpbiBmaW5kZXIgLyBleHBsb3JlclxuICAgKiBAcGFyYW0gaWQgSUQgb2YgdGhlIGl0ZW1cbiAgICovXG4gIHB1YmxpYyBzaG93RG93bmxvYWRlZEl0ZW0oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRocm90dGxlZFNob3dEb3dubG9hZGVkSXRlbShpZCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGRvd25sb2FkZWQgaXRlbXNcbiAgICovXG4gIHB1YmxpYyBjbGVhckRvd25sb2FkZWRJdGVtcygpOiB2b2lkIHtcbiAgICB0aHJvdHRsZWRDbGVhckRvd25sb2FkZWRJdGVtcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RhcnQgdGhlIGFwcFxuICAgKi9cbiAgcHVibGljIHJlc3RhcnRBcHAoKTogdm9pZCB7XG4gICAgdGhyb3R0bGVkUmVzdGFydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBDUFUgdXNhZ2VcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRDUFVVc2FnZSgpOiBQcm9taXNlPElDUFVVc2FnZT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXdhaXQgcHJvY2Vzcy5nZXRDUFVVc2FnZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBtZWRpYSBwZXJtaXNzaW9uXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY2hlY2tNZWRpYVBlcm1pc3Npb24oKTogUHJvbWlzZTxJTWVkaWFQZXJtaXNzaW9uPiB7XG4gICAgY29uc3QgbWVkaWFTdGF0dXMgPSAoYXdhaXQgaXBjUmVuZGVyZXIuaW52b2tlKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5nZXRNZWRpYUFjY2Vzc1N0YXR1cyxcbiAgICB9KSkgYXMgSU1lZGlhUGVybWlzc2lvbjtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIGNhbWVyYTogbWVkaWFTdGF0dXMuY2FtZXJhLFxuICAgICAgbWljcm9waG9uZTogbWVkaWFTdGF0dXMubWljcm9waG9uZSxcbiAgICAgIHNjcmVlbjogbWVkaWFTdGF0dXMuc2NyZWVuLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgd2hldGhlciB0aGUgY2xpZW50IGlzIHJ1bm5pbmcgb24gbWFuYVxuICAgKiBAcGFyYW0gaXNNYW5hXG4gICAqL1xuICBwdWJsaWMgc2V0SXNNYW5hKGlzTWFuYTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnNldElzTWFuYSxcbiAgICAgIGlzTWFuYSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYWxsIGJyb3dzZXIgd2luZG93cyBvbiBTREEgc2lkZSwgc3VjaCBhcyBub3RpZmljYXRpb25zLCBTY3JlZW4gc25pcHBldCB3aW5kb3csIHBvcHBlZCBvdXQgY2hhdHMgZXRjXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGxXcmFwcGVyV2luZG93cygpOiB2b2lkIHtcbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5jbG9zZUFsbFdyYXBwZXJXaW5kb3dzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGEgbm90aWZpY2F0aW9uIGZyb20gdGhlIG1haW4gcHJvY2Vzc1xuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uT3B0cyB7SU5vdGlmaWNhdGlvbkRhdGF9XG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25DYWxsYmFjayB7Tm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2t9XG4gICAqL1xuICBwdWJsaWMgc2hvd05vdGlmaWNhdGlvbihcbiAgICBub3RpZmljYXRpb25PcHRzOiBJTm90aWZpY2F0aW9uRGF0YSxcbiAgICBub3RpZmljYXRpb25DYWxsYmFjazogTm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2tcbiAgKTogdm9pZCB7XG4gICAgLy8gU3RvcmUgY2FsbGJhY2tzIGJhc2VkIG9uIG5vdGlmaWNhdGlvbiBpZCBzbyxcbiAgICAvLyB3ZSBjYW4gdXNlIHRoaXMgdG8gdHJpZ2dlciBvbiBub3RpZmljYXRpb24gYWN0aW9uXG4gICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb25PcHRzLmlkID09PSAnbnVtYmVyJykge1xuICAgICAgbm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2tzLnNldChcbiAgICAgICAgbm90aWZpY2F0aW9uT3B0cy5pZCxcbiAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIGlwYyBkb2VzIG5vdCBzdXBwb3J0IHNlbmRpbmcgRnVuY3Rpb25zLCBQcm9taXNlcywgU3ltYm9scywgV2Vha01hcHMsXG4gICAgLy8gb3IgV2Vha1NldHMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb25cbiAgICBpZiAobm90aWZpY2F0aW9uT3B0cy5jYWxsYmFjaykge1xuICAgICAgZGVsZXRlIG5vdGlmaWNhdGlvbk9wdHMuY2FsbGJhY2s7XG4gICAgfVxuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnNob3dOb3RpZmljYXRpb24sXG4gICAgICBub3RpZmljYXRpb25PcHRzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhIHNwZWNpZmljIG5vdGlmaWNhdGlvbiBiYXNlZCBvbiBpZFxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge251bWJlcn0gSWQgb2YgYSBub3RpZmljYXRpb25cbiAgICovXG4gIHB1YmxpYyBjbG9zZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZDogbnVtYmVyKTogdm9pZCB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuY2xvc2VOb3RpZmljYXRpb24sXG4gICAgICBub3RpZmljYXRpb25JZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIGNhbGwgbm90aWZpY2F0aW9uIGZyb20gdGhlIG1haW4gcHJvY2Vzc1xuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uT3B0cyB7SU5vdGlmaWNhdGlvbkRhdGF9XG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25DYWxsYmFjayB7Tm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2t9XG4gICAqL1xuICBwdWJsaWMgc2hvd0NhbGxOb3RpZmljYXRpb24oXG4gICAgbm90aWZpY2F0aW9uT3B0czogSUNhbGxOb3RpZmljYXRpb25EYXRhLFxuICAgIG5vdGlmaWNhdGlvbkNhbGxiYWNrOiBOb3RpZmljYXRpb25BY3Rpb25DYWxsYmFja1xuICApOiB2b2lkIHtcbiAgICAvLyBTdG9yZSBjYWxsYmFja3MgYmFzZWQgb24gbm90aWZpY2F0aW9uIGlkIHNvLFxuICAgIC8vIHdlIGNhbiB1c2UgdGhpcyB0byB0cmlnZ2VyIG9uIG5vdGlmaWNhdGlvbiBhY3Rpb25cbiAgICBpZiAodHlwZW9mIG5vdGlmaWNhdGlvbk9wdHMuaWQgPT09ICdudW1iZXInKSB7XG4gICAgICBjYWxsTm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2tzLnNldChcbiAgICAgICAgbm90aWZpY2F0aW9uT3B0cy5pZCxcbiAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIGlwYyBkb2VzIG5vdCBzdXBwb3J0IHNlbmRpbmcgRnVuY3Rpb25zLCBQcm9taXNlcywgU3ltYm9scywgV2Vha01hcHMsXG4gICAgLy8gb3IgV2Vha1NldHMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb25cbiAgICBpZiAobm90aWZpY2F0aW9uT3B0cy5jYWxsYmFjaykge1xuICAgICAgZGVsZXRlIG5vdGlmaWNhdGlvbk9wdHMuY2FsbGJhY2s7XG4gICAgfVxuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnNob3dDYWxsTm90aWZpY2F0aW9uLFxuICAgICAgbm90aWZpY2F0aW9uT3B0cyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYSBzcGVjaWZpYyBjYWxsIG5vdGlmaWNhdGlvbiBiYXNlZCBvbiBpZFxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge251bWJlcn0gSWQgb2YgYSBub3RpZmljYXRpb25cbiAgICovXG4gIHB1YmxpYyBjbG9zZUNhbGxOb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLmNsb3NlQ2FsbE5vdGlmaWNhdGlvbixcbiAgICAgIG5vdGlmaWNhdGlvbklkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB6b29tIGxldmVsXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0Wm9vbUxldmVsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHdlYkZyYW1lLmdldFpvb21GYWN0b3IoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB6b29tIGxldmVsXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b29tTGV2ZWwgLSBsYW5ndWFnZSBpZGVudGlmaWVyIGFuZCBhIHJlZ2lvbiBpZGVudGlmaWVyXG4gICAqIEBleGFtcGxlOiBzZXRab29tTGV2ZWwoMC45KVxuICAgKi9cbiAgcHVibGljIHNldFpvb21MZXZlbCh6b29tTGV2ZWwpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHpvb21MZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRocm90dGxlZFNldFpvb21MZXZlbCh6b29tTGV2ZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgU0RBIHN1cHBvcnRlZCBzZXR0aW5ncy5cbiAgICogQHJldHVybnMgbGlzdCBvZiBzdXBwb3J0ZWQgZmVhdHVyZXNcbiAgICovXG4gIHB1YmxpYyBzdXBwb3J0ZWRTZXR0aW5ncygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFNVUFBPUlRFRF9TRVRUSU5HUyB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmF0aXZlIHdpbmRvdyBoYW5kbGUgb2YgdGhlIHdpbmRvdywgYnkgZGVmYXVsdCB3aGVyZSB0aGUgcmVuZGVyZXIgaXMgZGlzcGxheWVkLFxuICAgKiBvciBvcHRpb25hbGx5IGFub3RoZXIgd2luZG93IGlkZW50aWZpZWQgYnkgaXRzIG5hbWUuXG4gICAqIEBwYXJhbSB3aW5kb3dOYW1lIG9wdGlvbmFsIHdpbmRvdyBuYW1lLCBkZWZhdWx0cyB0byBjdXJyZW50IHJlbmRlcmVyIHdpbmRvd1xuICAgKiBAcmV0dXJucyB0aGUgcGxhdGZvcm0tc3BlY2lmaWMgaGFuZGxlIG9mIHRoZSB3aW5kb3cuXG4gICAqL1xuICBwdWJsaWMgZ2V0TmF0aXZlV2luZG93SGFuZGxlKHdpbmRvd05hbWU/OiBzdHJpbmcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICAgIGlmICghd2luZG93TmFtZSkge1xuICAgICAgd2luZG93TmFtZSA9IHdpbmRvdy5uYW1lIHx8ICdtYWluJztcbiAgICB9XG4gICAgcmV0dXJuIGlwY1JlbmRlcmVyLmludm9rZShhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuZ2V0TmF0aXZlV2luZG93SGFuZGxlLFxuICAgICAgd2luZG93TmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIENpdHJpeCcgbWVkaWEgcmVkaXJlY3Rpb24gZmVhdHVyZVxuICAgKiBAcmV0dXJucyBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBnZXRDaXRyaXhNZWRpYVJlZGlyZWN0aW9uU3RhdHVzKCk6IFByb21pc2U8UmVkaXJlY3Rpb25TdGF0dXM+IHtcbiAgICByZXR1cm4gaXBjUmVuZGVyZXIuaW52b2tlKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5nZXRDaXRyaXhNZWRpYVJlZGlyZWN0aW9uU3RhdHVzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byByZWdpc3RlciBhIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBjbGllbnQgYmFubmVyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyQ2xpZW50QmFubmVyKFxuICAgIGNhbGxiYWNrOiAocmVhc29uOiBzdHJpbmcsIGFjdGlvbjogQ29uZmlnVXBkYXRlVHlwZSkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBpZiAoIWxvY2FsLnNob3dDbGllbnRCYW5uZXJDYWxsYmFjaykge1xuICAgICAgbG9jYWwuc2hvd0NsaWVudEJhbm5lckNhbGxiYWNrID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLnNob3dDbGllbnRCYW5uZXJDYWxsYmFjay5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdHMgdG8gYSBDbG91ZDkgcGlwZVxuICAgKlxuICAgKiBAcGFyYW0gcGlwZSBwaXBlIG5hbWVcbiAgICogQHBhcmFtIG9uRGF0YSBjYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBkYXRhIGlzIHJlY2VpdmVkIG92ZXIgdGhlIGNvbm5lY3Rpb25cbiAgICogQHBhcmFtIG9uQ2xvc2UgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkIGJ5IHRoZSByZW1vdGUgc2lkZVxuICAgKiBAcmV0dXJucyBDbG91ZDkgcGlwZSBpbnN0YW5jZSBwcm9taXNlXG4gICAqL1xuICBwdWJsaWMgY29ubmVjdENsb3VkOVBpcGUoXG4gICAgcGlwZTogc3RyaW5nLFxuICAgIG9uRGF0YTogKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHZvaWQsXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZFxuICApOiBQcm9taXNlPElDbG91ZDlQaXBlPiB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHBpcGUgPT09ICdzdHJpbmcnICYmXG4gICAgICB0eXBlb2Ygb25EYXRhID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0eXBlb2Ygb25DbG9zZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgaWYgKGxvY2FsLmM5UGlwZUV2ZW50Q2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiQ2FuJ3QgY29ubmVjdCB0byBwaXBlLCBhbHJlYWR5IGNvbm5lY3RlZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElDbG91ZDlQaXBlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxvY2FsLmM5UGlwZUV2ZW50Q2FsbGJhY2sgPSAoZXZlbnQ6IHN0cmluZywgYXJnPzogYW55KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICAgICAgY2FzZSAnY29ubmVjdGVkJzpcbiAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xuICAgICAgICAgICAgICAgIHdyaXRlOiAoZGF0YTogVWludDhBcnJheSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNtZDogYXBpQ21kcy53cml0ZUNsb3VkOVBpcGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgICAgICAgICAgICAgY21kOiBhcGlDbWRzLmNsb3NlQ2xvdWQ5UGlwZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb25uZWN0aW9uLWZhaWxlZCc6XG4gICAgICAgICAgICAgIGxvY2FsLmM5UGlwZUV2ZW50Q2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIHJlamVjdChhcmcpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgICAgICBvbkRhdGEoYXJnKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgICAgIGxvY2FsLmM5UGlwZUV2ZW50Q2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgICBjbWQ6IGFwaUNtZHMuY29ubmVjdENsb3VkOVBpcGUsXG4gICAgICAgICAgcGlwZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIHRoZSBDbG91ZDkgY2xpZW50LlxuICAgKi9cbiAgcHVibGljIGxhdW5jaENsb3VkOShjYWxsYmFjazogKHN0YXR1czogSVNoZWxsU3RhdHVzKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgbG9jYWwuYzlNZXNzYWdlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5sYXVuY2hDbG91ZDksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGVybWluYXRlcyB0aGUgQ2xvdWQ5IGNsaWVudC5cbiAgICovXG4gIHB1YmxpYyB0ZXJtaW5hdGVDbG91ZDkoKTogdm9pZCB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMudGVybWluYXRlQ2xvdWQ5LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byBpbnN0YWxsIG5ldyB1cGRhdGUgYW5kIHJlc3RhcnQgU0RBXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlQW5kUmVzdGFydCgpOiB2b2lkIHtcbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy51cGRhdGVBbmRSZXN0YXJ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byBkb3dubG9hZCB0aGUgbGF0ZXN0IFNEQSB1cGRhdGVzXG4gICAqL1xuICBwdWJsaWMgZG93bmxvYWRVcGRhdGUoKTogdm9pZCB7XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMuZG93bmxvYWRVcGRhdGUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIEpTIHRvIGNoZWNrIGZvciB1cGRhdGVzXG4gICAqL1xuICBwdWJsaWMgY2hlY2tGb3JVcGRhdGVzKGF1dG9VcGRhdGVUcmlnZ2VyPzogQXV0b1VwZGF0ZVRyaWdnZXIpOiB2b2lkIHtcbiAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5jaGVja0ZvclVwZGF0ZXMsXG4gICAgICBhdXRvVXBkYXRlVHJpZ2dlcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgSlMgdG8gcmVnaXN0ZXIgU0RBIGZvciBwaG9uZSBudW1iZXJzIGNsaWNrc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwaG9uZU51bWJlckNhbGxiYWNrIGNhbGxiYWNrIGZ1bmN0aW9uIGludm9rZWQgd2hlbiByZWNlaXZpbmcgYSBwaG9uZSBudW1iZXIgZm9yIGNhbGxzL3Ntc1xuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyhcbiAgICBwcm90b2NvbHM6IFBob25lTnVtYmVyUHJvdG9jb2xbXSxcbiAgICBwaG9uZU51bWJlckNhbGxiYWNrOiAoYXJnOiBzdHJpbmcpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBwaG9uZU51bWJlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsb2NhbC5waG9uZU51bWJlckNhbGxiYWNrID0gcGhvbmVOdW1iZXJDYWxsYmFjaztcbiAgICB9XG4gICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMucmVnaXN0ZXJQaG9uZU51bWJlclNlcnZpY2VzLFxuICAgICAgcHJvdG9jb2xzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyBKUyB0byB1bnJlZ2lzdGVyIGFwcCB0byBzbXMvY2FsbCBwcm90b2NvbHNcbiAgICogQHBhcmFtIHByb3RvY29sIHByb3RvY29sIHRvIGJlIHVucmVnaXN0ZXJlZC5cbiAgICovXG4gIHB1YmxpYyB1bnJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyhwcm90b2NvbHM6IFBob25lTnVtYmVyUHJvdG9jb2xbXSkge1xuICAgIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnVucmVnaXN0ZXJQaG9uZU51bWJlclNlcnZpY2VzLFxuICAgICAgcHJvdG9jb2xzLFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogSXBjIGV2ZW50c1xuICovXG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3NcbiAqIHRvIGNvbnN0cnVjdCBhIGNhbnZhcyBmb3IgdGhlIFdpbmRvd3MgYmFkZ2UgY291bnQgaW1hZ2VcbiAqXG4gKiBAcGFyYW0ge0lCYWRnZUNvdW50fSBhcmcge1xuICogICAgIGNvdW50OiBudW1iZXJcbiAqIH1cbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oXG4gICdjcmVhdGUtYmFkZ2UtZGF0YS11cmwnLFxuICAoX2V2ZW50OiBFdmVudCwgYXJnOiBJU3RhdHVzQmFkZ2UpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IChhcmcgJiYgYXJnLmNvdW50KSB8fCAwO1xuXG4gICAgLy8gY3JlYXRlIDMyIHggMzIgaW1nXG4gICAgY29uc3QgcmFkaXVzID0gMTY7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmhlaWdodCA9IHJhZGl1cyAqIDI7XG4gICAgY2FudmFzLndpZHRoID0gcmFkaXVzICogMjtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMocmFkaXVzLCByYWRpdXMsIHJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcblxuICAgICAgY29uc3QgdGV4dCA9IGNvdW50ID4gOTkgPyAnOTkrJyA6IGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICBpZiAodGV4dC5sZW5ndGggPiAyKSB7XG4gICAgICAgIGN0eC5mb250ID0gJ2JvbGQgMThweCBzYW5zLXNlcmlmJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHJhZGl1cywgMjIpO1xuICAgICAgfSBlbHNlIGlmICh0ZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY3R4LmZvbnQgPSAnYm9sZCAyNHB4IHNhbnMtc2VyaWYnO1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgcmFkaXVzLCAyNCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZm9udCA9ICdib2xkIDI2cHggc2Fucy1zZXJpZic7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCByYWRpdXMsIDI2KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnLCAxLjApO1xuXG4gICAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLmJhZGdlRGF0YVVybCxcbiAgICAgICAgY291bnQsXG4gICAgICAgIGRhdGFVcmwsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbik7XG5cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKFxuICAnc2VuZC1wcmVzZW5jZS1zdGF0dXMtZGF0YScsXG4gIChfZXZlbnQ6IEV2ZW50LCBhcmc6IEVQcmVzZW5jZVN0YXR1c0NhdGVnb3J5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbC51cGRhdGVNeVByZXNlbmNlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxvY2FsLnVwZGF0ZU15UHJlc2VuY2VDYWxsYmFjayhhcmcpO1xuICAgIH1cbiAgfVxuKTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2Vzc1xuICogd2hlbiB0aGUgc25pcHBldCBpcyBjb21wbGV0ZVxuICpcbiAqIEBwYXJhbSB7SVNjcmVlblNuaXBwZXR9IGFyZyB7XG4gKiAgICAgbWVzc2FnZTogc3RyaW5nLFxuICogICAgIGRhdGE6IGJhc2U2NCxcbiAqICAgICB0eXBlOiAnRVJST1InIHwgJ2ltYWdlL2pwZztiYXNlNjQnLFxuICogfVxuICovXG5sb2NhbC5pcGNSZW5kZXJlci5vbihcbiAgJ3NjcmVlbi1zbmlwcGV0LWRhdGEnLFxuICAoX2V2ZW50OiBFdmVudCwgYXJnOiBJU2NyZWVuU25pcHBldCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2YgbG9jYWwuc2NyZWVuU25pcHBldENhbGxiYWNrID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICBsb2NhbC5zY3JlZW5TbmlwcGV0Q2FsbGJhY2soYXJnKTtcbiAgICB9XG4gIH1cbik7XG5cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdjb2xsZWN0LWxvZ3MnLCAoX2V2ZW50OiBFdmVudCkgPT4ge1xuICBpZiAobG9jYWwuY29sbGVjdExvZ3NDYWxsYmFjaykge1xuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgbG9jYWwuY29sbGVjdExvZ3NDYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzXG4gKiBmb3IgZXZlciBmZXcgbWludXRlcyBpZiB0aGUgdXNlciBpcyBhY3RpdmVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaWRsZVRpbWUgLSBjdXJyZW50IHN5c3RlbSBpZGxlIHRpY2tcbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oJ2FjdGl2aXR5JywgKF9ldmVudDogRXZlbnQsIGlkbGVUaW1lOiBudW1iZXIpID0+IHtcbiAgaWYgKFxuICAgIHR5cGVvZiBpZGxlVGltZSA9PT0gJ251bWJlcicgJiZcbiAgICB0eXBlb2YgbG9jYWwuYWN0aXZpdHlEZXRlY3Rpb25DYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICBsb2NhbC5hY3Rpdml0eURldGVjdGlvbkNhbGxiYWNrKGlkbGVUaW1lKTtcbiAgfVxufSk7XG5cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKFxuICAnZG93bmxvYWQtY29tcGxldGVkJyxcbiAgKF9ldmVudDogRXZlbnQsIGRvd25sb2FkSXRlbTogSURvd25sb2FkSXRlbSkgPT4ge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBkb3dubG9hZEl0ZW0gPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2YgbG9jYWwuZG93bmxvYWRNYW5hZ2VyQ2FsbGJhY2sgPT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIGxvY2FsLmRvd25sb2FkTWFuYWdlckNhbGxiYWNrKHtcbiAgICAgICAgc3RhdHVzOiAnZG93bmxvYWQtY29tcGxldGVkJyxcbiAgICAgICAgaXRlbTogZG93bmxvYWRJdGVtLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4pO1xuXG5sb2NhbC5pcGNSZW5kZXJlci5vbignZG93bmxvYWQtZmFpbGVkJywgKF9ldmVudDogRXZlbnQpID0+IHtcbiAgaWYgKHR5cGVvZiBsb2NhbC5kb3dubG9hZE1hbmFnZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxvY2FsLmRvd25sb2FkTWFuYWdlckNhbGxiYWNrKHsgc3RhdHVzOiAnZG93bmxvYWQtZmFpbGVkJyB9KTtcbiAgfVxufSk7XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3NcbiAqIFdoZW5ldmVyIHNvbWUgV2luZG93IHBvc2l0aW9uIG9yIGRpbWVuc2lvbiBjaGFuZ2VzXG4gKlxuICogQHBhcmFtIHtJQm91bmRzQ2hhbmdlfSBhcmcge1xuICogICAgIHg6IG51bWJlcixcbiAqICAgICB5OiBudW1iZXIsXG4gKiAgICAgaGVpZ2h0OiBudW1iZXIsXG4gKiAgICAgd2lkdGg6IG51bWJlcixcbiAqICAgICB3aW5kb3dOYW1lOiBzdHJpbmdcbiAqIH1cbiAqXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdib3VuZHNDaGFuZ2UnLCAoX2V2ZW50LCBhcmc6IElCb3VuZHNDaGFuZ2UpOiB2b2lkID0+IHtcbiAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCB3aW5kb3dOYW1lIH0gPSBhcmc7XG4gIGlmIChcbiAgICB4ICYmXG4gICAgeSAmJlxuICAgIGhlaWdodCAmJlxuICAgIHdpZHRoICYmXG4gICAgd2luZG93TmFtZSAmJlxuICAgIHR5cGVvZiBsb2NhbC5ib3VuZHNDaGFuZ2VDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICBsb2NhbC5ib3VuZHNDaGFuZ2VDYWxsYmFjayh7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgd2luZG93TmFtZSxcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3NcbiAqIHdoZW4gdGhlIHNjcmVlbiBzaGFyaW5nIGhhcyBiZWVuIHN0b3BwZXJcbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oU2NyZWVuU2hhcmVFdmVudHMuU1RPUFBFRCwgKF9ldmVudCwgaWQpID0+IHtcbiAgaWYgKHR5cGVvZiBsb2NhbC5zY3JlZW5TaGFyaW5nSW5kaWNhdG9yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsb2NhbC5zY3JlZW5TaGFyaW5nSW5kaWNhdG9yQ2FsbGJhY2soe1xuICAgICAgdHlwZTogJ3N0b3BSZXF1ZXN0ZWQnLFxuICAgICAgcmVxdWVzdElkOiBpZCxcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3NcbiAqIGZvciBzZW5kIGxvZ3Mgb24gdG8gd2ViIGFwcFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmcge1xuICogICAgICBtc2dzOiBJTG9nTXNnW10sXG4gKiAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbCxcbiAqICAgICAgc2hvd0luQ29uc29sZTogYm9vbGVhblxuICogfVxuICpcbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oJ2xvZycsIChfZXZlbnQsIGFyZykgPT4ge1xuICBpZiAoYXJnICYmIGxvY2FsLmxvZ2dlcikge1xuICAgIGxvY2FsLmxvZ2dlcihhcmcubXNncyB8fCBbXSwgYXJnLmxvZ0xldmVsLCBhcmcuc2hvd0luQ29uc29sZSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzIGZvciBwcm9jZXNzaW5nIHByb3RvY29sIHVybHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmcgLSB0aGUgcHJvdG9jb2wgdXJsXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdwcm90b2NvbC1hY3Rpb24nLCAoX2V2ZW50LCBhcmc6IHN0cmluZykgPT4ge1xuICBpZiAoXG4gICAgdHlwZW9mIGxvY2FsLnByb3RvY29sQWN0aW9uQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJ1xuICApIHtcbiAgICBsb2NhbC5wcm90b2NvbEFjdGlvbkNhbGxiYWNrKGFyZyk7XG4gIH1cbn0pO1xuXG5sb2NhbC5pcGNSZW5kZXJlci5vbignYW5hbHl0aWNzLWNhbGxiYWNrJywgKF9ldmVudCwgYXJnOiBvYmplY3QpID0+IHtcbiAgaWYgKHR5cGVvZiBsb2NhbC5hbmFseXRpY3NFdmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicgJiYgYXJnKSB7XG4gICAgbG9jYWwuYW5hbHl0aWNzRXZlbnRIYW5kbGVyKGFyZyk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzIHRvIHJlc3RhcnQgdGhlIGNoaWxkIHdpbmRvd1xuICogQHBhcmFtIHtJUmVzdGFydEZsb2F0ZXJEYXRhfVxuICovXG5sb2NhbC5pcGNSZW5kZXJlci5vbihcbiAgJ3Jlc3RhcnQtZmxvYXRlcicsXG4gIChfZXZlbnQsIHsgd2luZG93TmFtZSwgYm91bmRzIH06IElSZXN0YXJ0RmxvYXRlckRhdGEpID0+IHtcbiAgICBpZiAodHlwZW9mIGxvY2FsLnJlc3RhcnRGbG9hdGVyID09PSAnZnVuY3Rpb24nICYmIHdpbmRvd05hbWUpIHtcbiAgICAgIGxvY2FsLnJlc3RhcnRGbG9hdGVyKHsgd2luZG93TmFtZSwgYm91bmRzIH0pO1xuICAgIH1cbiAgfVxuKTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2VzcyBvbiBub3RpZmljYXRpb24gYWN0aW9uc1xuICogQHBhcmFtIHtJTm90aWZpY2F0aW9uRGF0YX1cbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oJ25vdGlmaWNhdGlvbi1hY3Rpb25zJywgKF9ldmVudCwgYXJncykgPT4ge1xuICBjb25zdCBjYWxsYmFjayA9IG5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrcy5nZXQoYXJncy5kYXRhLmlkKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhcmdzO1xuICBkYXRhLm5vdGlmaWNhdGlvbkRhdGEgPSBhcmdzLm5vdGlmaWNhdGlvbkRhdGE7XG4gIGlmIChhcmdzICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soYXJncy5ldmVudCwgZGF0YSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzIG9uIGNhbGwgbm90aWZpY2F0aW9uIGFjdGlvbnNcbiAqIEBwYXJhbSB7SUNhbGxOb3RpZmljYXRpb25EYXRhfVxuICovXG5sb2NhbC5pcGNSZW5kZXJlci5vbignY2FsbC1ub3RpZmljYXRpb24tYWN0aW9ucycsIChfZXZlbnQsIGFyZ3MpID0+IHtcbiAgY29uc3QgY2FsbGJhY2sgPSBjYWxsTm90aWZpY2F0aW9uQWN0aW9uQ2FsbGJhY2tzLmdldChhcmdzLmRhdGEuaWQpO1xuICBjb25zdCB7IGRhdGEgfSA9IGFyZ3M7XG4gIGRhdGEubm90aWZpY2F0aW9uRGF0YSA9IGFyZ3Mubm90aWZpY2F0aW9uRGF0YTtcbiAgaWYgKGFyZ3MgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhhcmdzLmV2ZW50LCBkYXRhKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJ5IHRoZSBtYWluIHByb2Nlc3Mgb24gdXBkYXRpbmcgdGhlIGNsb3VkIGNvbmZpZ1xuICogQHBhcmFtIHtzdHJpbmdbXX1cbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oJ2Rpc3BsYXktY2xpZW50LWJhbm5lcicsIChfZXZlbnQsIGFyZ3MpID0+IHtcbiAgaWYgKGxvY2FsLnNob3dDbGllbnRCYW5uZXJDYWxsYmFjaykge1xuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgbG9jYWwuc2hvd0NsaWVudEJhbm5lckNhbGxiYWNrKSB7XG4gICAgICBpZiAoYXJncy5kYXRhKSB7XG4gICAgICAgIGNhbGxiYWNrKGFyZ3MucmVhc29uLCBhcmdzLmFjdGlvbiwgYXJncy5kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2soYXJncy5yZWFzb24sIGFyZ3MuYWN0aW9uKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzIHdoZW4gYSBjbG91ZDkgcGlwZSBldmVudCBvY2N1cnNcbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oJ2M5LXBpcGUtZXZlbnQnLCAoX2V2ZW50LCBhcmdzKSA9PiB7XG4gIGxvY2FsLmM5UGlwZUV2ZW50Q2FsbGJhY2s/LmNhbGwobnVsbCwgYXJncy5ldmVudCwgYXJncz8uYXJnKTtcbn0pO1xuXG4vKipcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBieSB0aGUgbWFpbiBwcm9jZXNzIHdoZW4gdGhlIHN0YXR1cyBvZiB0aGUgY2xvdWQ5IGNsaWVudCBjaGFuZ2VzXG4gKi9cbmxvY2FsLmlwY1JlbmRlcmVyLm9uKCdjOS1zdGF0dXMtZXZlbnQnLCAoX2V2ZW50LCBhcmdzKSA9PiB7XG4gIGxvY2FsLmM5TWVzc2FnZUNhbGxiYWNrPy5jYWxsKG51bGwsIGFyZ3M/LnN0YXR1cyk7XG59KTtcblxuLyoqXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgdGhlIG1haW4gcHJvY2Vzc1xuICogdG8gZm9yd2FyZCBjbGlja2VkIHBob25lIG51bWJlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwaG9uZU51bWJlciAtIHBob25lIG51bWJlciByZWNlaXZlZCBieSBTREFcbiAqL1xubG9jYWwuaXBjUmVuZGVyZXIub24oXG4gICdwaG9uZS1udW1iZXItcmVjZWl2ZWQnLFxuICAoX2V2ZW50OiBFdmVudCwgcGhvbmVOdW1iZXI6IHN0cmluZykgPT4ge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBwaG9uZU51bWJlciA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHR5cGVvZiBsb2NhbC5waG9uZU51bWJlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICBsb2NhbC5waG9uZU51bWJlckNhbGxiYWNrKHBob25lTnVtYmVyKTtcbiAgICB9XG4gIH1cbik7XG5cbi8vIEludm9rZWQgd2hlbmV2ZXIgdGhlIGFwcCBpcyByZWxvYWRlZC9uYXZpZ2F0ZWRcbmNvbnN0IHNhbml0aXplID0gKCk6IHZvaWQgPT4ge1xuICBpZiAod2luZG93Lm5hbWUgPT09IGFwaU5hbWUubWFpbldpbmRvd05hbWUpIHtcbiAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5zYW5pdGl6ZSxcbiAgICAgIHdpbmRvd05hbWU6IHdpbmRvdy5uYW1lLFxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBsaXN0ZW5zIGZvciB0aGUgb25saW5lL29mZmxpbmUgZXZlbnRzIGFuZCB1cGRhdGVzIHRoZSBtYWluIHByb2Nlc3NcbmNvbnN0IHVwZGF0ZU9ubGluZVN0YXR1cyA9ICgpOiB2b2lkID0+IHtcbiAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgY21kOiBhcGlDbWRzLmlzT25saW5lLFxuICAgIGlzT25saW5lOiB3aW5kb3cubmF2aWdhdG9yLm9uTGluZSxcbiAgfSk7XG59O1xuXG4vLyBIYW5kbGUga2V5IGRvd24gZXZlbnRzXG5jb25zdCB0aHJvdHRsZWRLZXlEb3duID0gdGhyb3R0bGUoKGV2ZW50KSA9PiB7XG4gIGlzQWx0S2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQWx0O1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRXNjKSB7XG4gICAgbG9jYWwuaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICBjbWQ6IGFwaUNtZHMua2V5UHJlc3MsXG4gICAgICBrZXlDb2RlOiBldmVudC5rZXlDb2RlLFxuICAgIH0pO1xuICB9XG59LCA1MDApO1xuXG4vLyBIYW5kbGUga2V5IHVwIGV2ZW50c1xuY29uc3QgdGhyb3R0bGVkS2V5VXAgPSB0aHJvdHRsZSgoZXZlbnQpID0+IHtcbiAgaWYgKGlzQWx0S2V5ICYmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5BbHQgfHwgS2V5Q29kZXMuRXNjKSkge1xuICAgIGlzTWVudU9wZW4gPSAhaXNNZW51T3BlbjtcbiAgfVxuICBpZiAoaXNBbHRLZXkgJiYgaXNNZW51T3BlbiAmJiBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5BbHQpIHtcbiAgICBsb2NhbC5pcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgIGNtZDogYXBpQ21kcy5rZXlQcmVzcyxcbiAgICAgIGtleUNvZGU6IGV2ZW50LmtleUNvZGUsXG4gICAgfSk7XG4gIH1cbn0sIDUwMCk7XG5cbi8vIEhhbmRsZSBtb3VzZSBkb3duIGV2ZW50XG5jb25zdCB0aHJvdHRsZU1vdXNlRG93biA9IHRocm90dGxlKCgpID0+IHtcbiAgaWYgKGlzQWx0S2V5ICYmIGlzTWVudU9wZW4pIHtcbiAgICBpc01lbnVPcGVuID0gIWlzTWVudU9wZW47XG4gIH1cbn0sIDUwMCk7XG5cbi8qKlxuICogV2luZG93IEV2ZW50c1xuICovXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBzYW5pdGl6ZSwgZmFsc2UpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCB1cGRhdGVPbmxpbmVTdGF0dXMsIGZhbHNlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCB1cGRhdGVPbmxpbmVTdGF0dXMsIGZhbHNlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRocm90dGxlZEtleVVwLCB0cnVlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhyb3R0bGVkS2V5RG93biwgdHJ1ZSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhyb3R0bGVNb3VzZURvd24sIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiIsImltcG9ydCB7IE5hdGl2ZUltYWdlLCBTaXplLCBUcmF5IH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHsgQXV0b1VwZGF0ZVRyaWdnZXIgfSBmcm9tICdhcHAvYXV0by11cGRhdGUtaGFuZGxlcic7XG5cbmV4cG9ydCBlbnVtIGFwaUNtZHMge1xuICBpc09ubGluZSA9ICdpcy1vbmxpbmUnLFxuICBnZXRWZXJzaW9uSW5mbyA9ICdnZXQtdmVyc2lvbi1pbmZvJyxcbiAgcmVnaXN0ZXJMb2dnZXIgPSAncmVnaXN0ZXItbG9nZ2VyJyxcbiAgc2V0QmFkZ2VDb3VudCA9ICdzZXQtYmFkZ2UtY291bnQnLFxuICBiYWRnZURhdGFVcmwgPSAnYmFkZ2UtZGF0YS11cmwnLFxuICBhY3RpdmF0ZSA9ICdhY3RpdmF0ZScsXG4gIHJlZ2lzdGVyQm91bmRzQ2hhbmdlID0gJ3JlZ2lzdGVyLWJvdW5kcy1jaGFuZ2UnLFxuICByZWdpc3RlclByb3RvY29sSGFuZGxlciA9ICdyZWdpc3Rlci1wcm90b2NvbC1oYW5kbGVyJyxcbiAgcmVnaXN0ZXJMb2dSZXRyaWV2ZXIgPSAncmVnaXN0ZXItbG9nLXJldHJpZXZlcicsXG4gIHNlbmRMb2dzID0gJ3NlbmQtbG9ncycsXG4gIHJlZ2lzdGVyQW5hbHl0aWNzSGFuZGxlciA9ICdyZWdpc3Rlci1hbmFseXRpY3MtaGFuZGxlcicsXG4gIHJlZ2lzdGVyQWN0aXZpdHlEZXRlY3Rpb24gPSAncmVnaXN0ZXItYWN0aXZpdHktZGV0ZWN0aW9uJyxcbiAgc2hvd05vdGlmaWNhdGlvblNldHRpbmdzID0gJ3Nob3ctbm90aWZpY2F0aW9uLXNldHRpbmdzJyxcbiAgc2FuaXRpemUgPSAnc2FuaXRpemUnLFxuICBicmluZ1RvRnJvbnQgPSAnYnJpbmctdG8tZnJvbnQnLFxuICBvcGVuU2NyZWVuUGlja2VyV2luZG93ID0gJ29wZW4tc2NyZWVuLXBpY2tlci13aW5kb3cnLFxuICBwb3B1cE1lbnUgPSAncG9wdXAtbWVudScsXG4gIG9wdGltaXplTWVtb3J5Q29uc3VtcHRpb24gPSAnb3B0aW1pemUtbWVtb3J5LWNvbnN1bXB0aW9uJyxcbiAgb3B0aW1pemVNZW1vcnlSZWdpc3RlciA9ICdvcHRpbWl6ZS1tZW1vcnktcmVnaXN0ZXInLFxuICBzZXRJc0luTWVldGluZyA9ICdzZXQtaXMtaW4tbWVldGluZycsXG4gIHNldExvY2FsZSA9ICdzZXQtbG9jYWxlJyxcbiAgb3BlblNjcmVlblNuaXBwZXQgPSAnb3Blbi1zY3JlZW4tc25pcHBldCcsXG4gIGNsb3NlU2NyZWVuU25pcHBldCA9ICdjbG9zZS1zY3JlZW4tc25pcHBldCcsXG4gIHNjcmVlblNuaXBwZXRBbmFseXRpY3NEYXRhID0gJ3NuaXBwZXQtYW5hbHl0aWNzLWRhdGEnLFxuICBrZXlQcmVzcyA9ICdrZXktcHJlc3MnLFxuICBjbG9zZVdpbmRvdyA9ICdjbG9zZS13aW5kb3cnLFxuICBvcGVuU2NyZWVuU2hhcmluZ0luZGljYXRvciA9ICdvcGVuLXNjcmVlbi1zaGFyaW5nLWluZGljYXRvcicsXG4gIGNsb3NlU2NyZWVuU2hhcmluZ0luZGljYXRvciA9ICdjbG9zZS1zY3JlZW4tc2hhcmluZy1pbmRpY2F0b3InLFxuICBkb3dubG9hZE1hbmFnZXJBY3Rpb24gPSAnZG93bmxvYWQtbWFuYWdlci1hY3Rpb24nLFxuICBnZXRNZWRpYVNvdXJjZSA9ICdnZXQtbWVkaWEtc291cmNlJyxcbiAgbm90aWZpY2F0aW9uID0gJ25vdGlmaWNhdGlvbicsXG4gIGNsb3NlTm90aWZpY2F0aW9uID0gJ2Nsb3NlLW5vdGlmaWNhdGlvbicsXG4gIGNsb3NlQ2FsbE5vdGlmaWNhdGlvbiA9ICdjbG9zZS1jYWxsLW5vdGlmaWNhdGlvbicsXG4gIG1lbW9yeUluZm8gPSAnbWVtb3J5LWluZm8nLFxuICBzd2lmdFNlYXJjaCA9ICdzd2lmdC1zZWFyY2gnLFxuICBnZXRDb25maWdVcmwgPSAnZ2V0LWNvbmZpZy11cmwnLFxuICByZWdpc3RlclJlc3RhcnRGbG9hdGVyID0gJ3JlZ2lzdGVyLXJlc3RhcnQtZmxvYXRlcicsXG4gIHNldENsb3VkQ29uZmlnID0gJ3NldC1jbG91ZC1jb25maWcnLFxuICBnZXRDUFVVc2FnZSA9ICdnZXQtY3B1LXVzYWdlJyxcbiAgY2hlY2tNZWRpYVBlcm1pc3Npb24gPSAnY2hlY2stbWVkaWEtcGVybWlzc2lvbicsXG4gIHJlZ2lzdGVyRG93bmxvYWRIYW5kbGVyID0gJ3JlZ2lzdGVyLWRvd25sb2FkLWhhbmRsZXInLFxuICBvcGVuRG93bmxvYWRlZEl0ZW0gPSAnb3Blbi1kb3dubG9hZGVkLWl0ZW0nLFxuICBzaG93RG93bmxvYWRlZEl0ZW0gPSAnc2hvdy1kb3dubG9hZGVkLWl0ZW0nLFxuICBjbGVhckRvd25sb2FkZWRJdGVtcyA9ICdjbGVhci1kb3dubG9hZGVkLWl0ZW1zJyxcbiAgcmVzdGFydEFwcCA9ICdyZXN0YXJ0LWFwcCcsXG4gIHNldElzTWFuYSA9ICdzZXQtaXMtbWFuYScsXG4gIHNob3dOb3RpZmljYXRpb24gPSAnc2hvdy1ub3RpZmljYXRpb24nLFxuICBzaG93Q2FsbE5vdGlmaWNhdGlvbiA9ICdzaG93LWNhbGwtbm90aWZpY2F0aW9uJyxcbiAgY2xvc2VBbGxXcmFwcGVyV2luZG93cyA9ICdjbG9zZS1hbGwtd2luZG93cycsXG4gIHNldFpvb21MZXZlbCA9ICdzZXQtem9vbS1sZXZlbCcsXG4gIGFib3V0QXBwQ2xpcEJvYXJkRGF0YSA9ICdhYm91dC1hcHAtY2xpcC1ib2FyZC1kYXRhJyxcbiAgY2xvc2VNYWluV2luZG93ID0gJ2Nsb3NlLW1haW4td2luZG93JyxcbiAgbWluaW1pemVNYWluV2luZG93ID0gJ21pbmltaXplLW1haW4td2luZG93JyxcbiAgbWF4aW1pemVNYWluV2luZG93ID0gJ21heGltaXplLW1haW4td2luZG93JyxcbiAgdW5tYXhpbWl6ZU1haW5XaW5kb3cgPSAndW5tYXhpbWl6ZS1tYWluLXdpbmRvdycsXG4gIGdldEN1cnJlbnRPcmlnaW5VcmwgPSAnZ2V0LWN1cnJlbnQtb3JpZ2luLXVybCcsXG4gIGlzQWVyb0dsYXNzRW5hYmxlZCA9ICdpcy1hZXJvLWdsYXNzLWVuYWJsZWQnLFxuICBzaG93U2NyZWVuU2hhcmVQZXJtaXNzaW9uRGlhbG9nID0gJ3Nob3ctc2NyZWVuLXNoYXJlLXBlcm1pc3Npb24tZGlhbG9nJyxcbiAgZ2V0TWVkaWFBY2Nlc3NTdGF0dXMgPSAnZ2V0LW1lZGlhLWFjY2Vzcy1zdGF0dXMnLFxuICBzZXRCcm9hZGNhc3RNZXNzYWdlID0gJ3NldC1icm9hZGNhc3QtbWVzc2FnZScsXG4gIGhhbmRsZVN3aWZ0U2VhcmNoTWVzc2FnZUV2ZW50cyA9ICdoYW5kbGUtc2hpZnQtc2VhcmNoLW1lc3NhZ2UtZXZlbnRzJyxcbiAgb25Td2lmdFNlYXJjaE1lc3NhZ2UgPSAnb24tc2hpZnQtc2VhcmNoLW1lc3NhZ2UnLFxuICBnZXROYXRpdmVXaW5kb3dIYW5kbGUgPSAnZ2V0LW5hdGl2ZS13aW5kb3ctaGFuZGxlJyxcbiAgZ2V0Q2l0cml4TWVkaWFSZWRpcmVjdGlvblN0YXR1cyA9ICdnZXQtY2l0cml4LW1lZGlhLXJlZGlyZWN0aW9uLXN0YXR1cycsXG4gIGdldFNvdXJjZXMgPSAnZ2V0U291cmNlcycsXG4gIGxhdW5jaENsb3VkOSA9ICdsYXVuY2gtY2xvdWQ5JyxcbiAgdGVybWluYXRlQ2xvdWQ5ID0gJ3Rlcm1pbmF0ZS1jbG91ZDknLFxuICBjb25uZWN0Q2xvdWQ5UGlwZSA9ICdjb25uZWN0LWNsb3VkOS1waXBlJyxcbiAgd3JpdGVDbG91ZDlQaXBlID0gJ3dyaXRlLWNsb3VkOS1waXBlJyxcbiAgY2xvc2VDbG91ZDlQaXBlID0gJ2Nsb3NlLWNsb3VkOS1waXBlJyxcbiAgdXBkYXRlQW5kUmVzdGFydCA9ICd1cGRhdGUtYW5kLXJlc3RhcnQnLFxuICBkb3dubG9hZFVwZGF0ZSA9ICdkb3dubG9hZC11cGRhdGUnLFxuICBjaGVja0ZvclVwZGF0ZXMgPSAnY2hlY2stZm9yLXVwZGF0ZXMnLFxuICBicm93c2VyTG9naW4gPSAnYnJvd3Nlci1sb2dpbicsXG4gIHVwZGF0ZU15UHJlc2VuY2UgPSAndXBkYXRlLW15LXByZXNlbmNlJyxcbiAgZ2V0TXlQcmVzZW5jZSA9ICdnZXQtbXktcHJlc2VuY2UnLFxuICB1cGRhdGVTeW1waG9ueVRyYXkgPSAndXBkYXRlLXN5c3RlbS10cmF5JyxcbiAgcmVnaXN0ZXJQaG9uZU51bWJlclNlcnZpY2VzID0gJ3JlZ2lzdGVyLXBob25lLW51bWJlcnMtc2VydmljZXMnLFxuICB1bnJlZ2lzdGVyUGhvbmVOdW1iZXJTZXJ2aWNlcyA9ICd1bnJlZ2lzdGVyLXBob25lLW51bWJlcnMtc2VydmljZXMnLFxuICBpc01lZGlhRW5hYmxlZCA9ICdpcy1tZWRpYS1lbmFibGVkJyxcbn1cblxuZXhwb3J0IGVudW0gYXBpTmFtZSB7XG4gIHN5bXBob255QXBpID0gJ3N5bXBob255LWFwaScsXG4gIG1haW5XaW5kb3dOYW1lID0gJ21haW4nLFxuICBub3RpZmljYXRpb25XaW5kb3dOYW1lID0gJ25vdGlmaWNhdGlvbi13aW5kb3cnLFxuICB3ZWxjb21lU2NyZWVuTmFtZSA9ICd3ZWxjb21lLXNjcmVlbicsXG4gIHNuaXBwaW5nVG9vbFdpbmRvd05hbWUgPSAnc25pcHBpbmctdG9vbC13aW5kb3cnLFxufVxuXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1dJTkRPV19USVRMRSA9ICdOb3RpZmljYXRpb24gLSBTeW1waG9ueSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwaUFyZ3Mge1xuICBtZW1vcnlJbmZvOiBFbGVjdHJvbi5Qcm9jZXNzTWVtb3J5SW5mbztcbiAgd29yZDogc3RyaW5nO1xuICBjbWQ6IGFwaUNtZHM7XG4gIGlzT25saW5lOiBib29sZWFuO1xuICBjb3VudDogbnVtYmVyO1xuICBkYXRhVXJsOiBzdHJpbmc7XG4gIHdpbmRvd05hbWU6IHN0cmluZztcbiAgcGVyaW9kOiBudW1iZXI7XG4gIHJlYXNvbjogc3RyaW5nO1xuICBzb3VyY2VzOiBFbGVjdHJvbi5EZXNrdG9wQ2FwdHVyZXJTb3VyY2VbXTtcbiAgaWQ6IG51bWJlcjtcbiAgY3B1VXNhZ2U6IEVsZWN0cm9uLkNQVVVzYWdlO1xuICBpc0luTWVldGluZzogYm9vbGVhbjtcbiAgbG9jYWxlOiBzdHJpbmc7XG4gIGtleUNvZGU6IG51bWJlcjtcbiAgd2luZG93VHlwZTogV2luZG93VHlwZXM7XG4gIHdpbktleTogc3RyaW5nO1xuICBzdHJlYW1JZDogc3RyaW5nO1xuICBkaXNwbGF5SWQ6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIGxvZ05hbWU6IHN0cmluZztcbiAgbG9nczogSUxvZ3M7XG4gIGNsb3VkQ29uZmlnOiBvYmplY3Q7XG4gIGlzTWFuYTogYm9vbGVhbjtcbiAgbm90aWZpY2F0aW9uT3B0czogb2JqZWN0O1xuICBub3RpZmljYXRpb25JZDogbnVtYmVyO1xuICB0aGVtZTogVGhlbWVzO1xuICB6b29tTGV2ZWw6IG51bWJlcjtcbiAgZmlsZW5hbWU6IHN0cmluZztcbiAgY2xpcGJvYXJkOiBzdHJpbmc7XG4gIGNsaXBib2FyZFR5cGU6ICdjbGlwYm9hcmQnIHwgJ3NlbGVjdGlvbic7XG4gIHJlcXVlc3RJZDogbnVtYmVyO1xuICBtZWRpYVN0YXR1czogSU1lZGlhUGVybWlzc2lvbjtcbiAgbmV3UG9kVXJsOiBzdHJpbmc7XG4gIHN0YXJ0VXJsOiBzdHJpbmc7XG4gIGlzUG9kQ29uZmlndXJlZDogYm9vbGVhbjtcbiAgaXNCcm93c2VyTG9naW5FbmFibGVkOiBib29sZWFuO1xuICBicm93c2VyTG9naW5BdXRvQ29ubmVjdDogYm9vbGVhbjtcbiAgc3dpZnRTZWFyY2hEYXRhOiBhbnk7XG4gIHR5cGVzOiBzdHJpbmdbXTtcbiAgdGh1bWJuYWlsU2l6ZTogU2l6ZTtcbiAgcGlwZTogc3RyaW5nO1xuICBkYXRhOiBVaW50OEFycmF5O1xuICBhdXRvVXBkYXRlVHJpZ2dlcjogQXV0b1VwZGF0ZVRyaWdnZXI7XG4gIGhpZGVPbkNhcHR1cmU6IGJvb2xlYW47XG4gIHN0YXR1czogSVByZXNlbmNlU3RhdHVzO1xuICBwcm90b2NvbHM6IFBob25lTnVtYmVyUHJvdG9jb2xbXTtcbn1cblxuZXhwb3J0IHR5cGUgVGhlbWVzID0gJ2xpZ2h0JyB8ICdkYXJrJztcblxuZXhwb3J0IHR5cGUgV2luZG93VHlwZXMgPVxuICB8ICdzY3JlZW4tcGlja2VyJ1xuICB8ICdzY3JlZW4tc2hhcmluZy1pbmRpY2F0b3InXG4gIHwgJ25vdGlmaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJhZGdlQ291bnQge1xuICBjb3VudDogbnVtYmVyO1xufVxuXG4vKipcbiAqIFNjcmVlbiBzbmlwcGV0XG4gKi9cbmV4cG9ydCB0eXBlIFNjcmVlblNuaXBwZXREYXRhVHlwZSA9ICdFUlJPUicgfCAnaW1hZ2UvcG5nO2Jhc2U2NCcgfCAnSElERV9TREEnO1xuZXhwb3J0IGludGVyZmFjZSBJU2NyZWVuU25pcHBldCB7XG4gIGRhdGE/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHR5cGU6IFNjcmVlblNuaXBwZXREYXRhVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQm91bmRzQ2hhbmdlIGV4dGVuZHMgRWxlY3Ryb24uUmVjdGFuZ2xlIHtcbiAgd2luZG93TmFtZTogc3RyaW5nO1xufVxuXG4vLyBQcmVzZW5jZSBTdGF0dXNcbmV4cG9ydCBpbnRlcmZhY2UgSVRodW1iYXJCdXR0b24ge1xuICBpY29uOiBOYXRpdmVJbWFnZTtcbiAgY2xpY2s6ICgpID0+IHZvaWQ7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIGZsYWdzPzogQXJyYXk8XG4gICAgfCAnZW5hYmxlZCdcbiAgICB8ICdkaXNhYmxlZCdcbiAgICB8ICdkaXNtaXNzb25jbGljaydcbiAgICB8ICdub2JhY2tncm91bmQnXG4gICAgfCAnaGlkZGVuJ1xuICAgIHwgJ25vbmludGVyYWN0aXZlJ1xuICA+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0dXNCYWRnZSBleHRlbmRzIElCYWRnZUNvdW50IHtcbiAgc3RhdHVzQ2F0ZWdvcnk6IEVQcmVzZW5jZVN0YXR1c0NhdGVnb3J5O1xuICBzdGF0dXNHcm91cDogRVByZXNlbmNlU3RhdHVzR3JvdXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyYXkge1xuICBjdXJyZW50OiBUcmF5IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJlc2VuY2VTdG9yZSB7XG4gIHN0YXR1c0JhZGdlOiBJU3RhdHVzQmFkZ2U7XG4gIHByZXNlbmNlU3RhdHVzOiBJUHJlc2VuY2VTdGF0dXM7XG59XG5cbmV4cG9ydCBlbnVtIEVQcmVzZW5jZVN0YXR1c0NhdGVnb3J5IHtcbiAgJ09OTElORScgPSAnT05MSU5FJyxcbiAgJ09GRkxJTkUnID0gJ09GRkxJTkUnLFxuICAnQVdBWScgPSAnQVdBWScsXG4gICdET19OT1RfRElTVFVSQicgPSAnRE9fTk9UX0RJU1RVUkInLFxuICAnQlVTWScgPSAnQlVTWScsXG4gICdPTl9USEVfUEhPTkUnID0gJ09OX1RIRV9QSE9ORScsXG4gICdBVkFJTEFCTEUnID0gJ0FWQUlMQUJMRScsXG4gICdPVVRfT0ZfT0ZGSUNFJyA9ICdPVVRfT0ZfT0ZGSUNFJyxcbiAgJ0lOX0FfTUVFVElORycgPSAnSU5fQV9NRUVUSU5HJyxcbiAgJ0JFX1JJR0hUX0JBQ0snID0gJ0JFX1JJR0hUX0JBQ0snLFxuICAnT0ZGX1dPUksnID0gJ09GRl9XT1JLJyxcbiAgJ05PX1BSRVNFTkNFJyA9ICdOT19QUkVTRU5DRScsXG59XG5cbmV4cG9ydCBlbnVtIEVQcmVzZW5jZVN0YXR1c0dyb3VwIHtcbiAgT05MSU5FID0gJ29ubGluZScsXG4gIEJVU1kgPSAnYnVzeScsXG4gIElETEUgPSAnaWRsZScsXG4gIE9GRkxJTkUgPSAnb2ZmbGluZScsXG4gIEFCU0VOVCA9ICdhYnNlbnQnLFxuICBNRUVUSU5HID0gJ21lZXRpbmcnLFxuICBISURFX1BSRVNFTkNFID0gJ2hpZGUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcmVzZW5jZVN0YXR1cyB7XG4gIHN0YXR1c0NhdGVnb3J5OiBFUHJlc2VuY2VTdGF0dXNDYXRlZ29yeTtcbiAgc3RhdHVzR3JvdXA6IEVQcmVzZW5jZVN0YXR1c0dyb3VwO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBTY3JlZW4gc2hhcmluZyBpbmRpY2F0b3JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2NyZWVuU2hhcmluZ0luZGljYXRvciB7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVxdWVzdElkOiBudW1iZXI7XG4gIHJlYXNvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gS2V5Q29kZXMge1xuICBFc2MgPSAyNyxcbiAgQWx0ID0gMTgsXG59XG5cbnR5cGUgVGhlbWUgPSAnJyB8ICdsaWdodCcgfCAnZGFyayc7XG50eXBlIENhbGxUeXBlID0gJ0lNJyB8ICdST09NJyB8ICdPVEhFUic7XG5cbi8qKlxuICogTm90aWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWNhdGlvbkRhdGEge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGZsYXNoOiBib29sZWFuO1xuICBjb2xvcjogc3RyaW5nO1xuICB0YWc6IHN0cmluZztcbiAgc3RpY2t5OiBib29sZWFuO1xuICBjb21wYW55OiBzdHJpbmc7XG4gIGRpc3BsYXlUaW1lOiBudW1iZXI7XG4gIGlzRXh0ZXJuYWw6IGJvb2xlYW47XG4gIGlzVXBkYXRlZDogYm9vbGVhbjtcbiAgdGhlbWU6IFRoZW1lO1xuICBpc0VsZWN0cm9uTm90aWZpY2F0aW9uPzogYm9vbGVhbjtcbiAgY2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xuICBoYXNJZ25vcmU/OiBib29sZWFuO1xuICBoYXNSZXBseT86IGJvb2xlYW47XG4gIGhhc01lbnRpb24/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE5vdGlmaWNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDYWxsTm90aWZpY2F0aW9uRGF0YSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbXBhbnk6IHN0cmluZztcbiAgaXNFeHRlcm5hbDogYm9vbGVhbjtcbiAgdGhlbWU6IFRoZW1lO1xuICBwcmltYXJ5VGV4dDogc3RyaW5nO1xuICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHNlY29uZGFyeVRleHQ/OiBzdHJpbmc7XG4gIGNvbXBhbnlJY29uVXJsPzogc3RyaW5nO1xuICBwcm9maWxlUGxhY2VIb2xkZXJUZXh0OiBzdHJpbmc7XG4gIGFjdGlvbkljb25Vcmw/OiBzdHJpbmc7XG4gIGNhbGxUeXBlOiBDYWxsVHlwZTtcbiAgc2hvdWxkRGlzcGxheUJhZGdlOiBib29sZWFuO1xuICBhY2NlcHRCdXR0b25UZXh0OiBzdHJpbmc7XG4gIHJlamVjdEJ1dHRvblRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uQWN0aW9ucyB7XG4gIG5vdGlmaWNhdGlvbkNsaWNrZWQgPSAnbm90aWZpY2F0aW9uLWNsaWNrZWQnLFxuICBub3RpZmljYXRpb25DbG9zZWQgPSAnbm90aWZpY2F0aW9uLWNsb3NlZCcsXG4gIG5vdGlmaWNhdGlvblJlcGx5ID0gJ25vdGlmaWNhdGlvbi1yZXBseScsXG4gIG5vdGlmaWNhdGlvbklnbm9yZSA9ICdub3RpZmljYXRpb24taWdub3JlJyxcbiAgbm90aWZpY2F0aW9uQWNjZXB0ID0gJ25vdGlmaWNhdGlvbi1hY2NlcHQnLFxuICBub3RpZmljYXRpb25SZWplY3QgPSAnbm90aWZpY2F0aW9uLXJlamVjdCcsXG59XG5cbi8qKlxuICogU2NyZWVuIHNoYXJpbmcgSW5kaWNhdG9yXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNjcmVlblNoYXJpbmdJbmRpY2F0b3JPcHRpb25zIHtcbiAgZGlzcGxheUlkOiBzdHJpbmc7XG4gIHJlcXVlc3RJZDogbnVtYmVyO1xuICBzdHJlYW1JZDogc3RyaW5nO1xuICBzdHJlYW0/OiBNZWRpYVN0cmVhbTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmVyc2lvbkluZm8ge1xuICBjb250YWluZXJJZGVudGlmaWVyOiBzdHJpbmc7XG4gIGNvbnRhaW5lclZlcjogc3RyaW5nO1xuICBidWlsZE51bWJlcjogc3RyaW5nO1xuICBhcGlWZXI6IHN0cmluZztcbiAgc2VhcmNoQXBpVmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNQVVVzYWdlIHtcbiAgcGVyY2VudENQVVVzYWdlOiBudW1iZXI7XG4gIGlkbGVXYWtldXBzUGVyU2Vjb25kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURvd25sb2FkTWFuYWdlciB7XG4gIF9pZDogc3RyaW5nO1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBmaWxlRGlzcGxheU5hbWU6IHN0cmluZztcbiAgc2F2ZWRQYXRoOiBzdHJpbmc7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGZsYXNoaW5nPzogYm9vbGVhbjtcbiAgY291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhUGVybWlzc2lvbiB7XG4gIGNhbWVyYTogJ25vdC1kZXRlcm1pbmVkJyB8ICdncmFudGVkJyB8ICdkZW5pZWQnIHwgJ3Jlc3RyaWN0ZWQnIHwgJ3Vua25vd24nO1xuICBtaWNyb3Bob25lOlxuICAgIHwgJ25vdC1kZXRlcm1pbmVkJ1xuICAgIHwgJ2dyYW50ZWQnXG4gICAgfCAnZGVuaWVkJ1xuICAgIHwgJ3Jlc3RyaWN0ZWQnXG4gICAgfCAndW5rbm93bic7XG4gIHNjcmVlbjogJ25vdC1kZXRlcm1pbmVkJyB8ICdncmFudGVkJyB8ICdkZW5pZWQnIHwgJ3Jlc3RyaWN0ZWQnIHwgJ3Vua25vd24nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dNc2cge1xuICBsZXZlbDogTG9nTGV2ZWw7XG4gIGRldGFpbHM6IGFueTtcbiAgc2hvd0luQ29uc29sZTogYm9vbGVhbjtcbiAgc3RhcnRUaW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIExvZ0xldmVsID1cbiAgfCAnZXJyb3InXG4gIHwgJ3dhcm4nXG4gIHwgJ2luZm8nXG4gIHwgJ3ZlcmJvc2UnXG4gIHwgJ2RlYnVnJ1xuICB8ICdzaWxseSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ0ZpbGUge1xuICBmaWxlbmFtZTogc3RyaW5nO1xuICBjb250ZW50czogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dzIHtcbiAgbG9nTmFtZTogc3RyaW5nO1xuICBsb2dGaWxlczogSUxvZ0ZpbGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzdGFydEZsb2F0ZXJEYXRhIHtcbiAgd2luZG93TmFtZTogc3RyaW5nO1xuICBib3VuZHM6IEVsZWN0cm9uLlJlY3RhbmdsZTtcbn1cblxuZXhwb3J0IHR5cGUgUmVwbHkgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBFbGVjdHJvbk5vdGlmaWNhdGlvbkRhdGEgPSBSZXBseSB8IG9iamVjdDtcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkFjdGlvbkNhbGxiYWNrID0gKFxuICBldmVudDogTm90aWZpY2F0aW9uQWN0aW9ucyxcbiAgZGF0YTogSU5vdGlmaWNhdGlvbkRhdGFcbikgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQ29uZmlnVXBkYXRlVHlwZSA9ICdyZXN0YXJ0JyB8ICdyZWxvYWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDbG91ZDlQaXBlIHtcbiAgLyoqXG4gICAqIEFiaWxpdHkgdG8gd3JpdGUgaW4gQzkgbmFtZWQgcGlwZVxuICAgKi9cbiAgd3JpdGUoZGF0YTogVWludDhBcnJheSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFiaWxpdHkgdG8gY2xvc2UgbmFtZWQgcGlwZVxuICAgKi9cbiAgY2xvc2UoKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQXV0aFR5cGUgPSAncGFzc3dvcmQnIHwgJ3Nzbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhSZXNwb25zZSB7XG4gIHN0YXR1czogc3RyaW5nO1xuICBwb2RWZXJzaW9uOiBzdHJpbmc7XG4gIGF1dGhlbnRpY2F0aW9uVHlwZTogQXV0aFR5cGU7XG4gIHNzb0Rpc2FibGVkRm9yTW9iaWxlOiBib29sZWFuO1xuICBrZXltYW5hZ2VyVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFBob25lTnVtYmVyUHJvdG9jb2wge1xuICBUZWwgPSAndGVsJyxcbiAgU21zID0gJ3NtcycsXG59XG4iLCJleHBvcnQgY29uc3QgaXNFbGVjdHJvblFBID0gISFwcm9jZXNzLmVudi5FTEVDVFJPTl9RQTtcblxuZXhwb3J0IGNvbnN0IGlzTWFjID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2Rhcndpbic7XG5leHBvcnQgY29uc3QgaXNXaW5kb3dzT1MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuZXhwb3J0IGNvbnN0IGlzTGludXggPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnO1xuIiwiaW1wb3J0IHsgZm9ybWF0U3RyaW5nIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGxvY2FsZUNvZGVSZWdleCA9IC9eKFthLXpdezJ9KS0oW0EtWl17Mn0pJC87XG5cbmV4cG9ydCB0eXBlIExvY2FsZVR5cGUgPSAnZW4tVVMnIHwgJ2phLUpQJyB8ICdmci1GUic7XG5cbnR5cGUgZm9ybWF0dGVyRnVuY3Rpb24gPSAoYXJncz86IG9iamVjdCkgPT4gc3RyaW5nO1xuXG5jbGFzcyBUcmFuc2xhdGlvbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRyYW5zbGF0ZWQgc3RyaW5nIHdpdGggcmVzcGVjdCB0byB2YWx1ZSwgcmVzb3VyY2UgJiBuYW1lIHNwYWNlXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfSBrZXkgZmllbGQgaW4gdGhlIHJlc291cmNlc1xuICAgKiBAcGFyYW0gcmVzb3VyY2Uge3N0cmluZ30gY3VycmVudCBsb2NhbGUgcmVzb3VyY2VcbiAgICogQHBhcmFtIG5hbWVzcGFjZSB7c3RyaW5nfSBuYW1lIHNwYWNlIGluIHRoZSByZXNvdXJjZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNsYXRlKFxuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgcmVzb3VyY2U6IEpTT04gfCBudWxsLFxuICAgIG5hbWVzcGFjZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlc291cmNlXG4gICAgICA/IFRyYW5zbGF0aW9uLmdldFJlc291cmNlKHJlc291cmNlLCBuYW1lc3BhY2UpW3ZhbHVlXSB8fCB2YWx1ZVxuICAgICAgOiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldFJlc291cmNlID0gKFxuICAgIHJlc291cmNlOiBKU09OLFxuICAgIG5hbWVzcGFjZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICk6IEpTT04gPT4gKG5hbWVzcGFjZSA/IHJlc291cmNlW25hbWVzcGFjZV0gOiByZXNvdXJjZSk7XG5cbiAgcHJpdmF0ZSBsb2NhbGU6IExvY2FsZVR5cGUgPSAnZW4tVVMnO1xuXG4gIHByaXZhdGUgbG9hZGVkUmVzb3VyY2VzOiBvYmplY3QgPSB7fTtcblxuICAvKipcbiAgICogQXBwbHkgdGhlIGxvY2FsZSBmb3IgdHJhbnNsYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGxvY2FsZVxuICAgKi9cbiAgcHVibGljIHNldExvY2FsZShsb2NhbGU6IExvY2FsZVR5cGUpOiB2b2lkIHtcbiAgICBjb25zdCBsb2NhbGVNYXRjaDogc3RyaW5nW10gfCBudWxsID0gbG9jYWxlLm1hdGNoKGxvY2FsZUNvZGVSZWdleCk7XG4gICAgaWYgKCFsb2NhbGUgJiYgKCFsb2NhbGVNYXRjaCB8fCBsb2NhbGVNYXRjaC5sZW5ndGggPCAxKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgbG9jYWxlXG4gICAqXG4gICAqIEByZXR1cm4gTG9jYWxlVHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgcHVibGljIGdldExvY2FsZSgpOiBMb2NhbGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogZmV0Y2hlcyBhbmQgcmV0dXJucyB0aGUgdHJhbnNsYXRlZCB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHBhcmFtIG5hbWVzcGFjZSB7c3RyaW5nfVxuICAgKiBAZXhhbXBsZSB0KCd0cmFuc2xhdGUgYW5kIGZvcm1hdHMge2RhdGF9ICcsIG5hbWVzcGFjZSkoeyBkYXRhOiAnc3RyaW5nJyB9KVxuICAgKiBAcmV0dXJucyB0cmFuc2xhdGUgYW5kIGZvcm1hdHMgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgdCh2YWx1ZTogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpOiBmb3JtYXR0ZXJGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChhcmdzPzogb2JqZWN0KTogc3RyaW5nID0+IHtcbiAgICAgIGlmICh0aGlzLmxvYWRlZFJlc291cmNlcyAmJiB0aGlzLmxvYWRlZFJlc291cmNlc1t0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFN0cmluZyhcbiAgICAgICAgICBUcmFuc2xhdGlvbi50cmFuc2xhdGUoXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHRoaXMubG9hZGVkUmVzb3VyY2VzW3RoaXMubG9jYWxlXSxcbiAgICAgICAgICAgIG5hbWVzcGFjZVxuICAgICAgICAgICksXG4gICAgICAgICAgYXJnc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLmxvYWRSZXNvdXJjZSh0aGlzLmxvY2FsZSk7XG4gICAgICByZXR1cm4gZm9ybWF0U3RyaW5nKFxuICAgICAgICBUcmFuc2xhdGlvbi50cmFuc2xhdGUodmFsdWUsIHJlc291cmNlLCBuYW1lc3BhY2UpIHx8IHZhbHVlLFxuICAgICAgICBhcmdzXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogS2VlcHMgcmVmIG9mIGxvYWRlZCByZXNvdXJjZXMgZnJvbSB0aGUgbWFpbiBwcm9jZXNzXG4gICAqXG4gICAqIEBwYXJhbSBsb2NhbGUge0xvY2FsZVR5cGV9XG4gICAqIEBwYXJhbSByZXNvdXJjZSB7SlNPTn1cbiAgICovXG4gIHB1YmxpYyBzZXRSZXNvdXJjZShsb2NhbGU6IExvY2FsZVR5cGUsIHJlc291cmNlOiBKU09OKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5sb2FkZWRSZXNvdXJjZXMgPSByZXNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgcmVzb3VyY2VzIGRpciBhbmQgcmV0dXJucyB0aGUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gbG9jYWxlXG4gICAqL1xuICBwcml2YXRlIGxvYWRSZXNvdXJjZShsb2NhbGU6IExvY2FsZVR5cGUpOiBKU09OIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVkUmVzb3VyY2VzW2xvY2FsZV07XG4gIH1cbn1cblxuY29uc3QgaTE4biA9IG5ldyBUcmFuc2xhdGlvbigpO1xuXG5leHBvcnQgeyBpMThuIH07XG4iLCJleHBvcnQgZW51bSBTY3JlZW5TaG90QW5ub3RhdGlvbkV2ZW50cyB7XG4gIENPUFlfVE9fQ0xJUEJPQVJEID0gJ2NvcHktdG8tY2xpcGJvYXJkJyxcbiAgU0FWRV9BUyA9ICdzYXZlLWFzJyxcbiAgQ0xPU0UgPSAnY2xvc2Utc25pcHBldCcsXG4gIEFOQUxZVElDUyA9ICdzbmlwcGV0LWFuYWx5dGljcy1kYXRhJyxcbiAgVVBMT0FEX1NOSVBQRVQgPSAndXBsb2FkLXNuaXBwZXQnLFxuICBEQVRBID0gJ3NuaXBwaW5nLXRvb2wtZGF0YSdcbn1cblxuZXhwb3J0IGVudW0gQWJvdXRBcHBFdmVudHMge1xuICBEQVRBID0gJ2Fib3V0LWFwcC1kYXRhJyxcbiAgQ0xPU0UgPSAnY2xvc2UtYWJvdXQtYXBwJyxcbiAgUE9EX1VQREFURUQgPSAndXNlci1wb2QtdXBkYXRlZCdcbn1cblxuZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uU2V0dGluZ3NFdmVudHMge1xuICBEQVRBID0gJ25vdGlmaWNhdGlvbi1zZXR0aW5ncy1kYXRhJyxcbiAgVVBEQVRFX1NFVFRJTkdTID0gJ25vdGlmaWNhdGlvbi1zZXR0aW5ncy11cGRhdGUnXG59XG5cbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbkV2ZW50cyB7XG4gIERBVEEgPSAnbm90aWZpY2F0aW9uLWRhdGEnLFxuICBDTElDS0VEID0gJ25vdGlmaWNhdGlvbi1jbGlja2VkJyxcbiAgQ0xPU0UgPSAnY2xvc2Utbm90aWZpY2F0aW9uJyxcbiAgTU9VU0VfRU5URVIgPSAnbm90aWZpY2F0aW9uLW1vdXNlZW50ZXInLFxuICBNT1VTRV9MRUFWRSA9ICdub3RpZmljYXRpb24tbW91c2VsZWF2ZScsXG4gIE9OX0lHTk9SRSA9ICdub3RpZmljYXRpb24tb24taWdub3JlJyxcbiAgT05fUkVQTFkgPSAnbm90aWZpY2F0aW9uLW9uLXJlcGx5JyxcbiAgU0hPV19SRVBMWSA9ICdzaG93LXJlcGx5J1xufVxuXG5leHBvcnQgZW51bSBTY3JlZW5TaGFyZUluZGljYXRvckV2ZW50cyB7XG4gIERBVEEgPSAnc2NyZWVuLXNoYXJpbmctaW5kaWNhdG9yLWRhdGEnXG59XG5cbmV4cG9ydCBlbnVtIFNjcmVlblNoYXJlRXZlbnRzIHtcbiAgU1RPUCA9ICdzdG9wLXNjcmVlbi1zaGFyaW5nJyxcbiAgU1RBUlQgPSAnc3RhcnQtc2hhcmUnLFxuICBBUkdWID0gJ3NjcmVlbi1zaGFyZS1hcmd2JyxcbiAgSVNfRU5BQkxFRCA9ICdpcy1zY3JlZW4tc2hhcmUtZW5hYmxlZCcsXG4gIFNUT1BQRUQgPSAnc2NyZWVuLXNoYXJpbmctc3RvcHBlZCdcbn1cblxuZXhwb3J0IGVudW0gU2NyZWVuUGlja2VyRXZlbnRzIHtcbiAgREFUQSA9ICdzY3JlZW4tcGlja2VyLWRhdGEnLFxuICBTT1VSQ0VfU0VMRUNUID0gJ3NjcmVlbi1zb3VyY2Utc2VsZWN0JyxcbiAgU09VUkNFX1NFTEVDVEVEID0gJ3NjcmVlbi1zb3VyY2Utc2VsZWN0ZWQnXG59XG5cbmV4cG9ydCBlbnVtIENhbGxOb3RpZmljYXRpb25FdmVudHMge1xuICBDTElDS0VEID0gJ2NhbGwtbm90aWZpY2F0aW9uLWNsaWNrZWQnLFxuICBPTl9BQ0NFUFQgPSAnY2FsbC1ub3RpZmljYXRpb24tb24tYWNjZXB0JyxcbiAgT05fUkVKRUNUID0gJ2NhbGwtbm90aWZpY2F0aW9uLW9uLXJlamVjdCcsXG4gIERBVEEgPSAnY2FsbC1ub3RpZmljYXRpb24tZGF0YSdcbn1cblxuZXhwb3J0IGVudW0gVGl0bGVCYXJFdmVudHMge1xuICBNQVhJTUlaRSA9ICdtYXhpbWl6ZScsXG4gIFVOTUFYSU1JWkUgPSAndW5tYXhpbWl6ZScsXG4gIE1PVkUgPSAnbW92ZScsXG4gIERJU0FCTEVfQUNUSU9OX0JVVFRPTiA9ICdkaXNhYmxlLWFjdGlvbi1idXR0b24nLCBcbn1cblxuZXhwb3J0IGVudW0gTG9hZGluZ1NjcmVlbkV2ZW50cyB7XG4gIFJFTE9BRCA9ICdyZWxvYWQtc3ltcGhvbnknLFxuICBRVUlUID0gJ3F1aXQtc3ltcGhvbnknLFxuICBEQVRBID0gJ2xvYWRpbmctc2NyZWVuLWRhdGEnXG59XG5cbmV4cG9ydCBlbnVtIEJhc2ljQXV0aEV2ZW50cyB7XG4gIERBVEEgPSAnYmFzaWMtYXV0aC1kYXRhJyxcbiAgTE9HSU4gPSAnYmFzaWMtYXV0aC1sb2dpbicsXG4gIENMT1NFRCA9ICdiYXNpYy1hdXRoLWNsb3NlZCdcbn1cblxuZXhwb3J0IHR5cGUgSXBjRXZlbnRzID0gU2NyZWVuU2hvdEFubm90YXRpb25FdmVudHMgfCBBYm91dEFwcEV2ZW50cyB8IE5vdGlmaWNhdGlvblNldHRpbmdzRXZlbnRzIHwgTm90aWZpY2F0aW9uRXZlbnRzIHwgU2NyZWVuU2hhcmVJbmRpY2F0b3JFdmVudHMgfCBTY3JlZW5TaGFyZUV2ZW50cyB8IFNjcmVlblBpY2tlckV2ZW50cyB8IENhbGxOb3RpZmljYXRpb25FdmVudHMgfCBMb2FkaW5nU2NyZWVuRXZlbnRzIHwgc3RyaW5nOyIsIi8vIHJlZ2V4IG1hdGNoIHRoZSBzZW12ZXIgKHNlbWFudGljIHZlcnNpb24pIHRoaXMgY2hlY2tzIGZvciB0aGUgcGF0dGVybiBYLlkuWlxuLy8gZXgtdmFsaWQgIHYxLjIuMCwgMS4yLjAsIDIuMy40LXI1MVxuY29uc3Qgc2VtdmVyID1cbiAgL152Pyg/OlxcZCspKFxcLig/Olt4Kl18XFxkKykoXFwuKD86W3gqXXxcXGQrKSg/Oi1bXFxkYS16LV0rKD86XFwuW1xcZGEtei1dKykqKT8oPzpcXCtbXFxkYS16LV0rKD86XFwuW1xcZGEtei1dKykqKT8pPyk/JC9pO1xuY29uc3QgcGF0Y2ggPSAvLShbMC05QS1aYS16LS5dKykvO1xuXG4vKipcbiAqIFNwbGl0cyB0aGUgdmVyc2lvbnNcbiAqIGludG8gbWFqb3IsIG1pbm9yIGFuZCBwYXRjaFxuICogQHBhcmFtIHZcbiAqIEByZXR1cm5zIHtTdHJpbmdbXX1cbiAqL1xuY29uc3Qgc3BsaXQgPSAodjogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCB0ZW1wID0gdi5yZXBsYWNlKC9edi8sICcnKS5zcGxpdCgnLicpO1xuICBjb25zdCBhcnIgPSB0ZW1wLnNwbGljZSgwLCAyKTtcbiAgYXJyLnB1c2godGVtcC5qb2luKCcuJykpO1xuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIHRoZSB2ZXJzaW9uIHN0cmluZ1xuICogQHBhcmFtIHYgVmVyc2lvbiBzdHJpbmdcbiAqL1xuY29uc3QgdHJ5UGFyc2UgPSAodjogc3RyaW5nKTogc3RyaW5nIHwgbnVtYmVyID0+IHtcbiAgcmV0dXJuIE51bWJlci5pc05hTihOdW1iZXIodikpID8gdiA6IE51bWJlcih2KTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoZSB2ZXJzaW9uXG4gKiB3aXRoIHRoZSBzZW12ZXIgcmVnZXggYW5kIHJldHVybnNcbiAqIC0xIGlmIG5vdCB2YWxpZCBlbHNlIDFcbiAqIEBwYXJhbSB2ZXJzaW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5jb25zdCB2YWxpZGF0ZSA9ICh2ZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICBpZiAoIXNlbXZlci50ZXN0KHZlcnNpb24pKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiAxO1xufTtcblxuLyoqXG4gKiBDb21wYXJlcyB0aGUgdjEgdmVyc2lvbiB3aXRoIHRoZSB2MiB2ZXJzaW9uXG4gKiBmb3IgYWxsIG1ham9yLCBtaW5vciwgcGF0Y2hcbiAqIGlmIHYxID4gdjIgcmV0dXJucyAxXG4gKiBpZiB2MSA8IHYyIHJldHVybnMgLTFcbiAqIGlmIHYxID0gdjIgcmV0dXJucyAwXG4gKiBAcGFyYW0gdjFcbiAqIEBwYXJhbSB2MlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhcmVWZXJzaW9ucyA9ICh2MTogc3RyaW5nLCB2Mjogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgaWYgKHZhbGlkYXRlKHYxKSA9PT0gLTEgfHwgdmFsaWRhdGUodjIpID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGNvbnN0IHMxID0gc3BsaXQodjEpO1xuICBjb25zdCBzMiA9IHNwbGl0KHYyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IG4xID0gcGFyc2VJbnQoczFbaV0gfHwgJzAnLCAxMCk7XG4gICAgY29uc3QgbjIgPSBwYXJzZUludChzMltpXSB8fCAnMCcsIDEwKTtcblxuICAgIGlmIChuMSA+IG4yKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKG4yID4gbjEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoW3MxWzJdLCBzMlsyXV0uZXZlcnkocGF0Y2gudGVzdC5iaW5kKHBhdGNoKSkpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcDEgPSBwYXRjaC5leGVjKHMxWzJdKVsxXS5zcGxpdCgnLicpLm1hcCh0cnlQYXJzZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHAyID0gcGF0Y2guZXhlYyhzMlsyXSlbMV0uc3BsaXQoJy4nKS5tYXAodHJ5UGFyc2UpO1xuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBNYXRoLm1heChwMS5sZW5ndGgsIHAyLmxlbmd0aCk7IGsrKykge1xuICAgICAgaWYgKFxuICAgICAgICBwMVtrXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICh0eXBlb2YgcDJba10gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBwMVtrXSA9PT0gJ251bWJlcicpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBwMltrXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICh0eXBlb2YgcDFba10gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBwMltrXSA9PT0gJ251bWJlcicpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChwMVtrXSA+IHAyW2tdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKHAyW2tdID4gcDFba10pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChbczFbMl0sIHMyWzJdXS5zb21lKHBhdGNoLnRlc3QuYmluZChwYXRjaCkpKSB7XG4gICAgcmV0dXJuIHBhdGNoLnRlc3QoczFbMl0pID8gLTEgOiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG4vKipcbiAqIFNlYXJjaCBnaXZlbiBhcmd2IGZvciBhcmdOYW1lIHVzaW5nIGV4YWN0IG1hdGNoIG9yIHN0YXJ0cyB3aXRoLiBDb21wYXJpc29uIGlzIGNhc2UgaW5zZW5zaXRpdmVcbiAqIEBwYXJhbSAge0FycmF5fSBhcmd2ICAgICAgIEFycmF5IG9mIHN0cmluZ3NcbiAqIEBwYXJhbSAge1N0cmluZ30gYXJnTmFtZSAgIEFyZyBuYW1lIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0gIHtCb29sZWFufSBleGFjdE1hdGNoICBJZiB0cnVlIHRoZW4gbG9vayBmb3IgZXhhY3QgbWF0Y2ggb3RoZXJ3aXNlXG4gKiB0cnkgZmluZGluZyBhcmcgdGhhdCBzdGFydHMgd2l0aCBhcmdOYW1lLlxuICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgSWYgZm91bmQsIHJldHVybnMgdGhlIGFyZywgb3RoZXJ3aXNlIG51bGwuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21tYW5kTGluZUFyZ3MgPSAoXG4gIGFyZ3Y6IHN0cmluZ1tdLFxuICBhcmdOYW1lOiBzdHJpbmcsXG4gIGV4YWN0TWF0Y2g6IGJvb2xlYW5cbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJndikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgZ2V0LWNvbW1hbmQtbGluZS1hcmdzOiBUeXBlRXJyb3IgaW52YWxpZCBmdW5jIGFyZywgbXVzdCBiZSBhbiBhcnJheTogJHthcmd2fWBcbiAgICApO1xuICB9XG5cbiAgY29uc3QgYXJnTmFtZVRvRmluZCA9IGFyZ05hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJndi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGFyZyA9IGFyZ3ZbaV0udG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICAoZXhhY3RNYXRjaCAmJiBhcmcgPT09IGFyZ05hbWVUb0ZpbmQpIHx8XG4gICAgICAoIWV4YWN0TWF0Y2ggJiYgYXJnLnN0YXJ0c1dpdGgoYXJnTmFtZVRvRmluZCkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gYXJndltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZ3VpZCxcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gZ3VpZCB2YWx1ZSBpbiBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEd1aWQgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2VcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUGlja3MgYSBmaWx0ZXJlZCBsaXN0IG9mIHZhbHVlc1xuICogaW4gYSBnaXZlbiBvYmplY3QgYmFzZWQgb24gZmllbGRzXG4gKiBAcGFyYW0gb2JqZWN0IE9iamVjdCB0byBiZSBmaWx0ZXJlZFxuICogQHBhcmFtIGZpZWxkcyBGaWVsZHMgdG8gYmUgcGlja2VkXG4gKi9cbmV4cG9ydCBjb25zdCBwaWNrID0gKG9iamVjdDogb2JqZWN0LCBmaWVsZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgIGlmIChvYmplY3RbZmllbGRdICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0W2ZpZWxkXSAhPT0gbnVsbCkge1xuICAgICAgb2JqW2ZpZWxkXSA9IG9iamVjdFtmaWVsZF07XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIEZpbHRlcnMgb3V0IHRydXRoeSB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0gZGF0YSB7T2JqZWN0fSB7IHRlc3Q6IHRydWUsIHRlc3QxOiBmYWxzZSwgdGVzdDI6ICdOT1RfU0VUJyB9XG4gKiBAcGFyYW0gdmFsdWVzIHtBcnJheX0gWyB0cnVlLCBcIk5PVF9TRVRcIiBdXG4gKiBAcmV0dXJuIHtPYmplY3R9IHsgdGVzdDE6IGZhbHNlIH1cbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck91dFNlbGVjdGVkVmFsdWVzID0gKGRhdGE6IG9iamVjdCwgdmFsdWVzKTogb2JqZWN0ID0+IHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSAmJiBkYXRhW2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMuaW5kZXhPZihkYXRhW2tleV0pIDw9IC0xKSB7XG4gICAgICBvYmpba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBMaW1pdHMgeW91ciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYXQgbW9zdCBldmVyeSBtaWxsaXNlY29uZHNcbiAqXG4gKiBAcGFyYW0gZnVuY1xuICogQHBhcmFtIHdhaXRcbiAqIEBleGFtcGxlIGNvbnN0IHRocm90dGxlZCA9IHRocm90dGxlKGFueUZ1bmMsIDUwMCk7XG4gKi9cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChcbiAgZnVuYzogKC4uLmFyZ3MpID0+IHZvaWQsXG4gIHdhaXQ6IG51bWJlclxuKTogKCguLi5hcmdzKSA9PiB2b2lkKSA9PiB7XG4gIGlmICh3YWl0IDw9IDApIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICd0aHJvdHRsZTogaW52YWxpZCB0aHJvdHRsZVRpbWUgYXJnLCBtdXN0IGJlIGEgbnVtYmVyOiAnICsgd2FpdFxuICAgICk7XG4gIH1cblxuICBsZXQgdGltZXI6IE5vZGVKUy5UaW1lb3V0O1xuICBsZXQgbGFzdFJhbiA9IDA7XG5cbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBsYXN0UmFuID49IHdhaXQpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICB9LCB3YWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIGEgc3RyaW5nIHdpdGggZHluYW1pYyB2YWx1ZXNcbiAqIEBwYXJhbSBzdHIge1N0cmluZ30gU3RyaW5nIHRvIGJlIGZvcm1hdHRlZFxuICogQHBhcmFtIGRhdGEge09iamVjdH0gLSBEYXRhIHRvIGJlIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIFN0cmluZ0Zvcm1hdCgndGhpcyB3aWxsIGxvZyB7dGltZX0nLCB7IHRpbWU6ICcxMjM0JyB9KVxuICpcbiAqIHJlc3VsdDpcbiAqIHRoaXMgd2lsbCBsb2cgMTIzNFxuICpcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtYXRTdHJpbmcgPSAoc3RyOiBzdHJpbmcsIGRhdGE/OiBvYmplY3QpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXN0ciB8fCAhZGF0YSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyh7KFtefV0rKX0pL2csIChpKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VkS2V5ID0gaS5yZXBsYWNlKC97LywgJycpLnJlcGxhY2UoL30vLCAnJyk7XG4gICAgICAgIHJldHVybiBkYXRhW3JlcGxhY2VkS2V5XSA/IGRhdGFbcmVwbGFjZWRLZXldIDogcmVwbGFjZWRLZXk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcGVyY2VudGFnZSBvZiBhIG51bWJlciB3aXRoIHRoZSBnaXZlbiBwZXJjZW50YWdlXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBwZXJjZW50YWdlXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVQZXJjZW50YWdlID0gKHZhbHVlOiBudW1iZXIsIHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICByZXR1cm4gdmFsdWUgKiBwZXJjZW50YWdlICogMC4wMTtcbn07XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIGFycmF5cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGVxdWFsXG4gKiBAcGFyYW0gYSBzdHJpbmdbXVxuICogQHBhcmFtIGIgc3RyaW5nW11cbiAqL1xuZXhwb3J0IGNvbnN0IGFycmF5RXF1YWxzID0gKGE6IHN0cmluZ1tdLCBiOiBzdHJpbmdbXSkgPT4ge1xuICByZXR1cm4gKFxuICAgIEFycmF5LmlzQXJyYXkoYSkgJiZcbiAgICBBcnJheS5pc0FycmF5KGIpICYmXG4gICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgYS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBiW2luZGV4XSlcbiAgKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgdGhhdCBpcyBiZXR3ZWVuIChtaW4gLSBtYXgpXG4gKiBpZiBtaW4gaXMgNGhycyBhbmQgbWF4IGlzIDEyaHJzIHRoZW4gdGhlXG4gKiByZXR1cm5lZCB2YWx1ZSB3aWxsIGJlIGEgcmFuZG9tIGIvdyA0IC0gMTIgaHJzXG4gKlxuICogQHBhcmFtIG1pbiB7bnVtYmVyfSAtIG1pbGxpc2Vjb25kXG4gKiBAcGFyYW0gbWF4IHtudW1iZXJ9IC0gbWlsbGlzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJhbmRvbVRpbWUgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiAyIERhdGVzIGluIERheXNcbiAqXG4gKiBAcGFyYW0gc3RhcnREYXRlXG4gKiBAcGFyYW0gZW5kRGF0ZVxuICpcbiAqIEByZXR1cm4gbnVtYmVyXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREaWZmZXJlbmNlSW5EYXlzID0gKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG1zSW5EYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICBNYXRoLmFicyhOdW1iZXIoZW5kRGF0ZS5nZXRUaW1lKCkpIC0gTnVtYmVyKHN0YXJ0RGF0ZS5nZXRUaW1lKCkpKSAvIG1zSW5EYXlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1VybCA9IChzdHI6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBCb29sZWFuKG5ldyBVUkwoc3RyKS5wcm90b2NvbCA9PT0gJ2h0dHBzOicpO1xuICB9IGNhdGNoIChfZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBRdWV1ZXMgYW5kIGRlbGF5cyBmdW5jdGlvbiBjYWxsIHdpdGggYSBnaXZlbiBkZWxheVxuICovXG5leHBvcnQgY2xhc3MgRGVsYXllZEZ1bmN0aW9uUXVldWUge1xuICBwcml2YXRlIHF1ZXVlOiBBcnJheTwoLi4uYXJnczogYW55W10pID0+IHZvaWQ+ID0gW107XG4gIHByaXZhdGUgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWxheTogbnVtYmVyID0gMTAwKSB7fVxuXG4gIC8qKlxuICAgKiBBZGQgYSBmdW5jdGlvbiB0byB0aGUgcXVldWVcbiAgICogQHBhcmFtIGZ1bmNcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHB1YmxpYyBhZGQoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGNvbnN0IGJvdW5kRnVuYyA9ICgpID0+IGZ1bmMoLi4uYXJncyk7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKGJvdW5kRnVuYyk7XG5cbiAgICBpZiAoIXRoaXMudGltZXIpIHtcbiAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgICAgZnVuYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5kZWxheSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBOT1RJRklDQVRJT05fV0lORE9XX1RJVExFLFxuICBhcGlDbWRzLFxuICBhcGlOYW1lLFxufSBmcm9tICdjb21tb24vYXBpLWludGVyZmFjZSc7XG5pbXBvcnQgeyBpc1dpbmRvd3NPUyB9IGZyb20gJ2NvbW1vbi9lbnYnO1xuaW1wb3J0IHsgU2NyZWVuU2hhcmVFdmVudHMgfSBmcm9tICdjb21tb24vaXBjRXZlbnQnO1xuaW1wb3J0IHsgRGVza3RvcENhcHR1cmVyU291cmNlLCBTb3VyY2VzT3B0aW9ucywgaXBjUmVuZGVyZXIgfSBmcm9tICdlbGVjdHJvbic7XG5cbmNvbnN0IGluY2x1ZGVzID0gWycnXS5pbmNsdWRlcztcblxubGV0IG5leHRJZCA9IDA7XG5sZXQgaXNTY3JlZW5TaGFyZUVuYWJsZWQgPSBmYWxzZTtcbmxldCBzY3JlZW5TaGFyZUFyZ3Y6IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tU291cmNlc09wdGlvbnMgZXh0ZW5kcyBTb3VyY2VzT3B0aW9ucyB7XG4gIHJlcXVlc3RJZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tRGVza3RvcENhcHR1cmVyU291cmNlIGV4dGVuZHMgRGVza3RvcENhcHR1cmVyU291cmNlIHtcbiAgcmVxdWVzdElkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjcmVlblNvdXJjZUVycm9yIHtcbiAgbmFtZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHJlcXVlc3RJZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgdHlwZSBDYWxsYmFja1R5cGUgPSAoXG4gIGVycm9yOiBJU2NyZWVuU291cmNlRXJyb3IgfCBudWxsLFxuICBzb3VyY2U/OiBJQ3VzdG9tRGVza3RvcENhcHR1cmVyU291cmNlXG4pID0+IHZvaWQ7XG5jb25zdCBnZXROZXh0SWQgPSAoKSA9PiArK25leHRJZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIG9wdGlvbnMgYW5kIHRoZWlyIHR5cGVzIGFyZSB2YWxpZFxuICogQHBhcmFtIG9wdGlvbnMgfG9wdGlvbnMudHlwZXwgY2FuIG5vdCBiZSBlbXB0eSBhbmQgaGFzIHRvIGluY2x1ZGUgJ3dpbmRvdycgb3IgJ3NjcmVlbicuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNWYWxpZCA9IChvcHRpb25zOiBJQ3VzdG9tU291cmNlc09wdGlvbnMpID0+IHtcbiAgcmV0dXJuIChcbiAgICAob3B0aW9ucyAhPT0gbnVsbCA/IG9wdGlvbnMudHlwZXMgOiB1bmRlZmluZWQpICE9PSBudWxsICYmXG4gICAgQXJyYXkuaXNBcnJheShvcHRpb25zLnR5cGVzKVxuICApO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBzb3VyY2VzIGZvciBjYXB0dXJpbmcgc2NyZWVucyAvIHdpbmRvd3NcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyB7U291cmNlc09wdGlvbnN9XG4gKiBAcGFyYW0gY2FsbGJhY2sge0NhbGxiYWNrVHlwZX1cbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgZ2V0U291cmNlID0gYXN5bmMgKFxuICBvcHRpb25zOiBJQ3VzdG9tU291cmNlc09wdGlvbnMsXG4gIGNhbGxiYWNrOiBDYWxsYmFja1R5cGVcbikgPT4ge1xuICBsZXQgY2FwdHVyZVdpbmRvdztcbiAgbGV0IGNhcHR1cmVTY3JlZW47XG4gIGxldCBpZDtcbiAgY29uc3Qgc291cmNlc09wdHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHsgcmVxdWVzdElkLCAuLi51cGRhdGVkT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgaWYgKCFpc1ZhbGlkKG9wdGlvbnMpKSB7XG4gICAgY2FsbGJhY2soe1xuICAgICAgbmFtZTogJ0ludmFsaWQgb3B0aW9ucycsXG4gICAgICBtZXNzYWdlOiAnSW52YWxpZCBvcHRpb25zJyxcbiAgICAgIHJlcXVlc3RJZCxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY2FwdHVyZVdpbmRvdyA9IGluY2x1ZGVzLmNhbGwob3B0aW9ucy50eXBlcywgJ3dpbmRvdycpO1xuICBjYXB0dXJlU2NyZWVuID0gaW5jbHVkZXMuY2FsbChvcHRpb25zLnR5cGVzLCAnc2NyZWVuJyk7XG5cbiAgaWYgKCF1cGRhdGVkT3B0aW9ucy50aHVtYm5haWxTaXplKSB7XG4gICAgdXBkYXRlZE9wdGlvbnMudGh1bWJuYWlsU2l6ZSA9IHtcbiAgICAgIGhlaWdodDogMTUwLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICB9O1xuICB9XG5cbiAgaWYgKGlzV2luZG93c09TICYmIGNhcHR1cmVXaW5kb3cpIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjYXB0dXJlV2luZG93IHRvIGZhbHNlIGlmIERlc2t0b3AgY29tcG9zaXRpb25cbiAgICAgKiBpcyBkaXNhYmxlZCBvdGhlcndpc2UgdHJ1ZVxuICAgICAqXG4gICAgICogU2V0dGluZyBjYXB0dXJlV2luZG93IHRvIGZhbHNlIHJldHVybnMgb25seSBzY3JlZW4gc291cmNlc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNhcHR1cmVXaW5kb3cgPSBhd2FpdCBpcGNSZW5kZXJlci5pbnZva2UoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLmlzQWVyb0dsYXNzRW5hYmxlZCxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjYXB0dXJlV2luZG93KSB7XG4gICAgc291cmNlc09wdHMucHVzaCgnd2luZG93Jyk7XG4gIH1cbiAgaWYgKGNhcHR1cmVTY3JlZW4pIHtcbiAgICBzb3VyY2VzT3B0cy5wdXNoKCdzY3JlZW4nKTtcbiAgfVxuICBjb25zdCBpc0VuYWJsZWQ6IGJvb2xlYW4gPSBhd2FpdCBpcGNSZW5kZXJlci5pbnZva2UoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5pc01lZGlhRW5hYmxlZCxcbiAgfSk7XG5cbiAgLy8gZGlzcGxheXMgYSBkaWFsb2cgaWYgbWVkaWEgcGVybWlzc2lvbnMgYXJlIGRpc2FibGVcbiAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICBhd2FpdCBpcGNSZW5kZXJlci5pbnZva2UoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgICAgY21kOiBhcGlDbWRzLnNob3dTY3JlZW5TaGFyZVBlcm1pc3Npb25EaWFsb2csXG4gICAgfSk7XG4gICAgY2FsbGJhY2soe1xuICAgICAgbmFtZTogJ1Blcm1pc3Npb24gRGVuaWVkJyxcbiAgICAgIG1lc3NhZ2U6ICdQZXJtaXNzaW9uIERlbmllZCcsXG4gICAgICByZXF1ZXN0SWQsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWQgPSBnZXROZXh0SWQoKTtcbiAgY29uc3Qgc291cmNlczogRGVza3RvcENhcHR1cmVyU291cmNlW10gPSBhd2FpdCBpcGNSZW5kZXJlci5pbnZva2UoXG4gICAgYXBpTmFtZS5zeW1waG9ueUFwaSxcbiAgICB7XG4gICAgICBjbWQ6IGFwaUNtZHMuZ2V0U291cmNlcyxcbiAgICAgIHR5cGVzOiBzb3VyY2VzT3B0cyxcbiAgICAgIHRodW1ibmFpbFNpemU6IHVwZGF0ZWRPcHRpb25zLnRodW1ibmFpbFNpemUsXG4gICAgfVxuICApO1xuICAvLyBBdXRvIHNlbGVjdCBzY3JlZW4gc291cmNlIGJhc2VkIG9uIGFyZ3MgZm9yIHRlc3Rpbmcgb25seVxuICBpZiAoc2NyZWVuU2hhcmVBcmd2KSB7XG4gICAgY29uc3QgdGl0bGUgPSBzY3JlZW5TaGFyZUFyZ3Yuc3Vic3RyKHNjcmVlblNoYXJlQXJndi5pbmRleE9mKCc9JykgKyAxKTtcbiAgICBjb25zdCBmaWx0ZXJlZFNvdXJjZTogRGVza3RvcENhcHR1cmVyU291cmNlW10gPSBzb3VyY2VzLmZpbHRlcihcbiAgICAgIChzb3VyY2UpID0+IHNvdXJjZS5uYW1lID09PSB0aXRsZVxuICAgICk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXJlZFNvdXJjZSkgJiYgZmlsdGVyZWRTb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc291cmNlID0geyAuLi5maWx0ZXJlZFNvdXJjZVswXSwgcmVxdWVzdElkIH07XG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgc291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdFNvdXJjZSA9IHsgLi4uc291cmNlc1swXSwgcmVxdWVzdElkIH07XG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgZmlyc3RTb3VyY2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZWRTb3VyY2VzID0gc291cmNlc1xuICAgIC5maWx0ZXIoKHNvdXJjZSkgPT4gc291cmNlLm5hbWUgIT09IE5PVElGSUNBVElPTl9XSU5ET1dfVElUTEUpXG4gICAgLm1hcCgoc291cmNlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zb3VyY2UsXG4gICAgICAgIC4uLntcbiAgICAgICAgICB0aHVtYm5haWw6IHNvdXJjZS50aHVtYm5haWwudG9EYXRhVVJMKCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIGlwY1JlbmRlcmVyLnNlbmQoYXBpTmFtZS5zeW1waG9ueUFwaSwge1xuICAgIGNtZDogYXBpQ21kcy5vcGVuU2NyZWVuUGlja2VyV2luZG93LFxuICAgIGlkLFxuICAgIHNvdXJjZXM6IHVwZGF0ZWRTb3VyY2VzLFxuICB9KTtcblxuICBjb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSAoX2U6IGFueSwgc291cmNlOiBEZXNrdG9wQ2FwdHVyZXJTb3VyY2UpID0+IHtcbiAgICAvLyBDbGVhbmluZyB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgLy8gaXBjUmVuZGVyZXIucmVtb3ZlTGlzdGVuZXIoJ3N0YXJ0LXNoYXJlJyArIGlkLCBzdWNjZXNzQ2FsbGJhY2spO1xuICAgICAgLy8gcmV0dXJuIGNhbGxiYWNrKHtcbiAgICAgIC8vICAgbmFtZTogJ1VzZXIgQ2FuY2VsbGVkJyxcbiAgICAgIC8vICAgbWVzc2FnZTogJ1VzZXIgQ2FuY2VsbGVkJyxcbiAgICAgIC8vICAgcmVxdWVzdElkLFxuICAgICAgLy8gfSk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7IC4uLnNvdXJjZSwgLi4ueyByZXF1ZXN0SWQgfSB9KTtcbiAgfTtcbiAgaXBjUmVuZGVyZXIub25jZShTY3JlZW5TaGFyZUV2ZW50cy5TVEFSVCArIGlkLCBzdWNjZXNzQ2FsbGJhY2spO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIGV2ZW50IHRoYXQgdXBkYXRlcyBzY3JlZW4gc2hhcmUgYXJndlxuaXBjUmVuZGVyZXIub25jZShTY3JlZW5TaGFyZUV2ZW50cy5BUkdWLCAoX2V2ZW50LCBhcmcpID0+IHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgc2NyZWVuU2hhcmVBcmd2ID0gYXJnO1xuICB9XG59KTtcblxuLy8gLy8gZXZlbnQgdGhhdCB1cGRhdGVzIHNjcmVlbiBzaGFyZSBwZXJtaXNzaW9uXG4vLyBpcGNSZW5kZXJlci5vbihTY3JlZW5TaGFyZUV2ZW50cy5JU19FTkFCTEVELCAoZXZlbnQsIGNhblNoYXJlU2NyZWVuKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGV2ZW50LCBjYW5TaGFyZVNjcmVlbik7XG4vLyAgIGlmICh0eXBlb2YgY2FuU2hhcmVTY3JlZW4gPT09ICdib29sZWFuJyAmJiBjYW5TaGFyZVNjcmVlbikge1xuLy8gICAgIGlzU2NyZWVuU2hhcmVFbmFibGVkID0gY2FuU2hhcmVTY3JlZW47XG4vLyAgIH1cbi8vIH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIERpc2FibGUgbm8tdW51c2VkLXZhcnMsIGJyb2tlbiBmb3Igc3ByZWFkIGFyZ3Ncbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogb2ZmICovXG5pbXBvcnQgeyBhcHAsIGNvbnRleHRCcmlkZ2UsIGlwY1JlbmRlcmVyLCBJcGNSZW5kZXJlckV2ZW50IH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHsgYXBpQ21kcywgYXBpTmFtZSwgSUJvdW5kc0NoYW5nZSwgSUxvZ01zZywgSU5vdGlmaWNhdGlvbkRhdGEsIElSZXN0YXJ0RmxvYXRlckRhdGEsIElTY3JlZW5TaGFyaW5nSW5kaWNhdG9yLCBJU2NyZWVuU2hhcmluZ0luZGljYXRvck9wdGlvbnMsIElTY3JlZW5TbmlwcGV0LCBMb2dMZXZlbCB9IGZyb20gJ2NvbW1vbi9hcGktaW50ZXJmYWNlJztcbmltcG9ydCB7IFNTRkFwaSB9IGZyb20gJy4vc3NmLWFwaSc7XG5pbXBvcnQgeyBJcGNFdmVudHMgfSBmcm9tICdjb21tb24vaXBjRXZlbnQnO1xuaW1wb3J0IHsgSVNjcmVlblNvdXJjZUVycm9yLCBJQ3VzdG9tRGVza3RvcENhcHR1cmVyU291cmNlLCBJQ3VzdG9tU291cmNlc09wdGlvbnMgfSBmcm9tICdyZW5kZXJlci9jb21wb25lbnRzL2Rlc2t0b3AtY2FwdHVyZXIvZGVza3RvcC1jYXB0dXJlcic7XG5pbXBvcnQgeyBpc0xpbnV4LCBpc01hYywgaXNXaW5kb3dzT1MgfSBmcm9tICdjb21tb24vZW52JztcbmltcG9ydCB7IElBbmFseXRpY3NEYXRhIH0gZnJvbSAnLi9iaS9pbnRlcmZhY2UnO1xuXG5leHBvcnQgdHlwZSBDaGFubmVscyA9IElwY0V2ZW50cyB8ICd3ZWxjb21lJyB8IGFwaU5hbWUuc3ltcGhvbnlBcGk7XG5cbmNvbnN0IGlzRGV2RW52ID0gcHJvY2Vzcy5lbnZbJ1dFQlBBQ0tfU0VSVkUnXSA9PT0gJ3RydWUnO1xuY29uc3QgZWxlY3Ryb25IYW5kbGVyID0ge1xuICBpcGNSZW5kZXJlcjoge1xuICAgIHNlbmRNZXNzYWdlKGNoYW5uZWw6IENoYW5uZWxzLCAuLi5hcmdzOiB1bmtub3duW10pIHtcbiAgICAgIGlwY1JlbmRlcmVyLnNlbmQoY2hhbm5lbCwgLi4uYXJncyk7XG4gICAgfSxcbiAgICBvbihjaGFubmVsOiBDaGFubmVscywgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gdm9pZCkge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gKF9ldmVudDogSXBjUmVuZGVyZXJFdmVudCwgLi4uYXJnczogdW5rbm93bltdKSA9PlxuICAgICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgICAgaXBjUmVuZGVyZXIub24oY2hhbm5lbCwgc3Vic2NyaXB0aW9uKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaXBjUmVuZGVyZXIucmVtb3ZlTGlzdGVuZXIoY2hhbm5lbCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBvbmNlKGNoYW5uZWw6IENoYW5uZWxzLCBmdW5jOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkKSB7XG4gICAgICBpcGNSZW5kZXJlci5vbmNlKGNoYW5uZWwsIChfZXZlbnQsIC4uLmFyZ3MpID0+IGZ1bmMoLi4uYXJncykpO1xuICAgIH0sXG4gICAgaW52b2tlKGNoYW5uZWw6IENoYW5uZWxzLCAuLi5hcmdzOiB1bmtub3duW10pIHtcbiAgICAgIHJldHVybiBpcGNSZW5kZXJlci5pbnZva2UoY2hhbm5lbCwgLi4uYXJncyk7XG4gICAgfVxuICB9LFxuICBpc01hYyxcbiAgaXNXaW5kb3dzT1MsXG4gIGlzTGludXgsXG4gIGlzRGV2RW52XG59O1xuXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdlbGVjdHJvbicsIGVsZWN0cm9uSGFuZGxlcik7XG5cbmV4cG9ydCB0eXBlIEVsZWN0cm9uSGFuZGxlciA9IHR5cGVvZiBlbGVjdHJvbkhhbmRsZXI7XG5cbmludGVyZmFjZSBJU1NGV2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgc3NmPzogU1NGQXBpO1xufVxuXG5jb25zdCBzc2ZXaW5kb3c6IElTU0ZXaW5kb3cgPSB3aW5kb3c7XG5cbmNvbnN0IGNyZWF0ZUFQSSA9ICgpID0+IHtcbiAgLy8gaWZyYW1lcyAoYW5kIGFueSBvdGhlciBub24tdG9wIGxldmVsIGZyYW1lcykgZ2V0IG5vIGFwaSBhY2Nlc3NcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMjYwNjkvaG93LXRvLWlkZW50aWZ5LWlmLWEtd2VicGFnZS1pcy1iZWluZy1sb2FkZWQtaW5zaWRlLWFuLWlmcmFtZS1vci1kaXJlY3RseS1pbnRvLXQvMzI2MDc2XG4gIGlmICh3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIG5vdGU6IHdpbmRvdy5vcGVuIGZyb20gbWFpbiB3aW5kb3cgKGlmIGluIHRoZSBzYW1lIGRvbWFpbikgd2lsbCBnZXRcbiAgLy8gYXBpIGFjY2Vzcy4gIHdpbmRvdy5vcGVuIGluIGFub3RoZXIgZG9tYWluIHdpbGwgYmUgb3BlbmVkIGluIHRoZSBkZWZhdWx0XG4gIC8vIGJyb3dzZXIgKHNlZTogaGFuZGxlciBmb3IgZXZlbnQgJ25ldy13aW5kb3cnIGluIHdpbmRvd01nci5qcylcblxuICAvL1xuICAvLyBBUEkgZXhwb3NlZCB0byByZW5kZXJlciBwcm9jZXNzLlxuICAvL1xuICAvLyBAdHMtaWdub3JlXG4gIHNzZldpbmRvdy5zc2YgPSBuZXcgU1NGQXBpKCk7XG4gIE9iamVjdC5mcmVlemUoc3NmV2luZG93LnNzZik7XG59O1xuXG5jcmVhdGVBUEkoKTtcblxuaWYgKHNzZldpbmRvdy5zc2YpIHtcbiAgLy8gTmV3IGNvbnRleHQgYnJpZGdlIGFwaSB0aGF0IGV4cG9zZXMgYWxsIHRoZSBtZXRob2RzIG9uIHRvIHdpbmRvdyBvYmplY3RcbiAgLy8gRm9yIE1hbmEgdG8gY29tbXVuaWNhdGUgd2l0aCBTREFcbiAgY29udGV4dEJyaWRnZS5leHBvc2VJbk1haW5Xb3JsZCgnbWFuYVNTRicsIHtcbiAgICBzZXRJc01hbmE6IHNzZldpbmRvdy5zc2Yuc2V0SXNNYW5hLFxuICAgIE5vdGlmaWNhdGlvbjogc3NmV2luZG93LnNzZi5Ob3RpZmljYXRpb24sXG4gICAgZ2V0TWVkaWFTb3VyY2U6IHNzZldpbmRvdy5zc2YuZ2V0TWVkaWFTb3VyY2UsXG4gICAgYWN0aXZhdGU6IHNzZldpbmRvdy5zc2YuYWN0aXZhdGUsXG4gICAgYnJpbmdUb0Zyb250OiBzc2ZXaW5kb3cuc3NmLmJyaW5nVG9Gcm9udCxcbiAgICBnZXRWZXJzaW9uSW5mbzogc3NmV2luZG93LnNzZi5nZXRWZXJzaW9uSW5mbyxcbiAgICByZWdpc3RlckFjdGl2aXR5RGV0ZWN0aW9uOiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyQWN0aXZpdHlEZXRlY3Rpb24sXG4gICAgcmVnaXN0ZXJEb3dubG9hZEhhbmRsZXI6IHNzZldpbmRvdy5zc2YucmVnaXN0ZXJEb3dubG9hZEhhbmRsZXIsXG4gICAgb3BlbkRvd25sb2FkZWRJdGVtOiBzc2ZXaW5kb3cuc3NmLm9wZW5Eb3dubG9hZGVkSXRlbSxcbiAgICBzaG93RG93bmxvYWRlZEl0ZW06IHNzZldpbmRvdy5zc2Yuc2hvd0Rvd25sb2FkZWRJdGVtLFxuICAgIGNsZWFyRG93bmxvYWRlZEl0ZW1zOiBzc2ZXaW5kb3cuc3NmLmNsZWFyRG93bmxvYWRlZEl0ZW1zLFxuICAgIHJlZ2lzdGVyQm91bmRzQ2hhbmdlOiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyQm91bmRzQ2hhbmdlLFxuICAgIHJlZ2lzdGVyTG9nZ2VyOiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyTG9nZ2VyLFxuICAgIHJlZ2lzdGVyUHJvdG9jb2xIYW5kbGVyOiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyUHJvdG9jb2xIYW5kbGVyLFxuICAgIHJlZ2lzdGVyTG9nUmV0cmlldmVyOiBzc2ZXaW5kb3cuc3NmLnJlZ2lzdGVyTG9nUmV0cmlldmVyLFxuICAgIHNlbmRMb2dzOiBzc2ZXaW5kb3cuc3NmLnNlbmRMb2dzLFxuICAgIHJlZ2lzdGVyQW5hbHl0aWNzRXZlbnQ6IHNzZldpbmRvdy5zc2YucmVnaXN0ZXJBbmFseXRpY3NFdmVudCxcbiAgICBTY3JlZW5TbmlwcGV0OiBzc2ZXaW5kb3cuc3NmLlNjcmVlblNuaXBwZXQsXG4gICAgb3BlblNjcmVlblNuaXBwZXQ6IHNzZldpbmRvdy5zc2Yub3BlblNjcmVlblNuaXBwZXQsXG4gICAgY2xvc2VTY3JlZW5TbmlwcGV0OiBzc2ZXaW5kb3cuc3NmLmNsb3NlU2NyZWVuU25pcHBldCxcbiAgICBzZXRCYWRnZUNvdW50OiBzc2ZXaW5kb3cuc3NmLnNldEJhZGdlQ291bnQsXG4gICAgc2V0TG9jYWxlOiBzc2ZXaW5kb3cuc3NmLnNldExvY2FsZSxcbiAgICBzZXRJc0luTWVldGluZzogc3NmV2luZG93LnNzZi5zZXRJc0luTWVldGluZyxcbiAgICBzaG93Tm90aWZpY2F0aW9uU2V0dGluZ3M6IHNzZldpbmRvdy5zc2Yuc2hvd05vdGlmaWNhdGlvblNldHRpbmdzLFxuICAgIHNob3dTY3JlZW5TaGFyaW5nSW5kaWNhdG9yOiBzc2ZXaW5kb3cuc3NmLnNob3dTY3JlZW5TaGFyaW5nSW5kaWNhdG9yLFxuICAgIG9wZW5TY3JlZW5TaGFyaW5nSW5kaWNhdG9yOiBzc2ZXaW5kb3cuc3NmLm9wZW5TY3JlZW5TaGFyaW5nSW5kaWNhdG9yLFxuICAgIGNsb3NlU2NyZWVuU2hhcmluZ0luZGljYXRvcjogc3NmV2luZG93LnNzZi5jbG9zZVNjcmVlblNoYXJpbmdJbmRpY2F0b3IsXG4gICAgcmVnaXN0ZXJSZXN0YXJ0RmxvYXRlcjogc3NmV2luZG93LnNzZi5yZWdpc3RlclJlc3RhcnRGbG9hdGVyLFxuICAgIHNldENsb3VkQ29uZmlnOiBzc2ZXaW5kb3cuc3NmLnNldENsb3VkQ29uZmlnLFxuICAgIGNoZWNrTWVkaWFQZXJtaXNzaW9uOiBzc2ZXaW5kb3cuc3NmLmNoZWNrTWVkaWFQZXJtaXNzaW9uLFxuICAgIHNob3dOb3RpZmljYXRpb246IHNzZldpbmRvdy5zc2Yuc2hvd05vdGlmaWNhdGlvbixcbiAgICBjbG9zZU5vdGlmaWNhdGlvbjogc3NmV2luZG93LnNzZi5jbG9zZU5vdGlmaWNhdGlvbixcbiAgICBzaG93Q2FsbE5vdGlmaWNhdGlvbjogc3NmV2luZG93LnNzZi5zaG93Q2FsbE5vdGlmaWNhdGlvbixcbiAgICBjbG9zZUNhbGxOb3RpZmljYXRpb246IHNzZldpbmRvdy5zc2YuY2xvc2VDYWxsTm90aWZpY2F0aW9uLFxuICAgIHJlc3RhcnRBcHA6IHNzZldpbmRvdy5zc2YucmVzdGFydEFwcCxcbiAgICBjbG9zZUFsbFdyYXBwZXJXaW5kb3dzOiBzc2ZXaW5kb3cuc3NmLmNsb3NlQWxsV3JhcHBlcldpbmRvd3MsXG4gICAgc2V0Wm9vbUxldmVsOiBzc2ZXaW5kb3cuc3NmLnNldFpvb21MZXZlbCxcbiAgICBnZXRab29tTGV2ZWw6IHNzZldpbmRvdy5zc2YuZ2V0Wm9vbUxldmVsLFxuICAgIHN1cHBvcnRlZFNldHRpbmdzOiBzc2ZXaW5kb3cuc3NmLnN1cHBvcnRlZFNldHRpbmdzLFxuICAgIGdldE5hdGl2ZVdpbmRvd0hhbmRsZTogc3NmV2luZG93LnNzZi5nZXROYXRpdmVXaW5kb3dIYW5kbGUsXG4gICAgZ2V0Q2l0cml4TWVkaWFSZWRpcmVjdGlvblN0YXR1czpcbiAgICAgIHNzZldpbmRvdy5zc2YuZ2V0Q2l0cml4TWVkaWFSZWRpcmVjdGlvblN0YXR1cyxcbiAgICByZWdpc3RlckNsaWVudEJhbm5lcjogc3NmV2luZG93LnNzZi5yZWdpc3RlckNsaWVudEJhbm5lcixcbiAgICBsYXVuY2hDbG91ZDk6IHNzZldpbmRvdy5zc2YubGF1bmNoQ2xvdWQ5LFxuICAgIHRlcm1pbmF0ZUNsb3VkOTogc3NmV2luZG93LnNzZi50ZXJtaW5hdGVDbG91ZDksXG4gICAgY29ubmVjdENsb3VkOVBpcGU6IHNzZldpbmRvdy5zc2YuY29ubmVjdENsb3VkOVBpcGUsXG4gICAgdXBkYXRlQW5kUmVzdGFydDogc3NmV2luZG93LnNzZi51cGRhdGVBbmRSZXN0YXJ0LFxuICAgIGRvd25sb2FkVXBkYXRlOiBzc2ZXaW5kb3cuc3NmLmRvd25sb2FkVXBkYXRlLFxuICAgIGNoZWNrRm9yVXBkYXRlczogc3NmV2luZG93LnNzZi5jaGVja0ZvclVwZGF0ZXMsXG4gICAgdXBkYXRlTXlQcmVzZW5jZTogc3NmV2luZG93LnNzZi51cGRhdGVNeVByZXNlbmNlLFxuICAgIGdldE15UHJlc2VuY2U6IHNzZldpbmRvdy5zc2YuZ2V0TXlQcmVzZW5jZSxcbiAgICByZWdpc3RlclBob25lTnVtYmVyU2VydmljZXM6IHNzZldpbmRvdy5zc2YucmVnaXN0ZXJQaG9uZU51bWJlclNlcnZpY2VzLFxuICAgIHVucmVnaXN0ZXJQaG9uZU51bWJlclNlcnZpY2VzOiBzc2ZXaW5kb3cuc3NmLnVucmVnaXN0ZXJQaG9uZU51bWJlclNlcnZpY2VzLFxuICB9KTtcbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBBcHBCcmlkZ2Uge1xuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSBpbmNvbWluZyBwb3N0TWVzc2FnZVxuICAgKiBldmVudHMgYmFzZWQgb24gdGhlIGhvc3QgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGlzVmFsaWRFdmVudChldmVudCk6IGJvb2xlYW4ge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50LnNvdXJjZSAmJiBldmVudC5zb3VyY2UgPT09IHdpbmRvdztcbiAgfVxuXG4gIHB1YmxpYyBvcmlnaW46IHN0cmluZyA9ICcnO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FsbGJhY2tIYW5kbGVycyA9IHtcbiAgICBvbk1lc3NhZ2U6IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZXZlbnQpLFxuICAgIG9uQWN0aXZpdHlDYWxsYmFjazogKGlkbGVUaW1lOiBudW1iZXIpID0+IHRoaXMuYWN0aXZpdHlDYWxsYmFjayhpZGxlVGltZSksXG4gICAgb25TY3JlZW5TbmlwcGV0Q2FsbGJhY2s6IChhcmc6IElTY3JlZW5TbmlwcGV0KSA9PlxuICAgICAgdGhpcy5zY3JlZW5TbmlwcGV0Q2FsbGJhY2soYXJnKSxcbiAgICBvblJlZ2lzdGVyQm91bmRzQ2hhbmdlQ2FsbGJhY2s6IChhcmc6IElCb3VuZHNDaGFuZ2UpID0+XG4gICAgICB0aGlzLnJlZ2lzdGVyQm91bmRzQ2hhbmdlQ2FsbGJhY2soYXJnKSxcbiAgICBvblJlZ2lzdGVyTG9nZ2VyQ2FsbGJhY2s6IChcbiAgICAgIG1zZzogSUxvZ01zZyxcbiAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbCxcbiAgICAgIHNob3dJbkNvbnNvbGU6IGJvb2xlYW4sXG4gICAgKSA9PiB0aGlzLnJlZ2lzdGVyTG9nZ2VyQ2FsbGJhY2sobXNnLCBsb2dMZXZlbCwgc2hvd0luQ29uc29sZSksXG4gICAgb25SZWdpc3RlclByb3RvY29sSGFuZGxlckNhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+XG4gICAgICB0aGlzLnByb3RvY29sSGFuZGxlckNhbGxiYWNrKHVyaSksXG4gICAgb25Db2xsZWN0TG9nc0NhbGxiYWNrOiAoKSA9PiB0aGlzLmNvbGxlY3RMb2dzQ2FsbGJhY2soKSxcbiAgICBvblNjcmVlblNoYXJpbmdJbmRpY2F0b3JDYWxsYmFjazogKGFyZzogSVNjcmVlblNoYXJpbmdJbmRpY2F0b3IpID0+XG4gICAgICB0aGlzLnNjcmVlblNoYXJpbmdJbmRpY2F0b3JDYWxsYmFjayhhcmcpLFxuICAgIG9uTWVkaWFTb3VyY2VDYWxsYmFjazogKFxuICAgICAgZXJyb3I6IElTY3JlZW5Tb3VyY2VFcnJvciB8IG51bGwsXG4gICAgICBzb3VyY2U6IElDdXN0b21EZXNrdG9wQ2FwdHVyZXJTb3VyY2UgfCB1bmRlZmluZWQsXG4gICAgKTogdm9pZCA9PiB0aGlzLmdvdE1lZGlhU291cmNlKGVycm9yLCBzb3VyY2UpLFxuICAgIG9uTm90aWZpY2F0aW9uQ2FsbGJhY2s6IChldmVudCwgZGF0YSkgPT5cbiAgICAgIHRoaXMubm90aWZpY2F0aW9uQ2FsbGJhY2soZXZlbnQsIGRhdGEpLFxuICAgIG9uQW5hbHl0aWNzRXZlbnRDYWxsYmFjazogKGRhdGEpID0+IHRoaXMuYW5hbHl0aWNzRXZlbnRDYWxsYmFjayhkYXRhKSxcbiAgICByZXN0YXJ0RmxvYXRlcjogKGRhdGEpID0+IHRoaXMucmVzdGFydEZsb2F0ZXIoZGF0YSksXG4gICAgb25Eb3dubG9hZEl0ZW1DYWxsYmFjazogKGRhdGEpID0+IHRoaXMub25Eb3dubG9hZEl0ZW1DYWxsYmFjayhkYXRhKSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBzdGFydHMgd2l0aCBjb3Jwb3JhdGUgcG9kIGFuZFxuICAgIC8vIHdpbGwgYmUgdXBkYXRlZCB3aXRoIHRoZSBnbG9iYWwgY29uZmlnIHVybFxuICAgIGlwY1JlbmRlcmVyXG4gICAgICAuaW52b2tlKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLmdldEN1cnJlbnRPcmlnaW5VcmwsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKG9yaWdpbikgPT4ge1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgLy8gdGhpcy5vcmlnaW4gPSAnKic7IC8vIERFTU8tQVBQOiBDb21tZW50IHRoaXMgbGluZSBiYWNrIGluIG9ubHkgdG8gdGVzdCBkZW1vLWFwcCAtIERPIE5PVCBDT01NSVRcbiAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChhcGlOYW1lLnN5bXBob255QXBpLCB7XG4gICAgICAgICAgY21kOiBhcGlDbWRzLnNldEJyb2FkY2FzdE1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vbk1lc3NhZ2UpO1xuICAgICAgfSkgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgIC5jYXRjaCgocmVhc29uKSA9PiBjb25zb2xlLmVycm9yKHJlYXNvbikpO1xuXG4gICAgaXBjUmVuZGVyZXIub24oYXBpQ21kcy5vblN3aWZ0U2VhcmNoTWVzc2FnZSwgKF9ldmVudCwgW21ldGhvZCwgZGF0YV0pID0+IHtcbiAgICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZShtZXRob2QsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaCBjYXNlIHRoYXQgdmFsaWRhdGVzIGFuZCBoYW5kbGVcbiAgICogaW5jb21pbmcgbWVzc2FnZXMgZnJvbSBwb3N0TWVzc2FnZVxuICAgKlxuICAgKiBJcyBvbmx5IHVzZWQgZm9yIDEuNS5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghQXBwQnJpZGdlLmlzVmFsaWRFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG1ldGhvZCwgZGF0YSB9ID0gZXZlbnQuZGF0YTtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSBhcGlDbWRzLmdldFZlcnNpb25JbmZvOlxuICAgICAgICBjb25zdCB2ZXJzaW9uSW5mbyA9IGF3YWl0IHNzZldpbmRvdy5zc2Y/LmdldFZlcnNpb25JbmZvKCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnZ2V0LXZlcnNpb24taW5mby1jYWxsYmFjaycsIHtcbiAgICAgICAgICByZXF1ZXN0SWQ6IGRhdGEucmVxdWVzdElkLFxuICAgICAgICAgIHJlc3BvbnNlOiB2ZXJzaW9uSW5mbyxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmFjdGl2YXRlOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5hY3RpdmF0ZShkYXRhIGFzIHN0cmluZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmJyaW5nVG9Gcm9udDpcbiAgICAgICAgY29uc3QgeyB3aW5kb3dOYW1lLCByZWFzb24gfSA9IGRhdGE7XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LmJyaW5nVG9Gcm9udCh3aW5kb3dOYW1lIGFzIHN0cmluZywgcmVhc29uIGFzIHN0cmluZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnNldEJhZGdlQ291bnQ6XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzc2ZXaW5kb3cuc3NmPy5zZXRCYWRnZUNvdW50KGRhdGEgYXMgbnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5vcGVuRG93bmxvYWRlZEl0ZW06XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBzc2ZXaW5kb3cuc3NmPy5vcGVuRG93bmxvYWRlZEl0ZW0oZGF0YSBhcyBzdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnNob3dEb3dubG9hZGVkSXRlbTpcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHNzZldpbmRvdy5zc2Y/LnNob3dEb3dubG9hZGVkSXRlbShkYXRhIGFzIHN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMuY2xlYXJEb3dubG9hZGVkSXRlbXM6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LmNsZWFyRG93bmxvYWRlZEl0ZW1zKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnJlc3RhcnRBcHA6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/LnJlc3RhcnRBcHAoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMuc2V0TG9jYWxlOlxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc3NmV2luZG93LnNzZj8uc2V0TG9jYWxlKGRhdGEgYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlckFjdGl2aXR5RGV0ZWN0aW9uOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5yZWdpc3RlckFjdGl2aXR5RGV0ZWN0aW9uKFxuICAgICAgICAgIGRhdGEgYXMgbnVtYmVyLFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vbkFjdGl2aXR5Q2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnJlZ2lzdGVyRG93bmxvYWRIYW5kbGVyOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5yZWdpc3RlckRvd25sb2FkSGFuZGxlcihcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25Eb3dubG9hZEl0ZW1DYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMub3BlblNjcmVlblNuaXBwZXQ6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/Lm9wZW5TY3JlZW5TbmlwcGV0KHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vblNjcmVlblNuaXBwZXRDYWxsYmFjayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmNsb3NlU2NyZWVuU25pcHBldDpcbiAgICAgICAgc3NmV2luZG93LnNzZj8uY2xvc2VTY3JlZW5TbmlwcGV0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnJlZ2lzdGVyQm91bmRzQ2hhbmdlOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5yZWdpc3RlckJvdW5kc0NoYW5nZShcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25SZWdpc3RlckJvdW5kc0NoYW5nZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlckxvZ2dlcjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJMb2dnZXIodGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uUmVnaXN0ZXJMb2dnZXJDYWxsYmFjayk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnJlZ2lzdGVyUHJvdG9jb2xIYW5kbGVyOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5yZWdpc3RlclByb3RvY29sSGFuZGxlcihcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25SZWdpc3RlclByb3RvY29sSGFuZGxlckNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlckxvZ1JldHJpZXZlcjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJMb2dSZXRyaWV2ZXIoXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uQ29sbGVjdExvZ3NDYWxsYmFjayxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5zZW5kTG9nczpcbiAgICAgICAgc3NmV2luZG93LnNzZj8uc2VuZExvZ3MoZGF0YS5sb2dOYW1lLCBkYXRhLmxvZ0ZpbGVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMub3BlblNjcmVlblNoYXJpbmdJbmRpY2F0b3I6XG4gICAgICAgIHNzZldpbmRvdy5zc2Y/Lm9wZW5TY3JlZW5TaGFyaW5nSW5kaWNhdG9yKFxuICAgICAgICAgIGRhdGEgYXMgSVNjcmVlblNoYXJpbmdJbmRpY2F0b3JPcHRpb25zLFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tIYW5kbGVycy5vblNjcmVlblNoYXJpbmdJbmRpY2F0b3JDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMuY2xvc2VTY3JlZW5TaGFyaW5nSW5kaWNhdG9yOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5jbG9zZVNjcmVlblNoYXJpbmdJbmRpY2F0b3IoZGF0YS5zdHJlYW1JZCBhcyBzdHJpbmcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5nZXRNZWRpYVNvdXJjZTpcbiAgICAgICAgYXdhaXQgc3NmV2luZG93LnNzZj8uZ2V0TWVkaWFTb3VyY2UoXG4gICAgICAgICAgZGF0YSBhcyBJQ3VzdG9tU291cmNlc09wdGlvbnMsXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uTWVkaWFTb3VyY2VDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGFwaUNtZHMubm90aWZpY2F0aW9uOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5zaG93Tm90aWZpY2F0aW9uKFxuICAgICAgICAgIGRhdGEgYXMgSU5vdGlmaWNhdGlvbkRhdGEsXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0hhbmRsZXJzLm9uTm90aWZpY2F0aW9uQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmNsb3NlTm90aWZpY2F0aW9uOlxuICAgICAgICBhd2FpdCBzc2ZXaW5kb3cuc3NmPy5jbG9zZU5vdGlmaWNhdGlvbihkYXRhIGFzIG51bWJlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnNob3dOb3RpZmljYXRpb25TZXR0aW5nczpcbiAgICAgICAgc3NmV2luZG93LnNzZj8uc2hvd05vdGlmaWNhdGlvblNldHRpbmdzKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5zZXRJc0luTWVldGluZzpcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBzc2ZXaW5kb3cuc3NmPy5zZXRJc0luTWVldGluZyhkYXRhIGFzIGJvb2xlYW4pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnJlZ2lzdGVyQW5hbHl0aWNzSGFuZGxlcjpcbiAgICAgICAgc3NmV2luZG93LnNzZj8ucmVnaXN0ZXJBbmFseXRpY3NFdmVudChcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrSGFuZGxlcnMub25BbmFseXRpY3NFdmVudENhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYXBpQ21kcy5yZWdpc3RlclJlc3RhcnRGbG9hdGVyOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5yZWdpc3RlclJlc3RhcnRGbG9hdGVyKHRoaXMuY2FsbGJhY2tIYW5kbGVycy5yZXN0YXJ0RmxvYXRlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnNldENsb3VkQ29uZmlnOlxuICAgICAgICBzc2ZXaW5kb3cuc3NmPy5zZXRDbG91ZENvbmZpZyhkYXRhIGFzIG9iamVjdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLnN3aWZ0U2VhcmNoOlxuICAgICAgICBpcGNSZW5kZXJlci5zZW5kKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgICBjbWQ6IGFwaUNtZHMuaGFuZGxlU3dpZnRTZWFyY2hNZXNzYWdlRXZlbnRzLFxuICAgICAgICAgIHN3aWZ0U2VhcmNoRGF0YTogZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmdldENQVVVzYWdlOlxuICAgICAgICBjb25zdCBjcHVVc2FnZSA9IGF3YWl0IHNzZldpbmRvdy5zc2Y/LmdldENQVVVzYWdlKCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnZ2V0LWNwdS11c2FnZS1jYWxsYmFjaycsIHtcbiAgICAgICAgICByZXF1ZXN0SWQ6IGRhdGEucmVxdWVzdElkLFxuICAgICAgICAgIHJlc3BvbnNlOiBjcHVVc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBhcGlDbWRzLmNoZWNrTWVkaWFQZXJtaXNzaW9uOlxuICAgICAgICBjb25zdCBtZWRpYVBlcm1pc3Npb24gPSBhd2FpdCBzc2ZXaW5kb3cuc3NmPy5jaGVja01lZGlhUGVybWlzc2lvbigpO1xuICAgICAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2NoZWNrLW1lZGlhLXBlcm1pc3Npb24tY2FsbGJhY2snLCB7XG4gICAgICAgICAgcmVxdWVzdElkOiBkYXRhLnJlcXVlc3RJZCxcbiAgICAgICAgICByZXNwb25zZTogbWVkaWFQZXJtaXNzaW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCB1c2VyIGFjdGl2aXR5XG4gICAqIEBwYXJhbSBpZGxlVGltZSB7bnVtYmVyfSAtIHN5c3RlbSBpZGxlIHRpY2tcbiAgICovXG4gIHByaXZhdGUgYWN0aXZpdHlDYWxsYmFjayA9IChpZGxlVGltZTogbnVtYmVyKTogdm9pZCA9PlxuICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnYWN0aXZpdHktY2FsbGJhY2snLCBpZGxlVGltZSk7XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCBzbmlwcGV0IGRhdGFcbiAgICogQHBhcmFtIGFyZyB7SVNjcmVlblNuaXBwZXR9XG4gICAqL1xuICBwcml2YXRlIHNjcmVlblNuaXBwZXRDYWxsYmFjayA9IChhcmc6IElTY3JlZW5TbmlwcGV0KTogdm9pZCA9PlxuICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnc2NyZWVuLXNuaXBwZXQtY2FsbGJhY2snLCBhcmcpO1xuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgYm91bmQgY2hhbmdlc1xuICAgKiBAcGFyYW0gYXJnIHtJQm91bmRzQ2hhbmdlfVxuICAgKi9cbiAgcHJpdmF0ZSByZWdpc3RlckJvdW5kc0NoYW5nZUNhbGxiYWNrID0gKGFyZzogSUJvdW5kc0NoYW5nZSk6IHZvaWQgPT5cbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2JvdW5kLWNoYW5nZXMtY2FsbGJhY2snLCBhcmcpO1xuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgbG9nc1xuICAgKiBAcGFyYW0gbXNnIHtJTG9nTXNnfVxuICAgKiBAcGFyYW0gbG9nTGV2ZWwge0xvZ0xldmVsfVxuICAgKiBAcGFyYW0gc2hvd0luQ29uc29sZSB7Ym9vbGVhbn1cbiAgICovXG4gIHByaXZhdGUgcmVnaXN0ZXJMb2dnZXJDYWxsYmFjayhcbiAgICBtc2c6IElMb2dNc2csXG4gICAgbG9nTGV2ZWw6IExvZ0xldmVsLFxuICAgIHNob3dJbkNvbnNvbGU6IGJvb2xlYW4sXG4gICk6IHZvaWQge1xuICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnbG9nZ2VyLWNhbGxiYWNrJywgeyBtc2csIGxvZ0xldmVsLCBzaG93SW5Db25zb2xlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCBwcm90b2NvbCB1cmlcbiAgICogQHBhcmFtIHVyaSB7c3RyaW5nfVxuICAgKi9cbiAgcHJpdmF0ZSBwcm90b2NvbEhhbmRsZXJDYWxsYmFjayA9ICh1cmk6IHN0cmluZyk6IHZvaWQgPT5cbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ3Byb3RvY29sLWNhbGxiYWNrJywgdXJpKTtcblxuICBwcml2YXRlIGNvbGxlY3RMb2dzQ2FsbGJhY2sgPSAoKTogdm9pZCA9PlxuICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnY29sbGVjdC1sb2dzJywgdW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogQnJvYWRjYXN0IGV2ZW50IHRoYXQgc3RvcHMgc2NyZWVuIHNoYXJpbmdcbiAgICogQHBhcmFtIGFyZyB7SVNjcmVlblNoYXJpbmdJbmRpY2F0b3J9XG4gICAqL1xuICBwcml2YXRlIHNjcmVlblNoYXJpbmdJbmRpY2F0b3JDYWxsYmFjayhhcmc6IElTY3JlZW5TaGFyaW5nSW5kaWNhdG9yKTogdm9pZCB7XG4gICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdzY3JlZW4tc2hhcmluZy1pbmRpY2F0b3ItY2FsbGJhY2snLCBhcmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCBhbmFseXRpY3MgZXZlbnRzIGRhdGFcbiAgICogQHBhcmFtIGFyZyB7SUFuYWx5dGljc0RhdGF9XG4gICAqL1xuICBwcml2YXRlIGFuYWx5dGljc0V2ZW50Q2FsbGJhY2soYXJnOiBJQW5hbHl0aWNzRGF0YSk6IHZvaWQge1xuICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnYW5hbHl0aWNzLWV2ZW50LWNhbGxiYWNrJywgYXJnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCcm9hZGNhc3QgZG93bmxvYWQgaXRlbSBldmVudFxuICAgKiBAcGFyYW0gYXJnIHtvYmplY3R9XG4gICAqL1xuICBwcml2YXRlIG9uRG93bmxvYWRJdGVtQ2FsbGJhY2soYXJnOiBvYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ2Rvd25sb2FkLWhhbmRsZXItY2FsbGJhY2snLCBhcmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCB0byByZXN0YXJ0IGZsb2F0ZXIgZXZlbnQgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSBhcmcge0lBbmFseXRpY3NEYXRhfVxuICAgKi9cbiAgcHJpdmF0ZSByZXN0YXJ0RmxvYXRlcihhcmc6IElSZXN0YXJ0RmxvYXRlckRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ3Jlc3RhcnQtZmxvYXRlci1jYWxsYmFjaycsIGFyZyk7XG4gIH1cblxuICAvKipcbiAgICogQnJvYWRjYXN0IHRoZSB1c2VyIHNlbGVjdGVkIHNvdXJjZVxuICAgKiBAcGFyYW0gc291cmNlRXJyb3Ige0lTY3JlZW5Tb3VyY2VFcnJvcn1cbiAgICogQHBhcmFtIHNlbGVjdGVkU291cmNlIHtJQ3VzdG9tRGVza3RvcENhcHR1cmVyU291cmNlfVxuICAgKi9cbiAgcHJpdmF0ZSBnb3RNZWRpYVNvdXJjZShcbiAgICBzb3VyY2VFcnJvcjogSVNjcmVlblNvdXJjZUVycm9yIHwgbnVsbCxcbiAgICBzZWxlY3RlZFNvdXJjZTogSUN1c3RvbURlc2t0b3BDYXB0dXJlclNvdXJjZSB8IHVuZGVmaW5lZCxcbiAgKTogdm9pZCB7XG4gICAgaWYgKHNvdXJjZUVycm9yKSB7XG4gICAgICBjb25zdCB7IHJlcXVlc3RJZCwgLi4uZXJyb3IgfSA9IHNvdXJjZUVycm9yO1xuICAgICAgdGhpcy5icm9hZGNhc3RNZXNzYWdlKCdtZWRpYS1zb3VyY2UtY2FsbGJhY2snLCB7IHJlcXVlc3RJZCwgZXJyb3IgfSk7XG4gICAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ21lZGlhLXNvdXJjZS1jYWxsYmFjay12MScsIHsgcmVxdWVzdElkLCBlcnJvciB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRTb3VyY2UgJiYgc2VsZWN0ZWRTb3VyY2UucmVxdWVzdElkKSB7XG4gICAgICBjb25zdCB7IHJlcXVlc3RJZCwgLi4uc291cmNlIH0gPSBzZWxlY3RlZFNvdXJjZTtcbiAgICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZSgnbWVkaWEtc291cmNlLWNhbGxiYWNrJywge1xuICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgZXJyb3I6IHNvdXJjZUVycm9yLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmJyb2FkY2FzdE1lc3NhZ2UoJ21lZGlhLXNvdXJjZS1jYWxsYmFjay12MScsIHtcbiAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICByZXNwb25zZTogeyBzb3VyY2UsIGVycm9yOiBzb3VyY2VFcnJvciB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJyb2FkY2FzdCBub3RpZmljYXRpb24gZXZlbnRzXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZGF0YSB7T2JqZWN0fVxuICAgKi9cbiAgcHJpdmF0ZSBub3RpZmljYXRpb25DYWxsYmFjayhldmVudCwgZGF0YSkge1xuICAgIHRoaXMuYnJvYWRjYXN0TWVzc2FnZShldmVudCwgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgYnJvYWRjYXN0IG1lc3NhZ2VzIHRvIGEgc3BlY2lmaWMgb3JpZ2luIHZpYSBwb3N0TWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBkYXRhIHthbnl9XG4gICAqL1xuICBwcml2YXRlIGJyb2FkY2FzdE1lc3NhZ2UobWV0aG9kOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGlwY1JlbmRlcmVyXG4gICAgICAuaW52b2tlKGFwaU5hbWUuc3ltcGhvbnlBcGksIHtcbiAgICAgICAgY21kOiBhcGlDbWRzLmdldEN1cnJlbnRPcmlnaW5VcmwsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKG9yaWdpbikgPT4ge1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyBtZXRob2QsIGRhdGEgfSwgb3JpZ2luKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGFwcEJyaWRnZSA9IG5ldyBBcHBCcmlkZ2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwQnJpZGdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9