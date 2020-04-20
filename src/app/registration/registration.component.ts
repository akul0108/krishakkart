import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupFormGroup : FormGroup;

  constructor(public dialog: MatDialog, private auth: AuthService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupFormGroup = this._formBuilder.group({
      // username: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+[0-9]*$')]],
      fname: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      lname: ['',[Validators.required, Validators.pattern('[a-zA-z]+')]],
      email: ['',[Validators.required, Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
      password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[0-9A-Za-z$@$!%*?&].{8,}')]],
      cpassword: ['', Validators.required],
      // privacy : ['',[Validators.required]]
    });
  }

  openTermsofUse(){
    const toc = this.dialog.open(TermsOfUseDialog);
    // toc.afterClosed().subscribe(result => {
    //   console.log(`Dialog result : ${result}`);
    // });
  }

  register() {
    this.auth.register(this.signupFormGroup.value);
  }
}

//Terms of Use
@Component({
  selector: 'terms-of-use-dialog',
  templateUrl: './terms-of-use/terms-of-use-dialog.html',
})
export class TermsOfUseDialog {}