import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [CarsComponent, CarsListComponent],
  imports: [CommonModule, AvailableCarsModule, CarsRoutingModule],
})
export class CarsModule {}
