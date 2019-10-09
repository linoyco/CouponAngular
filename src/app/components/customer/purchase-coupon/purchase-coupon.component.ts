import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  constructor(private couponBeanService: CouponBeanService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  public purchaseCoupon(id: number) {
    this.couponBeanService.purchaseCoupon(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("PURCHASE coupon success! :) " + res.body); alert("PURCHASE coupon success! :)"); }
      else { console.log("PURCHASE coupon faild! :( "); }
    },
    error => {
      let resError: HttpErrorResponse = error;
      if (resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
      this.router.navigate(["/login"]); }
      else { console.log("PURCHASE coupon error :( "); alert("error :("); console.log(resError.error); console.log(resError); }
    });
    this.router.navigate(["/customer"]);
  }

  private logout() {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
