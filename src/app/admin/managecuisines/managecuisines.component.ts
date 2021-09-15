import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Cuisine } from 'src/app/model/cuisine';
import { AlertService } from 'src/app/service/alert.service';
import { CuisinesService } from 'src/app/service/cuisines.service';

@Component({
  selector: 'app-managecuisines',
  templateUrl: './managecuisines.component.html',
  styleUrls: ['./managecuisines.component.css']
})
export class ManagecuisinesComponent implements OnInit {
  cuisinelist:Array<Cuisine>=[]
  search="";
  constructor(private cuisineservice:CuisinesService,
    private alertservice:AlertService) { }

  ngOnInit(): void {
    this.cuisineservice.getall().subscribe(result=>{this.cuisinelist=result},
      error=>{this.alertservice.error(error.error.message+"cuisine fetch failure")
      })
  }
  delete(id:number){
    this.cuisineservice.delete(id).subscribe(data=>{
      this.alertservice.success('cuisine is removed ')},error=>{
        this.alertservice.error('failed to fetch ')});
  }


}
