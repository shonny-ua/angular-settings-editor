import { Injectable } from '@angular/core';

import { Meta } from './meta';
import { Settings } from './settings';

import { META } from './mock-meta';
import { SETTINGS } from './mock-settings';

@Injectable()
export class SettingsService {
  constructor() { }

  getMeta(): Promise<Meta> {
  	return new Promise((resolve, reject) => {
  		resolve(META as Meta);
  	});
  }

  getSettings(): Promise<Settings> {
  	return new Promise((resolve, reject) => {
  		// resolve(this.settings as Settings);
  		resolve(SETTINGS);
  	});
  }

}
