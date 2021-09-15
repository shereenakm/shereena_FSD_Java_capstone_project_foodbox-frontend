import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartLine } from '../cart-line';
import { Cart } from '../model/cart';
import { User } from '../model/user';
import { AlertService } from '../service/alert.service';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { CartService } from '../service/cart.service';
import { CartaddService } from '../service/cartadd.service';
import { CartlineService } from '../service/cartline.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartlineitems:CartLine[]=[];
  cart:Cart=new Cart
  currentUser:User=new User
  grandtotal:number=0;
  id:number=0

  constructor(private cartlnsrv:CartlineService,
    private cartservice:CartService,
    private userserv:UserserviceService,
    private alertservice:AlertService,
    private authservice:AuthenticationServiceService,
    private cartadd:CartaddService,
    private router:Router) { }

  ngOnInit(): void {
   this.cartadd.getitems().subscribe(data=>{this.cartlineitems=data})
   console.log(this.cartlineitems)
   this.authservice.currentUser.subscribe(x => this.currentUser = x);
   for(let i =0;i< this.cartlineitems.length;i++){
    this.grandtotal=this.cartlineitems[i].total+this.grandtotal
}

  }
  
  deletecartline(i:number,id:number){
        this.cartlineitems.splice(i,1)
        this.cartservice.delete(id).subscribe(x=>{;this.alertservice.success("product deleted ")},
        error=>{this.alertservice.error(error.error.message+"fail to fetch server")});
  }
  checkout(){
    this.cart.user=this.currentUser
    this.cart.cartline=this.cartlineitems
    for(let i =0;i< this.cartlineitems.length;i++){
        this.grandtotal=this.cartlineitems[i].total+this.grandtotal
    }
    this.cart.total=this.grandtotal
    console.log(this.cart)
    this.cartservice.register(this.cart).subscribe(x=>{this.cart=x;this.alertservice.success("products added to cart ",false)},
    error=>{this.alertservice.error(error.error.message+"fail to fetch server")});
    this.id=this.cart.id
    this.router.navigate(['/checkout/'+this.id])
  }
}













































