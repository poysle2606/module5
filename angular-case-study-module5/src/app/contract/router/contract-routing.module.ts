import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateContractComponent} from '../component/create-contract/create-contract.component';
import {ListContractComponent} from '../component/list-contract/list-contract.component';


const routes: Routes = [
  {path: 'list', component: ListContractComponent},
  {path: 'create', component: CreateContractComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
