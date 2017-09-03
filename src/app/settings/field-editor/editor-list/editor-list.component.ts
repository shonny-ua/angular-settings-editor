import { Component, OnInit, Input } from '@angular/core';

import { Editor } from '../../editor';
import { GroupItem } from '../../groupitem';



@Component({
  selector: 'app-editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {
  @Input() editor: Editor;
  @Input() groupItem: GroupItem;
  @Input() settingsGroup: Object;

  constructor() { }

  ngOnInit() {
  }

}
