import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikesComponent } from './bikes.component';
import { BikesRoutingModule } from './bikes-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { ItemsListingModule } from '../items-listing/items-listing.module';

@NgModule({
  declarations: [BikesComponent, BikesListComponent],
  imports: [
    CommonModule,
    AvailableCarsModule,
    BikesRoutingModule,
    ItemsListingModule,
  ],
})
export class BikesModule {}
