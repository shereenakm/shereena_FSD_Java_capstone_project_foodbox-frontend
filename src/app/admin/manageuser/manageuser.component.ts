import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/service/alert.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
userlist:Array<User>=[]
selected ="";
search="";
  constructor(private userservice:UserserviceService,
    private alertservice:AlertService,
    private router:Router) { }
  
  ngOnInit(): void {
    this.userservice.getall().subscribe(result=>{this.userlist=result},
      error=>{this.alertservice.error(error.error.message+"user fetch failure")
      })
  }
  changerole(id:number,p:User) {
    this.alertservice.clear
    p.role=this.selected
  this.userservice.update(id,p).subscribe(result=>{this.alertservice.success('user role updated')},
      error=>{this.alertservice.error(error.error.message+"user fetch failure")
      })
 
  }
 

  delete(id:number){
    this.userservice.delete(id).subscribe(result=>{this.alertservice.success('user deleted')},
      error=>{this.alertservice.error(error.error.message+"user fetch failure")})
  }
}
