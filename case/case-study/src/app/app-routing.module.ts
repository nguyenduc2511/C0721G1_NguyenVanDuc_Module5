import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './page_layout/home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EditEmployeeComponent} from './employee/edit-employee/edit-employee.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/delete/:id', component: DeleteCustomerComponent},
  {path: 'customer/edit/:id', component: EditCustomerComponent},
  {path: 'employee', component: ListEmployeeComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
  {path: 'employee/edit/:id', component: EditEmployeeComponent},
  {path: 'employee/delete/:id', component: EditEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
