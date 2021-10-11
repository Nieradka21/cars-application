import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import KeenSlider from "keen-slider";
import { Cars, Page, Pageable } from "../../models/cars.model";
import { CarsService } from "../../services/cars.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [
    "./home.component.scss",
    "../../../../node_modules/keen-slider/keen-slider.min.css",
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;

  slider: any = null;

  data = [
    {
      img: "https://picsum.photos/500/200",
      title: "Slide 1",
    },
    {
      img: "https://picsum.photos/500/201",
      title: "Slide 2",
    },
    {
      img: "https://picsum.photos/500/202",
      title: "Slide 3",
    },
  ];

  ngOnInit(): void {}
  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit(): void {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      spacing: 10,
      slidesPerView: 1,
      centered: true,
      loop: true,
      mode: "snap",
      breakpoints: {
        "(min-width: 768px)": {
          slidesPerView: 2,
          mode: "free-snap",
        },
        "(min-width: 1200px)": {
          slidesPerView: 3,
          mode: "free-snap",
        },
      },
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line: curly
    if (this.slider) this.slider.destroy();
  }
}
