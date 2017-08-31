import { Injectable } from '@angular/core';

import { Meta } from './meta';
import { Settings } from './settings';

@Injectable()
export class SettingsService {

  private meta = {
	editors:
		[
			{
				id: "LogLevelList",
				dataType: "int",
				kind: "list",
				items: {
					"1": "Info",
					"2": "Debug",
					"3": "Warning",
					"4": "Error"
				},
				defVal: "1"
			},
			{
				id: "CountryList",
				dataType: "string",
				kind: "list",
				items: {
					"ua": "Ukraine",
					"uk": "United Kingdom",
					"us": "United States",
					"de": "Germany"
				}
			}
		
		],	
		groups: [
			{
				id: "subscriber",
				caption: "Subscriber profile",
				items: 
				[
					{
						id: "name",
						caption: "Company name",
						info: "The name of subscriber’s company",
						dataType: "string"
					},				
					{ 
						id: "country",
						caption: "Country",
						dataType: "string",
						editor: "CountryList",
						defVal: "ua"
					},
					{ 
						id: "receiveNotifications",
						caption: "Receive notifications",
						Info: "If turned on - this subscriber will receive notifications on the main account’s email address",
						dataType: "bool",
						defVal: "true"
					},
				]
			},
			{
				id: "email",
				caption: "Email settings",
				items: [
					{
						id: "smtpHost",
						caption: "SMTP Host Address",
						dataType: "string"
					},				
					{ 
						id: "smtpPort",
						caption: "SMPT port",
						dataType: "int"
					},
					{
						id: "smtpUsername",
						caption: "SMTP Username",
						dataType: "string"
					},
					{
						id: "smtpPassword",
						caption: "SMTP Password",
						dataType: "string",
						editor:"password" 		//built-in editor
					}				
				]
			}
		]
	};

  private settings = {
  	"subscriber" : {
		"name": "Imena.UA",
		"country": "ua",
		"receiveNotifications": true
	},
	"email": {
		"smtpHost": "smtp.imena.ua",
		"smtpPort": 25,
		"smtpUsername": "vasya.pupkin",
		"smtpPassword": "password"
	}

  };

  constructor() { }

  getMeta(): Promise<Meta> {
  	return new Promise((resolve, reject) => {
  		resolve(this.meta as Meta);
  	});
  }

  getSettings(): Promise<Settings> {
  	return new Promise((resolve, reject) => {
  		// resolve(this.settings as Settings);
  		resolve(this.settings);
  	});
  }

}
