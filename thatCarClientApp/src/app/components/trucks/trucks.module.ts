import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrucksComponent } from './trucks.component';
import { TrucksRoutingModule } from './trucks-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';

@NgModule({
  declarations: [TrucksComponent],
  imports: [CommonModule, AvailableCarsModule, TrucksRoutingModule],
})
export class TrucksModule {}
