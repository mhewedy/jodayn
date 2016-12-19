// city.detail.ts
import { Component } from '@angular/core';

@Component({
	selector: 'city-detail',
	template: `
	<h2>City details</h2>
		<ul class="list-group">
			<li class="list-group-item">Name: [naam of citie]</li>
			<li class="list-group-item">Province: [province]</li>
			<li class="list-group-item">Highlights: [highlights]</li>
		</ul>
	`
})

export class CityDetail{

}