import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { KeyValPipe } from './lib/pipes/keyval';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';
// import { SettingsService } from './settings/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    // IndexComponent,
    SettingsComponent,

    KeyValPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    MaterialModule,
    MdInputModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
