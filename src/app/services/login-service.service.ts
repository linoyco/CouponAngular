import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'
import { Router } from '@angular/router';
import { UrlsServiceService } from './urls-service.service';
import { ResponseCodes } from '../models/responseCodeEnums';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService, private router: Router) { }

  private userInfo = null;

  private userAdmin = JSON.parse(localStorage.getItem("userAdmin") || 'false');
  private userCompany = JSON.parse(localStorage.getItem("userCompany") || 'false');
  private userCustomer = JSON.parse(localStorage.getItem("userCustomer") || 'false');
  private userLogged = JSON.parse(localStorage.getItem("userLogged") || 'false');
  private userName: string = JSON.parse(localStorage.getItem("username"));

  private updateOption = JSON.parse(localStorage.getItem("updateOption") || 'true');
  private updateOptionButton: string = JSON.parse(localStorage.getItem("updateOptionButton"));

  private notAllowed = "This user is not allowed to this page!";
  private numberOfRetry = 1;

  goodLogin(username: string) {
    localStorage.setItem("userLogged", "true");
    this.userLogged = JSON.parse(localStorage.getItem("userLogged") || 'false');
    localStorage.setItem("username", JSON.stringify(username.charAt(0)));
    this.userName = JSON.parse(localStorage.getItem("username"));
  }


  badLogin() {
    localStorage.removeItem("userLogged");
    this.userLogged = false;
    localStorage.removeItem("username");
    this.userName = "";
    localStorage.removeItem("userAdmin");
    this.userAdmin = false;
    localStorage.removeItem("userCompany");
    this.userCompany = false;
    localStorage.removeItem("userCustomer");
    this.userCustomer = false;

    this.logout().subscribe(
      res => {
        if (res.status === ResponseCodes.OK) { this.router.navigate(["/"]) }
      },
      error => {
        let res: HttpErrorResponse = error;
        console.log("Error code: " + res.status);
        console.log("Error Message: " + res.message);
      });

    alert("This user in not allowed with this option or session timeout");
  }



  public logout(): Observable<HttpResponse<object>> {
    let url = this.urlsService.getLogoutUrl();
    return this.http.get(url, { observe: 'response' });
  }

  getLogin() {
    return this.userLogged;
  }

  getAdminUser() {
    return this.userAdmin;
  }

  setAdminUser() {
    localStorage.setItem("userAdmin", "true");
    this.userAdmin = true;
  }

  getCompanyUser() {
    return this.userCompany;
  }
  setCompanyUser() {
    localStorage.setItem("userCompany", "true");
    this.userCompany = true;
  }

  getCustomerUser() {
    return this.userCustomer;
  }
  setCustomerUser() {
    localStorage.setItem("userCustomer", "true");
    this.userCustomer = true;
  }

  getUserName() {
    return this.userName;
  }

  public getUpdateOptionButton() {
    return this.updateOptionButton;
  }
  public getUpdateOption() {
    return this.updateOption;
  }
  public setUpdateOption(flag) {
    if (flag === true) {
      localStorage.setItem("updateOption", "true");
      this.updateOption = true;

      localStorage.setItem("updateOptionButton", JSON.stringify("click to update Customer"));
      this.updateOptionButton = "click to update Customer";
    }
    else {
      localStorage.setItem("updateOption", "false");
      this.updateOption = false;

      localStorage.setItem("updateOptionButton", JSON.stringify("click to update Company"))
      this.updateOptionButton = "click to update Company";
    }
  }

  public getNotAllowed() {
    return this.notAllowed;
  }

  public login(username, password, clientType): Observable<HttpResponse<Object>> {

    let user = { username: username, password: password, clientType: clientType };

    console.log(user.username);
    console.log(user.password);
    console.log(user.clientType);
    let url = this.urlsService.getLoginUrl();

    return this.http.post(url, user, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

}
