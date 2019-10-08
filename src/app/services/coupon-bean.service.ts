import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlsServiceService } from './urls-service.service';
import { LoginServiceService } from './login-service.service';


@Injectable({
  providedIn: 'root'
})
export class CouponBeanService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService, private loginService: LoginServiceService) { }

  private createcoupon = "createCoupon";
  private deletecoupon = "deleteCoupon";
  private updatecoupon = "updateCoupon";
  private getcoupon = "getCoupon";
  private getallcoupons = "getAllCoupons";
  private getcompany = "companyById";
  private purchasecoupon = "purchaseCoupon";
  private getcouponsbycoupontype = "getCouponsByCouponType";
  private getallcustomercoupons = "getAllCustomerCoupons";
  private getcouponsbyprice = "getCouponsByPrice";

  //create coupon works!
  public createCoupon(Title, StartDate, EndDate, Amount, Message, Price, Image, Type): Observable<any> {

    let startDate = new Date(StartDate).getTime();
    let endDate = new Date(EndDate).getTime();

    let coupon = {
      id: 0, title: Title, startDate: StartDate,
      endDate: EndDate, amount: Amount,
      message: Message, price: Price,
      image: Image, type: Type
    };
    let url = this.urlsService.getCompanyUrl() + this.createcoupon + "/" + this.loginService.token;
    return this.http.post(url, coupon, { observe: 'response', responseType: 'text' });
  }

  //delete coupon
  public removeCoupon(id: number): Observable<any> {
    let url = this.urlsService.getCompanyUrl() + this.deletecoupon + "?id=" + id;

    return this.http.delete(url, { observe: 'response', responseType: 'text' });
  }

  //update coupon
  public updateCoupon(couponTitle, endDate, couponPrice): Observable<any> {

    let endTimestamp = new Date(endDate).getTime();

    let coupon = {
      id: 0, title: couponTitle, startDate: 0,
      endDate: endTimestamp, amount: 0,
      type: "", message: "",
      price: couponPrice, image: ""
    };
    let url = this.urlsService.getCompanyUrl() + this.updatecoupon;
    return this.http.put(url, coupon, { observe: 'response', responseType: 'text' });
  }

  // //get coupon
  // public getCoupon(id: number): Observable<any> {
  //   let url = this.urlsService.getCompanyUrl() + this.getcoupon + "/" + id + "/" + this.loginService.token;
  //   return this.http.get(url, { observe: 'response', responseType: 'text' });
  // }

  //get all coupons 
  public getAllCoupons(): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallcoupons + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  // public getAllCoupons(): Observable<any> {
  //   if (this.loginService.getCompanyUser()) {
  //     let url = this.urlsService.getCompanyUrl() + this.getallcoupons;
  //     return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  //   }else{

  //     return this.http.get(this.urlsService.getAllCouponsUrl(), { observe: 'response', responseType: 'text' });
  //   }
  // }

  //get company works!
  public getCompany(id: number): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getcompany + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  public purchaseCoupon(Id, Title, Amount): Observable<any> {
    let coupon = {
      id: Id, title: Title, startDate: 0,
      endDate: 0, amount: Amount,
      type: "", message: "",
      price: 0, image: ""
    };

    let url = this.urlsService.getCustomerUrl() + this.purchasecoupon;

    return this.http.post(url, coupon, { observe: 'response', responseType: 'text' });
  }

}
