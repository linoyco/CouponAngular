import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
