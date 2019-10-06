import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public constructor(private title: Title, private router: Router, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.title.setTitle("customer page")
  }

  private logout(){
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
