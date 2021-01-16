import { Component, OnInit } from '@angular/core';
import { Cars, Page, Pageable } from './model/cars.model';
import { CarsService } from './service/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: Page;
  pageNumber: Pageable;
  imagens: Array<Cars> ;
  car: Cars = {} as Cars
  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.carsService.getCarsByType("classicos",0,4).subscribe(
      res => {
        this.page = res;
        this.imagens = this.page.content;
      }
    )

  }



  images2 = [1000, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2000/500`);


}
