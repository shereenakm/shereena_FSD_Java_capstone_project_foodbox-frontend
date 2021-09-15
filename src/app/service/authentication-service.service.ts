import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { User } from '../model/user';
import{map} from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { JsonPipe } from '@angular/common';
import { Userlogin } from '../model/userlogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  userlogin:Userlogin = new Userlogin();
  isuserloggedin:boolean =false;
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value)
    return this.currentUserSubject.value;
    
}

login(uemail:string,Pass:string) {
      this.userlogin.email=uemail;
      this.userlogin.password=Pass
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(this.userlogin);
  console.log(this.userlogin)
  return this.http.post<any>(environment.apiurl+`/user/login`,body ,{'headers':headers} )
      .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          //console.log(user);
          this.isuserloggedin=true
          return user;
         
      }));
    
}
logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
  console.log(localStorage.getItem('currentUser'))
 this.currentUserSubject.next(new User);
 this.isuserloggedin=false
}




}
