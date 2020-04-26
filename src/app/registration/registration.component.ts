import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public captchaVerifier: firebase.auth.RecaptchaVerifier;

  signupFormGroup : FormGroup;
  cphide: boolean;
  phide: boolean;

  constructor(public dialog: MatDialog, private auth: AuthService, private _formBuilder: FormBuilder, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.signupFormGroup = this._formBuilder.group({
      // username: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+[0-9]*$')]],
      fname: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      lname: ['',[Validators.required, Validators.pattern('[a-zA-z]+')]],
      email: ['',[Validators.required, Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
      password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[0-9A-Za-z$@$!%*?&].{5,}')]],
      cpassword: ['', Validators.required],
      // privacy : ['',[Validators.required]]
    });
  }

  ngAfterViewInit() {
    this.captchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.captchaVerifier.render();
  }

  openTermsofUse(){
    const toc = this.dialog.open(TermsOfUseDialog);
    // toc.afterClosed().subscribe(result => {
    //   console.log(`Dialog result : ${result}`);
    // });
  }

  register() {
    const Verifier = this.captchaVerifier;
    this.auth.register(this.signupFormGroup.value)
      .then( userCredential => {
          userCredential.user.updateProfile({
            displayName: this.signupFormGroup.get('fname').value + ' ' + this.signupFormGroup.get('lname').value
          });
          this.auth.setToken();
          this.router.navigateByUrl('/sellerDashboard');
        })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          this.snackbar.open('The password is too weak.', 'X', {
            duration: 120000,
            verticalPosition: 'top'
          });
        } else {
          this.snackbar.open(errorMessage, 'X',{
            duration: 120000,
            verticalPosition: 'top'
          });
        }
        console.log(error);
      });
  }
}

//Terms of Use
@Component({
  selector: 'terms-of-use-dialog',
  templateUrl: './terms-of-use/terms-of-use-dialog.html',
})
export class TermsOfUseDialog {}