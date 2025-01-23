import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INavigationData, navigationData } from './navigationData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavBarDataService {
  private categorySelectedSubject = new BehaviorSubject<INavigationData>(
    navigationData[0]
  );
  categorySelected$: Observable<INavigationData> =
    this.categorySelectedSubject.asObservable();

  get categorySelected() {
    return this.categorySelectedSubject.value;
  }

  constructor(private router: Router) {}

  setNavBarDataService(navBarData: INavigationData) {
    this.router.navigateByUrl(navBarData.path);
    this.categorySelectedSubject.next(navBarData);
  }
}
