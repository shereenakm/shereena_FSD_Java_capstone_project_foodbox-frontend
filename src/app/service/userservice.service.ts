import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
const baseurl = `${environment.apiurl}/user/`;
const headers = { 'content-type': 'application/json'} 
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  constructor(private http:HttpClient) {
   }
   getall(){
     
     return this.http.get<User[]>(baseurl,{'headers':headers});
   }

   register(user: User) {
     
    const body=JSON.stringify(user);
    return this.http.post(baseurl, body,{'headers':headers});
}
  getbyid(id:number){
    return this.http.get<User>(`${baseurl}${id}`);

  }

  update(id:number,user:User){
    const body=JSON.stringify(user);
    return this.http.put(`${baseurl}${id}`, body,{'headers':headers});
  }
  delete(id:number){
    return this.http.delete(`${baseurl}${id}`,{'headers':headers});
  }
}
