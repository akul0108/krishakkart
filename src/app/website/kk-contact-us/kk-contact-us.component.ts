import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-kk-contact-us',
  templateUrl: './kk-contact-us.component.html',
  styleUrls: ['./kk-contact-us.component.css']
})
export class KkContactUsComponent implements OnInit{

  message_send : FormGroup;

  constructor(private _formBuilder : FormBuilder, private webservice : WebServiceService) { }

  ngOnInit() {
    this.message_send = this._formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      contact: ['',[Validators.required]],
      msg : ['', Validators.required]
    })
  }
  
  send(name, email, contact, msg){
    this.webservice.sendmsg(name, email, contact, msg);
  }
}