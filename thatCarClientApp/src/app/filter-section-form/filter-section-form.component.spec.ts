import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSectionFormComponent } from './filter-section-form.component';

describe('FilterSectionFormComponent', () => {
  let component: FilterSectionFormComponent;
  let fixture: ComponentFixture<FilterSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterSectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
