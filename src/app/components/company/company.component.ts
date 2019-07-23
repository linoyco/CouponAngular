import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public constructor(private title: Title, private companyService: CompanyServiceService) { }

  ngOnInit() {
    this.title.setTitle("company page")
  }

}
