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
	cities = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];

	// add a city
	addCity(txtCity) {
		let newID   = this.cities.length + 1;
		let newCity = new City(newID, txtCity.value, 'Unknown');
		this.cities.push(newCity);
		txtCity.value = '';
	}

	// remove a city
	deleteCity(city) {
		// find position of city in array
		let position = this.cities.indexOf(city);

		// if found, remove from array
		if (position > -1) {
			this.cities.splice(position, 1)
		}
	}
}