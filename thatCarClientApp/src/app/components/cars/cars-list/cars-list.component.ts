import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  standalone: false,

  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent implements OnInit {
  filterForm: FormGroup = new FormGroup({}); // Form group for filters

  // Mock car data
  cars = [
    {
      image: 'showcar7.jpg',
      price: 439950,
      year: 2024,
      model: 'Volkswagen Taigo',
      mileage: 17000,
      transmission: 'Automatic',
      dealer: 'Dealer 1',
    },
    {
      image: 'showcar7.jpg',
      price: 459500,
      year: 2024,
      model: 'Volkswagen Taigo',
      mileage: 15000,
      transmission: 'Automatic',
      dealer: 'Dealer 2',
    },
    {
      image: 'showcar7.jpg',
      price: 559950,
      year: 2024,
      model: 'Volkswagen Taigo',
      mileage: 8200,
      transmission: 'Automatic',
      dealer: 'Dealer 3',
    },
  ];

  // Filters
  filteredCars = [...this.cars]; // Initially, display all cars
  years = [2022, 2023, 2024]; // Available years for filtering
  premiumCars = [...this.cars.filter((car) => true)];

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      selectedYears: [[]], // Multiple years
      minMileage: [null], // Minimum mileage
      maxMileage: [null], // Maximum mileage
      transmission: [''], // Transmission type
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('filters:', params);
    });
  }

  applyFilters() {
    const { selectedYears, minMileage, maxMileage, transmission } =
      this.filterForm.value;

    this.filteredCars = this.cars.filter((car) => {
      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(car.year);
      const matchesMileage =
        car.mileage >= (minMileage || 0) &&
        car.mileage <= (maxMileage || Infinity);
      const matchesTransmission =
        !transmission ||
        car.transmission.toLowerCase() === transmission.toLowerCase();

      return matchesYear && matchesMileage && matchesTransmission;
    });
  }
}
