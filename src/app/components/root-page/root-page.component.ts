import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.css']
})
export class RootPageComponent implements OnInit {

  constructor() { }

  public currentDate: Date;

  ngOnInit() {
    this.currentDate = new Date;
  }

}
