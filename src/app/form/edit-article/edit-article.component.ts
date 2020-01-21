import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../api.service';
import { Article } from '@models/article';


@Component({
	selector: 'app-edit-article',
	templateUrl: './edit-article.component.html',
	styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

	article: Article;

	articleForm: FormGroup;

	showPopUp = false;

	showEmailAndAuthor = false;

	isPosted = false;

	constructor(
		private formBuilder: FormBuilder,
		private api: ApiService,
		private activeRoute: ActivatedRoute,
		private route: Router
	) {
		this.articleForm = this.formBuilder.group({
			title: ['', Validators.required],
			text: ['', Validators.required],
			posted: false,
			setAuthor: false,
			author: [''],
			email: ['']
		});
	}

	ngOnInit() {
		this.getArticle();
		this.setForm();
	}

	getArticle() {
		let articles: Article[] = [];
		const id = +this.activeRoute.snapshot.paramMap.get('id');
		this.api.articles.subscribe( arts => articles = arts );
		this.article = articles.find( item => item.id === id );
	}

	setForm() {
		let isSetAuthor: boolean;
		isSetAuthor = !this.article.author;
		this.isPosted = this.article.posted;
		this.showEmailAndAuthor = !isSetAuthor;
		this.articleForm.setValue({
			title: this.article.title,
			text: this.article.text,
			posted: this.article.posted,
			setAuthor: isSetAuthor,
			author: this.article.author,
			email: this.article.email
		});
	}

	changeSetAuthor() {
		this.showEmailAndAuthor = !this.showEmailAndAuthor;
		this.articleForm.patchValue({
			setAuthor: this.showEmailAndAuthor
		});
		this.setEmailAndAuthorValidator();
	}

	changePostedValue() {
		this.isPosted = !this.isPosted;
		this.articleForm.patchValue({
			posted: this.isPosted
		});
	}

	setEmailAndAuthorValidator() {
		const email = this.articleForm.get('email');
		const author = this.articleForm.get('author');

		if ( this.showEmailAndAuthor ) {
			email.setValidators([Validators.required]);
			author.setValidators([Validators.required]);
		} else {
			email.clearValidators();
			author.clearValidators();
			email.updateValueAndValidity();
			author.updateValueAndValidity();
			this.articleForm.patchValue({
				author: [''],
				email: ['']
			});
		}
	}

	saveArticle() {
		if ( this.articleForm.valid ) {
			this.showPopUp = true;
			setTimeout( () => {
				this.api.editArticle(this.articleForm.value, this.article.id);
				this.route.navigate(['']);
			}, 3000);
		}
	}
}
