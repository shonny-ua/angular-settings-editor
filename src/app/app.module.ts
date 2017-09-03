import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { KeyValPipe } from './lib/pipes/keyval';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings/settings.service';
import { EditorListComponent } from './settings/editor-list/editor-list.component';
import { FindEditorPipe } from './settings/find-editor.pipe';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,

    EditorListComponent,

    KeyValPipe,
    FindEditorPipe,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    MaterialModule,
    MdInputModule
  ],
  providers: [ SettingsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
