import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {
  OverviewUiComponent,
  LatestTransactionsUiComponent,
} from '@banking/dashboard-ui';
import { Observable } from 'rxjs';
import { DashboardCard } from '@shared/base-ui/src/lib/dashboard/dashboard.component';
import { gql, Apollo } from 'apollo-angular';

const getOrdersQuery = gql`
  query orders($accountId: String) {
    orders(limit: 5, accountId: $accountId) {
      id
      orderPlacedAt
      handle
      message
      reference
    }
  }
`;

@Component({
  selector: 'trees-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<DashboardCard[]> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        return [
          {
            title: 'Overview',
            component: OverviewUiComponent,
            data: {},
            cols: 2,
            rows: 0.5,
          },
          {
            title: 'Payment: Latest',
            component: LatestTransactionsUiComponent,
            data: { account: 'payment' },
            cols: matches ? 2 : 1,
            rows: 1,
          },
          {
            title: 'Savings: Latest',
            component: LatestTransactionsUiComponent,
            data: { account: 'savings' },
            cols: matches ? 2 : 1,
            rows: 1,
          },
        ];
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: getOrdersQuery,
        variables: {
          accountId: '1ffb5b0a-7dec-4ef9-a14f-0c1573259bdc',
        },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(data, loading);
      });
  }
}
