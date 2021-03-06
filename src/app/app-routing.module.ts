import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KkPageNotFoundComponent } from './website/kk-page-not-found/kk-page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { KkHeaderComponent } from './website/kk-header/kk-header.component';
import { DashboardComponent } from './android/Seller/dashboard/dashboard.component';
import { CustDashboardComponent } from './android/Customer/cust-dashboard/cust-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { LoginPageGuardGuard } from './Guards/login-page-guard.guard';
import { CustProfileComponent } from './android/Customer/cust-profile/cust-profile.component';
import { CustAccountComponent } from './android/Customer/cust-account/cust-account.component';
import { CustOrdersComponent } from './android/Customer/cust-orders/cust-orders.component';
import { CustPaymentsComponent } from './android/Customer/cust-payments/cust-payments.component';
import { CustFeedbackComponent } from './android/Customer/cust-feedback/cust-feedback.component';
import { ContactComponent } from './android/Seller/contact/contact.component';
import { CustFaqsComponent } from './android/Customer/cust-faqs/cust-faqs.component';
import { NeedProfileComponent } from './android/Seller/need-profile/need-profile.component';

const routes: Routes = [
  
  //Other
  { path:'', component: KkHeaderComponent },
  { path:'login', component: LoginComponent, canActivate: [LoginPageGuardGuard] },
  // {path:'', redirectTo:'', pathMatch:'full'},
  { path:'Reg', component: RegistrationComponent },
  { path:'forgetPwd', component: ForgotPasswordComponent },
  
  //Buyer / Service Consumer
  { path:'custDashboard', component: CustDashboardComponent, 
    canActivate:[AuthGuardGuard], 
    data: {
      phone: 'phone',
      google: 'google.com', 
      facebook: 'facebook.com'
    }, children: [
      { path: 'profile', component: CustProfileComponent, children: [
        { path: 'account', component: CustAccountComponent },
        { path: 'order', component: CustOrdersComponent },
        { path: 'payment', component: CustPaymentsComponent },
        { path: 'feedback', component: CustFeedbackComponent },
        { path: 'contact', component: ContactComponent},
        { path: 'faqs', component: CustFaqsComponent},
        { path: '', redirectTo: '/custDashboard/profile/account', pathMatch: 'full' },
      ]},
    ]},

  //Seller / Service Provider
  { path:'sellerDashboard', component: DashboardComponent, 
    canActivate:[AuthGuardGuard], 
    data: { 
      password: 'password'
    }
  },
  { path:'sellerUpdateProfile', component: NeedProfileComponent,
    canActivate:[AuthGuardGuard],
    data: { 
      password: 'password'
    }
  },
  
  //Admin
  

  // 404
  {path:'**', component:KkPageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }