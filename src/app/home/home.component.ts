
import { Component, OnInit,OnDestroy} from '@angular/core';
import { CartLine } from '../cart-line';
import { Cart } from '../model/cart';
import { Cuisine } from '../model/cuisine';
import { Product } from '../model/product';
import { User } from '../model/user';
import { AlertService } from '../service/alert.service';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { CartService } from '../service/cart.service';
import { CartaddService } from '../service/cartadd.service';
import { CartlineService } from '../service/cartline.service';
import { CuisinesService } from '../service/cuisines.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  grandtotal:number=0;
  search:string='';
  productlist:Array<Product>=[];
  cuisinelist:Array<Cuisine>=[]; 
  cartlinelist:CartLine[]=[];
  cart:Cart=new Cart
  x:any;
  currentUser:User=new User
  cartline:CartLine=new CartLine

  constructor(private prdservice:ProductService,
    private authservice:AuthenticationServiceService,
    
    private alertservice:AlertService,
    private cuisineservice:CuisinesService,
    private cartadd:CartaddService,
    private cartlineservice:CartlineService,
    private cartservice:CartService)
     { }
 

  ngOnInit(): void {
    this.authservice.currentUser.subscribe(x => this.currentUser = x);
    this.prdservice.getallavailable().subscribe(result=>{this.productlist=result},
      error=>{this.alertservice.error(error.error.message+"product fetch failure")
      })
      this.cuisineservice.getall().subscribe(result=>{this.cuisinelist=result},
        error=>{this.alertservice.error(error.error.message+"cuisine fetch failure")
        })
        this.cart.user=this.currentUser
        this.cart.total=this.grandtotal
       //this.cartservice.register(this.cart).subscribe(x => this.cart = x);
  }
  csearch(c:Cuisine){
    this.search=c.name;
  }
  countVal:number= 1;
  i=1
  plus(){
    if (this.i!=5){
      this.i++;
      this.countVal=this.i;
    }
  }
  minus(){
    if (this.i!=1){
      this.i--;
      this.countVal=this.i;
  }
  
}
  searchitem(){
    this.productlist.filter
  }
addtocartline(pdt:Product){
this.cartline.product=pdt;
this.cartline.buying_price=pdt.price;
this.cartline.product_count=this.countVal;
this.cartline.total=pdt.price*this.countVal;
//console.log(this.cartline)
this.cartlineservice.register(this.cartline).subscribe(x=>{this.cartadd.addtocart(x)},
  error=>{this.alertservice.error(error.error.message+"cuisine fetch failure")
 })
 console.log(this.cartlinelist)
 // console.log(this.cartline)
//this.cart.cartline.push(this.cartline);
///this.cart.total=this.cart.total+this.cartline.total;
//this.cartservice.update(this.cart.id,this.cart).subscribe(result=>{this.cart=result})
//console.log(this.cart)

}


}


