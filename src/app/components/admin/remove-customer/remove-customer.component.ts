import { Component, OnInit } from '@angular/core';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';

@Component({
  selector: 'app-remove-customer',
  templateUrl: './remove-customer.component.html',
  styleUrls: ['./remove-customer.component.css']
})
export class RemoveCustomerComponent implements OnInit {

  constructor(private customerBeanService : CustomerBeanService) { }

  ngOnInit() {
  }

  
  public deleteCustomer(customerID: number) {
    this.customerBeanService.deleteCustomer(customerID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("success to delete customer! status:200  " + res.body); alert("success to delete"); }
      else { console.log("something faild.. delete customer"); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again"); }
          //add navigate
        else { console.log("something wrong with delete customer"); }
      });
  }

}
