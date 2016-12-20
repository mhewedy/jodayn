import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';

import 'rxjs/add/operator/delay'

//********************
// Example 1. Function to match passwords
//********************
// used in group level
function passwordMatcher(control: AbstractControl) {
	return control.get('password').value === control.get('confirm').value
		? null : {'nomatch': true};
	// we *could*  return just true/false here, but by returning an object
	// we're more flexible in composing our validators.
}
//********************
// Example 2: Function to validate email
//********************
// email validator (function that extends ValidatorFn typescript interface)
// so it can be passed to Validators.compose
function validateEmail(control: AbstractControl) {
	console.log('in email validator');
	let email = control.value;	// no longer need control.get('email')
	let re    = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	// return !re.test(email) ? {"invalidFormat": true} : {"invalidFormat": false};
	return !re.test(email) ? {"invalidFormat": true} : null;
}

//********************
// (documentation: https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)
// Example 3: Using multiple custom validators on a form? You have to call
// *one* validatorFunction that does all validations and returns its results.
// For example like :
//********************
function validateForm(control: AbstractControl) {
	return {
		'match passwords': passwordMatcher(control),
		'valid email'    : validateEmail(control)
	}
}

// Class Decorator
@Component({
	selector   : 'component2',
	templateUrl: 'app/component2/app.component2.html'
})

// Class
export class AppComponent2 implements OnInit {

	myReactiveForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
	}

	ngOnInit() {
		// 1. Define the model of Reactive Form.
		this.myReactiveForm = this.formBuilder.group({
			email   : ['', Validators.compose([Validators.required, validateEmail])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			confirm : ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			customer: this.formBuilder.group({
				prefix   : ``,
				firstName: ``,
				lastName : ``
			})
		}, {validator: passwordMatcher}); // pass in the validator function


		this.myReactiveForm.get("email").valueChanges
		.delay(1000)
		.subscribe(o => {
			console.log('o: ', o);
		})
	}

	onSubmit() {
		console.log('Form submitted: ', this.myReactiveForm.value);
		// alert('Form submitted!', JSON.stringify(this.myReactiveForm.value));
		// TODO: do something useful with form
	}
}

