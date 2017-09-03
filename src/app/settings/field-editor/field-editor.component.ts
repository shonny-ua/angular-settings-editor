import { Component, OnInit, Input } from '@angular/core';

import { GroupItem } from '../groupitem';
import { Editor } from '../editor';

@Component({
  selector: 'app-field-editor',
  templateUrl: './field-editor.component.html',
  styleUrls: ['./field-editor.component.css']
})
export class FieldEditorComponent implements OnInit {
  @Input() editors: Editor[];
  @Input() groupItem: GroupItem;
  @Input() settingsGroup: Object;

  constructor() { }

  ngOnInit() {
  }

}
