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

  constructor(private companyBeanService: CompanyBeanService,private router: Router) { }

  ngOnInit() {
  }


  private createCompany(name, password, email){
    this.companyBeanService.addCompany(name, password, email).subscribe(res => {
      if(res.status === ResponseCodes.OK){ console.log(res.body); alert("success to create company!") }
      else{ console.log("something wrong");}
    }, 
    error => {
      let resError : HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired");}
      else { console.log("something wrong with this new company !"); alert("this company already exist!");}
    });
    this.router.navigate(["/admin"])
  }

}
