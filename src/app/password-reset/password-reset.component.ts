import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  pwdResetFormGroup: FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.pwdResetFormGroup = this._formBuilder.group({
      password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[0-9A-Za-z$@$!%*?&].{8,}')]],
      cpassword: ['', Validators.required],
    })
  }

}
