import {Component} from '@angular/core';
import {City} from './city.model'

// component with external HTML
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html'
})

// Class w/ properties, array w/ cities
export class AppComponent {
	// Properties
	total: number    = 0;
	cities           = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];
	counter: number  = 0;
	txtKeyUp: string = '';

	// 1. Bind to click-event in the page
	btnClick() {
		alert('You clicked ' + ++this.counter + ' times');
	}

	// 2. Bind to keyUp-event in the textbox
	onKeyUp(event: any) {
		this.txtKeyUp = event.target.value;
	}

	// 3. Bind to keyUp-event via local template variable
	betterKeyUp(txtCity) {
		console.log('You typed: ', txtCity.value);
		//... do nothing, for now
	}

	addTotal(numValue) {
		this.total = this.total + parseInt(numValue);
	}
}