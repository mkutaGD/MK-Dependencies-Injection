import { HTTP, IHTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  http: IHTTP;
  config: ApiConfig;

  static $inject = ['config', 'http']

  constructor(config: ApiConfig, http: IHTTP) {
    this.http = http;
    this.config = config;
  }

  getUsers() {
    return this.http.get(this.config.resources.users) as unknown as User[];
  }
}
