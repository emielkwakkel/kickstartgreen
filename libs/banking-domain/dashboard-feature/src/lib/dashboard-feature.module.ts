import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardUiModule } from '@banking/dashboard-ui';

@NgModule({
  imports: [
    CommonModule,
    DashboardUiModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class BankingDashboardFeatureModule {}
