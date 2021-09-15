import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/service/alert.service';
import { CuisinesService } from 'src/app/service/cuisines.service';

@Component({
  selector: 'app-addcuisines',
  templateUrl: './addcuisines.component.html',
  styleUrls: ['./addcuisines.component.css']
})
export class AddcuisinesComponent implements OnInit {
  cuisinesFrom:FormGroup=new FormGroup({})
  loading =false;
  submitted = false;
  isAddmode!:boolean;
  id!:number;
  constructor(
    private formBuilder:FormBuilder,
private router:Router,
private cuisineservice:CuisinesService,
private alertService:AlertService,
private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.cuisinesFrom=this.formBuilder.group({
      id:[''],
      name:['',Validators.required],
      description:['',Validators.required]

    })
    this.id=this.route.snapshot.params['id'];
      this.isAddmode=!this.id;
      if(!this.isAddmode){
        this.cuisineservice.getbyid(this.id)
        .pipe(first())
          .subscribe(x => this.cuisinesFrom.patchValue(x));
      }
  }
  get f(){return this.cuisinesFrom.controls}

  onSubmit(){
    this.submitted = true;
  
        // reset alerts on submit
        this.alertService.clear();
  
        // stop here if form is invalid
        if (this.cuisinesFrom.invalid) {
            return;
        }
        this.loading = true;
        if (this.isAddmode) {
          this.createcuisine();
      } else {
          this.updatecuisine();
      }
  }
  createcuisine(){
    this.cuisineservice.register(this.cuisinesFrom.value)
    .pipe(first())
  .subscribe(
      data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/managecuisine']);
      },
      error => {
          this.alertService.error(error.error.message);
          this.loading = false;
      });


  }
  updatecuisine(){
    this.cuisineservice.update(this.id,this.cuisinesFrom.value)
    .pipe(first())
  .subscribe(
      data => {
          this.alertService.success('update successful', true);
          this.router.navigate(['/managecuisine']);
      },
      error => {
          this.alertService.error(error.error.message);
          this.loading = false;
      });


  }
}
