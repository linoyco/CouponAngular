import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public customers:Customer[];
  public customer:Customer;
  router:any;
  getAllcustomers:any;

  constructor(private activatedRoute:ActivatedRoute ,private adminsService:AdminServiceService) { }

  ngOnInit() {
    this.adminsService.getAllCustomers().subscribe(customers =>{
      this.customers = customers;
   },err =>{
     alert("Error:")
    });
  }

}
