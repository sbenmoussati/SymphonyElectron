import { dialog } from 'electron';
import { autoUpdater } from 'electron-updater';

let updater;
autoUpdater.autoDownload = false;
// tslint:disable-next-line: no-var-requires
const log = require('electron-log');
log.transports.file.level = 'debug';
autoUpdater.logger = log;

autoUpdater.on('error', (error) => {
  dialog.showErrorBox(
    'Error: ',
    error == null ? 'unknown' : (error.stack || error).toString(),
  );
});

autoUpdater.on('update-available', () => {
  dialog
    .showMessageBox({
      type: 'info',
      title: 'Found Updates',
      message: 'Found updates, do you want update now?',
      buttons: ['Sure', 'No'],
    })
    .then((buttonIndex) => {
      if (!buttonIndex) {
        autoUpdater.downloadUpdate();
      } else {
        updater.enabled = true;
        updater = null;
      }
    });
});

autoUpdater.on('update-not-available', () => {
  dialog.showMessageBox({
    title: 'No Updates',
    message: 'Current version is up-to-date.',
  });
  updater.enabled = true;
  updater = null;
});

autoUpdater.on('update-downloaded', () => {
  dialog
    .showMessageBox({
      title: 'Install Updates',
      message: 'Updates downloaded, application will be quit for update...',
    })
    .then(() => {
      setImmediate(() => autoUpdater.quitAndInstall());
    });
});

/**
 * Launch the auto update helper
 */
// tslint:disable-next-line: only-arrow-functions
function checkForUpdates(menuItem, _focusedWindow, _event) {
  updater = menuItem;
  updater.enabled = false;
  autoUpdater.checkForUpdates();
}
export { checkForUpdates };
