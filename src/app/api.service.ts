import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { StoreService } from './store.service';
import { Article } from '@models/article';
import { AddArticle } from '@models/addArticle';

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

	deleteArticle( id: number ) {
		let listArticles: Article[] = [];
		this.articles.subscribe(art => listArticles = art);
		const articles: Article[] = listArticles.filter( item => item.id !== id);
		this.storeService.data.next(articles);
	}

	addArticle( article: AddArticle ) {
		let listArticles: Article[] = [];
		let newArticle: Article;
		this.articles.subscribe(art => listArticles = art);
		const id = this.getId();
		newArticle = {
			id,
			title: article.title,
			text: article.text,
			posted: article.posted,
			author: article.author,
			email: article.email,
			source: article.source
		};
		listArticles.push(newArticle);
		this.storeService.data.next(listArticles);
	}

	getId(): number {
		let listArticles: Article[] = [];
		this.articles.subscribe(art => listArticles = art);
		const listId: number[] = [];
		listArticles.forEach( item => listId.push(item.id));
		const maxNumber = Math.max.apply(null, listId);
		return maxNumber + 1;
	}

	editArticle( article: Article, id: number) {
		let listArticles: Article[] = [];
		let newArticle: Article;
		this.articles.subscribe(art => listArticles = art);
		newArticle = {
			id,
			title: article.title,
			text: article.text,
			posted: article.posted,
			author: article.author,
			email: article.email,
			source: article.source
		};
		const index = listArticles.findIndex( item => item.id === id );
		listArticles.splice( index, 1, newArticle );
		this.storeService.data.next(listArticles);
	}
}
