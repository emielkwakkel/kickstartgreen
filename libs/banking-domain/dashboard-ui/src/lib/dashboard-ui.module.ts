import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@shared/material-ui/src'
import { OverviewUiComponent } from './overview/overview.component';
import { LatestTransactionsUiComponent } from './latest-transactions/latest-transactions.component';
import { BankingDomainAccountUtilModule } from '@banking/account-util'

export { OverviewUiComponent, LatestTransactionsUiComponent };

const components = [
  OverviewUiComponent,
  LatestTransactionsUiComponent
]

@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialUiModule, BankingDomainAccountUtilModule],
  exports: components,
})
export class DashboardUiModule {}
