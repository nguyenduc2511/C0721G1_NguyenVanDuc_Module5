import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './page_layout/home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ListCarComponent} from './car-component/list-car/list-car.component';
import {EditCarComponent} from './car-component/edit-car/edit-car.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'car', component: ListCarComponent},
  {path: 'car/edit/:id', component: EditCarComponent},
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
