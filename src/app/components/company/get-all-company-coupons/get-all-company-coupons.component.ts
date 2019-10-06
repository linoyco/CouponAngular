import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-company-coupons',
  templateUrl: './get-all-company-coupons.component.html',
  styleUrls: ['./get-all-company-coupons.component.css']
})
export class GetAllCompanyCouponsComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
