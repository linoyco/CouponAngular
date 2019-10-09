import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ItemsService } from 'src/app/services/items.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-all-customer-coupons',
  templateUrl: './get-all-customer-coupons.component.html',
  styleUrls: ['./get-all-customer-coupons.component.css']
})
export class GetAllCustomerCouponsComponent implements OnInit {

  constructor(private couponBeanService: CouponBeanService, private itemService: ItemsService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  public getAllCustomerCoupons(id:number){
    this.couponBeanService.getAllCustomerCoupons(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL Customer-Coupons success! :) ");
      this.itemService.coupons = JSON.parse(res.body); console.log(this.itemService.coupons); }
      else { console.log("GET-ALL Customer-Coupons faild! :( "); }
      if (this.itemService.coupons === null) { this.itemService.coupons = []; console.log("No coupons ! "); alert("No coupons ! "); }
    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL Customer-Coupons error :( "); }
    });
  }
  
  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
