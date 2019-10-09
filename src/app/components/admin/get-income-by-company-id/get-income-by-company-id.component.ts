import { Component, OnInit } from '@angular/core';
import { IncomeBeanService } from 'src/app/services/income-bean.service';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-income-by-company-id',
  templateUrl: './get-income-by-company-id.component.html',
  styleUrls: ['./get-income-by-company-id.component.css']
})
export class GetIncomeByCompanyIdComponent implements OnInit {

  constructor(private incomeBeanService: IncomeBeanService, private itemService: ItemsService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  public getAllIncomeByCompanyId(id:number) {
    this.incomeBeanService.getAllIncomeByCompanyId(id).subscribe(res=>{
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL IncomeByCompanyId success! :) "); 
      this.itemService.incomes = JSON.parse(res.body); console.log(this.itemService.incomes); }
        else { console.log("GET-ALL IncomeByCompanyId faild! :( "); }
      if (this.itemService.incomes === null) { console.log("No IncomeByCompanyId ! "); alert("No IncomeByCompanyId ! "); this.itemService.incomes = []; }
       else { console.log("No IncomeByCompanyId ! "); alert("No IncomeByCompanyId ! "); }
    },
    error=>{
      let resError: HttpErrorResponse = error;
      if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET-ALL IncomeByCompanyId error :( "); }
    });

  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

}
