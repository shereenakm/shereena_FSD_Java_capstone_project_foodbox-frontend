import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CartLine } from '../cart-line';
const baseurl = `${environment.apiurl}/cart_line/`;
const headers = { 'content-type':'application/json'} 
@Injectable({
  providedIn: 'root'
})

export class CartlineService {
  constructor(private http:HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getall(){
    
    return this.http.get<CartLine[]>(baseurl,this.httpOptions);
  }

  register(Cartline:CartLine) {
    
   const body=JSON.stringify(Cartline);
   return this.http.post<CartLine>(baseurl, body,this.httpOptions);
}
 getbyid(id:number){
   return this.http.get<CartLine>(`${baseurl}${id}`,this.httpOptions);

 }

 update(id:number,cartline:CartLine){
   const body=JSON.stringify(cartline);
   return this.http.put(`${baseurl}${id}`, body,this.httpOptions);
 }
 delete(id:number){
   return this.http.delete(`${baseurl}${id}`);

 
 }
}