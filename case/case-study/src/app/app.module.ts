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


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
