import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from './theme.service';
import { ThemeDirective } from './theme.directive';
import { THEMES, ACTIVE_THEME, ThemeOptions } from './symbols';

@NgModule({
  imports: [CommonModule],
  providers: [ThemeService],
  declarations: [ThemeDirective],
  exports: [ThemeDirective],
})
export class ThemeModule {
  static forRoot(options: ThemeOptions) {
    return [
      { provide: THEMES, useValue: options.themes },
      { provide: ACTIVE_THEME, useValue: options.active },
    ];
  }
}
