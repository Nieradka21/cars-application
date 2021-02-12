import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { CARS_API } from 'src/app/Api';
import { Cars, Page } from '../models/cars.model';

@Injectable()
export class CarsService {

  car: Cars = {} as Cars;
  options = {};
  messageEvent = new EventEmitter();
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) { 

    let cars: Cars = JSON.parse(sessionStorage.getItem('token'));
    if (cars != null) {
      this.car = cars;
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': this.car.token


      });
      this.options = {
        headers: httpHeaders
      };
    }
  }

  getCarsByType(type, page, size): Observable<Page> {
    return this.http
      .get<any>(`${CARS_API}/api/type/${type}/?page=${page}&size=${size}`, this.options)
      .map(res => res)
    //&sort=name&name.dir=asc
  }

}
