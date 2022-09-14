import { ipcRenderer } from 'electron';
import * as React from 'react';
import ProcessManagerToolBar from './process-manager-toolbar';

interface IProcessManagerState {
  report: IProcessDetails[];
  selectedPid: any;
}

interface IProcessDetails {
  pid: string;
  type: string;
  cpu: any;
  webContents: any[];
}

export default class ProcessManager extends React.Component<
  {},
  IProcessManagerState
> {
  constructor(props) {
    super(props);
    this.state = {
      report: [],
      selectedPid: '',
    };
    this.updateState = this.updateState.bind(this);
  }

  /**
   * Render the component
   */
  public render(): JSX.Element {
    const { report } = this.state;
    return (
      <div className='window'>
        <header className='toolbar toolbar-header'>
          <ProcessManagerToolBar
            disableKill={!this.canKill()}
            onKillClick={this.handleKillProcess.bind(this)}
            disabelOpenDevTool={!this.canOpenDevTool()}
            onOpenDevToolClick={this.handleOpenDevTool.bind(this)}
          />
        </header>
        <table className='process-table table-striped'>
          <tr>
            <th>pid</th>
            <th>Type</th>
            <th>CPU</th>
            <th>Web content ID</th>
            <th>Web content Type</th>
            <th>Web content URL Domain</th>
            <th>Web content URL</th>
          </tr>
          {report.map((process) => {
            return this.renderProcessDetails(process);
          })}
        </table>
      </div>
    );
  }

  /**
   * Perform actions on component being mounted
   */
  public componentDidMount(): void {
    ipcRenderer.on('process-manager:report', this.updateState);
  }

  /**
   * Perform actions on component being unmounted
   */
  public componentWillUnmount(): void {
    ipcRenderer.removeListener('process-manager:stop', this.updateState);
  }

  /**
   * Update state
   * @param _event
   * @param data
   */
  private updateState(_event, data): void {
    this.setState(data as IProcessManagerState);
  }

  /**
   * Renders process details
   * @param process process details
   * @returns JSX
   */
  private renderProcessDetails(process: IProcessDetails): JSX.Element {
    const { webContents } = process;
    const { selectedPid } = this.state;
    if (webContents) {
      return (
        <tr
          className={selectedPid === process.pid ? 'selected' : ''}
          onClick={() => this.onProcessSelect(process.pid)}
        >
          {webContents.map((webContent) => {
            return this.renderWebContent(process, webContent);
          })}
        </tr>
      );
    } else {
      return (
        <tr
          className={selectedPid === process.pid ? 'selected' : ''}
          onClick={() => this.onProcessSelect(process.pid)}
        >
          <td>{process.pid}</td>
          <td>{process.type}</td>
          <td>{this.formatPercentage(process.cpu.percentCPUUsage)}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  }

  /**
   * Renders webContent details attached to a process
   * @param process attached process details
   * @param webContent webContent details
   * @returns JSX
   */
  private renderWebContent(process, webContent): JSX.Element {
    return (
      <React.Fragment>
        <td>{process.pid}</td>
        <td>{process.type}</td>
        <td>{this.formatPercentage(process.cpu.percentCPUUsage)}</td>
        <td>{webContent.id}</td>
        <td>{webContent.type}</td>
        <td>{webContent.URLDomain}</td>
        <td>{webContent.URL}</td>
      </React.Fragment>
    );
  }

  /**
   * Change process selection
   * @param pid process PID
   */
  private onProcessSelect(pid: any) {
    this.setState({
      selectedPid: pid,
    });
  }

  /**
   * Ability to kill or not a given pid
   * @returns boolean
   */
  private canKill() {
    if (!this.state.selectedPid) {
      return false;
    }
    const pids = this.state.report.map((p) => p.pid);

    // verify that select pid is in list of processes
    return pids.indexOf(this.state.selectedPid) !== -1;
  }

  /**
   * Kill a given process
   * @returns void
   */
  private handleKillProcess() {
    const pid = this.state.selectedPid;
    if (!pid) {
      return;
    }
    ipcRenderer.send('process-manager:kill-process', pid);
  }

  /**
   * Ability to open devtools or not
   * @returns boolean
   */
  private canOpenDevTool(): boolean {
    return this.canKill() && this.getWebContentsIdForSelectedProcess() !== null;
  }

  /**
   * Open devtools of a specific window
   */
  private handleOpenDevTool() {
    const webContentsId = this.getWebContentsIdForSelectedProcess();
    ipcRenderer.send('process-manager:open-dev-tools', webContentsId);
  }

  /**
   * Returns webContents id of a process
   * @returns Id
   */
  private getWebContentsIdForSelectedProcess() {
    const { report, selectedPid } = this.state;
    if (!selectedPid) {
      return null;
    }
    const process = report.find((p) => p.pid === selectedPid);
    if (!process || !process.webContents || process.webContents.length === 0) {
      return null;
    }
    return process.webContents[0].id;
  }

  /**
   * format pct
   * @param pct
   * @returns formatted pct
   */
  private formatPercentage(pct) {
    return `${pct.toFixed(2)}%`;
  }
}
