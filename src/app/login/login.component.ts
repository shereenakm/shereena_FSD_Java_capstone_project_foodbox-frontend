import { error, stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AlertService } from '../service/alert.service';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup =this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
});;
  loading = false;
  submitted = false;
  constructor(
   
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    private alertService: AlertService
  ){
    if (this.authenticationService.isuserloggedin){
      console.log("its not true")
      this.router.navigate(['/']);
    }

    
      
      
  }

  ngOnInit(): void {
      
    }

  
  get f() { return this.loginForm.controls; }
onSubmit(){
  this.submitted = true;
  this.alertService.clear();
  if (this.loginForm.invalid) {
    return;
}
console.log(this.f.email.value)
this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .subscribe(
                data => {
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error.error.message);
                    this.loading = false;
                    console.log(error)
                });
                
                
}
}
