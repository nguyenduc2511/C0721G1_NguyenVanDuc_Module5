import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page_layout/home/home.component';
import { FooterComponent } from './page_layout/footer/footer.component';
import { HeaderComponent } from './page_layout/header/header.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {EditCarComponent} from './car-component/edit-car/edit-car.component';
import {ListCarComponent} from './car-component/list-car/list-car.component';


@NgModule({
  declarations: [
    AppComponent,
    EditCarComponent,
    ListCarComponent,
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
