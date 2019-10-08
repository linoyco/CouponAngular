import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService, private couponBeanService: CouponBeanService) { }

  ngOnInit() {
  }

  private updateCoupon(id, endDate, price){
    this.couponBeanService.updateCoupon(id, endDate, price).subscribe(res =>{
        if(res.status === ResponseCodes.OK){ console.log("UPDATE coupon success! :) "+res.body); alert("UPDATE coupon success! :) "); }
        else { console.log("UPDATE coupon faild! :( "); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again");
      this.router.navigate(["/login"]); }
    else { console.log("UPDATE coupon error :( "); console.log(error); }
    });
    this.router.navigate(["/company"]);
  }


  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
