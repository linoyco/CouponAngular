import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardService implements CanActivate {

  constructor(private loginComponent: LoginComponent, private router: Router) { }

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  state: RouterStateSnapshot;

  public canActivate(r: ActivatedRouteSnapshot, s: RouterStateSnapshot): boolean {
    if (this.loginComponent.clientTypeForGuard === "CUSTOMER") {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }

  }

}
