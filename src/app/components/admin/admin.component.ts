import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public customers: Customer[];

  public constructor(private title: Title, private adminService: AdminServiceService) { }

  ngOnInit() {
    this.title.setTitle("admin page")
    this.customers = this.adminService.getAllCustomers();
  }

}
