import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
	selector: 'app-add-article',
	templateUrl: './add-article.component.html',
	styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {
	articleForm: FormGroup;

	showPopUp = false;

	showEmailAndAuthor = false;

	isPosted = false;

	constructor(
		private formBuilder: FormBuilder,
		private api: ApiService,
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
		}
	}

	saveArticle() {
		if ( this.articleForm.valid ) {
			this.showPopUp = true;
			setTimeout( () => {
				this.api.addArticle(this.articleForm.value);
				this.route.navigate(['']);
			}, 3000);
		}
	}
}
