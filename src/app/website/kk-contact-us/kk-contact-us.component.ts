import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebServiceService } from '../web-service.service';
declare const swal: any;

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
    this.webservice.sendmsg(name, email, contact, msg).subscribe((res) => {
      if(!res)
      console.log("Message not delivered");
      else
      swal({
        title: 'Krishakkart',
        text: 'We will get back to you!!',
        type: 'success',
        confirmButtonClass: 'btn btn-success'
      });
    });
    swal({
      title: 'Krishakkart',
      text: 'We will get back to you!!',
      type: 'success',
      confirmButtonColor: ''
    })
  }


//  openAlert(type) {
//   switch (type) {
//     case 'confirm':
//       swal({
//         title: 'Are you sure?',
//         text: 'You won\'t be able to revert this!',
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonClass: 'btn btn-success',
//         cancelButtonClass: 'btn btn-danger',
//         confirmButtonText: 'YES, DELETE IT!'
//       }).then(function () { 
//         swal({
//           title: 'Deleted!',
//           text: 'Your file has been deleted.',
//           type: 'success',
//           confirmButtonClass: 'btn btn-info'
//         });
//       });
//   }
// }
}