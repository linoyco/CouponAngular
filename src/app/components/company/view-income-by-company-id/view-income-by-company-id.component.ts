import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-income-by-company-id',
  templateUrl: './view-income-by-company-id.component.html',
  styleUrls: ['./view-income-by-company-id.component.css']
})
export class ViewIncomeByCompanyIdComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
