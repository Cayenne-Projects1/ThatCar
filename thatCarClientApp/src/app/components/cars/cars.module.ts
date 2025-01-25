import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { AvailableCarsModule } from '../../available-cars/available-cars.module';
import { CarsListComponent } from './cars-list/cars-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarsComponent, CarsListComponent],
  imports: [
    CommonModule,
    AvailableCarsModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class CarsModule {}
