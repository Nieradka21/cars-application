import { Injectable,EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuarios } from '../model/login.model';
import { Observable } from 'rxjs';
import { CARS_API } from 'src/app/Api';
import { ErrorHandler } from 'src/app/app.error-handler';
import { catchError } from 'rxjs/operators';



@Injectable()
export class LoginService {

  user: Usuarios = {} as Usuarios;
  options = {};
  messageEvent = new EventEmitter();
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {

    let user: Usuarios = JSON.parse(localStorage.getItem('token'));
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
    localStorage.setItem('token', JSON.stringify(user));
    this.messageEvent.emit(user);

    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',

        'Authorization':this.user.token
      }
    );
    this.options = {
      headers: this.httpHeaders
    };
  }


}
