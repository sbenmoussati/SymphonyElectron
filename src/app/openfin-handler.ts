import { connect } from '@openfin/node-adapter';
import { logger } from '../common/logger';

export class OpenFinHandler {
  /**
   * Init
   */
  public async init() {
    const fin = await connect({
      uuid: 'node-app',
      licenseKey: 'openfin-demo-license-key',
      runtime: {
        version: '33.116.77.8',
      },
    });
    logger.info('openfin-handler: connecting', fin);
  }
}

const openFinHandler = new OpenFinHandler();

export { openFinHandler };
