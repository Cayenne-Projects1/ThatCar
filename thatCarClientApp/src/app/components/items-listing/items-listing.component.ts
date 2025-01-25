import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transmission } from '../vehicle.model';

@Component({
  selector: 'app-items-listing',
  standalone: false,

  templateUrl: './items-listing.component.html',
  styleUrl: './items-listing.component.scss',
})
export class ItemsListingComponent implements OnInit {
  @Input() items: any[] = [];
  filterForm: FormGroup = new FormGroup({});

  transmission = Transmission;
  filteredCars = [...this.items];
  years = [2022, 2023, 2024];
  premiumCars = [...this.items.filter((car) => true)];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      selectedYears: [[]],
      minMileage: [null],
      maxMileage: [null],
      transmission: [''],
    });
  }

  ngOnInit(): void {
    this.premiumCars = [...this.items.filter((car) => true)];
    this.filteredCars = [...this.items];
  }

  applyFilters() {
    const { selectedYears, minMileage, maxMileage, transmission } =
      this.filterForm.value;

    this.filteredCars = this.items.filter((car) => {
      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(car.year);
      const matchesMileage =
        car.mileage >= (minMileage || 0) &&
        car.mileage <= (maxMileage || Infinity);
      const matchesTransmission =
        !transmission || car.transmission === transmission;

      return matchesYear && matchesMileage && matchesTransmission;
    });
  }
}
