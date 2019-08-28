import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { IsetCookie } from './IsetCookie.component';
import { Subscription } from 'rxjs';
import { LoginUser } from './loginUser';
import { ConnectionServiceService } from 'src/app/services/connection-service.service';
import { Router } from '@angular/router';

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
    this.loginUser.username = this.userLoginForm.value.username;
    this.loginUser.password = this.userLoginForm.value.password;
    this.loginUser.clientType = this.userLoginForm.value.clientType;
    this.obsSubscription = this.connectionService.login(this.loginUser).subscribe(
      (data) => {
        console.log(data);
        this.result = <IsetCookie>{};
        this.result = data;
        if (this.result == null) {
          alert("Login Failed, please try again");
          this.router.navigate(["/login"])
        }
        else {
          sessionStorage.setItem('Cookie', this.result.value as string)
          switch (this.result.comment) {
            case "ADMIN": {
              sessionStorage.setItem('clientType', this.result.comment)
              this.router.navigate(["/admin"])
              break;
            }
            case "COMPANY":
              sessionStorage.setItem('clientType', this.result.comment)
              this.router.navigate(["/company"])
              break;
            case "CUSTOMER":
              sessionStorage.setItem('clientType', this.result.comment)
              this.router.navigate(["/customer"])
              break;
            default:
          }
        }
      },

      (err) => { console.log(err); alert(err) }
    );
  }

  ngOnDestroy(): void {
    if(this.obsSubscription != null){
      this.obsSubscription.unsubscribe();
    }
  }
}

