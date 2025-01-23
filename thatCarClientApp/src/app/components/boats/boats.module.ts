import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoatsComponent } from './boats.component';
import { BoatsRoutingModule } from './boats-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';
import { BoatsListComponent } from './boats-list/boats-list.component';

@NgModule({
  declarations: [BoatsComponent, BoatsListComponent],
  imports: [CommonModule, AvailableCarsModule, BoatsRoutingModule],
})
export class BoatsModule {}
