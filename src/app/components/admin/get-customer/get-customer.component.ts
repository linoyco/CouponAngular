import { Component, OnInit } from '@angular/core';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemsService } from 'src/app/services/items.service';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  constructor(private customerBeanService: CustomerBeanService, private itemService: ItemsService, private router : Router) { }

  private customer: any = {};

  ngOnInit() {
  }

  public getCustomer(customerID: number) {
    this.customerBeanService.getCustomer(customerID).subscribe(res => {
      if (res.status === ResponseCodes.OK){ console.log("GET customer success! :) "+res.body); this.itemService.customer = JSON.parse(res.body); }
    else { console.log("GET customer faild! :( "); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if (resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again");
      this.router.navigate(["/login"]); }
      else {  console.log("GET customer error :( "); }
    });
  }

}
