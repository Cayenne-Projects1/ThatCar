import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cars',
    loadChildren: () =>
      import('./components/cars/cars.module').then((x) => x.CarsModule),
  },
  {
    path: 'bikes',
    loadChildren: () =>
      import('./components/bikes/bikes.module').then((x) => x.BikesModule),
  },
  {
    path: 'boats',
    loadChildren: () =>
      import('./components/boats/boats.module').then((x) => x.BoatsModule),
  },

  {
    path: 'trucks',
    loadChildren: () =>
      import('./components/trucks/trucks.module').then((x) => x.TrucksModule),
  },

  { path: '', redirectTo: '/cars', pathMatch: 'full', title: 'Cars' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, enableTracing: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
