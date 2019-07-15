import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public imageWidth: number;

  constructor() { }

  ngOnInit() {
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
