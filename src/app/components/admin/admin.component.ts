import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from 'src/app/models/customer';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public customers: Customer[];

  public constructor(private title: Title, private loginService: LoginServiceService, private router: Router) { }

  ngOnInit() {
    this.title.setTitle("admin page")
  }

  private logout() {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
