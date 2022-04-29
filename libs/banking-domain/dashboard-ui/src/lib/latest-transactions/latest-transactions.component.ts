import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Overview {
  category: 'shopping_basket' | 'credit_card' | 'store' | 'savings' | 'card_giftcar' | 'shop';
  account: string;
  amount: number;
  type: 'incoming' | 'outgoing';
}

const ELEMENT_DATA : Overview[] = [
  { category: 'shopping_basket', account: 'Albert Heijn', amount: -14.22, type: 'outgoing'},
  { category: 'shop', account: 'Bakery Bloem', amount: -43.39, type: 'outgoing'},
  { category: 'credit_card', account: 'Credit card', amount: 100.00, type: 'incoming'},
  { category: 'store', account: 'Electron Blue', amount: 43.39, type: 'incoming'},
  { category: 'shopping_basket', account: 'Jumbo', amount: -39.12, type: 'outgoing'},
]

@Component({
  selector: 'dash-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.css']
})
export class LatestTransactionsUiComponent {
  displayedColumns = ['category', 'account', 'amount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
