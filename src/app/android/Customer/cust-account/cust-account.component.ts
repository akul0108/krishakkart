import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-account',
  templateUrl: './cust-account.component.html',
  styleUrls: ['./cust-account.component.css']
})
export class CustAccountComponent implements OnInit {

  basicDetailFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basicDetailFormGroup = this._formBuilder.group({
      fname: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      lname: ['',[Validators.required, Validators.pattern('[a-zA-z]+')]],
      email: ['',[Validators.required, Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
    })
  }

}
