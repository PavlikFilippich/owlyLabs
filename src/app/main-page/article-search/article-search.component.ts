import { Component, DoCheck } from '@angular/core';

import { Article } from '@models/article';
import { ApiService } from '../../api.service';

@Component({
	selector: 'app-article-search',
	templateUrl: './article-search.component.html',
	styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements DoCheck {
	articles: Article[] = [];
	titleForSearch = '';

	constructor(
		private api: ApiService
	) {}

	ngDoCheck() {
		this.search();
	}

	search(): void {
		this.articles = this.api.searchArticles(this.titleForSearch);
	}
}
