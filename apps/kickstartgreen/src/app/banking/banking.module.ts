import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BankingDashboardPageComponent } from './dashboard/dashboard-page.component';
import { BankingDashboardFeatureModule } from '@banking/dashboard-feature';
import { BankingPaymentPageComponent } from './payment/payment-page.component';


export const BANKING_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: BankingDashboardPageComponent,
  },
  {
    path: 'payment',
    component: BankingPaymentPageComponent,
  },
];
@NgModule({
  declarations: [
    BankingDashboardPageComponent,
    BankingPaymentPageComponent,
  ],
  imports: [
    CommonModule,
    BankingDashboardFeatureModule,
    RouterModule.forChild(BANKING_ROUTES),
  ],
})
export class BankingModule {}
