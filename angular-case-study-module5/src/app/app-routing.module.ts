import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./body/body.module').then(value => value.BodyModule)},
  {path: 'customer', loadChildren: () => import('./customer/router/customer.module').then(value => value.CustomerModule)},
  {path: 'facility', loadChildren: () => import('./facility/router/facility.module').then(value => value.FacilityModule)},
  {path: 'contract', loadChildren: () => import('./contract/router/contract.module').then(value => value.ContractModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
