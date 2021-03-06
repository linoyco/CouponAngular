import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { CouponBeanService } from 'src/app/services/coupon-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-all-company-coupons',
  templateUrl: './get-all-company-coupons.component.html',
  styleUrls: ['./get-all-company-coupons.component.css']
})
export class GetAllCompanyCouponsComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService, private itemService: ItemsService, private couponBeanService: CouponBeanService) { }

  ngOnInit() {
  }

  public getAllCompanyCoupons(id: number) {
    this.couponBeanService.getAllCompanyCoupons(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL Company-Coupons success! :) ");
      this.itemService.coupons = JSON.parse(res.body); console.log(this.itemService.coupons); }
      else { console.log("GET-ALL Company-Coupons faild! :( "); }
      if (this.itemService.coupons === null) { this.itemService.coupons = []; console.log("No coupons ! "); alert("No coupons ! "); }
    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL Company-Coupons error :( "); }
    });
  }

  private logout() {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
