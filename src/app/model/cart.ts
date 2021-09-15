
import { CartLine } from "../cart-line";
import { User } from "./user";

export class Cart {
    id:number=0;
    user:User = new User();
    total:number =0;
    cartline:Array<CartLine> =[];
    
}
