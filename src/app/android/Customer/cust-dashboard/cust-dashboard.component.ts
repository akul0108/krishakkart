import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  constructor(private auth: AuthService, private dialog: MatDialog) { }

  title = "Krishakkart";
  hide : boolean = true;
  protected providerId:string = 'phone';
  protected phone;
  protected fname;
  protected picURL;
  
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        if(user.providerData[0].providerId === this.providerId) {
          this.phone = user.phoneNumber;
        } else {
          this.fname = user.displayName.split(' ')[0];
          this.picURL = user.photoURL; 
        }
      } else {
        console.log('No one is logged in.');
      }
    })
  }

  logout() {
    this.auth.logout();
  }

  profileDialog() {
    this.dialog.open(customerProfileDialog, {
      autoFocus: false
    });
  }
}

@Component({
  selector: 'cust-profile-dialog',
  templateUrl: './cust-profile-dialog.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class customerProfileDialog {

  protected name: string;
  protected email: string;
  protected picURL;
  protected phone;

  constructor(private auth: AuthService) {}

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
}