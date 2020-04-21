import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CompareValidatorDirective } from './services/compare-validator.directive';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Services
import { AuthService } from './services/auth.service';

//Material APIs
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';

//Components
import { RegistrationComponent, TermsOfUseDialog} from './registration/registration.component';
import { KkHeaderComponent } from './website/kk-header/kk-header.component';
import { LoginComponent } from './login/login.component';
import { KkFooterComponent } from './website/kk-footer/kk-footer.component';
import { KkBannerComponent, /*BuyerLoginDialog, BuyerRegDialog */ } from './website/kk-banner/kk-banner.component';
import { KkProductsComponent } from './website/kk-products/kk-products.component';
import { KkTestimonialsComponent } from './website/kk-testimonials/kk-testimonials.component';
import { KkPageNotFoundComponent } from './website/kk-page-not-found/kk-page-not-found.component';
import { KkAboutComponent } from './website/kk-about/kk-about.component';
import { KkContactUsComponent } from './website/kk-contact-us/kk-contact-us.component';
import { KkRecognizeComponent } from './website/kk-recognize/kk-recognize.component';
import { KkServicesComponent } from './website/kk-services/kk-services.component';
import { KkNetworkComponent } from './website/kk-network/kk-network.component';
import { DashboardComponent } from './android/Seller/dashboard/dashboard.component';
import { HomeComponent } from './android/Seller/home/home.component';
import { ProfileUpdateComponent, BottomSheet } from './android/Seller/profile-update/profile-update.component';
import { ContactComponent } from './android/Seller/contact/contact.component';
import { ProdServiceComponent } from './android/Seller/prod-service/prod-service.component';
import { SellComponent } from './android/Seller/sell/sell.component';
import { PurchaseComponent } from './android/Seller/purchase/purchase.component';
import { BookingReceivedComponent } from './android/Seller/booking-received/booking-received.component';
import { BookingClosureComponent } from './android/Seller/booking-closure/booking-closure.component';
import { FeedComponent } from './android/Seller/feed/feed.component';
import { FaqsComponent } from './android/Seller/faqs/faqs.component';
import { CustDashboardComponent } from './android/Customer/cust-dashboard/cust-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    CompareValidatorDirective,
    
    AppComponent,
    RegistrationComponent,
    KkHeaderComponent,
    LoginComponent,

    //Dialogs
    TermsOfUseDialog,
    // BuyerLoginDialog,
    // BuyerRegDialog,
    BottomSheet,

    //Components
    KkFooterComponent,
    KkBannerComponent,
    KkProductsComponent,
    KkTestimonialsComponent,
    KkPageNotFoundComponent,
    KkAboutComponent,
    KkContactUsComponent,
    KkRecognizeComponent,
    KkServicesComponent,
    KkNetworkComponent,
    DashboardComponent,
    HomeComponent,
    ProfileUpdateComponent,
    ContactComponent,
    ProdServiceComponent,
    SellComponent,
    PurchaseComponent,
    BookingReceivedComponent,
    BookingClosureComponent,
    FeedComponent,
    FaqsComponent,
    CustDashboardComponent,
    ForgotPasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPageScrollModule,
    HttpClientModule,
    
    //Material Components
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],

  entryComponents:[
    
    //Dialogs
    TermsOfUseDialog,
    // BuyerLoginDialog,
    // BuyerRegDialog,
    BottomSheet,

    //Components
    HomeComponent,
    ProfileUpdateComponent,
    ContactComponent,
    ProdServiceComponent,
    SellComponent,
    PurchaseComponent,
    BookingReceivedComponent,
    BookingClosureComponent,
    FeedComponent,
    FaqsComponent,
  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }