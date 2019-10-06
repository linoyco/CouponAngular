import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public constructor(private title: Title, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.title.setTitle("company page")
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
