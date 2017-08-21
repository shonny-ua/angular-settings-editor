import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';
import { AppComponent } from './app.component';


const routes: Routes = [
	// { path: '', redirectTo: '/index', pathMatch: 'full' },
  	{ path: 'settings',  component: SettingsComponent }
];

@NgModule({
	  imports: [RouterModule.forRoot(routes)],
	  exports: [RouterModule]
})
export class AppRoutingModule { }
