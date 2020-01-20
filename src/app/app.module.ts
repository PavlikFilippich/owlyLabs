import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostedPipe } from './pipes/posted.pipe';
import { ArticleSearchComponent } from './main-page/article-search/article-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		PostedPipe,
		ArticleSearchComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
