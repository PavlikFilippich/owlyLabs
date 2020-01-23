import { Injectable } from '@angular/core';

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

	sortedAsk = true;

	tableSorting(arr: Article[], value: string) {
		if ( this.sortedAsk ) {
			arr.sort((a, b) => a[value] > b[value] ? 1 : -1);
		} else {
			arr.sort((a, b) => a[value] < b[value] ? 1 : -1);
		}
		this.sortedAsk = !this.sortedAsk;
	}

	searchArticles(term: string): Article[] {
		const searchedTable: Article[] = [];
		const articles: Article[] = this.storeService.data.getValue();
		if (!term.trim()) {
			return [];
		}
		articles.map( item => {
			if ( item.title.indexOf(term) + 1 ) {
				return searchedTable.push(item);
			}
			return;
		});
		return searchedTable;
	}

	filterByPosted( posted: string ): Article[] {
		const listArticles: Article[] = this.storeService.data.getValue();
		return listArticles.filter(item => item.posted === JSON.parse(posted));
	}

	deleteArticle( id: number ) {
		const listArticles: Article[] = this.storeService.data.getValue();
		const articles: Article[] = listArticles.filter( item => item.id !== id);
		this.storeService.data.next(articles);
	}

	addArticle( article: AddArticle ) {
		const listArticles: Article[] = this.storeService.data.getValue();
		let newArticle: Article;
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
		const listArticles: Article[] = this.storeService.data.getValue();
		const listId: number[] = [];
		listArticles.forEach( item => listId.push(item.id));
		const maxNumber = Math.max.apply(null, listId);
		return maxNumber + 1;
	}

	editArticle( article: Article, id: number) {
		const listArticles: Article[] = this.storeService.data.getValue();
		let newArticle: Article;
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
