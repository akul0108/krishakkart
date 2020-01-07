import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerRegistrationComponent } from './Seller/seller-registration/seller-registration.component';
import { SellerHeaderComponent } from './Seller/seller-header/seller-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TernsOfUseComponent } from './terns-of-use/terns-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerRegistrationComponent,
    SellerHeaderComponent,
    TernsOfUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
