import { Component, OnInit } from '@angular/core';

import { SettingsService } from './settings.service';

import { Meta } from './meta';
import { Group } from './group';
import { Editor } from './editor';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  meta: Meta;
  editors: Editor[];
  groups: Group[];
  settings: Object;


  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  	this.getMeta();
  	this.getSettings();
  }

  getMeta(): void {
  	this.settingsService.getMeta().then(
  		meta => {
  			this.meta = meta;
  			this.groups = meta.groups;
  			this.editors = meta.editors;
  		}
  	);
  }

  getSettings(): void {
  	this.settingsService.getSettings().then(settings => this.settings = settings);
  }


}
