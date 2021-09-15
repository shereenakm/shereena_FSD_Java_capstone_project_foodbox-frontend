import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { AuthenticationServiceService } from './service/authentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authenticationService:AuthenticationServiceService ,
    private Router:Router,
    private amin:User
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     this.amin=this.authenticationService.currentUserValue;
      
      if(this.amin.role.match('admin')){
          return true;
      }
      this.Router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
