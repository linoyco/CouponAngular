import { Component, OnInit } from '@angular/core';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { Router } from '@angular/router';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  constructor(private companyBeanService: CompanyBeanService, private router: Router) { }

  ngOnInit() {
  }

  private updateCompany(id, password, email){
    this.companyBeanService.updateCompany(id, password, email).subscribe(res =>{
        if(res.status === ResponseCodes.OK){ alert("Update success !"); console.log(res.body); }
        else { console.log("something wrong"); }
    },
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); }
    else { console.log("Update Faild"); console.log(" resError: "+resError.error); console.log(error); }
    });
  }

}
