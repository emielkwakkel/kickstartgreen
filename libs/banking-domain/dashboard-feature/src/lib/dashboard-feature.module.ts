import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUiModule } from '@banking/dashboard-ui';
import { MaterialUiModule } from '@shared/material-ui/src';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardUiModule,
    MaterialUiModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class BankingDashboardFeatureModule {}
