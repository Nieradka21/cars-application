import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Cars } from '../model/cars.model';
import { CARS_API } from 'src/app/Api';

@Injectable()
export class CarsService {

  car: Cars = {} as Cars;
  options = {};
  messageEvent = new EventEmitter();
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) { 

    let cars: Cars = JSON.parse(localStorage.getItem('token'));
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

  getCars(): Observable<Cars> {
    return this.http
      .get<Cars>(`${CARS_API}/api`, this.options)
      .map(res => res)
    //&sort=name&name.dir=asc
  }

}
