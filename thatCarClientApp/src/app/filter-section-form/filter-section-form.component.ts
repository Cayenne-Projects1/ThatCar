import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavBarDataService } from '../navbar/nav-bar-data.service';
import { INavigationData, navigationData } from '../navbar/navigationData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-section-form',
  standalone: false,

  templateUrl: './filter-section-form.component.html',
  styleUrl: './filter-section-form.component.scss',
})
export class FilterSectionFormComponent implements OnInit {
  @Input() priceOptions: number[] = [10000, 20000, 30000, 40000, 50000];
  @Input() locationOptions: string[] = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'North West',
    'Northern Cape',
    'Western Cape',
  ];
  @Input() bodyTypeOptions: string[] = [
    'Sedan',
    'SUV',
    'Hatchback',
    'Coupe',
    'Convertible',
    'Pickup Truck',
    'Van',
    'Wagon',
    'Sports Car',
    'Crossover',
    'Minivan',
    'Jeep',
    'Truck',
    'Roadster',
  ];
  @Output() search = new EventEmitter<any>();

  searchForm: FormGroup = new FormGroup({});
  navigationData = navigationData;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private readonly navBarDataService: NavBarDataService
  ) {}
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: [''],
      searchBy: ['price'],
      minPrice: [''],
      maxPrice: [''],
      location: [''],
      bodyType: [''],
    });
  }

  changeNavigationData(data: INavigationData) {
    this.navBarDataService.setNavBarDataService(data);
  }

  onSearch(): void {
    this.router.navigate(
      [this.navBarDataService.categorySelected.listingPath],
      {
        queryParams: this.searchForm.value,
      }
    );
    this.search.emit(this.searchForm.value);
  }
}
