import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Address } from '../model/address';

const baseurl = `${environment.apiurl}/cart_line/`;
const headers = { 'content-type':'application/json'}
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getall(){
    
    return this.http.get<Address[]>(baseurl,this.httpOptions);
  }

  register(address:Address) {
    
   const body=JSON.stringify(address);
   return this.http.post(baseurl, body,this.httpOptions);
}
 getbyid(id:number){
   return this.http.get<Address>(`${baseurl}${id}`,this.httpOptions);

 }

 update(id:number,address:Address){
   const body=JSON.stringify(Address);
   return this.http.put(`${baseurl}${id}`, body,this.httpOptions);
 }
 delete(id:number){
   return this.http.delete(`${baseurl}${id}`);

 
 }
}
