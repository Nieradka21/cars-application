import { CarsService } from "src/app/services/cars.service";
import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  images: string[];
  constructor(private carsService: CarsService) {}
   ngOnInit(): void {
    this.carsService
      .getCarsByType("classicos", 0, 10)
      .subscribe(
        (cars) => (this.images = cars.content.map((car) => car.url_foto))
      );
  }
}
