import { Component, OnInit } from '@angular/core';
import { CAKES } from '../model/mock-cakes'
import { Cake } from '../model/cake';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cakes = CAKES;
  selectedCake: Cake;

  constructor() { }

  ngOnInit() {

  }
  onSelect(cake: Cake) {
    this.selectedCake = cake;
  }
}
