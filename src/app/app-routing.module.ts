import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';


const routes: Routes = [
	{ path: '', redirectTo: '/articles', pathMatch: 'full'},
	{ path: 'articles', component: MainPageComponent},
	{ path: 'article/:id', component: DetailPageComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
