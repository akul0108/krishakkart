import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CUST_ROUTES } from './sidebar-routes.config';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.component.html',
  styleUrls: ['./cust-profile.component.css']
})
export class CustProfileComponent implements OnInit {

  protected name: string;
  protected email: string;
  protected picURL;
  protected phone;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public color: string;
  public title: string = 'account setting';

  //flag
  protected profileView: boolean;

  constructor() { 
    this.menuItems = CUST_ROUTES;
    this.activeFontColor = 'rgba(255, 255, 255)';
    this.normalFontColor = 'rgba(0,0,0)';
    this.color = 'rgba(0,159,77)';
  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.picURL = user.photoURL;
        this.name = user.displayName;
        this.email = user.email;
        this.phone = user.phoneNumber;
      } else {
        console.log('No one is logged in.');
      }
    })
  }

  titleName(titleName) {
    this.title = titleName[0];
  }

  isSmallScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 500) {
        return false;
    } else {
        return true;
    }
  }
}
