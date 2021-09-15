import { Component, OnInit } from '@angular/core';
import { delay, window } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { AlertService } from 'src/app/service/alert.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
  search="";
  Productlist:Array<Product>=[]
  constructor(private productservice:ProductService,
    private alertservice:AlertService) { }

  ngOnInit(): void {
    this.productservice.getall().subscribe(result=>{this.Productlist=result},
      error=>{this.alertservice.error(error.error.message+"product fetch failure")
      })
  }
  changed(p:Product){
    this.productservice.updateavilable(p.id,p.is_active).subscribe(data=>{
    this.alertservice.success('product active status changed')},error=>{
      this.alertservice.error('failed to update')});
      
    }
    delete(id:number){
      this.productservice.delete(id).subscribe(data=>{
        this.alertservice.success('product is removed ')},error=>{
          this.alertservice.error('failed to fetch ')});
    }

  }

