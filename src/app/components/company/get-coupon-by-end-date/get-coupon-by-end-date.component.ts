import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-get-coupon-by-end-date',
  templateUrl: './get-coupon-by-end-date.component.html',
  styleUrls: ['./get-coupon-by-end-date.component.css']
})
export class GetCouponByEndDateComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
