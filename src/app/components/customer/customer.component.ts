import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public constructor(private title: Title, private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.title.setTitle("customer page")
  }

}
