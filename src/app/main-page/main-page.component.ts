import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Article } from '@models/article';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

	listArticles: Article[];

	constructor(
		private api: ApiService
	) { }

	ngOnInit() {
		this.setListArticles();
	}

	setListArticles() {
		this.api.articles.subscribe( articles => this.listArticles = articles );
	}

	tableSorting(value: string) {
		this.api.tableSorting(this.listArticles, value);
	}

	filterByPosted(posted: string) {
		if ( posted ) {
			this.api.filterByPosted(posted);
			this.api.getFilterArticlesByPosted.subscribe( articles => this.listArticles = articles );
		} else {
			this.setListArticles();
		}
	}
}
