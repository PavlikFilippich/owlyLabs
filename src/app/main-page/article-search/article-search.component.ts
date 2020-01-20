import { Component, DoCheck, OnInit } from '@angular/core';

import { Article } from '@models/article';
import { ApiService } from '../../api.service';

@Component({
	selector: 'app-article-search',
	templateUrl: './article-search.component.html',
	styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit, DoCheck {
	articles: Article[];
	titleForSearch = '';

	constructor(
		private api: ApiService
	) {}

	ngOnInit() {
		this.api.getArticlesByTitle.subscribe( article => this.articles = article);
	}

	ngDoCheck() {
		this.search();
	}

	search(): void {
		this.api.searchArticles(this.titleForSearch);
	}
}
