import { Component, OnInit, Input } from '@angular/core';

import { GroupItem } from '../../groupitem';

@Component({
  selector: 'app-editor-input',
  templateUrl: './editor-input.component.html',
  styleUrls: ['./editor-input.component.css']
})
export class EditorInputComponent implements OnInit {
  @Input() groupItem: GroupItem;
  @Input() settingsGroup: Object;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
