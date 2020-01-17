import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material APIs
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

//Components
import { SellerRegistrationComponent, TermsOfUseDialog} from './Seller/seller-registration/seller-registration.component';
import { SellerHeaderComponent } from './Seller/seller-header/seller-header.component';
import { LoginComponent } from './Seller/login/login.component';
import { HomeHeaderComponent } from './Seller/headers/home-header/home-header.component';
import { SellerFooterComponent } from './Seller/seller-footer/seller-footer.component';
import { SellerBannerComponent } from './Seller/seller-banner/seller-banner.component';
import { SellerProductsComponent } from './Seller/seller-products/seller-products.component';
import { KkTestimonialsComponent } from './Seller/kk-testimonials/kk-testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    SellerRegistrationComponent,
    SellerHeaderComponent,
    LoginComponent,

    //Dialogs
    TermsOfUseDialog,

    HomeHeaderComponent,

    SellerFooterComponent,

    SellerBannerComponent,

    SellerProductsComponent,

    KkTestimonialsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material Components
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule
  ],

  entryComponents:[
    TermsOfUseDialog
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
