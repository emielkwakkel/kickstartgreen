import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { gql, Apollo } from 'apollo-angular';

const getOrdersQuery = gql`
  query orders($accountId: String) {
    orders(limit: 5, accountId: $accountId) {
      id
      orderPlacedAt
      handle
      message
      reference
      quantity
    }
  }
`;

@Component({
  selector: 'trees-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.css'],
})
export class LatestOrdersUiComponent implements OnInit {
  displayedColumns = ['reference', 'orderPlacedAt', 'quantity'];
  dataSource = new MatTableDataSource([{}]);

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.apollo
      .watchQuery<any>({
        query: getOrdersQuery,
        variables: {
          accountId: '1ffb5b0a-7dec-4ef9-a14f-0c1573259bdc',
        },
      })
      .valueChanges.subscribe(({ data }) => {
        this.dataSource = data.orders.slice(0, 6);
      });
  }
}
