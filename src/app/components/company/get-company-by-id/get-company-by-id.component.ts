import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { CompanyBeanService } from 'src/app/services/company-bean.service';
import { ItemsService } from 'src/app/services/items.service';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-company-by-id',
  templateUrl: './get-company-by-id.component.html',
  styleUrls: ['./get-company-by-id.component.css']
})
export class GetCompanyByIdComponent implements OnInit {

  constructor(private companyBeanService: CompanyBeanService, private router: Router, private loginService: LoginServiceService, private itemService: ItemsService) { }

  ngOnInit() {
  }

  public getCompanyById(id: number) {
    this.companyBeanService.getCompanyById(id).subscribe(res => {
      if (res.status === ResponseCodes.OK) { console.log("GET company success! :) "+res.body); this.itemService.company = JSON.parse(res.body); console.log(this.itemService.company); }
      else { console.log("GET company faild! :( "); }
    },
    error => {
      let resError: HttpErrorResponse = error;
      if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
      this.router.navigate(["/login"]); }
      else { console.log("GET company error :( "); }
    });
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
