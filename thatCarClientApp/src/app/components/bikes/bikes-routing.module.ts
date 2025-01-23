import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';

const routes: Routes = [
  {
    path: '',
    component: BikesComponent,
  },
  {
    path: 'bikes-list/:params',
    component: BikesListComponent,
  },
  {
    path: 'bikes-list',
    component: BikesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikesRoutingModule {}
