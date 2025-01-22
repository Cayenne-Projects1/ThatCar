import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesComponent } from './bikes.component';
import { BikesRoutingModule } from './bikes-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';

@NgModule({
  declarations: [BikesComponent],
  imports: [CommonModule, AvailableCarsModule, BikesRoutingModule],
})
export class BikesModule {}
