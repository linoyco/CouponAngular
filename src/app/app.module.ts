import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule, HTTP_INTERCEPTORS}from "@angular/common/http";
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
import { HttpRequestInterceptor } from './HttpRequestInterceptor';
import { GetAllIncomeComponent } from './components/admin/get-all-income/get-all-income.component';
import { GetIncomeByCompanyIdComponent } from './components/admin/get-income-by-company-id/get-income-by-company-id.component';
import { GetIncomeByCustomerIdComponent } from './components/admin/get-income-by-customer-id/get-income-by-customer-id.component';
import { CreateCouponComponent } from './components/company/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { GetCompanyByIdComponent } from './components/company/get-company-by-id/get-company-by-id.component';
import { GetAllCompanyCouponsComponent } from './components/company/get-all-company-coupons/get-all-company-coupons.component';
import { GetCouponByTypeComponent } from './components/company/get-coupon-by-type/get-coupon-by-type.component';
import { GetCouponByPriceComponent } from './components/company/get-coupon-by-price/get-coupon-by-price.component';
import { GetCouponByEndDateComponent } from './components/company/get-coupon-by-end-date/get-coupon-by-end-date.component';
import { ViewIncomeByCompanyIdComponent } from './components/company/view-income-by-company-id/view-income-by-company-id.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { GetAllCustomerCouponsComponent } from './components/customer/get-all-customer-coupons/get-all-customer-coupons.component';
import { GetCouponsByTypeComponent } from './components/customer/get-coupons-by-type/get-coupons-by-type.component';
import { GetCouponsByPriceComponent } from './components/customer/get-coupons-by-price/get-coupons-by-price.component';
import { GetAllCouponsComponent } from './components/company/get-all-coupons/get-all-coupons.component';
import { GetAllCouponssComponent } from './components/admin/get-all-couponss/get-all-couponss.component';

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
    GetAllIncomeComponent,
    GetIncomeByCompanyIdComponent,
    GetIncomeByCustomerIdComponent,
    CreateCouponComponent,
    UpdateCouponComponent,
    DeleteCouponComponent,
    GetCompanyByIdComponent,
    GetAllCompanyCouponsComponent,
    GetCouponByTypeComponent,
    GetCouponByPriceComponent,
    GetCouponByEndDateComponent,
    ViewIncomeByCompanyIdComponent,
    PurchaseCouponComponent,
    GetAllCustomerCouponsComponent,
    GetCouponsByTypeComponent,
    GetCouponsByPriceComponent,
    GetAllCouponsComponent,
    GetAllCouponssComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,  HttpClientModule, FormsModule],
  providers: [
    // AdminServiceService
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [RootPageComponent]
})
export class AppModule { }
