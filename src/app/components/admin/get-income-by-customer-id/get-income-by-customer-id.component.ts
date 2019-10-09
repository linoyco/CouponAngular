import { Component, OnInit } from '@angular/core';
import { IncomeBeanService } from 'src/app/services/income-bean.service';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-income-by-customer-id',
  templateUrl: './get-income-by-customer-id.component.html',
  styleUrls: ['./get-income-by-customer-id.component.css']
})
export class GetIncomeByCustomerIdComponent implements OnInit {

  constructor(private incomeBeanService: IncomeBeanService, private itemService: ItemsService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  public getAllIncomeByCustomerId(id:number) {
    this.incomeBeanService.getAllIncomeByCustomerId(id).subscribe(res=>{
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL IncomeByCustomerId success! :) "); 
      this.itemService.incomes = JSON.parse(res.body); console.log(this.itemService.incomes); }
        else { console.log("GET-ALL IncomeByCustomerId faild! :( "); }
      if (this.itemService.incomes === null) { console.log("No IncomeByCustomerId ! "); alert("No IncomeByCustomerId ! "); this.itemService.incomes = []; }
       else { console.log("No IncomeByCustomerId ! "); alert("No IncomeByCustomerId ! "); }
    },
    error=>{
      let resError: HttpErrorResponse = error;
      if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET-ALL IncomeByCustomerId error :( "); }
    });

  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

}
