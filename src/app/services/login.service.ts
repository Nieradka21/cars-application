import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CARS_API } from 'src/app/Api';
import { ErrorHandler } from 'src/app/app.error-handler';
import { catchError } from 'rxjs/operators';
import { Usuarios } from '../models/login.model';




@Injectable()
export class LoginService {

  user: Usuarios = {} as Usuarios;
  options = {};
  messageEvent = new EventEmitter();
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {

    let user: Usuarios = JSON.parse(sessionStorage.getItem('token'));
    if (user != null) {
      this.user = user;
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': this.user.token


      });
      this.options = {
        headers: httpHeaders
      };
    }

  }

  login(user: Usuarios): Observable<Usuarios> {
    return this.http.post<any>(`${CARS_API}/auth`, user)
      .pipe(
        catchError(ErrorHandler.handlerError)
      );

  }
  setUser(user: Usuarios) {
    this.user = user;
    sessionStorage.setItem('token', JSON.stringify(user));
    this.messageEvent.emit(user);

    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',

        'Authorization': this.user.token
      }
    );
    this.options = {
      headers: this.httpHeaders
    };
  }

  enviarEmail(user: Usuarios): Observable<any> {
    return this.http.post(`${CARS_API}/api/email`, user, { responseType: 'text' })
  }

  resetPassword(user: Usuarios): Observable<any> {
    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',

        'Authorization': "Bearer " + user.token
      }
    );
    this.options = {
      headers: this.httpHeaders
    };
    return this.http.put(`${CARS_API}/api/reset`, user,this.options)

  }

}
