import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@shared/material-ui';
import { OverviewUiComponent } from './overview/overview.component';
import { LatestTransactionsUiComponent } from './latest-transactions/latest-transactions.component';
import { AccountUtilModule } from '@banking/account-util';

export { OverviewUiComponent, LatestTransactionsUiComponent };

const components = [OverviewUiComponent, LatestTransactionsUiComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialUiModule, AccountUtilModule],
  exports: components,
})
export class DashboardUiModule {}
