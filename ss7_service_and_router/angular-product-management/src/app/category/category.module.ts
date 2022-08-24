import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
