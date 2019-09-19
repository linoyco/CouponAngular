import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { UrlsServiceService } from './urls-service.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyBeanService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService) { }

  private addcompany = "createCompany/";
  private removecompany = "deleteCompany/";
  private updatecompany = "updateCompany/";
  private getcompany = "companyById/";
  private getallcompanies = "getAllCompanies/";

  private numberOfRetry = 1;

  public addCompany(companyId, companyName, Password, Email): Observable<HttpResponse<Object>> {
    let company = {
      id: companyId, companyName: companyName,
      password: Password, email: Email
    };

    let url = this.urlsService.getAdminUrl() + this.addcompany;

    return this.http.post(url, company, { observe: 'response' }).pipe(retry(this.numberOfRetry));
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

  public getCompany(companyId): Observable<HttpResponse<Object>> {
    let url = this.urlsService.getAdminUrl() + this.getcompany + "?id=" + companyId;

    return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

  public getAllCompanies(): Observable<HttpResponse<Object>> {
    let url = this.urlsService.getAdminUrl() + this.getallcompanies;

    return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

}
