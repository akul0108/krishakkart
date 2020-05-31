import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import csc from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import * as firebase from 'firebase';
import { SellerService } from 'src/app/services/seller.service';
import { TitleCasePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface typeOfUser {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  profileForm : FormGroup;
  selectedTypeOfUser : string;
  selectedCity: string;
  profileURL: string;
  
  TypeOfUser: typeOfUser[] = [
    {value: 'Seller', viewValue: 'Seller'},
    {value: 'Service Provider', viewValue: 'Service Provider'}
  ]

  states: IState[];
  cities: ICity[];

  constructor(private _formBuilder : FormBuilder, private sellerservice: SellerService, private titlecasePipe:TitleCasePipe, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.profileForm = this._formBuilder.group({
      userType: ['', Validators.required],
      compName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]],
      user_name: [],
      email: [],
      contact: [],
      state: ['', Validators.required],
      district: ['', Validators.required],
      subdistrict: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      block: ['', Validators.pattern('[a-zA-Z0-9 -]+')],
      vill: ['', Validators.pattern('[a-zA-Z ]+')],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]],
      gst: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
    })

    this.states = csc.getStatesOfCountry('101');

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.profileDetails(user.uid);
        this.profileForm.get('user_name').setValue(this.titlecasePipe.transform(user.displayName));
        this.profileForm.get('email').setValue(user.email);
      } else {
        console.log('No one is logged in.');
      }
    });
  }

  @ViewChild('sellerPic') sellerPic: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here or Browse',
    labelButtonDownloadItem: 'custom label', // by default 'Download file'
    allowDownloadByUrl: false, // by default downloading by URL disabled
    // acceptedFileTypes: 'image/*',
    // allowImagePreview: true,
    server: {
        url: this.profileURL,
        process: '/process/',
        patch: '/patch/',
        revert: '/revert/',
        fetch: '/fetch/?target=',
        load: '/load/'
    }
  }

  pondFiles = []

  pondHandleAddFile(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `user_profile/${n}`; // where the images will be stored in the cloud
    const fileRef = firebase.storage().ref(filePath); //which points to the path where the image is stored
    fileRef.put(file).then((snapshot) => {
      fileRef.getDownloadURL().then((snapshot) => {
        this.profileURL = snapshot;
        console.log(this.profileURL)
      })
    })
  }

  stateChanged(stateName) {
    this.states.forEach(ele => {
      if(ele.name === stateName)
        this.cities = csc.getCitiesOfState(ele.id);
    })
  }

  saveProfile() {
    this.sellerservice.profileUpdate(firebase.auth().currentUser.uid, this.profileURL, this.profileForm.value).subscribe(
      res => {
        if(res['status'] == true)
          this.router.navigateByUrl('/sellerDashboard');
      }, 
      err => {
        const validationError = err.error.errors;
        validationError.forEach(element => {
          switch(element.param) {
            case "userType":
                    this.profileForm.controls['userType'].setErrors({'serverError': element.msg});
                    break;
            case "compName":
                    this.profileForm .controls['compName'].setErrors({'serverError': element.msg})
                    break;
            case "state":
                    this.profileForm .controls['state'].setErrors({'serverError': element.msg})
                    break;
            case "district":
                    this.profileForm .controls['district'].setErrors({'serverError': element.msg})
                    break;
            case "subdistrict":
                    this.profileForm .controls['subdistrict'].setErrors({'serverError': element.msg})
                    break;
            case "block":
                    this.profileForm .controls['block'].setErrors({'serverError': element.msg})
                    break;
            case "vill":
                    this.profileForm .controls['vill'].setErrors({'serverError': element.msg})
                    break;
            case "address":
                    this.profileForm .controls['address'].setErrors({'serverError': element.msg})
                    break;
            case "pincode":
                    this.profileForm .controls['pincode'].setErrors({'serverError': element.msg})
                    break;
            case "gst":
                    this.profileForm .controls['gst'].setErrors({'serverError': element.msg})
                    break;
          }
        });
      });
  }

  profileDetails(uid) {
    this.sellerservice.getProfile(uid).subscribe(
      res => {
        console.log(res);
        if(res) {
          this.stateChanged(res['state']);
          this.profileURL = res['profilePicUrl'];
          this.profileForm.get('userType').setValue(res['userType']);
          this.profileForm.get('compName').setValue(res['compName']);
          this.profileForm.get('contact').setValue(res['contact']);
          this.profileForm.get('state').setValue(res['state']);
          this.profileForm.get('district').setValue(res['district']);
          this.profileForm.get('subdistrict').setValue(res['subdistrict']);
          this.profileForm.get('block').setValue(res['block']);
          this.profileForm.get('vill').setValue(res['vill']);
          this.profileForm.get('address').setValue(res['address']);
          this.profileForm.get('pincode').setValue(res['pincode']);
          this.profileForm.get('gst').setValue(res['gst']);
        }
        else {
          this.snackbar.open('Data is not available.', 'X', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
      }, 
      err => console.log(err));
  }
}