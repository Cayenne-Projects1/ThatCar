import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-cars',
  standalone: false,

  templateUrl: './available-cars.component.html',
  styleUrl: './available-cars.component.scss',
})
export class AvailableCarsComponent {
  @Input() data: any[] = [];
}
