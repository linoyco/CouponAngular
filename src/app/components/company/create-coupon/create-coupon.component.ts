import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService, private couponBeanService: CouponBeanService) { }

  ngOnInit() {
  }

  private createCoupon(Title, StartDate, EndDate, Amount, Message, Price, Image, Type) {
    this.couponBeanService.createCoupon(Title, StartDate, EndDate, Amount, Message, Price, Image, Type).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("CREATE coupon success! :) " + res.body); alert("CREATE coupon success! :)"); }
      else { console.log("CREATE coupon faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if (resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("CREATE coupon error :( "); alert("error :("); console.log(resError.error); console.log(resError); }
      });
    this.router.navigate(["/company"]);
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
