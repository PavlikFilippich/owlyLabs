import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
