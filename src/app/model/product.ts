import { Cuisine } from "./cuisine";

export class Product {
    id:number=0;
    code:string ="";
    description:string="";
    category:string="";
    price:number=0;
    quantity:number=0;
    is_active:boolean=false;
    image:string="";
    cuisine:Cuisine={
        id:0,name:"",description:""
    };



}
