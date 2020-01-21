import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostedPipe } from './pipes/posted.pipe';
import { ArticleSearchComponent } from './main-page/article-search/article-search.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FormModule } from './form/form.module';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		PostedPipe,
		ArticleSearchComponent,
		DetailPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		FormsModule,
		FormModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
