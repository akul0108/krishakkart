import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const password = route.data.password;
      const phone = route.data.phone;
      const google = route.data.google;
      const fb = route.data.facebook;
      const payload = this.auth.getUserPayload();
      let role = null;
      if(payload != null) {
        role = payload.firebase.sign_in_provider;
      }

      if(!this.auth.isLoggedIn || !(role === password || role === phone || role === google || role === fb)) {
        this.auth.logout();
        return false;
      } 
    return true;
  }
}
