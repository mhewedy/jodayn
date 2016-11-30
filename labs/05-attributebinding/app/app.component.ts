import {Component} from '@angular/core';
import {City} from './city.model'

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html'
})

export class AppComponent {
	color: string        = 'transparent';
	cities: City[]       = [
		new City(1, 'Groningen', 'Groningen'),
		new City(2, 'Hengelo', 'Overijssel'),
		new City(3, 'Den Haag', 'Zuid-Holland'),
		new City(4, 'Enschede', 'Overijssel'),
	];
	textVisible: boolean = true;


	// Add a city to the array
	addCity(txtCity) {
		console.log(txtCity);
		let newID   = this.cities.length + 1;
		let newCity = new City(newID, txtCity.value, 'Unknown');
		this.cities.push(newCity);
		txtCity.value = '';
	}

	// Toggle attribute: make text visible or invisible
	toggleText() {
		this.textVisible = !this.textVisible;
	}

	// change Color
	changeColor(color) {
		this.color = color;
	}
}