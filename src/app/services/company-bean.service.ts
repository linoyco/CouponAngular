import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UrlsServiceService } from './urls-service.service';
import { LoginServiceService } from './login-service.service';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyBeanService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService, private loginService: LoginServiceService) { }

  private addcompany = "createCompany";
  private removecompany = "deleteCompany";
  private updatecompany = "updateCompany";
  private getcompany = "companyById";
  private getallcompanies = "getAllCompanies";

  private numberOfRetry = 1;

  public addCompany(CompanyName, Password, Email): Observable<any> {
    let company = {
      id: 0, companyName: CompanyName,
      password: Password, email: Email, coupons:[]
    };

    let url = this.urlsService.getAdminUrl() + this.addcompany + "/" + this.loginService.token;

    return this.http.post(url, company, { observe: 'response', responseType: 'text' });
  }

  public removeCompany(companyId): Observable<HttpResponse<Object>> {
    let url = this.urlsService.getAdminUrl() + this.removecompany + "?id=" + companyId;

    return this.http.delete(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

  public updateCompany(companyId, companyName, Password, Email): Observable<HttpResponse<Object>> {
    let company = {
      id: companyId, companyName: companyName,
      password: Password, email: Email
    };

    let url = this.urlsService.getAdminUrl() + this.updatecompany;

    return this.http.post(url, company, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

  // public getCompany(companyId): Observable<HttpResponse<any>> {
  //   let url = this.urlsService.getAdminUrl() + this.getcompany + "/" + companyId +  "/" + this.loginService.token;

  //   return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  // }

  public getCompany(id: number): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getcompany + "/" + id + "/" + this.loginService.token;    

    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }


  public getAllCompanies(): Observable<HttpResponse<Object>> {
    let url = this.urlsService.getAdminUrl() + this.getallcompanies;

    return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

}
