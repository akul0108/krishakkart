import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { HomeComponent } from '../home/home.component';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { ContactComponent } from '../contact/contact.component';
import { ProdServiceComponent } from '../prod-service/prod-service.component';
import { SellComponent } from '../sell/sell.component';
import { PurchaseComponent } from '../purchase/purchase.component';
import { BookingReceivedComponent } from '../booking-received/booking-received.component';
import { BookingClosureComponent } from '../booking-closure/booking-closure.component';
import { FeedComponent } from '../feed/feed.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { PasswordResetComponent } from 'src/app/password-reset/password-reset.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public menuItems: object;
  allocComponent: any = HomeComponent;
  componentName: string = 'Dashboard';

  constructor(private auth: AuthService) { 
    this.menuItems = ROUTES;
  }

  ngOnInit(): void {
  }

  assignComponent(componentPath, componentTitle) {
    this.componentName = componentTitle[0];
    switch (componentPath[0]) {
      case 'profile':
        this.allocComponent = ProfileUpdateComponent;
        break;

      case 'hiring':
        this.allocComponent = ProdServiceComponent;
        break;

      case 'sell':
        this.allocComponent = SellComponent;
        break;

      case 'purchase':
        this.allocComponent = PurchaseComponent;
        break;

      case 'bookReceive':
        this.allocComponent = BookingReceivedComponent;
        break;

      case 'bookClosure':
        this.allocComponent = BookingClosureComponent;
        break;

      case 'feed':
        this.allocComponent = FeedComponent;
        break;

      case 'chngPwd':
        this.allocComponent = PasswordResetComponent;
        break;
    
      case 'contact':
        this.allocComponent = ContactComponent;
        break;

      case 'faqs':
        this.allocComponent = FaqsComponent;
        break;

      case 'logout':
        this.auth.logout();
        break;

      default: 
        this.allocComponent = HomeComponent;
        break;
    }
 }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 768) {
        return true;
    } else {
        return false;
    }
  }
}