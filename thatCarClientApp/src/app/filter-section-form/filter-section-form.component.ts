import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavBarDataService } from '../navbar/nav-bar-data.service';
import { INavigationData, navigationData } from '../navbar/navigationData';

@Component({
  selector: 'app-filter-section-form',
  standalone: false,

  templateUrl: './filter-section-form.component.html',
  styleUrl: './filter-section-form.component.scss',
})
export class FilterSectionFormComponent implements OnInit {
  @Input() priceOptions: number[] = [10000, 20000, 30000, 40000, 50000];
  @Input() locationOptions: string[] = ['Johannesburg', 'Cape Town', 'Durban'];
  @Input() bodyTypeOptions: string[] = ['Sedan', 'SUV', 'Hatchback'];
  @Output() search = new EventEmitter<any>();

  searchForm: FormGroup = new FormGroup({});
  navigationData = navigationData;
  constructor(
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
    this.search.emit(this.searchForm.value);
  }
}
