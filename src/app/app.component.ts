import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ACTIVE_THEME, THEMES } from '../theme/symbols';
import { darkTheme, lightTheme, ThemeService } from '../theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { INavigationData, navigationData } from './navbar/navigationData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers: [ThemeService],
})
export class AppComponent {
  title = 'thatCar';
  navigationData = navigationData;
  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelected$: Observable<number> =
    this.categorySelectedSubject.asObservable();

  constructor(private router: Router) {}

  changeNavigationData(data: INavigationData) {
    this.router.navigateByUrl(data.path);
    this.categorySelectedSubject.next(navigationData.indexOf(data));
  }
}
