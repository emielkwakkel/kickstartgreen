import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { PlantTreesComponent } from '@trees/plant-ui';
import { Observable } from 'rxjs';
import { DashboardCard } from '@shared/base-ui/src/lib/dashboard/dashboard.component';
import { LatestOrdersUiComponent } from '@trees/dashboard-ui/src';
@Component({
  selector: 'trees-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<DashboardCard[]> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        return [
          {
            title: 'Latest orders',
            component: LatestOrdersUiComponent,
            data: {},
            cols: matches ? 2 : 1,
            rows: 1,
            class: 'width-60',
          },
          {
            title: 'Plant Trees',
            component: PlantTreesComponent,
            data: {},
            cols: matches ? 2 : 1,
            rows: 1,
            class: 'width-40 left-60',
          },
          {
            title: 'Top orders',
            component: LatestOrdersUiComponent,
            data: { type: 'top' },
            cols: 2,
            rows: 1,
            class: 'width-60',
          },
        ];
      })
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
