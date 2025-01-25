import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { testBikes } from '../../test_data';
import { Bike } from '../../vehicle.model';

@Component({
  selector: 'app-bikes-list',
  standalone: false,

  templateUrl: './bikes-list.component.html',
  styleUrl: './bikes-list.component.scss',
})
export class BikesListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  bikes: Bike[] = testBikes;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('filters:', params);
    });
  }
}
