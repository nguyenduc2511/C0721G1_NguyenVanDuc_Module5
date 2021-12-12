import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { HomeComponent } from './page_layout/home/home.component';
import { FooterComponent } from './page_layout/footer/footer.component';
import { HeaderComponent } from './page_layout/header/header.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {DeleteEmployeeComponent} from './employee/delete-employee/delete-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
