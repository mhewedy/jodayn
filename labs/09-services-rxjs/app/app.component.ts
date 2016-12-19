import {Component, OnInit} from '@angular/core';
import {City} from './city.model'
import {CityService} from "./city.service";

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html',
	styles     : [`.cityPhoto{max-width:200px}`]
})

export class AppComponent implements OnInit {
	// Properties for component/class
	currentCity: City;
	cities: City[];
	cityPhoto: string;

	constructor(private cityService: CityService) {

	}

	ngOnInit() {
		this.cityService.getCities()
			.subscribe(cityData => {
					this.cities = cityData;	// No more need to use .json() here, as results are already mapped inside the service
				},
				err => console.log('ERROR: ', err),
				() => console.log('Getting cities complete'));
	}

	getCity(city: City) {
		this.currentCity = city;
		this.cityPhoto   = `img/${this.currentCity.name}.jpg`;
	}
}