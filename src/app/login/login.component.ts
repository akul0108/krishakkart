import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  custLoginFormGroup: FormGroup;
  OTPFormGroup: FormGroup;
  sellerLoginFormGroup: FormGroup;
  confirmCode : boolean = false;
  UserInput : boolean = true;
  confirmationResult : any;

  constructor( private auth: AuthService, 
               private router: Router, 
               private snackbar: MatSnackBar, 
               private _formBuilder: FormBuilder, 
               private ngZone: NgZone,
               private sellerService: SellerService) { }

  ngOnInit() {
    this.custLoginFormGroup = this._formBuilder.group({
      mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
    })
    
    this.OTPFormGroup = this._formBuilder.group({
      otp: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    })   

    this.sellerLoginFormGroup = this._formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  ngAfterViewInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.recaptchaVerifier.render();
  }

  // Sign-in with Phone
  sendLoginCode() {

    const appVerifier = this.recaptchaVerifier;

    const num = this.custLoginFormGroup.value;

    firebase.auth().signInWithPhoneNumber(`+91${num.mobile}`, appVerifier)
            .then(result => {
              this.confirmCode = true;
              this.UserInput = false;
              this.confirmationResult = result;
            })
            .catch( error => { 
              this.snackbar.open(`sms not sent: ${error.message}`, 'X',{
                duration: 6000,
                verticalPosition: 'top'
              });
            });
  }

  async loginViaOTP() {
    if(this.confirmationResult != null) {
      let otp = this.OTPFormGroup.get('otp').value
      if(otp != null) {
        await this.confirmationResult.confirm(otp)
          .then((good) => {
                // all checks out
              this.confirmationResult = '';
              this.auth.setToken();
              this.router.navigateByUrl('custDashboard');
            })
            .catch((bad) => {
              // code verification was bad.
              console.log(bad);
              this.snackbar.open(`Bad Code: ${bad.message}`, 'X',{
                duration: 6000,
                verticalPosition: 'top'
              });
            });
      } else {
          console.log('No verification code entered');
          this.snackbar.open('No verification code entered', 'X',{
            duration: 6000,
            verticalPosition: 'top'
          });
        }
    } else {
        this.confirmCode = false;
        this.UserInput = true;
        this.snackbar.open('Please enter the phone number', 'X',{
          duration: 6000,
          verticalPosition: 'top'
        });
      }
  }

  // Sign-in with Google

  signInWithGoogle() {
    this.auth.signInWithGoogle()
    .then((res) => {
        this.ngZone.run(() => {
          this.auth.setToken();
          this.router.navigateByUrl('custDashboard');
        })
    })
    .catch((err) => {
      this.snackbar.open(err.message, 'X',{
        duration: 60000,
        verticalPosition: 'top'
      });
    })
  }

  // Sign-in with Facebook

  signInWithFB() {
    this.auth.signInWithFB()
    .then((res) => {
      this.ngZone.run(() => {
        this.auth.setToken();
        this.router.navigateByUrl('custDashboard');
      })
    })
    .catch((err) => {
      this.snackbar.open(err.message, 'X',{
        duration: 60000,
        verticalPosition: 'top'
      });
    })
  }

  // Sign-in with Email and Password
  signInRegular() {
    let email = this.sellerLoginFormGroup.get('username').value;
    let password = this.sellerLoginFormGroup.get('password').value;
    this.auth.signInRegular(email, password).then(async (res) => {
      await this.auth.setToken();
      this.sellerService.getProfile(firebase.auth().currentUser.uid).subscribe(
        res => {
          if(res['status'] == true)
            this.router.navigate(['sellerDashboard']);
          else
            this.router.navigate(['sellerUpdateProfile']);
        },
        err => console.log(err)
      );
    })
    .catch((error) => {
      this.snackbar.open(error.message, 'X',{
        duration: 60000,
        verticalPosition: 'top'
      });
    })
  }
}