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

  // private userDetails: firebase.User = null;
  // authState: FirebaseAuth = null;

  constructor(private router: Router, /*public afAuth: AngularFireAuth,*/ private snackbar: MatSnackBar) {
    firebase.initializeApp(environment.firebaseConfig);

    
    
    // afAuth.authState.subscribe((user) => {
    //   if(user) {
    //     this.userDetails = user;
    //     localStorage.setItem('user', JSON.stringify(this.userDetails));
    //     JSON.parse(localStorage.getItem('user'));
    //     console.log(this.userDetails);
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })
  }

  currentUser: string;

  /* User Registration*/
   register(newUser) {
    return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
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

  // Password Reset
  sendEmail(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  // Password Update
  pwdUpdate(currpwd, newPwd) {
    this.reauthenticate(currpwd).then(() => {
      let user = firebase.auth().currentUser;
      user.updatePassword(newPwd).then( res => {
        this.snackbar.open('Password is Updated', 'X', {
          duration: 3000,
          verticalPosition: 'top',
        });
      })
      .catch(error => {
        this.snackbar.open(`Error: ${error.message}`, 'X', {
          duration: 3000,
          verticalPosition: 'top',
        });
      });
    })
  }

  reauthenticate(currpwd) {
    let user = firebase.auth().currentUser;
    let cred = firebase.auth.EmailAuthProvider.credential(user.email, currpwd);
    return user.reauthenticateWithCredential(cred);
  }

  // isLoggedIn Property
  get isLoggedIn() {
    var userPayload = this.getUserPayload();
    if(userPayload) 
      return userPayload.exp > Date.now() / 1000;
    else
     return false;
  }

  // logout
  logout() {
    firebase.auth().signOut().then(() => {
      this.deleteToken();
      this.router.navigate(['login']);
    });
  }

  //Token Methods
  async setToken() {
    await firebase.auth().currentUser.getIdToken().then( token => {
      localStorage.setItem('accessToken', token);
    })
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }
 
  deleteToken() {
    localStorage.removeItem('accessToken');
  }
 
  getUserPayload() {
    var token = this.getToken();
    if(token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
     return null;
  }
}