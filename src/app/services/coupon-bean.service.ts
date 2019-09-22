import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { UrlsServiceService } from './urls-service.service';
import { LoginServiceService } from './login-service.service';


@Injectable({
  providedIn: 'root'
})
export class CouponBeanService {

  constructor(private http: HttpClient, private urlsService: UrlsServiceService, private loginService: LoginServiceService) { }

  private addcoupon = "createCoupon/";
  private removecoupon = "deleteCoupon/";
  private updatecoupon = "updateCoupon/";
  private getcoupon = "getCoupon";
  private getallcoupons = "getAllCoupons";

  private purchasecoupon = "purchaseCoupon/";
  private returnpurchasedcoupon = "returnPurchasedCoupon";
  private getallpurchasedcoupons = "getAllCustomerCoupons/";

  private numberOfRetry = 1;

  public addCoupon(Id, Title, startDate, endDate, Amount, Type, Message, Price, Image): Observable<HttpResponse<Object>> {

    let startTimestamp = new Date(startDate).getTime();
    let endTimestamp = new Date(endDate).getTime();

    let coupon = {
      id: Id, title: Title, startDate: startTimestamp,
      endDate: endTimestamp, amount: Amount,
      type: Type, message: Message,
      price: Price, image: Image
    };

    let url = this.urlsService.getCompanyUrl() + this.addcoupon;

    return this.http.post(url, coupon, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

  public removeCoupon(couponId): Observable<HttpResponse<Object>> {
    let url = this.urlsService.getCompanyUrl() + this.removecoupon + "?id=" + couponId;

    return this.http.delete(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

  public updateCoupon(couponTitle, endDate, couponPrice): Observable<HttpResponse<Object>> {

    let endTimestamp = new Date(endDate).getTime();

    let coupon = {
      id: 0, title: couponTitle, startDate: 0,
      endDate: endTimestamp, amount: 0,
      type: "", message: "",
      price: couponPrice, image: ""
    };

    let url = this.urlsService.getCompanyUrl() + this.updatecoupon;

    return this.http.put(url, coupon, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

  public getCoupon(couponId): Observable<HttpResponse<Object>> {
    let url = this.urlsService.getCompanyUrl() + this.getcoupon + "?id=" + couponId;

    return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

  public getAllCoupons(): Observable<HttpResponse<Object>> {
    if (this.loginService.getCompanyUser()) {
      let url = this.urlsService.getCompanyUrl() + this.getallcoupons;

      return this.http.get(url, { observe: 'response' }).pipe(retry(this.numberOfRetry));
    }else{

      return this.http.get(this.urlsService.getAllCouponsUrl(), { observe: 'response' }).pipe(retry(this.numberOfRetry));
    }
  }

  public purchaseCoupon(Id, Title, Amount): Observable<HttpResponse<Object>> {
    let coupon = {
      id: Id, title: Title, startDate: 0,
      endDate: 0, amount: Amount,
      type: "", message: "",
      price: 0, image: ""
    };

    let url = this.urlsService.getCustomerUrl() + this.purchasecoupon;

    return this.http.post(url, coupon, { observe: 'response' }).pipe(retry(this.numberOfRetry));
  }

}
