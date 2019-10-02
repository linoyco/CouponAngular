import { Component, OnInit } from '@angular/core';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-remove-company',
  templateUrl: './remove-company.component.html',
  styleUrls: ['./remove-company.component.css']
})
export class RemoveCompanyComponent implements OnInit {

  constructor(private companyBeanService: CompanyBeanService) { }

  ngOnInit() {
  }

  public deleteCompany(companyID: number) {
    this.companyBeanService.deleteCompany(companyID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("success to delete company! status:200  " + res.body); alert("success to delete"); }
      else { console.log("something faild.. delete company"); }
    },
      error => {
        let resError: HttpErrorResponse = error;
        if(resError.error === ResponseCodes.UNAUTHORIZED) { console.log("session expired"); alert("please login again"); }
          //add navigate
        else { console.log("something wrong with delete company"); }
      });
  }

}
