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
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<DashboardCard[]> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        return [
          {
            title: 'Plant Trees',
            component: PlantTreesComponent,
            data: {},
            cols: 2,
            rows: 1,
          },
          {
            title: 'Latest orders',
            component: LatestOrdersUiComponent,
            data: {},
            cols: 2,
            rows: 1,
          },
        ];
      })
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
