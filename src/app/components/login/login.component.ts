import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { IsetCookie } from './IsetCookie.component';
import { Subscription } from 'rxjs';
import { LoginUser } from './loginUser';
import { ConnectionServiceService } from 'src/app/services/connection-service.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ResponseCodes } from 'src/app/models/responseCodeEnums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public imageWidth: number;
  @ViewChild('f') userLoginForm: NgForm;
  public result: IsetCookie;

  obsSubscription: Subscription = null;
  errAlert: string;
  loginUser: LoginUser = <LoginUser>{};

  public constructor(private title: Title, private connectionService: ConnectionServiceService, private router: Router) { }

  ngOnInit() {
    this.title.setTitle("login to coupon")
    this.imageWidth = 250;
  }

  public increaseWidth(): void {
    this.imageWidth += 10;
  }

  public decreaseWidth(): void {
    this.imageWidth -= 10;
  }
  public resetWidth(): void {
    this.imageWidth = 250;
  }

  onSubmit() {
    let username = this.userLoginForm.value.username;
    let password = this.userLoginForm.value.password;
    let clientType = this.userLoginForm.value.clientType;
    this.connectionService.login(username, password, clientType).subscribe(
      res => {
        if (clientType === "ADMIN") { //navigate to admin page
          if (res.status === ResponseCodes.OK) { this.connectionService.token = res.body; console.log("bye"); console.log(this.connectionService.token)}
          else { console.log(res.status); }
        }

        // if (clientType === "admin") { //navigate to admin page
        //   if (res.status === ResponseCodes.OK) { console.log(res.body) }
        //   else { console.log(res.status); }
        // }
        // if (clientType === "admin") { //navigate to admin page
        //   if (res.status === ResponseCodes.OK) { console.log(res.body) }
        //   else { console.log(res.status); }
        // }
      },
      err => {
        let error: HttpErrorResponse = err;
        if (error.error === ResponseCodes.UNAUTHORIZED) { console.log("unautorized!!!") }
        else { console.log(error.error) }
      }
    );


  }

  ngOnDestroy(): void {
    if (this.obsSubscription != null) {
      this.obsSubscription.unsubscribe();
    }
  }
}

