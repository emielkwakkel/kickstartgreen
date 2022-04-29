import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { OverviewUiComponent, LatestTransactionsUiComponent } from '@banking/dashboard-ui';
import { Observable } from 'rxjs';
import { DashboardCard } from '@shared/base-ui/src/lib/dashboard/dashboard.component';

@Component({
  selector: 'dash-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<DashboardCard[]> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Overview', component: OverviewUiComponent, cols: 2, rows: .5 },
        { title: 'Payment: Latest', component: LatestTransactionsUiComponent, cols: matches ? 2 : 1, rows: 1 },
        { title: 'Savings: Latest', component: LatestTransactionsUiComponent, cols: matches ? 2 : 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
