import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { PlanetComponent } from './planet/planet.component';

import "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	api_url = "https://swapi.co/api/planets/";

	planet = {
		"name": "",
		"rotation_period": "",
		"orbital_period": "",
		"diameter": "",
		"climate": "",
		"gravity": "",
		"terrain": "",
		"surface_water": "",
		"population": "",
		"residents": [
		],
		"films": [
			
		],
		"created": "",
		"edited": "",
		"url": ""		
	}

	constructor(private http: Http) {


	}

	public getPlanet(  ) {
		this.http.get(this.api_url + this.getRandomInt() )
			.subscribe((response: Response) => {
				console.log(response.json());
				this.planet = response.json();
			})	
	}

	private handleError(error: Response) {
		return Observable.throw(error.statusText);
	}

	public getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	

	//retorna inteiro entre 1 e 61
	public getRandomInt() {
		return Math.floor(Math.random() * (62 - 1 + 1)) + 1;
	}


	ngOnInit(): void {
		
		this.getPlanet( );
	}
		
		
}

