import { Component, OnInit } from '@angular/core';
import { Cars } from './model/cars.model';
import { CarsService } from './service/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagens: Cars;
  car: Cars = {} as Cars
  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(
      res => {
    this.imagens = res ;         
        console.log(this.imagens)
        
      }
    )
  }



  images2 = [1000, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2000/500`);


}
