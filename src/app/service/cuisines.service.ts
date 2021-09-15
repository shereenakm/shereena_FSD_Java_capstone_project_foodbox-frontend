import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cuisine } from '../model/cuisine';

const baseurl = `${environment.apiurl}/cuisines/`;
const headers = { 'content-type':'application/json'} 

@Injectable({
  providedIn: 'root'
})
export class CuisinesService {
  constructor(private http:HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getall(){
    
    return this.http.get<Cuisine[]>(baseurl,this.httpOptions);
  }

  register(Cuisine: Cuisine) {
    
   const body=JSON.stringify(Cuisine);
   return this.http.post(baseurl, body,this.httpOptions);
}
 getbyid(id:number){
   return this.http.get<Cuisine>(`${baseurl}${id}`,this.httpOptions);

 }

 update(id:number,Cuisine:Cuisine){
   const body=JSON.stringify(Cuisine);
   return this.http.put(`${baseurl}${id}`, body,this.httpOptions);
 }
 delete(id:number){
   return this.http.delete(`${baseurl}${id}`);
 }
 
}
