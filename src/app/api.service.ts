import { Injectable } from '@angular/core';

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
}
