import { Pipe, PipeTransform } from '@angular/core';

import { Editor } from './editor';


@Pipe({
  name: 'findEditor'
})
export class FindEditorPipe implements PipeTransform {

  transform(value: Object, editors: Editor[]): any {
    return editors.find(editor => (value == editor.id));
  }

}
