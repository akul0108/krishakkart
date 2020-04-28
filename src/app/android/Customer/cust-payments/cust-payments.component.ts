import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-payments',
  templateUrl: './cust-payments.component.html',
  styleUrls: ['./cust-payments.component.css']
})
export class CustPaymentsComponent implements OnInit {

  cardFormGroup: FormGroup;

  //Flag
  protected cardDetailsForm: boolean = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cardFormGroup = this._formBuilder.group({
      card_num: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('[0-9]*')]],
      card_valid: ['',[Validators.required]],
      name: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      card_name: ['',[Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    })
  }

}
