import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {CreateContractComponent} from '../component/create-contract/create-contract.component';
import {ListContractComponent} from '../component/list-contract/list-contract.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CreateContractComponent,
    ListContractComponent
  ],
    imports: [
        CommonModule,
        ContractRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule,
    ]
})
export class ContractModule { }
