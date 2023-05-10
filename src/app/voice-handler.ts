import { exec } from 'child_process';
import { app } from 'electron';
import * as fs from 'fs';
import { isMac, isWindowsOS } from '../common/env';
import { logger } from '../common/logger';

const LS_REGISTER_PATH =
  '/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister';
const SYM_TEL_PROTOCOL_PLIST_ENTRY = {
  LSHandlerURLScheme: 'tel',
  LSHandlerRoleAll: 'com.symphony.electron-desktop',
  LSHandlerPreferredVersions: {
    LSHandlerRoleAll: '-',
  },
};
const DEFAULT_TEL_PROTOCOL = 'tel';
enum REGISTRY_PATHS {
  Capabilities = 'Software\\Symphony\\Capabilities',
  UrlRegistration = 'Software\\Symphony\\Capabilities\\URLAssociations',
  SymTelCmd = 'Software\\Classes\\Symphony.tel\\shell\\open\\command',
  SymTelDefaultIcon = 'Software\\Classes\\Symphony.tel\\DefaultIcon',
  RegisteredApps = 'Software\\RegisteredApplications',
}

class VoiceHandler {
  /**
   * Registers Symphony as  phone calls app
   */
  public registerSymphonyAsDefaultCallApp() {
    if (isWindowsOS) {
      this.registerAppOnWindows();
    } else if (isMac) {
      this.registerAppOnMacOS();
    }
  }

  /**
   * Registers app on Windows
   */
  private registerAppOnWindows() {
    const Registry = require('winreg');
    const appPath = app.getAppPath();
    const ApplicationNameRegKey = new Registry({
      hive: Registry.HKCU,
      key: REGISTRY_PATHS.Capabilities,
    });
    const ApplicationDescRegKey = new Registry({
      hive: Registry.HKCU,
      key: REGISTRY_PATHS.Capabilities,
    });
    const SymURLAssociationRegKey = new Registry({
      hive: Registry.HKCU,
      key: REGISTRY_PATHS.UrlRegistration,
    });
    const SymTelCommandRegKey = new Registry({
      hive: Registry.HKCU,
      key: REGISTRY_PATHS.SymTelCmd,
    });
    const SymTelDefaultIconRegKey = new Registry({
      hive: Registry.HKCU,
      key: REGISTRY_PATHS.SymTelDefaultIcon,
    });
    const symAppRegistrationRegKey = new Registry({
      hive: Registry.HKCU,
      key: REGISTRY_PATHS.RegisteredApps,
    });
    (async () => {
      await ApplicationNameRegKey.set(
        'ApplicationName',
        Registry.REG_SZ,
        'Symphony',
      );
      await ApplicationDescRegKey.set(
        'ApplicationDescription',
        Registry.REG_SZ,
        'Symphony',
      );
      await SymURLAssociationRegKey.set('tel', Registry.REG_SZ, 'Symphony.tel');
      await SymTelDefaultIconRegKey.set('', Registry.REG_SZ, appPath);
      await SymTelCommandRegKey.set('', Registry.REG_SZ, `"${appPath}" "%1"`);
      await symAppRegistrationRegKey.set(
        'Symphony',
        Registry.REG_SZ,
        REGISTRY_PATHS.Capabilities,
      );
    })();
  }

  /**
   * Registers app on macOS
   */
  private registerAppOnMacOS() {
    this.readLaunchServicesPlist((res, _err) => {
      const data = res;
      const itemIdx = data.findIndex(
        (item) => item.LSHandlerURLScheme === DEFAULT_TEL_PROTOCOL,
      );
      // macOS allows only one app being declared as able to make calls
      if (itemIdx !== -1) {
        data.splice(itemIdx, 1);
      }
      data.push(SYM_TEL_PROTOCOL_PLIST_ENTRY);
      this.updateLaunchServicesPlist(data);
    });
  }

  /**
   * Reads macOS launch services plist
   * @param callback
   */
  private readLaunchServicesPlist(callback) {
    const plistPath = this.getLaunchServicesPlistPath();
    const tmpPath = `${plistPath}.${Math.random()}`;
    exec(`plutil -convert json "${plistPath}" -o "${tmpPath}"`, (err) => {
      if (err) {
        callback(err);
        return;
      }
      fs.readFile(tmpPath, (readErr, data) => {
        if (readErr) {
          callback(readErr);
          return;
        }
        try {
          const json = JSON.parse(data.toString());
          callback(json.LSHandlers, json);
          fs.unlink(tmpPath, (err) => {
            logger.error('Error: ', err);
          });
        } catch (e) {
          callback(e);
        }
      });
    });
  }

  /**
   * Updates launch services plist file
   * @param defaults
   */
  private updateLaunchServicesPlist(defaults) {
    const plistPath = this.getLaunchServicesPlistPath();
    const tmpPath = `${plistPath}.${Math.random()}`;
    exec(`plutil -convert json "${plistPath}" -o "${tmpPath}"`, (err) => {
      if (err) {
        logger.error('voice-handler: error while converting plist ', err);
        return;
      }
      try {
        let data = fs.readFileSync(tmpPath).toString();
        data = JSON.parse(data);
        (data as any).LSHandlers = defaults;
        data = JSON.stringify(data);
        fs.writeFileSync(tmpPath, data);
      } catch (e) {
        logger.error('voice-handler: error while converting plist ', err);
        return;
      }
      exec(`plutil -convert binary1 "${tmpPath}" -o "${plistPath}"`, () => {
        fs.unlink(tmpPath, (err) => {
          logger.error(`voice-handler: error while clearing ${tmpPath}: `, err);
        });
        // Relaunch Launch Services so it take into consideration updated plist file
        exec(
          `${LS_REGISTER_PATH} -kill -r -domain local -domain system -domain user`,
          (registerErr) => {
            if (registerErr) {
              logger.error(
                'voice-handler: error relaunching Launch Services ',
                registerErr,
              );
            }
          },
        );
      });
    });
  }

  /**
   * Returns Launch services plist filepath
   * @param callback
   */
  private getLaunchServicesPlistPath() {
    const secureLaunchServicesPlist = `${process.env.HOME}/Library/Preferences/com.apple.LaunchServices/com.apple.launchservices.secure.plist`;
    const insecureLaunchServicesPlist = `${process.env.HOME}/Library/Preferences/com.apple.LaunchServices.plist`;

    const secureLaunchServicesPlistExists = fs.existsSync(
      secureLaunchServicesPlist,
    );
    if (secureLaunchServicesPlistExists) {
      return secureLaunchServicesPlist;
    }
    return insecureLaunchServicesPlist;
  }
}

const voiceHandler = new VoiceHandler();

export { voiceHandler };
