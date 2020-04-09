import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'krishakkart';

  // update : boolean = false;

  constructor(private swupdate: SwUpdate, private snackbar: MatSnackBar) {
    this.swupdate.available.subscribe( event => {
      const snack = this.snackbar.open('New Version Available', 'UPDATE', {
        duration: 120000,
      });

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });
      
      // setTimeout(() => {
      //   snack.dismiss();
      // }, 6000);
    });
  }
}
