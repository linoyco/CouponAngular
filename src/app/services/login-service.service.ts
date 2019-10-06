import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UrlsServiceService } from './urls-service.service';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService, private router: Router) { }

  private _urlLogin = 'http://localhost:8080/Login/login';
  public token: string = localStorage.getItem("token");
  private userAdmin = JSON.parse(localStorage.getItem("userAdmin") || 'false');
  private userCompany = JSON.parse(localStorage.getItem("userCompany") || 'false');
  private userCustomer = JSON.parse(localStorage.getItem("userCustomer") || 'false');
  private userName: string = JSON.parse(localStorage.getItem("username"));



  login(userName, password, cliantType): Observable<any> {
    let url = this._urlLogin + '?name=' + userName + "&password=" + password + "&clientType=" + cliantType;
    console.log(url)
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

  //לעשות לוג אאוט
  // public logout(): Observable<HttpResponse<object>> {
  //   let url = this.urlsService.getLogoutUrl();
  //   return this.http.get(url, { observe: 'response' });
  // }

  // GET&SET token
  public getToken() {
    return this.token;
  }
  public setToken(token: string) {
    this.token = token;
  }

  // GET&SET admin user
  getAdminUser() {
    return this.userAdmin;
  }
  setAdminUser() {
    localStorage.setItem("userAdmin", "true");
    this.userAdmin = true;
  }

  // GET&SET company user
  getCompanyUser() {
    return this.userCompany;
  }
  setCompanyUser() {
    localStorage.setItem("userCompany", "true");
    this.userCompany = true;
  }

  // GET&SET customer user
  getCustomerUser() {
    return this.userCustomer;
  }
  setCustomerUser() {
    localStorage.setItem("userCustomer", "true");
    this.userCustomer = true;
  }

  // GET user name
  getUserName() {
    return this.userName;
  }
}
