import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-account',
  templateUrl: './cust-account.component.html',
  styleUrls: ['./cust-account.component.css']
})
export class CustAccountComponent implements OnInit {

  basicDetailFormGroup: FormGroup;
  addressFormGroup: FormGroup;

  //Flag
  addressForm: boolean = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basicDetailFormGroup = this._formBuilder.group({
      fname: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      lname: ['',[Validators.required, Validators.pattern('[a-zA-z]+')]],
      email: ['',[Validators.required, Validators.email]],
      mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
    });
    this.addressFormGroup = this._formBuilder.group({
      name: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      mobile: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
      pincode: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]],
      locality: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      address: ['',[Validators.required]],
      city: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      state: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      alt_mobile: ['',[Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9][0-9]*')]],
    })
  }

}
