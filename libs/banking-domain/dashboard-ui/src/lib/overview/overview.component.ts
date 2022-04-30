import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Overview {
  name: string;
  account: string;
  total: number;
  type: 'payment' | 'payments' | 'savings';
}

const ELEMENT_DATA: Overview[] = [
  {
    name: 'John Johannessen',
    account: 'Personal Payment',
    total: 231.26,
    type: 'payment',
  },
  {
    name: 'John & Johanna Johannessen',
    account: 'Shared Payment',
    total: 1422.76,
    type: 'payments',
  },
  {
    name: 'John Johannessen',
    account: 'Personal Savings',
    total: 1500,
    type: 'savings',
  },
  {
    name: 'John & Johanna Johannessen',
    account: 'Shared Savings',
    total: 12500,
    type: 'savings',
  },
];

@Component({
  selector: 'dash-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewUiComponent {
  displayedColumns = ['type', 'name', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
