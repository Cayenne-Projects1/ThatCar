import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrucksComponent } from './trucks.component';
import { TrucksListComponent } from './trucks-list/trucks-list.component';

const routes: Routes = [
  {
    path: '',
    component: TrucksComponent,
  },
  {
    path: 'trucks-list/:params',
    component: TrucksListComponent,
  },
  {
    path: 'trucks-list',
    component: TrucksListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrucksRoutingModule {}
