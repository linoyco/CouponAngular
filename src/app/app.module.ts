import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RootPageComponent } from './components/root-page/root-page.component';

@NgModule({
  declarations: [
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    LoginComponent,
    RootPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootPageComponent]
})
export class AppModule { }
