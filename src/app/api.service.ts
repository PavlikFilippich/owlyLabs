import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoreService } from './store.service';
import { Article } from '@models/article';


@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(
		private storeService: StoreService
	) { }

	articles = this.storeService.data.asObservable();

	setArticlesByTitle = new BehaviorSubject<Article[]>([]);

	getArticlesByTitle = this.setArticlesByTitle.asObservable();

	sortedAsk = true;

	tableSorting(arr: Article[], value: string) {
		let sortedTable: Article[] = [];
		if ( this.sortedAsk ) {
			sortedTable = arr.sort((a, b) => a[value] > b[value] ? 1 : -1);
		} else {
			sortedTable = arr.sort((a, b) => a[value] < b[value] ? 1 : -1);
		}
		this.sortedAsk = !this.sortedAsk;
		return sortedTable;
	}

	searchArticles(term: string) {
		const searchedTable: Article[] = [];
		let articles: Article[] = [];
		if (!term.trim()) {
			return this.setArticlesByTitle.next([]);
		}
		this.articles.subscribe(art => articles = art);
		articles.map( item => {
			if ( item.title.indexOf(term) + 1 ) {
				return searchedTable.push(item);
			}
			return;
		});
		return this.setArticlesByTitle.next(searchedTable);
	}
}
