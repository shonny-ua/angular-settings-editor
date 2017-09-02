import { Component, OnInit, Input } from '@angular/core';

import { Editor } from '../editor';


@Component({
  selector: 'editor-list',
  templateUrl: './editor-list.component.html',
  styleUrls: ['./editor-list.component.css']
})
export class EditorListComponent implements OnInit {
  @Input() editor: Editor;
  @Input() setting: Object;
  @Input() key: string;

  constructor() { }

  ngOnInit() {
  }

}
