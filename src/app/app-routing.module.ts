import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCompanyComponent } from './components/admin/create-company/create-company.component';
import { CreateCustomerComponent } from './components/admin/create-customer/create-customer.component';
import { GetAllCompaniesComponent } from './components/admin/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/admin/get-all-customers/get-all-customers.component';
import { GetCompanyComponent } from './components/admin/get-company/get-company.component';
import { GetCustomerComponent } from './components/admin/get-customer/get-customer.component';
import { RemoveCompanyComponent } from './components/admin/remove-company/remove-company.component';
import { RemoveCustomerComponent } from './components/admin/remove-customer/remove-customer.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent},
  { path: "customer", component: CustomerComponent},
  { path: "company", component: CompanyComponent},
  { path: "login", component: LoginComponent},
  { path: "admin/create-company", component: CreateCompanyComponent},
  { path: "admin/create-customer", component: CreateCustomerComponent},
  { path: "admin/get-all-companies", component: GetAllCompaniesComponent},
  { path: "admin/get-all-customers", component: GetAllCustomersComponent},
  { path: "admin/get-company", component: GetCompanyComponent},
  { path: "admin/get-customer", component: GetCustomerComponent},
  { path: "admin/remove-company", component: RemoveCompanyComponent},
  { path: "admin/remove-customer", component: RemoveCustomerComponent},
  { path: "admin/update-company", component: UpdateCompanyComponent},
  { path: "admin/update-customer", component: UpdateCustomerComponent},

  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "**", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
