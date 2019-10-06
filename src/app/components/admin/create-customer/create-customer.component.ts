import { Component, OnInit } from '@angular/core';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerBeanService: CustomerBeanService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private createCustomer(customerName, password) {
    this.customerBeanService.createCustomer(customerName, password).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("CREATE customer success! :) "+res.body); alert("CREATE customer success! :)"); }
      else { console.log("CREATE customer faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if (resError.status === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("CREATE customer error :( "); console.log(error); }
      });
    this.router.navigate(["/admin"]);
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
