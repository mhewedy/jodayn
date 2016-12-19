import {Component, OnInit} from '@angular/core';
import {City} from "./shared/city.model";

@Component({
	// 1. add component description/annotations here
	selector   : 'hello-world',
	templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
	// 2. properties on the class
	name: string;
	city: string;
	cities: string[];
	citiesUsingModel: City[];

	// 3. properties initialized in constructor
	constructor() {
		this.name   = 'Peter Kassenaar';
		this.cities = ['Groningen', 'Hengelo', 'Den Haag', 'Enschede'];
	}

	// 4. properties initialized in ngOnInit (recommended)
	ngOnInit() {
		this.city             = 'Groningen';
		this.citiesUsingModel = [
			new City(1, 'Groningen', 'Groningen'),
			new City(2, 'Hengelo', 'Overijssel'),
			new City(3, 'Den Haag', 'Zuid-Holland'),
			new City(4, 'Enschede', 'Overijssel'),
			{id: 5, name: 'Cairo', province: 'Cairo'}
		]
	}

	logValue(tmpValue){
		console.log(tmpValue);
	}
}
