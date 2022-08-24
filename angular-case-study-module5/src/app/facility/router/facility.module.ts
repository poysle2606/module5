import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {CreateComponent} from '../component/create/create.component';
import {ListComponent} from '../component/list/list.component';
import {EditComponent} from '../component/edit/edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    EditComponent
  ],
    imports: [
        CommonModule,
        FacilityRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule,
    ]
})
export class FacilityModule { }
