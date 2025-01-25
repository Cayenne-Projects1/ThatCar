import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrucksComponent } from './trucks.component';
import { TrucksRoutingModule } from './trucks-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';
import { TrucksListComponent } from './trucks-list/trucks-list.component';
import { ItemsListingModule } from '../items-listing/items-listing.module';

@NgModule({
  declarations: [TrucksComponent, TrucksListComponent],
  imports: [
    CommonModule,
    AvailableCarsModule,
    TrucksRoutingModule,
    ItemsListingModule,
  ],
})
export class TrucksModule {}
