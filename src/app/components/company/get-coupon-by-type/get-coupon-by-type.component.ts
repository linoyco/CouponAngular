import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-coupon-by-type',
  templateUrl: './get-coupon-by-type.component.html',
  styleUrls: ['./get-coupon-by-type.component.css']
})
export class GetCouponByTypeComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }
  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
