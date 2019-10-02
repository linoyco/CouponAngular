import { Component, OnInit } from '@angular/core';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private companyBeanService: CompanyBeanService, private router: Router) { }

  ngOnInit() {
  }


  private createCompany(name, password, email) {
    this.companyBeanService.createCompany(name, password, email).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("CREATE company success! :) " + res.body); alert("CREATE company success! :)"); }
      else { console.log("CREATE company faild! :( "); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if (resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again");
        this.router.navigate(["/login"]); }
        else { console.log("CREATE company error :( "); alert("this company already exist!"); }
      });
    this.router.navigate(["/admin"]);
  }
}
