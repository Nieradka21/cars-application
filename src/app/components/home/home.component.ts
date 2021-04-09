import { Component, OnInit   } from '@angular/core';
import { Cars, Page, Pageable } from '../../models/cars.model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiData: Page;
  apiData2: Array<Cars>;
  pages: number;

  constructor(private carService: CarsService) { }

  ngOnInit() {

  }

 
 


}
