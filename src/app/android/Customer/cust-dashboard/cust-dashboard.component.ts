import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  title = "Krishakkart";
  hide : boolean = true;
  protected providerId:string = 'phone';
  protected phone;
  protected fname;
  protected email;
  protected picURL;
  
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        if(user.providerData[0].providerId === this.providerId) {
          this.phone = user.phoneNumber;
        } else {
          this.fname = user.displayName.split(' ')[0];
          this.picURL = user.photoURL;
        console.log(user.email)
        
        console.log(user.photoURL)  
        }
      } else {
        console.log('No one is logged in.');
      }
    })
  }

  logout() {
    this.auth.logout();
  }
}
