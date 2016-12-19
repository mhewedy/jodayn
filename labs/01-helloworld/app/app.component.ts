import {Component, OnInit} from '@angular/core';

@Component({
    // 1. add component description/annotations here
    selector: 'hello-world',
    templateUrl: 'app/app.html' 
})

export class AppComponent implements OnInit {
    
    name: string
    cities: string[]

    constructor() {
    }

    ngOnInit() {
        this.name = 'abdullah'
        this.cities = ['Cairo', 'Riyadh']
        console.log('Hello World - Angular 2 is running')
    }
}
