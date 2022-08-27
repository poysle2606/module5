import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from './body/body.component';
import {DanhSachBenhAnComponent} from './benh_an/component/danh-sach-benh-an/danh-sach-benh-an.component';
import {SuaBenhAnComponent} from './benh_an/component/sua-benh-an/sua-benh-an.component';
import {ThemMoiBenhAnComponent} from './benh_an/component/them-moi-benh-an/them-moi-benh-an.component';


const routes: Routes = [
  {
    path: '', component: BodyComponent,
  },
  {
    path: 'patient/list', component: DanhSachBenhAnComponent,
  },
  {
    path: 'patient/edit/:id', component: SuaBenhAnComponent,
  },
  {
    path: 'patient/create', component: ThemMoiBenhAnComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
