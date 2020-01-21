import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

@NgModule({
	declarations: [
		AddArticleComponent,
		EditArticleComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BrowserModule,
		FormsModule,
		RouterModule,
	],
	exports: [
		AddArticleComponent,
		EditArticleComponent
	]
})
export class FormModule { }
