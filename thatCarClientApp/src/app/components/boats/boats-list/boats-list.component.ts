import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boats-list',
  standalone: false,

  templateUrl: './boats-list.component.html',
  styleUrl: './boats-list.component.scss',
})
export class BoatsListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('filters:', params);
    });
  }
}
