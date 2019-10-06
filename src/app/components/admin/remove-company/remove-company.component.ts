import { Component, OnInit } from '@angular/core';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  constructor(private companyBeanService: CompanyBeanService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  public deleteCompany(companyID: number) {
    this.companyBeanService.deleteCompany(companyID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("DELETE company success! :) " + res.body); alert("DELETE company success! :) "); }
      else { console.log("DELETE company faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("DELETE company error :( "); }
      });
      this.router.navigate(["/admin"]);
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

}
