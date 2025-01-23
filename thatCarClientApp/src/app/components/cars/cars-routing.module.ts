import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
  },
  {
    path: 'cars-list/:params',
    component: CarsListComponent,
  },
  {
    path: 'cars-list',
    component: CarsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
