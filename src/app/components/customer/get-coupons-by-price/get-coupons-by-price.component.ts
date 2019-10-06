import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-coupons-by-price',
  templateUrl: './get-coupons-by-price.component.html',
  styleUrls: ['./get-coupons-by-price.component.css']
})
export class GetCouponsByPriceComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }
  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
