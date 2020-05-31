import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CompareValidatorDirective } from './services/compare-validator.directive';

// Import Angular Fusion Charts
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Time Series Charts module
import * as TimeSeriesCharts from 'fusioncharts/fusioncharts.timeseries';
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, TimeSeriesCharts, Charts, FusionTheme)

// Import file pond Module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// Import and register filepond plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/FilePondPluginImagePreview.css';
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

//Guards
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { LoginPageGuardGuard } from './Guards/login-page-guard.guard';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Services
import { WebServiceService } from './website/web-service.service';
import { AuthService } from './services/auth.service';
import { SellerService } from './services/seller.service';

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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

//Components
import { RegistrationComponent, TermsOfUseDialog} from './registration/registration.component';
import { KkHeaderComponent } from './website/kk-header/kk-header.component';
import { LoginComponent } from './login/login.component';
import { KkFooterComponent } from './website/kk-footer/kk-footer.component';
import { KkBannerComponent } from './website/kk-banner/kk-banner.component';
import { KkProductsComponent } from './website/kk-products/kk-products.component';
import { KkTestimonialsComponent } from './website/kk-testimonials/kk-testimonials.component';
import { KkPageNotFoundComponent } from './website/kk-page-not-found/kk-page-not-found.component';
import { KkAboutComponent } from './website/kk-about/kk-about.component';
import { KkContactUsComponent } from './website/kk-contact-us/kk-contact-us.component';
import { KkRecognizeComponent } from './website/kk-recognize/kk-recognize.component';
import { KkServicesComponent } from './website/kk-services/kk-services.component';
import { KkNetworkComponent } from './website/kk-network/kk-network.component';
import { DashboardComponent, profileDialog } from './android/Seller/dashboard/dashboard.component';
import { HomeComponent } from './android/Seller/home/home.component';
import { ProfileUpdateComponent } from './android/Seller/profile-update/profile-update.component';
import { ContactComponent } from './android/Seller/contact/contact.component';
import { ProdServiceComponent, addImplementsDialog } from './android/Seller/prod-service/prod-service.component';
import { SellComponent } from './android/Seller/sell/sell.component';
import { PurchaseComponent } from './android/Seller/purchase/purchase.component';
import { BookingReceivedComponent } from './android/Seller/booking-received/booking-received.component';
import { BookingClosureComponent } from './android/Seller/booking-closure/booking-closure.component';
import { FeedComponent } from './android/Seller/feed/feed.component';
import { FaqsComponent } from './android/Seller/faqs/faqs.component';
import { CustDashboardComponent, customerProfileDialog } from './android/Customer/cust-dashboard/cust-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { CustProfileComponent } from './android/Customer/cust-profile/cust-profile.component';
import { CustAccountComponent } from './android/Customer/cust-account/cust-account.component';
import { CustOrdersComponent } from './android/Customer/cust-orders/cust-orders.component';
import { CustPaymentsComponent } from './android/Customer/cust-payments/cust-payments.component';
import { CustFeedbackComponent } from './android/Customer/cust-feedback/cust-feedback.component';
import { CustFaqsComponent } from './android/Customer/cust-faqs/cust-faqs.component';
import { NeedProfileComponent } from './android/Seller/need-profile/need-profile.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    CompareValidatorDirective,
    
    AppComponent,
    RegistrationComponent,
    KkHeaderComponent,
    LoginComponent,

    //Dialogs
    TermsOfUseDialog,
  
    //Customer Dialogs
    customerProfileDialog,

    //Seller Dialogs
    profileDialog,
    addImplementsDialog,

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
    PasswordResetComponent,
    CustProfileComponent,
    CustAccountComponent,
    CustOrdersComponent,
    CustPaymentsComponent,
    CustFeedbackComponent,
    CustFaqsComponent,
    NeedProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPageScrollModule,
    HttpClientModule,
    FusionChartsModule, // add fusion chart    
    FilePondModule, // add filepond module

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
    MatExpansionModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],

  entryComponents:[
    
    //Dialogs
    TermsOfUseDialog,
    
    //Customer Dialogs
    customerProfileDialog,
    
    //seller Dialogs
    profileDialog,
    addImplementsDialog,
    
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
  
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    //Pipes
    TitleCasePipe,
    
    //Services
    AuthService, 
    WebServiceService,
    SellerService,
    
    //Guards
    AuthGuardGuard, 
    LoginPageGuardGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }