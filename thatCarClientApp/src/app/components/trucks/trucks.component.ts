import { Component } from '@angular/core';

@Component({
  selector: 'app-trucks',
  standalone: false,

  templateUrl: './trucks.component.html',
  styleUrl: './trucks.component.scss',
})
export class TrucksComponent {
  trucks: any[] = [
    {
      make: 'Ford',
      model: 'F-150',
      price: 40000,
      bodyType: 'Pickup',
      location: 'Lagos',
      imageUrl: '/truck.jpg',
    },
    {
      make: 'Chevrolet',
      model: 'Silverado 1500',
      price: 42000,
      bodyType: 'Pickup',
      location: 'Abuja',
      imageUrl: '/truck.jpg',
    },
    {
      make: 'Ram',
      model: '2500',
      price: 45000,
      bodyType: 'Heavy-Duty',
      location: 'Lagos',
      imageUrl: '/truck.jpg',
    },
    {
      make: 'Toyota',
      model: 'Tundra',
      price: 38000,
      bodyType: 'Pickup',
      location: 'Port Harcourt',
      imageUrl: '/truck.jpg',
    },
    {
      make: 'Mercedes-Benz',
      model: 'Actros',
      price: 120000,
      bodyType: 'Semi-Truck',
      location: 'Lagos',
      imageUrl: '/truck.jpg',
    },
  ];
}
