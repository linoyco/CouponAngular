import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ItemsService } from 'src/app/services/items.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-coupon-by-type',
  templateUrl: './get-coupon-by-type.component.html',
  styleUrls: ['./get-coupon-by-type.component.css']
})
export class GetCouponByTypeComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService, private couponBeanService: CouponBeanService, private itemService: ItemsService) { }

  ngOnInit() {
  }

  public getCouponsByCouponTypeForCompany(couponType){
    this.couponBeanService.getCouponsByCouponTypeForCompany(couponType).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL CouponsByType success! :) ");
      this.itemService.coupons = JSON.parse(res.body); console.log(this.itemService.coupons); }
      else { console.log("GET-ALL CouponsByType faild! :( "); }
      if (this.itemService.coupons === null) { this.itemService.coupons = []; console.log("No coupons ! "); alert("No coupons ! "); }
    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL CouponsByType error :( "); }
    });
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
