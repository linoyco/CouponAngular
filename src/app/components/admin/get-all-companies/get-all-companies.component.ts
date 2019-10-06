import { Component, OnInit } from '@angular/core';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { ItemsService } from 'src/app/services/items.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  constructor(private companyBeanService: CompanyBeanService, private itemService: ItemsService, private router: Router) { }

  ngOnInit() {
  }

  public getAllCompanies() {
    this.companyBeanService.getAllCompanies().subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET-ALL companies success! :) "); 
      this.itemService.companies = JSON.parse(res.body); console.log(this.itemService.companies); }
      else { console.log("GET-ALL companies faild! :( "); }
      if (this.itemService.companies === null) { this.itemService.companies = []; console.log("No companies ! "); alert("No companies ! "); }

    },
      error =>{
        let resError: HttpErrorResponse = error;
        if(resError.status === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
        this.router.navigate(["/login"]); }
        else { console.log("GET-ALL companies error :( "); }
    });
  }
}
