import { app, CookiesSetDetails, session, WebContents } from 'electron';
import { apiName } from '../common/api-interface';
import { isMac } from '../common/env';
import { logger } from '../common/logger';
import { getCommandLineArgs } from '../common/utils';
import { whitelistHandler } from '../common/whitelist-handler';
import { config } from './config-handler';
import { activate } from './window-actions';
import { windowHandler } from './window-handler';

enum protocol {
  SymphonyProtocol = 'symphony://',
}

class ProtocolHandler {
  private static isValidProtocolUri = (uri: string): boolean =>
    !!(uri && uri.startsWith(protocol.SymphonyProtocol));

  private preloadWebContents: WebContents | null = null;
  private protocolUri: string | null = null;

  constructor() {
    this.processArgv();
  }

  /**
   * Stores the web contents of the preload
   *
   * @param webContents {WeContents}
   */
  public setPreloadWebContents(webContents: WebContents): void {
    this.preloadWebContents = webContents;
    logger.info(
      `protocol handler: SFE is active and we have a valid protocol window with web contents!`,
    );
    if (this.protocolUri) {
      this.sendProtocol(this.protocolUri);
      logger.info(
        `protocol handler: we have a cached url ${this.protocolUri}, so, processed the request to SFE!`,
      );
      this.protocolUri = null;
    }
  }

  /**
   * Sends the protocol uri to the web app to further process
   *
   * @param url {String}
   * @param isAppRunning {Boolean} - whether the application is running
   */
  public async sendProtocol(
    url: string,
    isAppRunning: boolean = true,
  ): Promise<void> {
    if (url && url.length > 2083) {
      logger.info(
        `protocol-handler: protocol handler url length is greater than 2083, not performing any action!`,
      );
      return;
    }
    logger.info(
      `protocol handler: processing protocol request for the url ${url}!`,
    );
    // Handle protocol for Seamless login
    if (url?.includes('skey') && url?.includes('anticsrf')) {
      await this.handleBrowserLogin(url);
      return;
    }

    if (!this.preloadWebContents || !isAppRunning) {
      logger.info(
        `protocol handler: app was started from the protocol request. Caching the URL ${url}!`,
      );
      this.protocolUri = url;
      return;
    }

    // This is needed for mac OS as it brings pop-outs to foreground
    // (if it has been previously focused) instead of main window
    if (isMac) {
      activate(apiName.mainWindowName);
    }

    if (ProtocolHandler.isValidProtocolUri(url)) {
      logger.info(
        `protocol handler: our protocol request is a valid url ${url}! sending request to SFE for further action!`,
      );
      this.preloadWebContents.send('protocol-action', url);
    }
  }

  /**
   * Handles protocol uri from process.argv
   *
   * @param argv {String[]} - data received from process.argv
   */
  public processArgv(argv?: string[], isAppAlreadyOpen: boolean = false): void {
    logger.info(`protocol handler: processing protocol args!`);
    const protocolUriFromArgv = getCommandLineArgs(
      argv || process.argv,
      protocol.SymphonyProtocol,
      false,
    );
    if (protocolUriFromArgv) {
      logger.info(
        `protocol handler: we have a protocol request for the url ${protocolUriFromArgv}!`,
      );
      this.sendProtocol(protocolUriFromArgv, isAppAlreadyOpen);
    }
  }

  /**
   * handles browser login
   */
  public async handleBrowserLogin(protocolUri: string): Promise<void> {
    const appIsReady = app.isReady();
    if (appIsReady) {
      this.processURL(protocolUri);
    } else {
      app.whenReady().then(() => {
        this.processURL(protocolUri);
      });
    }
  }

  /**
   * Sets session cookies and navigates to the pod url
   */
  private async processURL(protocolUri: string): Promise<void> {
    if (config.userConfig && Object.keys(config.userConfig).length > 0) {
      // force user config fetch
      await config.readUserConfig();
    }
    const globalConfig = config.getGlobalConfigFields(['url']);
    const userConfig = config.getUserConfigFields(['url']);
    const url = userConfig.url ? userConfig.url : globalConfig.url;
    const { subdomain, tld, domain } = whitelistHandler.parseDomain(url);
    const formattedPodUrl = `https://${subdomain}.${domain}${tld}`;
    const cookieDomain = `.${subdomain}.${domain}${tld}`;
    if (protocolUri) {
      const urlParams = new URLSearchParams(new URL(protocolUri).search);
      const skeyValue = urlParams.get('skey');
      const anticsrfValue = urlParams.get('anticsrf');
      if (skeyValue && anticsrfValue) {
        const skeyCookie: CookiesSetDetails = {
          url,
          name: 'skey',
          value: skeyValue,
          secure: true,
          httpOnly: true,
          sameSite: 'no_restriction',
          domain: cookieDomain,
        };
        const csrfCookie: CookiesSetDetails = {
          url,
          name: 'anti-csrf-cookie',
          value: anticsrfValue,
          secure: true,
          sameSite: 'no_restriction',
          domain: cookieDomain,
        };
        try {
          await session.defaultSession.cookies.set(skeyCookie);
          await session.defaultSession.cookies.set(csrfCookie);
          logger.info('protocol-handler: cookies has been set');
        } catch (error) {
          logger.error(
            'protocol-handler: error occurred with cookies. Details: ',
            error,
          );
        }
      }
      const mainWebContents = windowHandler.getMainWebContents();
      if (
        mainWebContents &&
        !mainWebContents?.isDestroyed() &&
        formattedPodUrl
      ) {
        logger.info(
          'protocol-handler: redirecting main webContents ',
          formattedPodUrl,
        );
        windowHandler.setMainWindowOrigin(formattedPodUrl);
        mainWebContents?.loadURL(formattedPodUrl);
      }
    }
  }
}

const protocolHandler = new ProtocolHandler();

export { protocolHandler };
