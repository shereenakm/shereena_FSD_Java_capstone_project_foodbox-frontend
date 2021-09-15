import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

const baseurl = `${environment.apiurl}/product/`;
const headers = { 'content-type': 'application/json'} 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  getall(){
    
    return this.http.get<Product[]>(baseurl,{'headers':headers});
  }
  getallavailable(){
    return this.http.get<Product[]>(`${baseurl}avilable`);
  }

  getbycuisines(cuisine:string){
    return this.http.get<Product[]>(`${baseurl}bycuisines/${cuisine}`);
  }
  register(Product: Product) {
    
   const body=JSON.stringify(Product);
   return this.http.post(baseurl, body,{'headers':headers});
}
 getbyid(id:number){
   return this.http.get<Product>(`${baseurl}${id}`);

 }

 update(id:number,Product:Product){
   const body=JSON.stringify(Product);
   return this.http.put(`${baseurl}${id}`, body,this.httpOptions);
 }
 delete(id:number){
   return this.http.delete(`${baseurl}${id}`);
 }
  updateavilable(id:number,status:boolean){
    return this.http.patch(`${baseurl}isavliable/${id}/${status}`,{'headers':headers});
  }

}
