import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UrlsServiceService } from './urls-service.service';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService) { }

  public token: string = localStorage.getItem("token");
  private userAdmin = JSON.parse(localStorage.getItem("userAdmin") || 'false');
  private userCompany = JSON.parse(localStorage.getItem("userCompany") || 'false');
  private userCustomer = JSON.parse(localStorage.getItem("userCustomer") || 'false');
  private userName: string = JSON.parse(localStorage.getItem("username"));

  login(userName, password, cliantType): Observable<any> {
    let url = this.urlsService.getLoginUrl() + '?name=' + userName + "&password=" + password + "&clientType=" + cliantType;
    console.log(url)
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

  public logout() {
    localStorage.setItem("token", null);
    this.setAdminUserF();
    this.setCompanyUserF(); 
    this.setCustomerUserF();
    alert("good bye!");
  }

  // GET&SET token
  public getToken() {
    return this.token;
  }
  public setToken(token: string) {
    this.token = token;
  }


  // GET & SET & SETfalse admin user
  getAdminUser() {
    return this.userAdmin;
  }
  setAdminUser() {
    localStorage.setItem("userAdmin", "true");
    this.userAdmin = true;
  }
  setAdminUserF() {
    localStorage.setItem("userAdmin", "false");
    this.userAdmin = false;
  }


  // GET & SET & SETfalse company user
  getCompanyUser() {
    return this.userCompany;
  }
  setCompanyUser() {
    localStorage.setItem("userCompany", "true");
    this.userCompany = true;
  }
  setCompanyUserF() {
    localStorage.setItem("userCompany", "false");
    this.userCompany = false;
  }


  // GET & SET & SETfalse customer user
  getCustomerUser() {
    return this.userCustomer;
  }
  setCustomerUser() {
    localStorage.setItem("userCustomer", "true");
    this.userCustomer = true;
  }
  setCustomerUserF() {
    localStorage.setItem("userCustomer", "false");
    this.userCustomer = false;
  }


  // GET user name
  getUserName() {
    return this.userName;
  }
}
