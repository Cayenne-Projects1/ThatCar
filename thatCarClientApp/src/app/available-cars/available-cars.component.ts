import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-cars',
  standalone: false,

  templateUrl: './available-cars.component.html',
  styleUrl: './available-cars.component.scss',
})
export class AvailableCarsComponent {
  @Input() cars: any[] = [
    {
      make: 'Toyota',
      model: 'Corolla',
      price: 20000,
      bodyType: 'Sedan',
      location: 'Lagos',
      imageUrl: '',
    },
    {
      make: 'Honda',
      model: 'Civic',
      price: 22000,
      bodyType: 'Sedan',
      location: 'Abuja',
      imageUrl: '',
    },
    {
      make: 'Ford',
      model: 'Explorer',
      price: 35000,
      bodyType: 'SUV',
      location: 'Lagos',
      imageUrl: '',
    },
    {
      make: 'BMW',
      model: 'X5',
      price: 50000,
      bodyType: 'SUV',
      location: 'Port Harcourt',
      imageUrl: '',
    },
    {
      make: 'Mercedes',
      model: 'A-Class',
      price: 30000,
      bodyType: 'Hatchback',
      location: 'Lagos',
      imageUrl: '',
    },
  ];
}
