import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartLine } from '../cart-line';


@Injectable({
  providedIn: 'root'
})
export class CartaddService {
private cartsubject:BehaviorSubject<CartLine[]>=new BehaviorSubject<CartLine[]>([])

private cart:CartLine[] = [];
  constructor() {
    this.cartsubject.subscribe(_ => this.cart = _);
   }

 public addtocart(item:CartLine){
   this.cartsubject.next([...this.cart,item]);
 }
    public getitems():Observable<CartLine[]>{
      return this.cartsubject;
    }
}




