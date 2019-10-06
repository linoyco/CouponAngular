import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-coupon-by-price',
  templateUrl: './get-coupon-by-price.component.html',
  styleUrls: ['./get-coupon-by-price.component.css']
})
export class GetCouponByPriceComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
