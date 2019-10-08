import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService, private couponBeanServise: CouponBeanService) { }

  ngOnInit() {
  }

  public deleteCoupon(id: number) {
    this.couponBeanServise.deleteCoupon(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("DELETE coupon success! :) " + res.body); alert("DELETE coupon success! :) "); }
      else { console.log("DELETE coupon faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("DELETE coupon error :( "); }
      });
      this.router.navigate(["/company"]);
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
