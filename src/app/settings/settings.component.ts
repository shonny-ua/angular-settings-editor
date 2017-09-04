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
    Promise.all([
      this.getMeta(),
      this.getSettings()
  ]).then(() => this.fillSettingsByMeta());
  }

  getMeta(): void {
    this.settingsService.getMeta().then(
      meta => {
        this.meta = meta;
        this.groups = meta.groups;
        this.editors = meta.editors;
        return this.meta;
      }
    );
  }

  getSettings(): void {
    this.settingsService.getSettings().then(settings => (this.settings = settings));
  }

  fillSettingsByMeta(): void {
    this.groups.forEach(group => {
      if (!this.settings[group.id]) {
        this.settings[group.id] = {};
      }
      group.items.forEach(item => {
        if (typeof this.settings[group.id][item.id] === 'undefined') {
         if (typeof item.defVal != 'undefined') {
           this.settings[group.id][item.id] = item.defVal;
         } else if (item.dataType == 'bool') {
           this.settings[group.id][item.id] = false;
         } else if (item.dataType == 'int') {
           this.settings[group.id][item.id] = 0;
         } else {
           this.settings[group.id][item.id] = '';
         }
        }
      });
    });
  }
}
