import { ipcRenderer } from 'electron';
import * as React from 'react';
import { apiCmds, apiName } from '../../common/api-interface';
import { i18n } from '../../common/i18n-preload';

interface IState {
  url: string;
  message: string;
  urlValid: boolean;
}

const WELCOME_NAMESPACE = 'Welcome';

export default class Splash extends React.Component<{}, IState> {
  private readonly eventHandlers = {
    login: () => this.login(),
  };

  constructor(props) {
    super(props);
    this.state = {
      url: 'https://[POD].symphony.com',
      message: '',
      urlValid: false,
    };
    this.updateState = this.updateState.bind(this);
  }

  /**
   * Render the component
   */
  public render(): JSX.Element {
    return (
      <div className='Welcome' lang={i18n.getLocale()}>
        <div className='Welcome-image-container'>
          <img
            src='../renderer/assets/symphony-logo-plain.png'
            alt={i18n.t('Symphony Logo', WELCOME_NAMESPACE)()}
          />
        </div>
        <div className='Welcome-main-container'>
          <button
            className={'Welcome-continue-button'}
            onClick={this.eventHandlers.login}
          >
            {i18n.t('Login', WELCOME_NAMESPACE)()}
          </button>
        </div>
      </div>
    );
  }

  /**
   * Perform actions on component being mounted
   */
  public componentDidMount(): void {
    ipcRenderer.on('splash-ready', this.updateState);
  }

  /**
   * Perform actions on component being unmounted
   */
  public componentWillUnmount(): void {
    ipcRenderer.removeListener('splash-ready', this.updateState);
  }

  /**
   * Set pod url and pass it to the main process
   */
  public login(): void {
    ipcRenderer.send(apiName.symphonyApi, {
      cmd: apiCmds.login,
    });
  }

  /**
   * Update state
   * @param _event
   * @param data
   */
  private updateState(_event, data): void {
    this.setState(data as IState);
  }
}
