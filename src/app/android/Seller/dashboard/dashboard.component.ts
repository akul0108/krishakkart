import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { HomeComponent } from '../home/home.component';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public menuItems: object;
  protected allocComponent: any = HomeComponent;
  protected componentName: string = 'Dashboard';

  constructor() { 
    this.menuItems = ROUTES;
  }

  ngOnInit(): void {
  }

  assignComponent(componentPath, componentTitle) {
    switch (componentPath[0]) {
      case 'profile':
        this.componentName = componentTitle[0];
        this.allocComponent = ProfileUpdateComponent;
        break;

      case 'contact':
        this.componentName = componentTitle[0];
        this.allocComponent = ContactComponent;
        break;
    
      default: 
        this.componentName = componentTitle[0];
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