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

  public createCustomer(){

  }

  public deleteCustomer(){

  }

  public updateCustomer (){

  }

  public getCustomer(){

  }
  
  public getAllCustomers(){

  }


}
