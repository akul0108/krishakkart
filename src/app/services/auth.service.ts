import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(/*public afAuth: AngularFireAuth*/ private router: Router, private snackbar: MatSnackBar) {
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
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        this.snackbar.open('The password is too weak.', 'X', {
          duration: 120000,
          verticalPosition: 'top'
        });
      } else {
        this.snackbar.open(errorMessage, 'X',{
          duration: 120000,
          verticalPosition: 'top'
        });
      }
      console.log(error);
    });    
  }

  // Sign in with Google
  signInWithGoogle() {
    return firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  // Sign in with Facebook
  signInWithFB() {
    return firebase.auth().signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  // Regualar Sign-in
  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}