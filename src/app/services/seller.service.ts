import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  uri = 'https://api.krishakkart.com/seller';

  profileUpdate(uid, profilePicURL, profileForm) {
    const profile = {
      profilePicUrl : profilePicURL,
      userType: profileForm.userType,
      compName: profileForm.compName,
      state: profileForm.state,
      district: profileForm.district,
      subdistrict: profileForm.subdistrict,
      block: profileForm.block,
      vill: profileForm.vill,
      address: profileForm.address,
      pincode: profileForm.pincode,
      gst: profileForm.gst
    }
    return this.http.patch(`${this.uri}/createSeller/${uid}`, profile);
  }

  getProfile(uid) {
    return this.http.get(`${this.uri}/createSeller/${uid}`);
  }
}