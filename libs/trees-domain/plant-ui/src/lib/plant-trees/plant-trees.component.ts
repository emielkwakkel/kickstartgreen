import { Component, OnInit } from '@angular/core';

import { gql, Apollo } from 'apollo-angular';

const placeOrderMutation = gql`
  mutation placeOrder($order: Order!, $status: Status) {
    placeOrder(order: $order, status: $status) {
      succeeded
    }
  }
`;

@Component({
  selector: 'plant-plant-trees',
  templateUrl: './plant-trees.component.html',
  styleUrls: ['./plant-trees.component.scss'],
})
export class PlantTreesComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    const variables = {
      order: {
        quantity: 5,
        projectId: 1,
        message: 'Thank you for planting trees using KickstartGreen.',
        reference: 'KickstartGreen',
        externalId: 'KickstartGreen',
      },
      status: 'COMPLETED',
    };

    this.apollo
      .mutate<any>({
        mutation: placeOrderMutation,
        variables,
      })
      .subscribe(({ data }) => {
        console.log('data', data);
      });
  }
}
