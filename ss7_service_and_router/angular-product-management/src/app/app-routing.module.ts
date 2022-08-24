import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product/product.module').then(value => value.ProductModule)
    },
  {
    path: '',
    loadChildren: () => import('./category/category.module').then(value => value.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
