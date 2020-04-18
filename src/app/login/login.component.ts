import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { WebServiceService } from '../website/web-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  // windowRef: any;

  // phoneNumber = new PhoneNumber()

  // verificationCode: string;

  // user: any;

  
  constructor( private win: WebServiceService) { 
    // firebase.initializeApp(environment.firebaseConfig);
  }

  ngOnInit() {
    // this.windowRef = this.win.windowRef
    // this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    // this.windowRef.recaptchaVerifier.render()

    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.recaptchaVerifier.render();
  }

  sendLoginCode() {

    const appVerifier = this.recaptchaVerifier;

    const num = '+918881616009';

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(confirmationResult => {
              // this.sent = true;
              const verification = prompt('Enter verification code');
              if (verification != null) {
                console.log(verification);
                confirmationResult.confirm(verification)
                  .then((good) => {
                    // all checks out
                    console.log('success');
                  })
                  .catch((bad) => {
                    // code verification was bad.
                    console.log('Bad Code');
                  });
              } else {
                console.log('No verification code entered');
              }
            })
            .catch( error => { 
              console.log('sms not sent', error);
            });

  }

}

export class PhoneNumber {
  country: string = '+91';
  phone: string = '8881616009';

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.phone
    return `+${num}`
  }
}