import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-all-couponss',
  templateUrl: './get-all-couponss.component.html',
  styleUrls: ['./get-all-couponss.component.css']
})
export class GetAllCouponssComponent implements OnInit {

  constructor(private couponBeanService: CouponBeanService,  private itemService: ItemsService, private router: Router,  private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  
  public getAllCoupons() {
    this.couponBeanService.getAllCoupons().subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL coupons success! :) ");
      this.itemService.coupons = JSON.parse(res.body); console.log(this.itemService.coupons); }
      else { console.log("GET-ALL coupons faild! :( "); }
      if (this.itemService.coupons === null) { this.itemService.coupons = []; console.log("No coupons ! "); alert("No coupons ! "); }

    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL coupons error :( "); }
    });
  }
  
  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

}
