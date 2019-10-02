import { Component, OnInit } from '@angular/core';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerBeanService: CustomerBeanService, private router: Router) { }

  ngOnInit() {
  }

  private createCustomer(customerName, password) {
    this.customerBeanService.createCustomer(customerName, password).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log(res.body); alert("success to create customer!"); }
      else { console.log("create customer faild"); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if (resError.status === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again"); }
        //navigate
        else { console.log("something wrong with this new customer !"); console.log(error); }
      });
    this.router.navigate(["/admin"])
  }
}
