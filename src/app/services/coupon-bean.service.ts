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
  // private getcoupon = "getCoupon";
  private getallcoupons = "getAllCoupons";
  private purchasecoupon = "purchaseCoupon";
  private getcouponsbycoupontype = "getCouponsByCouponType";
  private getallcustomercoupons = "getAllCustomerCoupons";
  private getcouponsbyprice = "getCouponsByPrice";
  private getallcompanycoupons = "getAllCompanyCoupons";

  //create coupon works!
  public createCoupon(Title, StartDate, EndDate, Amount, Message, Price, Image, Type): Observable<any> {
    let startDate = new Date(StartDate).getTime();
    let endDate = new Date(EndDate).getTime();

    let coupon = {
      id: 0, title: Title, startDate: startDate,
      endDate: endDate, amount: Amount,
      message: Message, price: Price,
      image: Image, type: Type
    };
    let url = this.urlsService.getCompanyUrl() + this.createcoupon + "/" + this.loginService.token;
    return this.http.post(url, coupon, { observe: 'response', responseType: 'text' });
  }

  //delete coupon works!
  public deleteCoupon(id: number): Observable<any> {
    let url = this.urlsService.getCompanyUrl() + this.deletecoupon + "/" + id + "/" + this.loginService.token;
    return this.http.delete(url, { observe: 'response', responseType: 'text' });
  }

  //update coupon works!
  public updateCoupon(id, EndDate, price): Observable<any> {
    let endDate = new Date(EndDate).getTime();
    let url = this.urlsService.getCompanyUrl() + this.updatecoupon + "/" + this.loginService.token
    + "/?id=" + id + "&endDate=" + EndDate + "&price=" + price;
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

  //get all coupons works! 
  public getAllCoupons(): Observable<any> {
    let url = this.urlsService.getAdminUrl() + this.getallcoupons + "/" + this.loginService.token;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  //purchase coupon works!
  public purchaseCoupon(id:number): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.purchasecoupon + "/" + id + "/" + this.loginService.token;
    return this.http.post(url, null, { observe: 'response', responseType: 'text' });
  }

  //get all customer coupons works!
  public getAllCustomerCoupons(id:number): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.getallcustomercoupons + "/" + id + "/" + this.loginService.token;
    return this.http.get(url, { observe:'response', responseType:'text' });
  }

  //get coupons by coupon type works!
  public getCouponsByCouponType(couponType): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.getcouponsbycoupontype + "/" + couponType + "/" + this.loginService.token;
    return this.http.get(url, { observe:'response', responseType:'text' });
  }

  //get coupons by price works!
  public getCouponsByPrice(price: number): Observable<any> {
    let url = this.urlsService.getCustomerUrl() + this.getcouponsbyprice + "/" + price + "/" + this.loginService.token;
    return this.http.get(url, { observe:'response', responseType:'text' });
  }

    //get coupons by coupon type for company works!
    public getCouponsByCouponTypeForCompany(couponType): Observable<any> {
      let url = this.urlsService.getCompanyUrl() + this.getcouponsbycoupontype + "/" + couponType + "/" + this.loginService.token;
      return this.http.get(url, { observe:'response', responseType:'text' });
    }
  
    //get coupons by price for company works!
    public getCouponsByPriceForCompany(price: number): Observable<any> {
      let url = this.urlsService.getCompanyUrl() + this.getcouponsbyprice + "/" + price + "/" + this.loginService.token;
      return this.http.get(url, { observe:'response', responseType:'text' });
    }

    //get all company coupons works!
    public getAllCompanyCoupons(id:number): Observable<any> {
      let url = this.urlsService.getCompanyUrl() + this.getallcompanycoupons + "/" + id + "/" + this.loginService.token;
      return this.http.get(url, { observe:'response', responseType:'text' });
    }
}
