import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { profileDialog } from '../dashboard/dashboard.component';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-need-profile',
  templateUrl: './need-profile.component.html',
  styleUrls: ['./need-profile.component.css']
})
export class NeedProfileComponent implements OnInit {

  public fname: string;
  allocComponent: any = ProfileUpdateComponent;

  constructor(private dialog: MatDialog, private auth: AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.fname = user.displayName.split(' ')[0];
      } else {
        console.log('No one is logged in.');
      }
    })
  }

  profileDialog() {
    this.dialog.open(profileDialog, {
      autoFocus: false
    });
  }
}