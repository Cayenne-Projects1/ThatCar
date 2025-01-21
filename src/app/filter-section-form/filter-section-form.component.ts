import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}
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

  onSearch(): void {
    this.search.emit(this.searchForm.value);
  }
}
