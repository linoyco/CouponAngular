import { Component, OnInit } from '@angular/core';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemsService } from 'src/app/services/items.service';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  constructor(private customerBeanService: CustomerBeanService, private itemService: ItemsService) { }

  private customer: any = {};

  ngOnInit() {
  }

  public getCustomer(customerID: number) {
    this.customerBeanService.getCustomer(customerID).subscribe(res => {
      if (res.status === ResponseCodes.OK){ console.log(res.body); this.itemService.customer = JSON.parse(res.body); }
    else { console.log("get customer faild"); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if (resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); }
     //navigate
      else {  console.log("something wrong .. get customer faild"); }
    });
  }

}
