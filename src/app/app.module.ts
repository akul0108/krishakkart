import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material APIs
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

//Components
import { SellerRegistrationComponent, TermsOfUseDialog} from './Seller/seller-registration/seller-registration.component';
import { SellerHeaderComponent } from './Seller/seller-header/seller-header.component';
import { LoginComponent } from './Seller/login/login.component';
import { SellerFooterComponent } from './Seller/seller-footer/seller-footer.component';
import { SellerBannerComponent, BuyerLoginDialog, BuyerRegDialog } from './Seller/seller-banner/seller-banner.component';
import { SellerProductsComponent } from './Seller/seller-products/seller-products.component';
import { KkTestimonialsComponent } from './Seller/kk-testimonials/kk-testimonials.component';
import { KkPageNotFoundComponent } from './kk-page-not-found/kk-page-not-found.component';
import { SellerAboutComponent } from './Seller/seller-about/seller-about.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { KkRecognizeComponent } from './Seller/kk-recognize/kk-recognize.component';



@NgModule({
  declarations: [
    AppComponent,
    SellerRegistrationComponent,
    SellerHeaderComponent,
    LoginComponent,

    //Dialogs
    TermsOfUseDialog,
    BuyerLoginDialog,
    BuyerRegDialog,

    //Components
    SellerFooterComponent,
    SellerBannerComponent,
    SellerProductsComponent,
    KkTestimonialsComponent,
    KkPageNotFoundComponent,
    SellerAboutComponent,
    AdminLoginComponent,
    ContactUsComponent,
    KkRecognizeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,

    //Material Components
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
  ],

  entryComponents:[
    
    //Dialogs
    TermsOfUseDialog,
    BuyerLoginDialog,
    BuyerRegDialog
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
