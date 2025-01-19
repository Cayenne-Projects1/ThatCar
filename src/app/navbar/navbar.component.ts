import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { INavItem, navigationData } from './navigationData';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @Input() set categorySelected(value: number) {
    this.updateNavigationData(value);
  }
  private navItemsSubject = new BehaviorSubject<INavItem[]>(navigationData[0]); // Default to Cars
  navItems$: Observable<INavItem[]> = this.navItemsSubject.asObservable();

  selectedCategoryIndex: number = 0;
  private subscriptions: Subscription[] = [];

  @ViewChildren(MatMenu) menus!: QueryList<MatMenu>;

  menuMap: { [key: string]: MatMenu | null } = {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // Map each menu by its data-name attribute
    this.menus.forEach((menu) => {
      const menuId = menu['_elementRef'].nativeElement.id;
      if (menuId) {
        this.menuMap[menuId] = menu;
      }
    });

    this.cdr.detectChanges();
  }

  private updateNavigationData(index: number) {
    this.navItemsSubject.next(navigationData[index] || []);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.menuMap = {};
  }
}
