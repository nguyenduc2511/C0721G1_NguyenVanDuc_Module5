import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './page_layout/home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
