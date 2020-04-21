import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpwdFormGroup: FormGroup

  constructor(private _formBuilder: FormBuilder, private auth: AuthService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.forgotpwdFormGroup = this._formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
    })
  }

  sendEmail() {
    this.auth.sendEmail(this.forgotpwdFormGroup.get('email').value).then((res) => {
      this.snackbar.open('Email has been sent to you, Please check and verify.', 'X',{
        duration: 60000,
        verticalPosition: 'top'
      });
    })
    .catch((error) => {
      this.snackbar.open(`Mail not sent: ${error.message}`, 'X',{
        duration: 6000,
        verticalPosition: 'top'
      });
    }) 
  }
}
