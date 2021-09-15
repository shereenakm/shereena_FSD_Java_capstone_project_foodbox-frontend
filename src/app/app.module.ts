import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ManagecuisinesComponent } from './admin/managecuisines/managecuisines.component';
import { ManageuserComponent } from './admin/manageuser/manageuser.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { AddcuisinesComponent } from './admin/addcuisines/addcuisines.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { Address } from './model/address';
import { Cart } from './model/cart';
import { Cuisine } from './model/cuisine';
import { Product } from './model/product';
import { User } from './model/user';
import { CartLine } from './cart-line';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartaddService } from './service/cartadd.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ManageproductComponent,
    AddproductComponent,
    ManagecuisinesComponent,
    ManageuserComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    CartComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    AddcuisinesComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng2SearchPipeModule,
    MatSlideToggleModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [Address,Cart,Cuisine,Product,User,CartaddService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 

}
