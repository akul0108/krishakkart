import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  message_send : FormGroup;
  
  constructor(private _formBuilder : FormBuilder, private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.message_send = this._formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      contact: ['',[Validators.required]],
      msg : ['', Validators.required]
    })
  }

  
  @ViewChild('sellerPic') sellerPic: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here or Browse',
    acceptedFileTypes: 'image/*',
    // allowImagePreview: true,
  }

  pondFiles = [ ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.sellerPic);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
}