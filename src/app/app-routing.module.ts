import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { AddArticleComponent } from './form/add-article/add-article.component';
import { EditArticleComponent } from './form/edit-article/edit-article.component';


const routes: Routes = [
	{ path: '', redirectTo: '/articles', pathMatch: 'full' },
	{ path: 'articles', component: MainPageComponent },
	{ path: 'article/:id', component: DetailPageComponent },
	{ path: 'new-article', component: AddArticleComponent },
	{ path: 'article/:id/edit', component: EditArticleComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
