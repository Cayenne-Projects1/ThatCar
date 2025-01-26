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

  videoDetails = [
    {
      link: 'https://www.youtube.com/embed/mxMQtltVzlQ',
      title: 'PG21! 0',
      description:
        'This episode we Help Didi find THAT CAR. The Sports Authi tries to stick to the brief. We talk cars we looking forward to, the list will amaze you and talk DAKAR and @henklategan.',
    },
    {
      link: 'https://www.youtube.com/embed/tRjZux_I4fU',
      title: 'OCTA PUSSY SHORTS',
      description: 'Description not provided for this video.',
    },
    {
      link: 'https://www.youtube.com/embed/8NkeaHfqjWg',
      title: 'DAKAR 2 PROMO 0',
      description: 'Description not provided for this video.',
    },
  ];

  categorySelected$: Observable<INavigationData>;
  constructor(private readonly navBarDataService: NavBarDataService) {
    this.categorySelected$ = this.navBarDataService.categorySelected$;
  }
}
