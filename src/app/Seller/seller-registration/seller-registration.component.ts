import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openTermsofUse(){
    const toc = this.dialog.open(TermsOfUseDialog);
    toc.afterClosed().subscribe(result => {
      console.log(`Dialog result : ${result}`);
    });
  }

}

//Terms of Use
@Component({
  selector: 'terms-of-use-dialog',
  templateUrl: './terms-of-use/terms-of-use-dialog.html',
})
export class TermsOfUseDialog {}