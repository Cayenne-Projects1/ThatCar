import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ACTIVE_THEME, THEMES } from '../theme/symbols';
import { darkTheme, lightTheme, ThemeService } from '../theme';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers: [ThemeService],
})
export class AppComponent {
  title = 'thatCar';
  private categorySelectedSubject = new BehaviorSubject<number>(0); // Default to Cars
  categorySelected$: Observable<number> =
    this.categorySelectedSubject.asObservable();

  changeNavigationData(index: number) {
    this.categorySelectedSubject.next(index);
  }
}
