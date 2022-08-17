import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {ListComponent} from './facility/component/list/list.component';
import {ListCustomerComponent} from './customer/component/list-customer/list-customer.component';
import {ListContractComponent} from './contract/component/list-contract/list-contract.component';
import {CreateComponent} from './facility/component/create/create.component';
import {EditComponent} from './facility/component/edit/edit.component';
import {CreateCustomerComponent} from './customer/component/create-customer/create-customer.component';
import {EditCustomerComponent} from './customer/component/edit-customer/edit-customer.component';
import {CreateContractComponent} from './contract/component/create-contract/create-contract.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'facility/list', component: ListComponent},
  {path: 'facility/create', component: CreateComponent},
  {path: 'facility/edit', component: EditComponent},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/edit', component: EditCustomerComponent},
  {path: 'contract/list', component: ListContractComponent},
  {path: 'contract/create', component: CreateContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
