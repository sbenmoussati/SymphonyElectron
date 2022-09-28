import { ipcRenderer } from 'electron';
import FilerobotImageEditor from 'filerobot-image-editor';
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

const config = {
  source: 'https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg',
  annotationsCommon: {
    fill: '#ff0000',
  },
  Text: { text: 'Filerobot...' },
  Rotate: { angle: 90, componentType: 'slider' },
  translations: {
    profile: 'Profile',
    coverPhoto: 'Cover photo',
    facebook: 'Facebook',
    socialMedia: 'Social Media',
    fbProfileSize: '180x180px',
    fbCoverPhotoSize: '820x312px',
  },
  Crop: {
    presetsItems: [
      {
        titleKey: 'classicTv',
        descriptionKey: '4:3',
        ratio: 4 / 3,
        // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
      },
      {
        titleKey: 'cinemascope',
        descriptionKey: '21:9',
        ratio: 21 / 9,
        // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
      },
    ],
    presetsFolders: [
      {
        titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
        // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
        groups: [
          {
            titleKey: 'facebook',
            items: [
              {
                titleKey: 'profile',
                width: 180,
                height: 180,
                descriptionKey: 'fbProfileSize',
              },
              {
                titleKey: 'coverPhoto',
                width: 820,
                height: 312,
                descriptionKey: 'fbCoverPhotoSize',
              },
            ],
          },
        ],
      },
    ],
  },
  tabsIds: ['Adjust', 'Annotate', 'Watermark'], // or ['Adjust', 'Annotate', 'Watermark']
  defaultTabId: 'Annotate', // or 'Annotate'
  defaultToolId: 'Text', // or 'Text'
};

// Notification container height
const CONTAINER_HEIGHT = 100;

export default class SnippingToolV3 extends React.Component<
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
    // const ImageEditor = require('tui-image-editor');
    // this.snipImage = snipImage;
    // const selector = this.ref.current;
    // this.imageEditor = new ImageEditor(selector, {
    //   includeUI: {
    //     loadImage: {
    //       path: snipImage,
    //       name: 'SampleImage',
    //     },
    //     menuBarPosition: 'top',
    //     theme: myTheme,
    //   },
    //   cssMaxWidth: 700,
    //   cssMaxHeight: 800,
    //   usageStatistics: false,
    // });
    // window.onresize = () => {
    //   this.imageEditor.ui.resizeEditor();
    // };
    const selector = this.ref.current;
    config.source = snipImage;
    const filerobotImageEditor = new FilerobotImageEditor(selector, config);
    filerobotImageEditor.render({
      onClose: (_closingReason) => {
        filerobotImageEditor.terminate();
      },
    });
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
