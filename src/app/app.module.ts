import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule}from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RootPageComponent } from './components/root-page/root-page.component';
import { HeaderRootComponent } from './components/root-page/header-root/header-root.component';
import { AsideRootComponent } from './components/root-page/aside-root/aside-root.component';
import { CreateCompanyComponent } from './components/admin/create-company/create-company.component';
import { RemoveCompanyComponent } from './components/admin/remove-company/remove-company.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { GetCompanyComponent } from './components/admin/get-company/get-company.component';
import { GetAllCompaniesComponent } from './components/admin/get-all-companies/get-all-companies.component';
import { CreateCustomerComponent } from './components/admin/create-customer/create-customer.component';
import { RemoveCustomerComponent } from './components/admin/remove-customer/remove-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { GetCustomerComponent } from './components/admin/get-customer/get-customer.component';
import { GetAllCustomersComponent } from './components/admin/get-all-customers/get-all-customers.component';
import { HttpClient } from '@angular/common/http';
import { AdminServiceService } from './services/admin-service.service';

@NgModule({
  declarations: [
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    LoginComponent,
    RootPageComponent,
    HeaderRootComponent,
    AsideRootComponent,
    CreateCompanyComponent,
    RemoveCompanyComponent,
    UpdateCompanyComponent,
    GetCompanyComponent,
    GetAllCompaniesComponent,
    CreateCustomerComponent,
    RemoveCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerComponent,
    GetAllCustomersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,  HttpClientModule, FormsModule],
  providers: [AdminServiceService],
  bootstrap: [RootPageComponent]
})
export class AppModule { }
