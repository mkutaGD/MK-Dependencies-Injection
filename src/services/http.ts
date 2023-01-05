import { Logger, ILogger } from './logger';

import type { ApiConfig } from '../types';
export class HTTP {
  logger: ILogger;
  config: ApiConfig;

  static $inject = ['config', 'logger'];

  constructor(config: ApiConfig, logger: ILogger) {
    this.config = config;
    this.logger = logger;
  }

  async get(url: string) {

    const response = await fetch(`${this.config.common.api.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}

export interface IHTTP {
  logger: ILogger;
  apiConfig: ApiConfig;
  get: (url: string) => JSON | void;
}