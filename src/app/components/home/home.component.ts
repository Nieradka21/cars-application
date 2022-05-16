import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Cars, Page } from "src/app/models/cars.model";
import { CarsService } from "src/app/services/cars.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  apiData: Page;
  apiData2: Array<Cars>;
  pages: number;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  showNavigationArrows = true;
  showNavigationIndicators = true;
  constructor(private carService: CarsService, config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.carService.getCarsByType("classicos", 0, 4).subscribe((res) => {
      this.apiData = res;
      this.apiData2 = this.apiData.content;
      this.pages = this.apiData.totalPages;
      console.log(this.apiData);
    });
  }
}
