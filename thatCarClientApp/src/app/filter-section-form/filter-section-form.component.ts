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

  carMakes: string[] = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Volkswagen',
    'Nissan',
    'Hyundai',
    'Kia',
    'Mazda',
    'Subaru',
    'Tesla',
    'Volvo',
    'Jeep',
    'Dodge',
    'Chrysler',
    'Lexus',
    'Infiniti',
    'Acura',
    'Land Rover',
    'Jaguar',
    'Porsche',
    'Mitsubishi',
    'Suzuki',
    'Peugeot',
    'Renault',
    'Fiat',
    'Alfa Romeo',
  ];

  carModelsByMake: { [key: string]: string[] } = {
    Toyota: ['Camry', 'Corolla', 'RAV4', 'Hilux', 'Land Cruiser'],
    Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'],
    Ford: ['F-150', 'Mustang', 'Explorer', 'Ranger', 'Escape'],
    Chevrolet: ['Silverado', 'Malibu', 'Equinox', 'Tahoe', 'Camaro'],
    BMW: ['3 Series', '5 Series', 'X5', 'X3', 'i8'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLE', 'GLA'],
    Audi: ['A4', 'A6', 'Q5', 'Q7', 'TT'],
    Volkswagen: ['Golf', 'Passat', 'Tiguan', 'Jetta', 'Atlas'],
    Nissan: ['Altima', 'Sentra', 'Rogue', 'Pathfinder', '370Z'],
    Hyundai: ['Elantra', 'Sonata', 'Santa Fe', 'Tucson', 'Kona'],
    Kia: ['Sportage', 'Sorento', 'Optima', 'Telluride', 'Soul'],
    Mazda: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5 Miata'],
    Subaru: ['Impreza', 'Outback', 'Forester', 'Crosstrek', 'WRX'],
    Tesla: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck'],
    Volvo: ['XC90', 'XC60', 'S60', 'S90', 'V60'],
    Jeep: ['Wrangler', 'Cherokee', 'Grand Cherokee', 'Compass', 'Renegade'],
    Dodge: ['Charger', 'Challenger', 'Durango', 'Journey', 'Ram 1500'],
    Lexus: ['RX', 'ES', 'NX', 'GX', 'LS'],
    Porsche: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
    LandRover: ['Range Rover', 'Discovery', 'Defender', 'Evoque', 'Velar'],
    Fiat: ['500', 'Panda', 'Tipo', '124 Spider', 'Ducato'],
    Mitsubishi: ['Outlander', 'Pajero', 'Eclipse Cross', 'Mirage', 'ASX'],
    Suzuki: ['Swift', 'Baleno', 'Vitara', 'Ertiga', 'Jimny'],
  };
  carModels: string[] = [];

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
      make: [''],
      model: [''],
    });

    this.searchForm.get('make')?.valueChanges.subscribe((selectedMake) => {
      this.carModels = this.carModelsByMake[selectedMake] || [];
      this.searchForm.get('model')?.setValue('');
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
