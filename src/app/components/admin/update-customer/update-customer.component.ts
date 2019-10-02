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

  constructor(private customerBeanService: CustomerBeanService, private router: Router) { }

  ngOnInit() {
  }

  private updateCustomer(id, password){
    this.customerBeanService.updateCustomer(id, password).subscribe(res =>{
        if(res.status === ResponseCodes.OK){ console.log("UPDATE customer success! :) "+res.body);  alert("UPDATE customer success! :) "); }
        else { console.log("UPDATE customer faild! :( "); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired :("); alert("please login again");
      this.router.navigate(["/login"]); }
    else { console.log("UPDATE customer error :( "); }
    });
    this.router.navigate(["/admin"]);
  }

}
