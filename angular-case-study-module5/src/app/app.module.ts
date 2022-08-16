import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ListComponent } from './facility/list/list.component';
import { CreateComponent } from './facility/create/create.component';
import { EditComponent } from './facility/edit/edit.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import {NavbarComponent} from './navbar/navbar.component';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ListContractComponent,
    CreateContractComponent,
    NavbarComponent,
    NavbarSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
