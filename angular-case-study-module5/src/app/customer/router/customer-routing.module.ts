import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateCustomerComponent} from '../component/create-customer/create-customer.component';
import {EditCustomerComponent} from '../component/edit-customer/edit-customer.component';
import {ListCustomerComponent} from '../component/list-customer/list-customer.component';


const routes: Routes = [
  {path: 'list', component: ListCustomerComponent},
  {path: 'create', component: CreateCustomerComponent},
  {path: 'edit/:id', component: EditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
