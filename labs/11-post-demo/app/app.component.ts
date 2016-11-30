import {Component, ViewChild, ElementRef} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

// TypeScript Decorator. Pay attention to module.id.
// This makes path relative url's possible. See for more information
// for example. https://www.bennadel.com/blog/3169-adding-custom-typings-files-d-ts-in-an-angular-2-typescript-application.htm
@Component({
	moduleId   : module.id,
	selector   : 'post-app',
	templateUrl: 'app.component.html'
})

// Controller for the View. Another new way to pass data in: using @ViewChild
// to fetch a reference to the element in the view.
// You could also use [(ngModel)] but will have to import FormsModule then also.
export class AppComponent {
	@ViewChild('email') email: ElementRef;
	@ViewChild('password') password: ElementRef;
						response: any;

	constructor(private http: Http) {

	}

	doLogin() {
		// Post data to reqres.in API.
		// This SHOULD go via a service, but for convenience it is now declared directly
		// in the component.
		// More info on this API is available at http://reqres.in.
		let url = 'http://reqres.in/api/login';

		let email    = this.email.nativeElement.value;		// fetch value from text field
		let password = this.password.nativeElement.value;	// fetch value from text field
		let data     = {
			"email"   : email,
			"password": password
		};

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(url, JSON.stringify(data),
			{headers: headers})
			.map(res => res.json())
			.subscribe(res => this.response = res,
				err => console.log('ERROR:', err),
				() => console.log('Login complete')
			);
	}
}
