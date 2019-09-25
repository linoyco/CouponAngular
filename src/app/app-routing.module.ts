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
import { CustomerGuardService } from './services/customer-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { CompanyGuardService } from './services/company-guard.service';
import { GetAllCustomerCouponsComponent } from './components/customer/get-all-customer-coupons/get-all-customer-coupons.component';
import { GetCouponsByPriceComponent } from './components/customer/get-coupons-by-price/get-coupons-by-price.component';
import { GetCouponsByTypeComponent } from './components/customer/get-coupons-by-type/get-coupons-by-type.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { CreateCouponComponent } from './components/company/create-coupon/create-coupon.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { GetAllCompanyCouponsComponent } from './components/company/get-all-company-coupons/get-all-company-coupons.component';
import { GetCompanyByIdComponent } from './components/company/get-company-by-id/get-company-by-id.component';
import { GetCouponByEndDateComponent } from './components/company/get-coupon-by-end-date/get-coupon-by-end-date.component';
import { GetCouponByPriceComponent } from './components/company/get-coupon-by-price/get-coupon-by-price.component';
import { GetCouponByTypeComponent } from './components/company/get-coupon-by-type/get-coupon-by-type.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { ViewIncomeByCompanyIdComponent } from './components/company/view-income-by-company-id/view-income-by-company-id.component';
import { GetAllIncomeComponent } from './components/admin/get-all-income/get-all-income.component';
import { GetIncomeByCompanyIdComponent } from './components/admin/get-income-by-company-id/get-income-by-company-id.component';
import { GetIncomeByCustomerIdComponent } from './components/admin/get-income-by-customer-id/get-income-by-customer-id.component';

const routes: Routes = [
        //***global***
        { path: "admin", //canActivate:[AdminGuardService],
                component: AdminComponent },
        { path: "customer", //canActivate:[CustomerGuardService], 
                component: CustomerComponent },
        { path: "company", //canActivate:[CompanyGuardService], 
                component: CompanyComponent },
        { path: "login", component: LoginComponent },

        // { path: "", redirectTo: "/login", pathMatch: "full"},
        // { path: "**", redirectTo: "/login", pathMatch: "full"},

        //***admin Router
        { path: "admin/create-company", component: CreateCompanyComponent },
        { path: "admin/create-customer", component: CreateCustomerComponent },
        { path: "admin/get-all-companies", component: GetAllCompaniesComponent },
        { path: "admin/get-all-customers", component: GetAllCustomersComponent },
        { path: "admin/get-company", component: GetCompanyComponent },
        { path: "admin/get-customer", component: GetCustomerComponent },
        { path: "admin/remove-company", component: RemoveCompanyComponent },
        { path: "admin/remove-customer", component: RemoveCustomerComponent },
        { path: "admin/update-company", component: UpdateCompanyComponent },
        { path: "admin/update-customer", component: UpdateCustomerComponent },
        { path: "admin/get-all-income", component: GetAllIncomeComponent },
        { path: "admin/get-income-by-company-id", component: GetIncomeByCompanyIdComponent },
        { path: "admin/get-income-by-customer-id", component: GetIncomeByCustomerIdComponent },


        //***company Router
        { path: "company/create-coupon", component: CreateCouponComponent },
        { path: "company/delete-coupon", component: DeleteCouponComponent },
        { path: "company/get-all-company-coupons", component: GetAllCompanyCouponsComponent },
        { path: "company/get-company-by-id", component: GetCompanyByIdComponent },
        { path: "company/get-coupon-by-end-date", component: GetCouponByEndDateComponent },
        { path: "company/get-coupon-by-price", component: GetCouponByPriceComponent },
        { path: "company/get-coupon-by-type", component: GetCouponByTypeComponent },
        { path: "company/update-coupon", component: UpdateCouponComponent },
        { path: "company/view-income-by-company-id", component: ViewIncomeByCompanyIdComponent },

        //***customer Router
        { path: "customer/get-all-customer-coupons", component: GetAllCustomerCouponsComponent },
        { path: "customer/get-coupons-by-price", component: GetCouponsByPriceComponent },
        { path: "customer/get-coupons-by-type", component: GetCouponsByTypeComponent },
        { path: "customer/purchase-coupon", component: PurchaseCouponComponent },
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
