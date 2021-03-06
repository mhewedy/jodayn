import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {City} from "../model/city.model";

@Injectable()
export class CityService {
	private cities: City[];

	constructor(private _http: Http) {

	}

	setCities(cities) {
		this.cities = cities;
	}

	// return all cities
	getCities() {
		return this._http.get('app/cities.json')
	}

	numCities() {
		return this.cities.length;
	}
}