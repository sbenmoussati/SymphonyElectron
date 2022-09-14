import { ipcMain, webContents } from 'electron';
import { onExtendedProcessMetrics } from 'electron-process-reporter';
import { logger } from '../common/logger';
import { createComponentWindow } from './window-utils';

const opts = {
  width: 800,
  height: 600,
  frame: true,
  resizable: true,
  minimizable: true,
  fullscreenable: true,
};
export const startProcessReporting = (app): void => {
  attachProcessReporter(app);
};

const attachProcessReporter = (app) => {
  const processReportingWindow = createComponentWindow('process-manager', opts);
  processReportingWindow.on('close', () => {
    if (subscription) {
      processReportingWindow.webContents?.send('process-manager:stop');
      subscription.unsubscribe();
    }
  });
  ipcMain.on('process-manager:kill-process', (_event: any, pid: any) => {
    logger.info(`process-reporting-handler: killing process ${pid}`);
    process.kill(pid);
  });
  ipcMain.on(
    'process-manager:open-dev-tools',
    (_event: any, webContentsId: any) => {
      logger.info(
        `process-reporting-handler: opening devtools for process ${webContentsId}`,
      );
      const wc = webContents.fromId(webContentsId);
      wc.openDevTools({ mode: 'detach' });
    },
  );
  const subscription = onExtendedProcessMetrics(app).subscribe((report) => {
    processReportingWindow.webContents?.send('process-manager:report', {
      report,
    });
  });
};
