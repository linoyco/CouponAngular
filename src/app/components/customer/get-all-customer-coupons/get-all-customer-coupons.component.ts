import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-customer-coupons',
  templateUrl: './get-all-customer-coupons.component.html',
  styleUrls: ['./get-all-customer-coupons.component.css']
})
export class GetAllCustomerCouponsComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }
  
  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
