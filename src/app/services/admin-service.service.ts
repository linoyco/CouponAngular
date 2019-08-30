import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  public createCompany(){

  }

  public removeCompany(){

  }

  public updateComany(){

  }

  public getCompany(){

  }

  public getAllCompanies(){

  }

  public createCustomer(){

  }

  public removeCustomer(){

  }

  public updateCustomer(){

  }

  public getCustomer(){

  }

  // public getAllCustomers(): Customer[] {
  //   const arr: Customer[] =[];
  //   arr.push(new Customer(23, "Linoy", "Ll123"));
  //   arr.push(new Customer(45, "Matan", "Mm123"));
  //   arr.push(new Customer(63, "Moshe", "Ss123"));
  // return arr;
  // }

  public getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:8080/CouponsSystemREST/rest/admin/getAllCustomers",{responseType:'json',  withCredentials:true} );
  }


}
