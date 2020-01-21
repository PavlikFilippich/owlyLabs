import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AddArticleComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BrowserModule,
		FormsModule,
		RouterModule,
	],
	exports: [
		AddArticleComponent
	]
})
export class FormModule { }
