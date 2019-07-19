import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent},
  { path: "customer", component: CustomerComponent},
  { path: "company", component: CompanyComponent},
  { path: "login", component: LoginComponent},
  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: "**", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
