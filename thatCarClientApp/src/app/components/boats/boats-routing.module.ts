import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatsComponent } from './boats.component';
import { BoatsListComponent } from './boats-list/boats-list.component';

const routes: Routes = [
  {
    path: '',
    component: BoatsComponent,
  },
  {
    path: 'boats-list/:params',
    component: BoatsListComponent,
  },
  {
    path: 'boats-list',
    component: BoatsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoatsRoutingModule {}
