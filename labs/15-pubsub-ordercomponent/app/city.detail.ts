// city.detail.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {City} from'./model/city.model';
import {OrderService} from "./services/order.service";

@Component({
	selector : 'city-detail',
	template : `
	<h2>City details
		<button (click)="rate(1)" class="btn btn-sm btn-success">+1</button>
		<button (click)="rate(-1)" class="btn btn-sm btn-danger">-1</button>
	</h2>
		<ul class="list-group">
			<li class="list-group-item">Name: {{city.name}}</li>
			<li class="list-group-item">Province: {{city.province}}</li>
			<li class="list-group-item">Highlights: {{city.highlights}}</li>
		</ul>
		<img src="../img/{{ city.name}}.jpg" alt="Foto van {{ city.name }}" class="img-responsive"/>
		<h2>City trip price: 
		{{ city.price | currency:'EUR':true:'1.2' }}
		<button class="btn btn-lg btn-info" 
			(click)="order(city)">Boek nu!</button>
		</h2>
	`
})

export class CityDetail {
	@Input() city:City;
	@Output() rating:EventEmitter<number> = new EventEmitter<number>();

	constructor(private orderService:OrderService) {

	}

	// send rating for current city.
	rate(num) {
		console.log(`Rating voor : ${this.city.name}, ${num}`);
		this.rating.emit(num);
	}

	// Place Order Emit event for this city.
	// Catch event in city.orders.ts
	order(city) {
		console.log(`Booked a city trip for : ${this.city.name}, price in EUR: ${this.city.price}`);
		this.orderService.Stream.next(city);
	}
}