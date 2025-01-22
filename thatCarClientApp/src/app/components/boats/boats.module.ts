import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoatsComponent } from './boats.component';
import { BoatsRoutingModule } from './boats-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';

@NgModule({
  declarations: [BoatsComponent],
  imports: [CommonModule, AvailableCarsModule, BoatsRoutingModule],
})
export class BoatsModule {}
