import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './service/authentication-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private authenticationService:AuthenticationServiceService ,
    private Router:Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentuser =this.authenticationService.currentUserValue;
    if(currentuser){
      return true;
    }
    this.Router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}
