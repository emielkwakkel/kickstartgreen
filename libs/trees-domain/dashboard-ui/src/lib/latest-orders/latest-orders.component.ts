import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Environment } from '@shared/environment-util';

import { gql, Apollo } from 'apollo-angular';

interface Order {
  id: number;
  orderPlacedAt: Date;
  handle: string;
  message: string;
  uri?: string;
  reference: string;
  quantity: number;
}

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
  @Input() data: { type: string } = { type: 'latest' };
  displayedColumns = ['reference', 'orderPlacedAt', 'quantity', 'uri'];
  dataSource = new MatTableDataSource<Order[]>();

  constructor(private apollo: Apollo, private env: Environment) {}

  ngOnInit(): void {
    this.getOrders();
  }

  public navigateExternal(uri: string) {
    window.open(uri, '_blank');
  }

  private getOrders() {
    this.apollo
      .watchQuery<any>({
        query: getOrdersQuery,
        variables: {
          accountId: this.env.unFootprintAccountId,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        const orders = (this.data.type === 'top'
          ? [...data.orders].sort(
              ({ quantity: a }: Order, { quantity: b }: Order) => b - a
            )
          : [...data.orders]
        )
          .slice(0, 5)
          .map((order: Order) => {
            const uri = `${this.env.unFootprintUri}/trees/${order.handle}`;
            return { ...order, uri };
          }) as any as MatTableDataSource<Order[]>;

        this.dataSource = orders;
      });
  }
}
