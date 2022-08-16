import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {ListComponent} from './facility/list/list.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateComponent} from './facility/create/create.component';
import {EditComponent} from './facility/edit/edit.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'facility/list', component: ListComponent},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'contract/list', component: ListContractComponent},
  {path: 'facility/create', component: CreateComponent},
  {path: 'facility/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
