import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private customerBeanService: CustomerBeanService) { }

  ngOnInit() {
  }

  private updateCustomer(id, password){
    this.customerBeanService.updateCustomer(id, password).subscribe(res =>{
        if(res.status === ResponseCodes.OK){ alert("customer update- success! :)"); console.log(res.body); }
        else { console.log("something wrong with this customer-update :("); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired :("); }
    else { console.log("customer update Faild :("); }
    });
  }

}
