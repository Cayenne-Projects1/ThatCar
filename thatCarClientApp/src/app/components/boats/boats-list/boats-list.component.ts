import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { testBoats } from '../../test_data';
import { Boat } from '../../vehicle.model';

@Component({
  selector: 'app-boats-list',
  standalone: false,

  templateUrl: './boats-list.component.html',
  styleUrl: './boats-list.component.scss',
})
export class BoatsListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  boats: Boat[] = testBoats;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('filters:', params);
    });
  }
}
