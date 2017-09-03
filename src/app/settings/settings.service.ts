import { Injectable } from '@angular/core';

import { Meta } from './meta';
import { Settings } from './settings';

import { META } from './mock-meta';
import { SETTINGS } from './mock-settings';

let storedMeta = META;
let storedSettings = SETTINGS;

@Injectable()
export class SettingsService {
  meta: Meta;
  settings: Object;

  constructor() { 
  	this.meta = storedMeta as Meta;
  	this.settings = storedSettings;
  }

  getMeta(): Promise<Meta> {
  	return new Promise((resolve, reject) => {
  		resolve(this.meta);
  	});
  }

  getSettings(): Promise<Settings> {
  	return new Promise((resolve, reject) => {
  		// resolve(this.settings as Settings);
  		resolve(this.settings);
  	});
  }

  setMeta(meta: any): Promise<Meta> {
  	storedMeta = meta;
  	this.meta = meta;
  	return this.getMeta();
  }

  setSettings(settings: any): Promise<Settings> {
  	storedSettings = settings;
  	this.settings = storedSettings;
  	return this.getSettings();
  }
}
