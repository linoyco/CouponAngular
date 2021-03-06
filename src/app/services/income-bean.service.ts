import { Injectable } from '@angular/core';
import { UrlsServiceService } from './urls-service.service';
import { LoginServiceService } from './login-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IncomeBeanService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService,  private loginService: LoginServiceService) { }

  // private getaLLincome = "allIncome";
  private getallincome = "viewAllIncome";
  private getallincomebycompanyid = "viewIncomeByCompanyId";
  private getallincomebycustomerid = "viewIncomeByCustomerId";

  //get all incomes works!
  public getAllIncomes(): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallincome + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  //get all income by company id works!
  public getAllIncomeByCompanyId(id: number):Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallincomebycompanyid + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  //get all income by customer id works!
  public getAllIncomeByCustomerId(id: number):Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallincomebycustomerid + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

}
