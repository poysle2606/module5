import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ListComponent } from './facility/component/list/list.component';
import { CreateComponent } from './facility/component/create/create.component';
import { EditComponent } from './facility/component/edit/edit.component';
import { ListCustomerComponent } from './customer/component/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customer/component/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/component/edit-customer/edit-customer.component';
import { ListContractComponent } from './contract/component/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/component/create-contract/create-contract.component';
import {NavbarComponent} from './navbar/navbar.component';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import {ReactiveFormsModule} from '@angular/forms';

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
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
