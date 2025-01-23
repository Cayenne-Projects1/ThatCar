import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrucksComponent } from './trucks.component';
import { TrucksRoutingModule } from './trucks-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';
import { TrucksListComponent } from './trucks-list/trucks-list.component';

@NgModule({
  declarations: [TrucksComponent, TrucksListComponent],
  imports: [CommonModule, AvailableCarsModule, TrucksRoutingModule],
})
export class TrucksModule {}
