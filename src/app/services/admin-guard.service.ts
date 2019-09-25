import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private loginComponent: LoginComponent, private router: Router) { }

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  state: RouterStateSnapshot;

  public canActivate(r: ActivatedRouteSnapshot, s: RouterStateSnapshot): boolean {
    if (this.loginComponent.clientTypeForGuard === "ADMIN") {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }

  }

}
