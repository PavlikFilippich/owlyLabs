import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostedPipe } from './pipes/posted.pipe';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		PostedPipe,
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
