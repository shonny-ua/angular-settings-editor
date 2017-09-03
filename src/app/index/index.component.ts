import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [SettingsService]
})
export class IndexComponent implements OnInit {
  meta: string;
  settings: string;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
  	this.getMeta();
  	this.getSettings();
  }

  getMeta(): void {
  	this.settingsService.getMeta().then(
  		meta => {
  			this.meta = JSON.stringify(meta, null, 2);
  		}
  	);
  }

  getSettings(): void {
  	this.settingsService.getSettings()
  		.then(
  			settings => this.settings = JSON.stringify(settings, null, 2)
  		);
  }

  onSave(): void {
  	this.settingsService.setMeta(JSON.parse(this.meta));
  	this.settingsService.setSettings(JSON.parse(this.settings));
  }
}
