import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { testCars } from '../../test_data';
import { Car } from '../../vehicle.model';
import { filterItems } from '../../filterHelper';

@Component({
  selector: 'app-cars-list',
  standalone: false,

  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent implements OnInit {
  // Mock car data
  cars: Car[] = testCars;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      // console.log(params);
      // this.cars = filterItems(testCars, params);
      // console.log(this.cars);
    });
  }
}
