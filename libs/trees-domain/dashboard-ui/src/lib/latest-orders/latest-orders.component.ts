import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from '@banking/account-util/src/lib/account.service';

@Component({
  selector: 'trees-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.css'],
})
export class LatestOrdersUiComponent implements OnInit {
  @Input() data: { account: string } = { account: 'payment' };
  displayedColumns = ['category', 'account', 'amount'];
  dataSource = new MatTableDataSource([{}]);

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService
      .getTransactions(this.data.account)
      .subscribe((transactions) => (this.dataSource.data = transactions));
  }
}
