import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  standalone: false,

  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  cars: any[] = [
    {
      make: 'Toyota',
      model: 'Corolla',
      price: 20000,
      bodyType: 'Sedan',
      location: 'Lagos',
      imageUrl: '/showcar7.jpg',
      year: 2019,
    },
    {
      make: 'Honda',
      model: 'Civic',
      price: 22000,
      bodyType: 'Sedan',
      location: 'Abuja',
      imageUrl: '/showcar7.jpg',
      year: 2015,
    },
    {
      make: 'Ford',
      model: 'Explorer',
      price: 35000,
      bodyType: 'SUV',
      location: 'Lagos',
      imageUrl: '/showcar7.jpg',
      year: 2024,
    },
    // {
    //   make: 'BMW',
    //   model: 'X5',
    //   price: 50000,
    //   bodyType: 'SUV',
    //   location: 'Port Harcourt',
    //   imageUrl: '/showcar7.jpg',
    // },
    // {
    //   make: 'Mercedes',
    //   model: 'A-Class',
    //   price: 30000,
    //   bodyType: 'Hatchback',
    //   location: 'Lagos',
    //   imageUrl: '/showcar7.jpg',
    // },
  ];
}
