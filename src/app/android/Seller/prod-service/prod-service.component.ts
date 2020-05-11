import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prod-service',
  templateUrl: './prod-service.component.html',
  styleUrls: ['./prod-service.component.css']
})
export class ProdServiceComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addImplementsDialog() {
    this.dialog.open(addImplementsDialog);
  }
}

@Component({
  selector: 'app-implements-dialog',
  templateUrl: './add-implements-dialog.html',
  styleUrls: ['./prod-service.component.css']
})
export class addImplementsDialog {

  implementsForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.implementsForm = this._formBuilder.group({
      implementsName: ['',[Validators.required]],
      spec: ['',[Validators.required]],
      cost: ['',[Validators.required, Validators.pattern('[0-9]*')]],
      machine: ['',[Validators.required, Validators.pattern('[0-9]*')]]
    });
  }

  @ViewChild('implementPics') implementPics : any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here or Browse',
    acceptedFileTypes: 'image/*',
  }

  pondFiles = [ ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.implementPics);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
}