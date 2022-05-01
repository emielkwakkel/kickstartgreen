import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
export class PlantTreesComponent {
  plantTreesForm: FormGroup;
  constructor(private apollo: Apollo, private fb: FormBuilder) {
    this.plantTreesForm = this.fb.group({
      message: [
        'Thank you for planting trees using KickstartGreen.',
        Validators.required,
      ],
      reference: ['KickstartGreen', Validators.required],
      quantity: [5, Validators.min(0)],
    });
  }

  onSubmit() {
    const { quantity, message, reference } = this.plantTreesForm.value;
    const variables = {
      order: {
        quantity,
        projectId: 1,
        message,
        reference,
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
