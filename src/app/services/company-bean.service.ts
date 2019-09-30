import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { UrlsServiceService } from './urls-service.service';
import { LoginServiceService } from './login-service.service';

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

  //create company works
  public createCompany(CompanyName, Password, Email): Observable<any> {
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
  
  //update company
  public updateCompany(compId, Password, Email): Observable<any> {
    let company = {
      id: compId, password: Password, email: Email,  coupons:[]
    };

    let url = this.urlsService.getAdminUrl() + this.updatecompany + "/" + this.loginService.token;

    return this.http.post(url, company, { observe: 'response', responseType: 'text' });
  }

    //get company works
  public getCompany(id: number): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getcompany + "/" + id + "/" + this.loginService.token;    

    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }


  public getAllCompanies(): Observable<HttpResponse<Object>> {
    let url = this.urlsService.getAdminUrl() + this.getallcompanies;

    return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

}
