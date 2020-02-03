import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-seller-banner',
  templateUrl: './seller-banner.component.html',
  styleUrls: ['./seller-banner.component.css']
})
export class SellerBannerComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  openBuyerLogin() {
    this.dialog.open(BuyerLoginDialog);
  }

  openBuyerReg() {
    this.dialog.open(BuyerRegDialog);
  }
}


//Buyer Login
@Component({
  selector: 'buyer-login-dialog',
  templateUrl: './dialogs/buyer-login-dialog.html',
})
export class BuyerLoginDialog {}

//Buyer Registration
@Component({
  selector: 'buyer-reg-dialog',
  templateUrl: './dialogs/buyer-reg-dialog.html'
})
export class BuyerRegDialog {}