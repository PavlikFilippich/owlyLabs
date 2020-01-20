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

	filterArticlesByPosted = new BehaviorSubject<Article[]>([]);

	getFilterArticlesByPosted = this.filterArticlesByPosted.asObservable();

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

	filterByPosted( posted: string ) {
		let listArticles: Article[] = [];
		this.articles.subscribe(art => listArticles = art);
		const filterArticles = listArticles.filter( item => item.posted === JSON.parse(posted));
		this.filterArticlesByPosted.next(filterArticles);
	}
}
