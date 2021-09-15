import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminGuard } from './admin.guard';
import { AddcuisinesComponent } from './admin/addcuisines/addcuisines.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ManagecuisinesComponent } from './admin/managecuisines/managecuisines.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { ManageuserComponent } from './admin/manageuser/manageuser.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent,canActivate:[UserGuard]},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'manageproduct',component:ManageproductComponent,canActivate:[AdminGuard]},
  {path:'addproduct',component:AddproductComponent,canActivate:[AdminGuard]},
  {path:'updateproduct/:id',component:AddproductComponent,canActivate:[AdminGuard]},
  {path:'managecuisines',component:ManagecuisinesComponent,canActivate:[AdminGuard]},
  {path:'addcuisine',component:AddcuisinesComponent,canActivate:[AdminGuard]},
  {path:'updatecuisine/:id',component:AddcuisinesComponent,canActivate:[AdminGuard]},
  {path:'manageuser',component:ManageuserComponent,canActivate:[AdminGuard]},
  {path:'updateuser/:id',component:SignupComponent,canActivate:[UserGuard]},
  {path:'checkout/:id',component:CheckoutComponent,canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
