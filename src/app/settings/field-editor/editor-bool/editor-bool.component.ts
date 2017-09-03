import { Component, OnInit, Input } from '@angular/core';

import { GroupItem } from '../../groupitem';

@Component({
  selector: 'app-editor-bool',
  templateUrl: './editor-bool.component.html',
  styleUrls: ['./editor-bool.component.css']
})
export class EditorBoolComponent implements OnInit {
  @Input() groupItem: GroupItem;
  @Input() settingsGroup: Object;
  
  constructor() { }

  ngOnInit() {
  }

}
