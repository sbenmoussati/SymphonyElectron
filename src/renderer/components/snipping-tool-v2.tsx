import { ipcRenderer } from 'electron';
import * as React from 'react';

import { Themes } from './notification-settings';

type Theme = '' | Themes.DARK | Themes.LIGHT;
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
  theme: Theme;
  hasReply: boolean;
  hasMention: boolean;
  isInputHidden: boolean;
  containerHeight: number;
  canSendMessage: boolean;
}

const myTheme = {
  'common.bi.image': '',
  'common.bisize.width': '0',
  'common.bisize.height': '0',
  'common.backgroundImage': 'none',
  'common.backgroundColor': '#1e1e1e',
  'common.border': '0px',

  // header
  'header.backgroundImage': 'none',
  'header.backgroundColor': 'transparent',
  'header.border': '0px',

  // load button
  'loadButton.backgroundColor': '#008eff',
  'loadButton.border': '1px solid #008eff',
  'loadButton.color': '#222',
  'loadButton.fontFamily': '"Segoe UI", "Helvetica Neue", Arial, sans-serif;',
  'loadButton.fontSize': '12px',

  // download button
  'downloadButton.backgroundColor': '#008eff',
  'downloadButton.border': '1px solid #008eff',
  'downloadButton.color': '#fff',
  'downloadButton.fontFamily':
    '"Segoe UI", "Helvetica Neue", Arial, sans-serif;',
  'downloadButton.fontSize': '12px',
  'downloadButton.display': 'none',

  // main icons
  'menu.normalIcon.color': '#8a8a8a',
  'menu.activeIcon.color': '#555555',
  'menu.disabledIcon.color': '#434343',
  'menu.hoverIcon.color': '#e9e9e9',
  'menu.iconSize.width': '24px',
  'menu.iconSize.height': '24px',

  // submenu icons
  'submenu.normalIcon.color': '#8a8a8a',
  'submenu.activeIcon.color': '#e9e9e9',
  'submenu.iconSize.width': '32px',
  'submenu.iconSize.height': '32px',

  // submenu primary color
  'submenu.backgroundColor': '#1e1e1e',
  'submenu.partition.color': '#3c3c3c',

  // submenu labels
  'submenu.normalLabel.color': '#8a8a8a',
  'submenu.normalLabel.fontWeight': 'lighter',
  'submenu.activeLabel.color': '#fff',
  'submenu.activeLabel.fontWeight': 'lighter',
  'submenu.activeLabel.fontFamily':
    '"Segoe UI", "Helvetica Neue", Arial, sans-serif;',

  // checkbox style
  'checkbox.border': '0px',
  'checkbox.backgroundColor': '#fff',

  // range style
  'range.pointer.color': '#fff',
  'range.bar.color': '#666',
  'range.subbar.color': '#d1d1d1',

  'range.disabledPointer.color': '#414141',
  'range.disabledBar.color': '#282828',
  'range.disabledSubbar.color': '#414141',

  'range.value.color': '#fff',
  'range.value.fontWeight': 'lighter',
  'range.value.fontSize': '11px',
  'range.value.border': '1px solid #353535',
  'range.value.backgroundColor': '#151515',
  'range.title.color': '#fff',
  'range.title.fontWeight': 'lighter',

  // colorpicker style
  'colorpicker.button.border': '1px solid #1e1e1e',
  'colorpicker.title.color': '#fff',
  'colorpicker.title.fontFamily':
    '"Segoe UI", "Helvetica Neue", Arial, sans-serif;',
};

// Notification container height
const CONTAINER_HEIGHT = 100;

export default class SnippingToolV2 extends React.Component<
  {},
  INotificationState
> {
  private imageEditor: any;
  private snipImage: any;
  private ref = React.createRef();

  constructor(props) {
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
      theme: '',
      isInputHidden: true,
      hasReply: false,
      hasMention: false,
      containerHeight: CONTAINER_HEIGHT,
      canSendMessage: false,
    };
  }

  /**
   * Callback to handle event when a component is mounted
   */
  public componentDidMount(): void {
    ipcRenderer.once('snipping-tool-data', this.getSnipImageData);
  }

  public getSnipImageData = ({}, { snipImage }) => {
    const ImageEditor = require('tui-image-editor');
    this.snipImage = snipImage;
    const selector = this.ref.current;
    this.imageEditor = new ImageEditor(selector, {
      includeUI: {
        loadImage: {
          path: snipImage,
          name: 'SampleImage',
        },
        menuBarPosition: 'top',
        theme: myTheme,
      },
      cssMaxWidth: 700,
      cssMaxHeight: 800,
      usageStatistics: false,
    });
    window.onresize = () => {
      this.imageEditor.ui.resizeEditor();
    };
  };

  /**
   * Renders the component
   */
  public render(): JSX.Element {
    return (
      <div className='image-editor-wrapper'>
        <div
          id='tui-image-editor-container'
          ref={this.ref as React.RefObject<HTMLDivElement>}
        ></div>
        <button className='done-button' onClick={this.done}>
          Done
        </button>
      </div>
    );
  }

  public done = async () => {
    const mergedImageData = this.imageEditor.toDataURL();
    ipcRenderer.send('upload-snippet', {
      snipImage: this.snipImage,
      mergedImageData,
    });
  };

  // /**
  //  * Sets the component state
  //  *
  //  * @param _event
  //  * @param data {Object}
  //  */
  // private updateState(_event, data): void {
  //   const { color } = data;
  //   // FYI: 1.5 sends hex color but without '#', reason why we check and add prefix if necessary.
  //   // Goal is to keep backward compatibility with 1.5 colors (SDA v. 9.2.0)
  //   const isOldColor = /^([A-Fa-f0-9]{6})/.test(color);
  //   data.isInputHidden = true;
  //   data.containerHeight = CONTAINER_HEIGHT;
  //   // FYI: 1.5 doesn't send current theme. We need to deduce it from the color that is sent.
  //   // Goal is to keep backward compatibility with 1.5 themes (SDA v. 9.2.0)
  //   data.theme =
  //     isOldColor && darkTheme.includes(data.color)
  //       ? Themes.DARK
  //       : data.theme
  //       ? data.theme
  //       : Themes.LIGHT;
  //   this.setState(data as INotificationState);
  // }
}
