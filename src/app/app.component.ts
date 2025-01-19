import { Component, Inject } from '@angular/core';
import { ACTIVE_THEME, THEMES } from '../theme/symbols';
import { darkTheme, lightTheme, ThemeService } from '../theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers: [ThemeService],
})
export class AppComponent {
  title = 'thatCar';
}
