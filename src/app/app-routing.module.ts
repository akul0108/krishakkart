import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KkPageNotFoundComponent } from './kk-page-not-found/kk-page-not-found.component';
import { SellerRegistrationComponent } from './Seller/seller-registration/seller-registration.component';
import { SellerProductsComponent } from './Seller/seller-products/seller-products.component';
import { LoginComponent } from './Seller/login/login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  
  //Seller / Service Provider
  {path:'', redirectTo:'/HomePage', pathMatch:'full'},
  {path:'HomePage', component: SellerProductsComponent},
  {path:'sellerReg', component:SellerRegistrationComponent},
  {path:'sellerLogin', component: LoginComponent},
  {path: 'contactus', component: ContactUsComponent},
  
  //Buyer / Service Consumer

  //Admin
  {path:'adminLogin', component:AdminLoginComponent},
  
  //Other
  {path:'**', component:KkPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
