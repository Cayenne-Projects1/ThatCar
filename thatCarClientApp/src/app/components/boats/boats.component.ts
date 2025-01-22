import { Component } from '@angular/core';

@Component({
  selector: 'app-boats',
  standalone: false,

  templateUrl: './boats.component.html',
  styleUrl: './boats.component.scss',
})
export class BoatsComponent {
  boats: any[] = [
    {
      make: 'Yamaha',
      model: '242X',
      price: 75000,
      bodyType: 'Speedboat',
      location: 'Lagos',
      imageUrl: '/boat.jpg',
    },
    {
      make: 'Bayliner',
      model: 'Element E18',
      price: 30000,
      bodyType: 'Bowrider',
      location: 'Abuja',
      imageUrl: '/boat.jpg',
    },
    {
      make: 'Sea Ray',
      model: 'SLX 400',
      price: 450000,
      bodyType: 'Yacht',
      location: 'Lagos',
      imageUrl: '/boat.jpg',
    },
    {
      make: 'Boston Whaler',
      model: '170 Montauk',
      price: 65000,
      bodyType: 'Fishing Boat',
      location: 'Port Harcourt',
      imageUrl: '/boat.jpg',
    },
    {
      make: 'Malibu',
      model: 'Wakesetter 23 LSV',
      price: 125000,
      bodyType: 'Wakeboard Boat',
      location: 'Lagos',
      imageUrl: '/boat.jpg',
    },
  ];
}
