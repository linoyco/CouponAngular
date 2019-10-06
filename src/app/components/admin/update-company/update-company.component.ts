import { Component, OnInit } from '@angular/core';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  constructor(private companyBeanService: CompanyBeanService, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private updateCompany(id, password, email){
    this.companyBeanService.updateCompany(id, password, email).subscribe(res =>{
        if(res.status === ResponseCodes.OK){ console.log("UPDATE company success! :) "+res.body); alert("UPDATE company success! :) "); }
        else { console.log("UPDATE company faild! :( "); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again");
      this.router.navigate(["/login"]); }
    else { console.log("UPDATE company error :( "); console.log(error); }
    });
    this.router.navigate(["/admin"]);
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }

}
