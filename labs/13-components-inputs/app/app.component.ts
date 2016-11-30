// app.component.ts
import {Component, OnInit} from '@angular/core';
import {City} from './city.model'
import {CityService} from "./city.service";

@Component({
	moduleId   : module.id,
	selector   : 'city-app',
	templateUrl: 'app.html',
})

// Class
export class AppComponent implements  OnInit{
	// Properties
	public cities: City[];
	public currentCity: City;

	constructor(private cityService: CityService) {

	}

	ngOnInit() {
		this.getCities();
	}

	getCity(city) {
		this.currentCity = city;
	}

	clearCity() {
		this.currentCity = null;
	}

	//***********************
	// implementation
	//***********************
	getCities() {
		if (!this.cities) {
			this.cityService.getCities()
				.subscribe(cityData => {
						this.cities = cityData.json();				// 1. success handler
					},
					err => console.log(err),						// 2. error handler
					()=> console.log('Getting cities complete...')	// 3. complete handler
				)
		}
	}
}