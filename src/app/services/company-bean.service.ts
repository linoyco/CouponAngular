import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsServiceService } from './urls-service.service';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyBeanService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService, private loginService: LoginServiceService) { }

  private addcompany = "createCompany";
  private deletecompany = "deleteCompany";
  private updatecompany = "updateCompany";
  private getcompany = "companyById";
  private getallcompanies = "getAllCompanies";

  //create company works!
  public createCompany(CompanyName, Password, Email): Observable<any> {
    let company = {
      id: 0, companyName: CompanyName,
      password: Password, email: Email, coupons: []
    };
    let url = this.urlsService.getAdminUrl() + this.addcompany + "/" + this.loginService.token;
    return this.http.post(url, company, { observe: 'response', responseType: 'text' });
  }

  //delete company works!
  public deleteCompany(id: number): Observable<any> {

    let url = this.urlsService.getAdminUrl() + this.deletecompany + "/" + id + "/" + this.loginService.token;
    return this.http.delete(url, { observe: 'response', responseType: 'text' });
  }

  //update company works!
  public updateCompany(id, password, email): Observable<any> {

    let url = this.urlsService.getAdminUrl() + this.updatecompany + "/" + this.loginService.token
     + "/?id=" + id + "&password=" + password + "&email=" + email;
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

  //get company works!
  public getCompany(id: number): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getcompany + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  //get all companies works!
  public getAllCompanies(): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallcompanies + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

}
