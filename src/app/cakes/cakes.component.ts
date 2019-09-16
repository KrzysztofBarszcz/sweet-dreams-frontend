import { Component, OnInit } from '@angular/core';
import { Cake } from '../model/cake';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cakes: Cake[];
  selectedCake: Cake;

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.getCakes()
  }
  onSelect(cake: Cake) {
    this.selectedCake = cake;
  }

  getCakes() {
    this.cakeService.getCakes()
      .subscribe(cakes => this.cakes = cakes)
  }
}
