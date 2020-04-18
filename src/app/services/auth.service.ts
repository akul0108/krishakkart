import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: Observable<firebase.User>;

  constructor(/*public afAuth: AngularFireAuth*/ private router: Router) {
    firebase.initializeApp(environment.firebaseConfig);
   }

  /* User Registration*/
  register(newUser) {
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then( userCredential => {
        userCredential.user.updateProfile({
          displayName: newUser.fname + ' ' + newUser.lname
        });
        this.router.navigateByUrl('/sellerUpdateProfile');
      }
    )
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });    
  }
}
