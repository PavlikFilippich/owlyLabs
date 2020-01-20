import { Injectable } from '@angular/core';

import { StoreService } from './store.service';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(
		private storeService: StoreService
	) { }

	articles = this.storeService.data.asObservable();
}
