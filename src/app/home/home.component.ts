import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Cars, Page, Pageable } from './model/cars.model';
import { CarsService } from './service/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page;
  pageNumber: Pageable;
  imagens: Array<Cars>;
  car: Cars = {} as Cars;

  constructor(
    private carsService: CarsService,

  ) { }


  ngOnInit() {
    this.carsService.getCarsByType("classicos", 1, 4).subscribe(
      res => {
        this.page = res;
        this.imagens = this.page.content;
      }
    )
  }

  changePage(event) {


  }

  images = [1000, 1011, 984].map((n) => this.carsService.getCarsByType("classicos", n, 4));






}
