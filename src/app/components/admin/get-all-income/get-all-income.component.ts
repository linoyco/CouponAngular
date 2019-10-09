import { Component, OnInit } from '@angular/core';
import { IncomeBeanService } from 'src/app/services/income-bean.service';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-all-income',
  templateUrl: './get-all-income.component.html',
  styleUrls: ['./get-all-income.component.css']
})
export class GetAllIncomeComponent implements OnInit {

  constructor(private incomeBeanService: IncomeBeanService, private itemService: ItemsService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  public getAllIncomes() {
    this.incomeBeanService.getAllIncomes().subscribe(res=>{
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL incomes success! :) "); 
      this.itemService.incomes = JSON.parse(res.body); console.log(this.itemService.incomes); }
      else { console.log("GET-ALL incomes faild! :( "); }
      if (this.itemService.incomes === null) { this.itemService.incomes = []; console.log("No incomes ! "); alert("No incomes ! "); }
    },
    error=>{
      let resError: HttpErrorResponse = error;
      if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET-ALL incomes error :( "); }
    });

  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

}
