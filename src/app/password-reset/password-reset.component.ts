import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  pwdResetFormGroup: FormGroup

  constructor(private _formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.pwdResetFormGroup = this._formBuilder.group({
      currpassword: ['', Validators.required],
      password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[0-9A-Za-z$@$!%*?&].{5,}')]],
      cpassword: ['', Validators.required],
    })
  }

  pwdUpdate() {
    let currpwd = this.pwdResetFormGroup.get('currpassword').value;
    let newpwd = this.pwdResetFormGroup.get('password').value;
    this.auth.pwdUpdate(currpwd, newpwd)
  }
}
