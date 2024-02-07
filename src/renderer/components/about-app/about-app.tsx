import classNames from 'classnames';
import * as React from 'react';
import { i18n } from '../../../common/i18n-preload';
import { ReactComponent as SymphonyLogo } from '../../assets/new-symphony-logo.svg';
import { ReactComponent as CopyIcon } from '../../assets/copy-icon.svg';

import './about-app.less';
import { AboutAppEvents } from '../../../common/ipcEvent';
import { apiCmds, apiName } from '../../../common/api-interface';

const HOSTNAME_REGEX = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface IState {
  userConfig: object;
  globalConfig: object;
  cloudConfig: object;
  finalConfig: object;
  appName: string;
  copyWrite?: string;
  clientVersion: string;
  buildNumber: string;
  hostname: string;
  sfeVersion: string;
  sfeClientType: string;
  versionLocalised?: string;
  sdaVersion?: string;
  sdaBuildNumber?: string;
  electronVersion?: string;
  chromeVersion?: string;
  v8Version?: string;
  nodeVersion?: string;
  openSslVersion?: string;
  zlibVersion?: string;
  uvVersion?: string;
  aresVersion?: string;
  httpParserVersion?: string;
  swiftSearchVersion?: string;
  swiftSearchSupportedVersion?: string;
  client?: string;
  updatedHostname: string;
  isPodEditing: boolean;
  isValidHostname: boolean;
  didUpdateHostname: boolean;
}

const ABOUT_SYMPHONY_NAMESPACE = 'AboutSymphony';
const SFE_CLIENT_TYPE_NAME = 'SFE-Lite';

/**
 * Window that display app version and copyright info
 */
export default class AboutApp extends React.Component<unknown, IState> {
  private readonly eventHandlers = {
    onCopy: () => this.copy(),
    onClose: () => this.close(),
    onPodClick: (event: unknown) => this.onPodClick(event),
    onPodChange: (event: unknown) => this.handlePodChange(event),
    onPodInputBlur: (event: unknown) => this.handlePodInputBlur(event),
  };

  private closeButtonRef: React.RefObject<HTMLButtonElement>;

  constructor(props: unknown) {
    super(props);
    this.closeButtonRef = React.createRef();
    this.state = {
      userConfig: {},
      globalConfig: {},
      cloudConfig: {},
      finalConfig: {},
      appName: 'Symphony',
      versionLocalised: 'Version',
      clientVersion: '',
      buildNumber: '',
      hostname: '',
      sfeVersion: '',
      sfeClientType: '',
      sdaVersion: '23.8.0-2000',
      sdaBuildNumber: '',
      electronVersion: '',
      chromeVersion: '',
      v8Version: '',
      nodeVersion: '',
      openSslVersion: '',
      zlibVersion: '',
      uvVersion: '',
      aresVersion: '',
      httpParserVersion: '',
      swiftSearchVersion: '',
      swiftSearchSupportedVersion: '',
      updatedHostname: '',
      isPodEditing: false,
      isValidHostname: true,
      didUpdateHostname: false,
    };
    this.updateState = this.updateState.bind(this);
  }

  /**
   * Callback to handle event when a component is mounted
   */
  public componentDidMount(): void {
    setTimeout(() => {
      this.closeButtonRef.current?.focus();
    }, 0);
    window.electron.ipcRenderer.sendMessage(AboutAppEvents.READY);
    window.electron.ipcRenderer.on(AboutAppEvents.DATA, this.updateState);
  }

  /**
   * Callback to handle event when a component is unmounted
   */
  public componentWillUnmount(): void {
    // ipcRenderer.removeListener('about-app-data', this.updateState);
  }

  /**
   * Copies the version info on to the clipboard
   */
  public copy(): void {
    const { clientVersion, ...rest } = this.state;
    const { isPodEditing, isValidHostname, didUpdateHostname, ...data } = {
      ...{ sbeVersion: clientVersion },
      ...rest,
    };
    if (data) {
      window.electron.ipcRenderer.sendMessage(apiName.symphonyApi, {
        cmd: apiCmds.aboutAppClipBoardData,
        clipboard: data,
        clipboardType: 'clipboard',
      });
    }
  }

  /**
   * Close modal
   */
  public close(): void {
    const { isValidHostname, didUpdateHostname, hostname } = this.state;
    window.electron.ipcRenderer.sendMessage(AboutAppEvents.CLOSE);
    if (isValidHostname && didUpdateHostname) {
      window.electron.ipcRenderer.sendMessage(
        AboutAppEvents.POD_UPDATED,
        hostname
      );
    }
  }

  /**
   * Enables editing mode
   */
  public onPodClick(e): void {
    if (e.detail === 3) {
      this.setState({
        isPodEditing: true,
        didUpdateHostname: true,
      });
    }
  }

  /**
   * Updates state with new POD URL
   * @param e
   */
  public handlePodChange = (e) => {
    const { value } = e.target;
    this.setState({ updatedHostname: value });
  };

  /**
   * Handles key down on input
   * @param e
   */
  public onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const { value } = e.target;
      this.setState({ updatedHostname: value });
      this.handlePodInputBlur(e);
    }
  };

  /**
   * Validates and sets new hostname
   */
  public handlePodInputBlur = (_event: unknown) => {
    const { updatedHostname, hostname } = this.state;
    if (!HOSTNAME_REGEX.test(updatedHostname)) {
      this.setState({
        isPodEditing: false,
        isValidHostname: false,
      });
    } else {
      this.setState({
        isPodEditing: false,
        isValidHostname: true,
        hostname: updatedHostname || hostname,
      });
    }
  };

  /**
   * Sets the component state
   *
   * @param _event
   * @param data {Object} { buildNumber, clientVersion, version }
   */
  private updateState(data: {
    buildNumber: string;
    clientVersion: string;
    version: string;
    hostname: string;
  }): void {
    const updatedData = { ...data, updatedHostname: data.hostname };
    this.setState(updatedData as IState);
  }

  /**
   * Renders component versions
   * @param symphonySectionItems
   */
  private renderVersions(
    symphonySectionItems: Array<{ key: string; value: string }>
  ) {
    return (
      <section>
        <ul className="AboutApp-symphony-section">
          {symphonySectionItems.map(
            (item: { key: string; value: string }, idx: number) => {
              if (item.key === 'POD:') {
                return this.renderEditablePodElement(item, idx);
              }
              return (
                <li key={idx}>
                  <strong>{item.key}</strong>
                  <span>{item.value}</span>
                </li>
              );
            }
          )}
        </ul>
      </section>
    );
  }

  private renderEditablePodElement = (
    item: { key: string; value: string },
    idx: number
  ) => {
    const { isPodEditing, isValidHostname, updatedHostname } = this.state;
    return (
      <li key={idx}>
        <strong className="AboutApp-pod">{item.key}</strong>
        {isPodEditing ? (
          <input
            className="AboutApp-pod-input"
            type="text"
            value={updatedHostname}
            onKeyDown={this.onKeyDown}
            onChange={this.handlePodChange}
            onBlur={this.handlePodInputBlur}
            autoFocus
          />
        ) : (
          <span
            data-testid="POD_INFO"
            className={classNames({ 'invalid-pod': !isValidHostname })}
            onClick={this.eventHandlers.onPodClick}
          >
            {updatedHostname}
          </span>
        )}
      </li>
    );
  };

  /**
   * Renders the component
   */
  public render() {
    const {
      clientVersion,
      buildNumber,
      hostname,
      sfeVersion,
      sdaVersion,
      sdaBuildNumber,
      client,
      didUpdateHostname,
      isValidHostname,
    } = this.state;

    const appName = 'Symphony';
    const sfeVersionPrefix = 'sfe-lite-';
    const copyright = `${i18n.t(
      'Copyright',
      ABOUT_SYMPHONY_NAMESPACE
    )()} \xA9 ${new Date().getFullYear()} ${appName}`;
    const podVersion = `${clientVersion} (${buildNumber})`;
    const sdaVersionBuild = `${sdaVersion} (${sdaBuildNumber})`;
    const formattedSfeVersion = sfeVersion?.includes(sfeVersionPrefix)
      ? sfeVersion.split(sfeVersionPrefix)[1]
      : sfeVersion;
    const symphonySectionItems: Array<{ key: string; value: string }> = [
      {
        key: 'POD:',
        value: `${hostname || ''}`,
      },
      {
        key: 'SBE:',
        value: podVersion,
      },
      {
        key: 'SDA:',
        value: sdaVersionBuild,
      },
      {
        key: `${SFE_CLIENT_TYPE_NAME}:`,
        value: `${formattedSfeVersion} ${client}`,
      },
    ];
    const closeButtonText =
      isValidHostname && didUpdateHostname
        ? i18n.t('Save and Restart', ABOUT_SYMPHONY_NAMESPACE)()
        : i18n.t('Close', ABOUT_SYMPHONY_NAMESPACE)();

    return (
      <div className="AboutApp" lang={i18n.getLocale()}>
        <div className="AboutApp-header-container">
          <SymphonyLogo className="AboutApp-logo" fill="red" />
        </div>
        <div className="AboutApp-main-container">
          <div className="AboutApp-main-title">
            <span>
              {i18n.t('Desktop Application', ABOUT_SYMPHONY_NAMESPACE)()}
            </span>
          </div>
          {sdaVersion ? this.renderVersions(symphonySectionItems) : null}
          <div className="AboutApp-copy-container">
            <button
              type="button"
              className="AboutApp-copy-button"
              onClick={this.eventHandlers.onCopy}
              title={i18n.t(
                'Copy config to clipboard',
                ABOUT_SYMPHONY_NAMESPACE
              )()}
              data-testid="COPY_BUTTON"
            >
              <CopyIcon />
              <span>
                {i18n.t('Copy config to clipboard', ABOUT_SYMPHONY_NAMESPACE)()}
              </span>
            </button>
          </div>
          <div className="AboutApp-close-container">
            <button
              type="button"
              className="AboutApp-close-button"
              onClick={this.eventHandlers.onClose}
              title={closeButtonText}
              data-testid="CLOSE_BUTTON"
              ref={this.closeButtonRef}
            >
              {closeButtonText}
            </button>
          </div>
        </div>
        <div className="AboutApp-version-container">
          <p className="AboutApp-copyright-text">{copyright}</p>
        </div>
      </div>
    );
  }
}
