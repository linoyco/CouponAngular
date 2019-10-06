import { Component, OnInit } from '@angular/core';
import { CustomerBeanService } from 'src/app/services/customer-bean.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { ItemsService } from 'src/app/services/items.service';




@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {


  constructor(private customerBeanService : CustomerBeanService, private router: Router, private itemService: ItemsService) { }

  ngOnInit() {

  }

  public getAllCustomers() {
    this.customerBeanService.getAllCustomers().subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL customers success! :) "); 
      this.itemService.customers = JSON.parse(res.body); console.log(this.itemService.customers); }
      else { console.log("GET-ALL customers faild! :( "); }
      if (this.itemService.customers === null) { this.itemService.customers = []; console.log("No customers ! "); alert("No customers ! "); }

    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL customers error :( "); }
    });
  }
}
