import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KkPageNotFoundComponent } from './kk-page-not-found/kk-page-not-found.component';
import { SellerRegistrationComponent } from './Seller/seller-registration/seller-registration.component';
import { LoginComponent } from './login/login.component';
import { SellerHeaderComponent } from './Seller/seller-header/seller-header.component';


const routes: Routes = [
  
  //Other
  {path:'', component: SellerHeaderComponent},
  {path:'login', component: LoginComponent},

  //Seller / Service Provider
  // {path:'', redirectTo:'', pathMatch:'full'},
  
  {path:'sellerReg', component:SellerRegistrationComponent},
  
  
  //Buyer / Service Consumer

  //Admin
  

  // 404
  {path:'**', component:KkPageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
