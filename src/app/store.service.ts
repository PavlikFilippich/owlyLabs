import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Article } from '@models/article';

@Injectable({
	providedIn: 'root'
})
export class StoreService {

	data = new BehaviorSubject<Article[]>( [
		{
			id: 4,
			title: 'Alma matter',
			text: 'Alma matter is very good',
			posted: true,
			author: 'Pasha',
			email: 'Pasha@gmail.com'
		},
		{
			id: 1,
			title: 'Mobile',
			text: 'Mobile is cool',
			posted: true,
			author: 'Pavel',
			email: 'email@gmail.com'
		},
		{
			id: 3,
			title: 'smoke',
			text: 'smocking is bad',
			posted: false,
			author: 'Artem',
			email: 'Artem@gmail.com'
		},
		{
			id: 2,
			title: 'Auto',
			text: 'Auto is fast',
			posted: true,
			author: 'Dima',
			email: 'dimaemail@gmail.com'
		}
	]);
}
