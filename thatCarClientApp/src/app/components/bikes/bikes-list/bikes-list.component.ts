import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bikes-list',
  standalone: false,

  templateUrl: './bikes-list.component.html',
  styleUrl: './bikes-list.component.scss',
})
export class BikesListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('filters:', params);
    });
  }
}
