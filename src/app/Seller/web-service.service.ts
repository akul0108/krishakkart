import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private http : HttpClient) { }

  uri = 'http://localhost:3000/v1';

  sendmsg(name, email, contact, msg) {
    const user = {
      name : name,
      email : email,
      contact : contact,
      msg : msg
    };
    return this.http.post(`${this.uri}/sendEmail`, user).subscribe((res) => console.log(res));
  }
}
