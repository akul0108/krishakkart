import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KkPageNotFoundComponent } from './website/kk-page-not-found/kk-page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { KkHeaderComponent } from './website/kk-header/kk-header.component';
import { DashboardComponent } from './android/Seller/dashboard/dashboard.component';
import { ProfileUpdateComponent } from './android/Seller/profile-update/profile-update.component';


const routes: Routes = [
  
  //Other
  { path:'', component: KkHeaderComponent },
  { path:'login', component: LoginComponent },

  //Seller / Service Provider
  // {path:'', redirectTo:'', pathMatch:'full'},
  
  { path:'Reg', component:RegistrationComponent },
  
  
  //Buyer / Service Consumer
  { path:'sellerDashboard', component: DashboardComponent },
  { path:'sellerUpdateProfile', component: ProfileUpdateComponent },

  //Admin
  

  // 404
  {path:'**', component:KkPageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
