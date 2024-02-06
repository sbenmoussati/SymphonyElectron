import classNames from 'classnames';
import * as React from 'react';

import { i18n } from '../../../../common/i18n-preload';
import {
  darkTheme,
  getContainerCssClasses,
  getThemeColors,
  isValidColor,
  Theme,
  whiteColorRegExp,
} from '../notification-theme';
import { Themes } from '../notification-settings';

import CloseIconDark from '../../../assets/close-icon-dark.svg';
import CloseIconLight from '../../../assets/close-icon-light.svg';
import NotificationBadgeExt from '../../../assets/notification-ext-badge.svg';
import SymphonyLogo from '../../../assets/notification-symphony-logo.svg';
import SendButton from '../../../assets/notification-send-button-enabled.svg';
import SendButtonDisabled from '../../../assets/notification-send-button-disabled.svg';
import { NotificationEvents } from '../../../../common/ipcEvent';

import './notification-comp.less';

interface INotificationState {
  title: string;
  company: string;
  body: string;
  image: string;
  icon: string | undefined;
  id: number;
  color: string;
  flash: boolean;
  isExternal: boolean;
  isUpdated: boolean;
  theme: Theme;
  hasIgnore: boolean;
  hasReply: boolean;
  hasMention: boolean;
  isInputHidden: boolean;
  containerHeight: number;
  canSendMessage: boolean;
}

type mouseEventButton =
  | React.MouseEvent<HTMLDivElement>
  | React.MouseEvent<HTMLButtonElement>;
type keyboardEvent = React.KeyboardEvent<HTMLInputElement>;

// Notification container height
const CONTAINER_HEIGHT = 100;
const CONTAINER_HEIGHT_WITH_INPUT = 142;

export default class NotificationComp extends React.Component<
  {},
  INotificationState
> {
  private readonly eventHandlers = {
    onClose: (id: number) => (_event: mouseEventButton) =>
      this.close(_event, id),
    onClick: (id: number) => (_event: mouseEventButton) => this.click(id),
    onContextMenu: (event: any) => this.contextMenu(event),
    onIgnore: (id: number) => (_event: mouseEventButton) => this.onIgnore(id),
    onMouseEnter: (id: number) => (_event: mouseEventButton) =>
      this.onMouseEnter(id),
    onMouseLeave: (id: number) => (_event: mouseEventButton) =>
      this.onMouseLeave(id),
    onOpenReply: (id: number) => (event: mouseEventButton) =>
      this.onOpenReply(event, id),
    onThumbsUp: () => (_event: mouseEventButton) => this.onThumbsUp(),
    onReply: (id: number) => (_event: mouseEventButton) => this.onReply(id),
    onKeyUp: (id: number) => (event: keyboardEvent) => this.onKeyUp(event, id),
  };
  private input: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      title: '',
      company: 'Symphony',
      body: '',
      image: '',
      icon: '',
      id: 0,
      color: '',
      flash: false,
      isExternal: false,
      isUpdated: false,
      theme: '',
      isInputHidden: true,
      hasIgnore: false,
      hasReply: false,
      hasMention: false,
      containerHeight: CONTAINER_HEIGHT,
      canSendMessage: false,
    };
    this.updateState = this.updateState.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.resetNotificationData = this.resetNotificationData.bind(this);
    this.getInputValue = this.getInputValue.bind(this);

    this.input = React.createRef();
  }

  /**
   * Callback to handle event when a component is mounted
   */
  public componentDidMount(): void {
    window.electron.ipcRenderer.on(NotificationEvents.DATA, (data) => {
      this.updateState(data);
    });
    window.electron.ipcRenderer.sendMessage(NotificationEvents.READY);
  }

  /**
   * Callback to handle event when a component is unmounted
   */
  public componentWillUnmount(): void {
    // ipcRenderer.removeListener('notification-data', this.updateState);
  }

  /**
   * Renders the component
   */
  public render(): JSX.Element {
    const {
      title,
      body,
      id,
      color,
      isExternal,
      isUpdated,
      theme,
      hasMention,
      containerHeight,
      flash,
      icon,
    } = this.state;
    let themeClassName;
    if (theme) {
      themeClassName = theme;
    } else if (darkTheme.includes(color.toLowerCase())) {
      themeClassName = 'black-text';
    } else {
      themeClassName =
        color && color.match(whiteColorRegExp) ? Themes.LIGHT : Themes.DARK;
    }
    const themeColors = getThemeColors(
      theme,
      flash,
      isExternal,
      hasMention,
      color,
    );
    const closeImg = themeClassName === Themes.DARK ? CloseIconDark : CloseIconLight;
    let containerCssClass = `container ${themeClassName} `;
    const customCssClasses = getContainerCssClasses(
      theme,
      flash,
      isExternal,
      hasMention,
    );
    containerCssClass += customCssClasses.join(' ');
    return (
      <div
        data-testid='NOTIFICATION_CONTAINER'
        className={containerCssClass}
        style={{
          height: containerHeight,
          backgroundColor: themeColors.notificationBackgroundColor,
          borderColor: themeColors.notificationBorderColor,
        }}
        lang={i18n.getLocale()}
        onMouseEnter={this.eventHandlers.onMouseEnter(id)}
        onMouseLeave={this.eventHandlers.onMouseLeave(id)}
      >
        <div
          className={`close-button ${themeClassName}`}
          title={i18n.t('Close')()}
        >
          <img
            src={closeImg}
            title={i18n.t('Close')()}
            alt='close'
            onClick={this.eventHandlers.onClose(id)}
          />
        </div>
        <div
          className='main-container'
          role='alert'
          onContextMenu={this.eventHandlers.onContextMenu}
          onClick={this.eventHandlers.onClick(id)}
        >
          <div className='logo-container'>{this.renderImage(icon)}</div>
          <div className='notification-container'>
            <div className='notification-header'>
              <div className='notification-header-content'>
                <span className={`title ${themeClassName}`}>{title}</span>
                {this.renderExtBadge(isExternal)}
              </div>
              {this.renderReplyButton(id, themeClassName)}
              {this.renderIgnoreButton(id, themeClassName)}
            </div>
            <div className={`message-preview ${themeClassName}`}>
              {this.renderUpdatedBadge(isUpdated)}
              {body}
            </div>
          </div>
        </div>
        {this.renderRTE(themeClassName)}
      </div>
    );
  }

  /**
   * Renders RTE
   * @param isInputHidden
   */
  private renderRTE(themeClassName: string): JSX.Element | undefined {
    const { canSendMessage, isInputHidden, id } = this.state;
    const actionButtonContainer = classNames('rte-button-container', {
      'action-container-margin': !isInputHidden,
    });
    const sendIcon = canSendMessage ? SendButton : SendButtonDisabled;
    if (!isInputHidden) {
      return (
        <div className='rte-container'>
          <div className='input-container'>
            <input
              className={themeClassName}
              autoFocus={true}
              onKeyUp={this.eventHandlers.onKeyUp(id)}
              onChange={this.onInputChange}
              ref={this.input}
            />
          </div>
          <div className={actionButtonContainer}>
            <button
              className={`rte-thumbsup-button ${themeClassName}`}
              onClick={this.eventHandlers.onThumbsUp()}
            >
              👍
            </button>
            <button
              className={`rte-send-button ${themeClassName}`}
              onClick={this.eventHandlers.onReply(id)}
              disabled={!canSendMessage}
              title={i18n.t('Send')()}
            >
              <img src={sendIcon}></img>
            </button>
          </div>
        </div>
      );
    }
    return;
  }

  /**
   * Renders the UPDATED badge
   * @param isUpdated
   * @returns the updated badge if the message is updated
   */
  private renderUpdatedBadge(isUpdated: boolean) {
    if (!isUpdated) {
      return;
    }
    return <div className='updated-badge'>{i18n.t('Updated')()}</div>;
  }

  /**
   * Renders external badge if the content is from external
   * @param isExternal
   */
  private renderExtBadge(isExternal: boolean): JSX.Element | undefined {
    if (!isExternal) {
      return;
    }
    return (
      <div className='ext-badge-container'>
        <img
          src={NotificationBadgeExt}
          alt='ext-badge'
        />
      </div>
    );
  }
  /**
   * Renders image if provided otherwise renders symphony logo
   * @param imageUrl
   */
  private renderImage(imageUrl: string | undefined): JSX.Element | undefined {
    let imgClass = 'default-logo';
    let url = SymphonyLogo;
    let alt = 'Symphony logo';
    const isDefaultUrl = imageUrl && imageUrl.includes('default.png');
    const shouldDisplayBadge = !!imageUrl && !isDefaultUrl;
    if (imageUrl && !isDefaultUrl) {
      imgClass = 'profile-picture';
      url = imageUrl;
      alt = 'Profile picture';
    }
    return (
      <div className='logo'>
        <img className={imgClass} src={url} alt={alt} />
        {this.renderSymphonyBadge(shouldDisplayBadge)}
      </div>
    );
  }

  /**
   * Renders profile picture symphpony badge
   * @param hasImageUrl
   */
  private renderSymphonyBadge(hasImageUrl: boolean): JSX.Element | undefined {
    if (hasImageUrl) {
      return (
        <img
          src='../renderer/assets/symphony-badge.svg'
          alt=''
          className='profile-picture-badge'
        />
      );
    }
    return;
  }

  /**
   * Invoked when the notification window is clicked
   *
   * @param id {number}
   */
  private click(id: number): void {
    window.electron.ipcRenderer.sendMessage(NotificationEvents.CLICKED, id);
  }

  /**
   * Closes the notification
   *
   * @param id {number}
   */
  private close(event: any, id: number): void {
    event.stopPropagation();
    window.electron.ipcRenderer.sendMessage(NotificationEvents.CLOSE, id);
  }

  /**
   * Disable context menu
   *
   * @param event
   */
  private contextMenu(event: any): void {
    event.preventDefault();
  }

  /**
   * Handle mouse enter
   *
   * @param id {number}
   */
  private onMouseEnter(id: number): void {
    window.electron.ipcRenderer.sendMessage(NotificationEvents.MOUSE_ENTER, id);
  }

  /**
   * Handle mouse over
   *
   * @param id {number}
   */
  private onMouseLeave(id: number): void {
    const { isInputHidden } = this.state;
    window.electron.ipcRenderer.sendMessage(NotificationEvents.MOUSE_LEAVE, id, isInputHidden);
  }

  /**
   * Insets a thumbs up emoji
   * @private
   */
  private onThumbsUp(): void {
    if (this.input.current) {
      const input = this.input.current.value;
      this.input.current.value = input + '👍';
      this.onInputChange();
      this.input.current.focus();
    }
  }

  /**
   * Handles ignore action
   * @param id
   * @private
   */
  private onIgnore(id: number): void {
    window.electron.ipcRenderer.sendMessage(NotificationEvents.ON_IGNORE, id);

  }

  /**
   * Handles reply action
   * @param id
   * @private
   */
  private onReply(id: number): void {
    let replyText = this.getInputValue();
    if (replyText) {
      // need to replace 👍 with :thumbsup: to make sure client displays the correct emoji
      replyText = replyText.replace(/👍/g, ':thumbsup: ');
      window.electron.ipcRenderer.sendMessage(NotificationEvents.ON_REPLY, id, replyText);
    }
  }

  /**
   * Displays an input on the notification
   *
   * @private
   */
  private onOpenReply(event: any, id: number) {
    event.stopPropagation();
    window.electron.ipcRenderer.sendMessage(NotificationEvents.SHOW_REPLY, id);
    this.setState(
      {
        isInputHidden: false,
        hasReply: false,
        containerHeight: CONTAINER_HEIGHT_WITH_INPUT,
      },
      () => {
        this.input.current?.focus();
      },
    );
  }

  /**
   * Trim and returns the input value
   * @private
   */
  private getInputValue(): string | undefined {
    return this.input.current?.value.trim();
  }

  /**
   * Handles key up event and enter keyCode
   *
   * @param event
   * @param id
   * @private
   */
  private onKeyUp(event: any, id: number) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.onReply(id);
    }
  }

  /**
   * Updates the send button state based on input change
   * @private
   */
  private onInputChange() {
    if (this.input.current) {
      const inputText = this.input.current.value || '';
      this.setState({
        canSendMessage: inputText.trim().length > 0,
      });
    }
  }

  /**
   * Sets the component state
   *
   * @param _event
   * @param data {Object}
   */
  private updateState(data: INotificationState): void {
    const { color } = data;
    // FYI: 1.5 sends hex color but without '#', reason why we check and add prefix if necessary.
    // Goal is to keep backward compatibility with 1.5 colors (SDA v. 9.2.0)
    const isOldColor = /^([A-Fa-f0-9]{6})/.test(color);
    data.color = isOldColor ? `#${color}` : isValidColor(color) ? color : '';
    data.isInputHidden = true;
    data.containerHeight = CONTAINER_HEIGHT;
    // FYI: 1.5 doesn't send current theme. We need to deduce it from the color that is sent.
    // Goal is to keep backward compatibility with 1.5 themes (SDA v. 9.2.0)
    data.theme =
      isOldColor && darkTheme.includes(data.color)
        ? Themes.DARK
        : data.theme
        ? data.theme
        : Themes.LIGHT;
    this.resetNotificationData();
    this.setState(data as INotificationState);
  }

  /**
   * Reset data for new notification
   * @private
   */
  private resetNotificationData(): void {
    if (this.input.current) {
      this.input.current.value = '';
    }
  }

  /**
   * Renders reply button
   * @param id
   * @param theming
   */
  private renderReplyButton(
    id: number,
    theming: string,
  ): JSX.Element | undefined {
    const { hasReply } = this.state;
    if (hasReply) {
      return (
        <button
          className={`action-button ${theming}`}
          style={{ display: hasReply ? 'block' : 'none' }}
          onClick={this.eventHandlers.onOpenReply(id)}
        >
          {i18n.t('Reply')()}
        </button>
      );
    }
    return;
  }

  /**
   * Renders ignore button
   * @param id
   * @param theming
   */
  private renderIgnoreButton(
    id: number,
    theming: string,
  ): JSX.Element | undefined {
    if (this.state.hasIgnore) {
      return (
        <button
          className={`action-button ${theming}`}
          style={{ display: 'block' }}
          onClick={this.eventHandlers.onIgnore(id)}
        >
          {i18n.t('Ignore')()}
        </button>
      );
    }
    return;
  }
}
