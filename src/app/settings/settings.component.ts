import { Component, OnInit, Input } from '@angular/core';

import { SettingsService } from './settings.service';

import { Meta } from './meta';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  meta: Meta;
  @Input() settings: Object;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  	this.getMeta();
  	this.getSettings();
  }

  getMeta(): void {
  	this.settingsService.getMeta().then(meta => this.meta = meta);
  }

  getSettings(): void {
  	this.settingsService.getSettings().then(settings => this.settings = settings);
  }


}
