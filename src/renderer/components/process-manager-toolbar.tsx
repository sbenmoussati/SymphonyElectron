import * as React from 'react';

interface IToolBarProps {
  onKillClick: any;
  disableKill: any;
  onOpenDevToolClick: any;
  disabelOpenDevTool: any;
}

export default class ProcessManagerToolBar extends React.Component<
  IToolBarProps,
  {}
> {
  // tslint:disable-next-line: completed-docs
  public render() {
    return (
      <div className='toolbar-actions'>
        <div className='btn-group'>
          <button
            className='btn btn-default'
            disabled={this.props.disableKill}
            onClick={this.props.onKillClick}
          >
            End process
          </button>
          <button
            className='btn btn-default'
            disabled={this.props.disabelOpenDevTool}
            onClick={this.props.onOpenDevToolClick}
          >
            Open Dev Tool
          </button>
        </div>
      </div>
    );
  }
}
