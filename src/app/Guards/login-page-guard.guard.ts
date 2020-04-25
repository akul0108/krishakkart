import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageGuardGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { 

      const password = 'password';
      const payload = this.auth.getUserPayload();
      
      if (payload === null || !this.auth.isLoggedIn) {
        return true;
      } else {
          const role = payload.firebase.sign_in_provider;
          if(this.auth.isLoggedIn && role === password) {
            this.router.navigateByUrl('/sellerDashboard');
          } else if(this.auth.isLoggedIn) {
            this.router.navigate(['custDashboard']);
          }
        return false; 
      }
  } 
}