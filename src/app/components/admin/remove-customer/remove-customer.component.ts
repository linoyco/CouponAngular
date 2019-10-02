import { Component, OnInit } from '@angular/core';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  constructor(private customerBeanService : CustomerBeanService, private router: Router) { }

  ngOnInit() {
  }

  
  public deleteCustomer(customerID: number) {
    this.customerBeanService.deleteCustomer(customerID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("DELETE customer success! :) " + res.body); alert("DELETE customer success! :) "); }
      else { console.log("DELETE customer faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("DELETE customer error :( "); }
      });
      this.router.navigate(["/admin"]);
  }

}
