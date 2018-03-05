import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  @Input() planet: any;
  constructor() { }

  ngOnInit() {
  }

}
