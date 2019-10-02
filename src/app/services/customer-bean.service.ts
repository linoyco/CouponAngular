import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsServiceService } from './urls-service.service';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerBeanService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService, private loginService: LoginServiceService) { }

  private createcustomer = "createCustomer";
  private deletecustomer = "deleteCustomer";
  private updatecustomer = "updateCustomer";
  private getcustomer = "customerById";
  private getallcustomers = "getAllCustomers";

  //create customer works!
  public createCustomer(CustomerName, Password): Observable<any> {
    let customer = {
      id: 0, customerName: CustomerName, password: Password, coupons: []
    };
    let url = this.urlsService.getAdminUrl() + this.createcustomer + "/" + this.loginService.token;
    return this.http.post(url, customer, { observe: 'response', responseType: 'text' });
  }

  //
  public deleteCustomer(customerID: number): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.deletecustomer + "/" + customerID + "/" + this.loginService.token;
    return this.http.delete(url, { observe: 'response', responseType: 'text' });
  }

  public updateCustomer(id, password): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.updatecustomer + "/" + this.loginService.token
      + "/?id=" + id + "&password=" + password;
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

  //get customer works!
  public getCustomer(id: number): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getcustomer + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  public getAllCustomers(): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallcustomers + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }


}
