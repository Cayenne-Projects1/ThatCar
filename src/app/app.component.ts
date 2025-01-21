import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ACTIVE_THEME, THEMES } from '../theme/symbols';
import { darkTheme, lightTheme, ThemeService } from '../theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { INavigationData, navigationData } from './navbar/navigationData';
import { NavBarDataService } from './navbar/nav-bar-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  categorySelected$: Observable<INavigationData>;
  constructor(private readonly navBarDataService: NavBarDataService) {
    this.categorySelected$ = this.navBarDataService.categorySelected$;
  }

  changeNavigationData(data: INavigationData) {
    this.navBarDataService.setNavBarDataService(data);
  }
}
