import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { Article } from '@models/article';
import { Property } from '@models/property';

@Component({
	selector: 'app-detail-page',
	templateUrl: './detail-page.component.html',
	styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

	article: any;

	articles: Article[];

	propertiesArticle: Property[] = [];

	constructor(
		private route: ActivatedRoute,
		private api: ApiService
	) { }

	ngOnInit() {
		this.getArticle();
		this.getPropertiesArticle();
	}

	getArticle() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.api.articles.subscribe( articles => this.articles = articles );
		this.article = this.articles.find( item => item.id === id );
	}

	getPropertiesArticle() {
		for ( const prop of Object.keys(this.article)) {
			const property: Property = {
				key: prop,
				value: this.article[prop]
			};
			this.propertiesArticle.push(property);
		}
	}

}
