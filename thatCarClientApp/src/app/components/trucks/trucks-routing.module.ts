import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrucksComponent } from './trucks.component';

const routes: Routes = [
  {
    path: '',
    component: TrucksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrucksRoutingModule {}
