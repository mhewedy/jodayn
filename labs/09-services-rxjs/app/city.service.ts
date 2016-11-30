import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {City} from "./city.model";

// import specific rxjs-operator
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {

	constructor(private http: Http) {

	}

	// return all cities, mapped to json
	getCities(): Observable<City[]> {
		return this.http.get('app/cities.json')
			.map(cities => cities.json());	// transform stream inside service
	}
}
