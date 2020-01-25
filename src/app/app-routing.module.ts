import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KkPageNotFoundComponent } from './kk-page-not-found/kk-page-not-found.component';
import { SellerRegistrationComponent } from './Seller/seller-registration/seller-registration.component';
import { SellerProductsComponent } from './Seller/seller-products/seller-products.component';


const routes: Routes = [
  
  //Seller / Service Provider
  {path:'sellerReg', component:SellerRegistrationComponent},
  {path:'sellerHome', component: SellerProductsComponent},
  //Buyer / Service Consumer

  //Admin

  //Other
  {path:'**', component:KkPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
