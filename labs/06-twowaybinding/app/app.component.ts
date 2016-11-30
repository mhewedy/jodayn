import {Component} from '@angular/core';
import {City} from './city.model'

// Component annotation
@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html',
})

// Class w/ properties
export class AppComponent {
	newCityExtended:string = '';

	// Properties on the component/class
	cities:City[]  = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];

	updateCity(city:City){
		// console.log(myEvent);
		// console.log(myEvent.target.value);
		this.newCityExtended = city.name;
	}
}