import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
