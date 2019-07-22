import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public imageWidth: number;

  public constructor(private title: Title) {   }

  ngOnInit() {
    this.title.setTitle("login to coupon")
    this.imageWidth=250;
  }

  public increaseWidth() : void{
    this.imageWidth +=10;
  }

  public decreaseWidth() : void{
    this.imageWidth -=10;
  }
  public resetWidth() : void{
    this.imageWidth =250;
  }

}
