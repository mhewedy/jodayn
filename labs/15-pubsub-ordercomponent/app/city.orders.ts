// city.orders.ts - a kind of 'shopping cart',
// register what orders are booked.
import { Component } from '@angular/core';
import {OrderService} from "./services/order.service";
import {City} from "./model/city.model";
import {CityOrderModel} from "./model/cityOrders.model";

@Component({
	selector: 'city-orders',
	template: `
	<div *ngIf="currentOrders.length > 0">
		<h2>Your orders:</h2>
		<table class="table table-striped">
		<tr>
			<th>Trip to: </th>
			<th>Number</th>
			<th>Price</th>
		</tr>
		<tr *ngFor="let order of currentOrders">
				<td>{{ order.city.name}}</td>
				<td>{{ order.numBookings}}</td>
				<td>{{ order.city.price | currency:'EUR':true:'1.2'}}</td>
		</tr>
		<tr>
			<td colspan="2">Totaal</td>
			<td><strong>{{totalPrice | currency:'EUR':true:'1.2'}}</strong></td>
		</tr>
		</table>
		<button class="btn btn-default" (click)="cancel()">Cancel</button>
		<button class="btn btn-success" (click)="confirm()">Confirm</button>
	</div>
	`
})

export class CityOrders {
	currentOrders:CityOrderModel[] = [];
	totalPrice:number              = 0;

	constructor(private orderService:OrderService) {

	}

	ngOnInit() {
		this.orderService.Stream
			.subscribe(
				(city:City) => this.processOrder(city),
				(err)=>console.log('Error on processing City-order'),
				()=>console.log('Complete...')
			)
	}

	processOrder(city:City) {
		console.log('Recieved order for city: ', city);
		this.currentOrders.push(new CityOrderModel(city));
		this.calculateTotal();
	}

	calculateTotal() {
		this.totalPrice = 0; // reset
		this.currentOrders.forEach((order)=> {
			this.totalPrice += (order.numBookings * order.city.price);
		})
	}

	cancel(){
		this.currentOrders = [];
	}

	confirm(){
		alert('TODO: save order to database...')
	}
}
