import { Component, OnInit } from '@angular/core';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemsService } from 'src/app/services/items.service';


@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {


  constructor(private companyBeanService: CompanyBeanService, private itemService : ItemsService) { }

  private company: any = {};

  ngOnInit() {
  }

  //זו הדרך התקינה לפענח תשובה משרת ללא קלאס מפענח
  public getCompany(companyID: number) {
    this.companyBeanService.getCompany(companyID).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log(res.body); this.itemService.company = JSON.parse(res.body); console.log(this.itemService.company); }
      else { console.log("get company faild"); }
    },
    error => {
      let resError: HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); }
     //add navigate
      else { console.log("something wrong .. get company faild"); }
    });
  }


}
