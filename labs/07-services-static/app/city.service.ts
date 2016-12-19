import {Injectable} from '@angular/core'
import {City} from './city.model'

// @Injectable()
export class CityService{

    private cities: City[] = [
        new City(1, 'Cairo', 'Cairo'),
        new City(2, 'Alex', 'Alex')
    ];

    getCities(): Array<City>{
         return this.cities;
    }

    getCity(id: number): City {
        return this.cities.find(c => c.id == id);
    }
}