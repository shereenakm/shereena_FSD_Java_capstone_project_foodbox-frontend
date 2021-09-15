import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cart } from '../model/cart';
import { Observable } from 'rxjs';
const baseurl = `${environment.apiurl}/cart/`;
const headers = { 'content-type':'application/json'} 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getall(){
    
    return this.http.get<Cart[]>(baseurl,this.httpOptions);
  }

  register(cart:Cart):Observable<Cart> {
    
   const body=JSON.stringify(cart);
   return this.http.post<Cart>(baseurl, body,this.httpOptions);
}
 getbyid(id:number){
   return this.http.get<Cart>(`${baseurl}${id}`,this.httpOptions);

 }

 update(id:number,cart:Cart){
   const body=JSON.stringify(cart);
   return this.http.put<Cart>(`${baseurl}${id}`, body,this.httpOptions);
 }
 delete(id:number){
   return this.http.delete(`${baseurl}${id}`);

 
 }
}
