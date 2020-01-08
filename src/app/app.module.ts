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

//Components
import { SellerRegistrationComponent } from './Seller/seller-registration/seller-registration.component';
import { SellerHeaderComponent } from './Seller/seller-header/seller-header.component';
import { LoginComponent } from './Seller/login/login.component';
import { TermsOfUseComponent } from './Seller/terms-of-use/terms-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerRegistrationComponent,
    SellerHeaderComponent,
    LoginComponent,
    TermsOfUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material Components
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
