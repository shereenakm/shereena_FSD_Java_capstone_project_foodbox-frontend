import { count } from "rxjs/operators";
import { Product } from "./model/product";

export class CartLine {
    id: number = 0;
    total: number = 0;
    product: Product = {
        id: 0,
        code: "",
        description: "",
        category: "",
        price: 0,
        quantity: 0,
        is_active: false,
        image: "",
        cuisine: {
            id: 0, name: "", description: ""
        }
    }
    buying_price: number = 0
    product_count: number = 0
}
