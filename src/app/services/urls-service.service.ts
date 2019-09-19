import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsServiceService {

  constructor() { }

  private adminMenuUrl = "http://localhost:8080/admin/";
  private companyMenuUrl = "http://localhost:8080/company/";
  private customerMenuUrl = "http://localhost:8080/customer/";
  private loginUrl = "http://localhost:8080/Login/login/";
  private logoutUrl = "http://localhost:8080/Login/login/";

  public getAdminUrl() {
    return this.adminMenuUrl;
  }
  public getCompanyUrl() {
    return this.companyMenuUrl;
  }
  public getCustomerUrl() {
    return this.customerMenuUrl;
  }
  public getLoginUrl() {
    return this.loginUrl;
  }

  public getLogoutUrl(){
    return this.logoutUrl;
  }

}
