import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { testTrucks } from '../../test_data';
import { Truck } from '../../vehicle.model';

@Component({
  selector: 'app-trucks-list',
  standalone: false,

  templateUrl: './trucks-list.component.html',
  styleUrl: './trucks-list.component.scss',
})
export class TrucksListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  trucks: Truck[] = testTrucks;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('filters:', params);
    });
  }
}
