import { Component } from '@angular/core';

@Component({
  selector: 'app-bikes',
  standalone: false,

  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.scss',
})
export class BikesComponent {
  bikes: any[] = [
    {
      make: 'Honda',
      model: 'CBR600RR',
      price: 12000,
      bodyType: 'Sport',
      location: 'Lagos',
      imageUrl: '/bike.jpg',
    },
    {
      make: 'Yamaha',
      model: 'MT-07',
      price: 8000,
      bodyType: 'Naked',
      location: 'Abuja',
      imageUrl: '/bike.jpg',
    },
    {
      make: 'Kawasaki',
      model: 'Ninja H2',
      price: 30000,
      bodyType: 'Sport',
      location: 'Lagos',
      imageUrl: '/bike.jpg',
    },
    {
      make: 'Ducati',
      model: 'Monster 821',
      price: 16000,
      bodyType: 'Naked',
      location: 'Port Harcourt',
      imageUrl: '/bike.jpg',
    },
    {
      make: 'Harley-Davidson',
      model: 'Street Glide',
      price: 29000,
      bodyType: 'Cruiser',
      location: 'Lagos',
      imageUrl: '/bike.jpg',
    },
  ];
}
