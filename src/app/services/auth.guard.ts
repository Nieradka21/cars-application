import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";






@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

        if (sessionStorage['token'] != null) {
            return true
        } else {
            this.router.navigate(['/login']);
        } return false;


    }
}