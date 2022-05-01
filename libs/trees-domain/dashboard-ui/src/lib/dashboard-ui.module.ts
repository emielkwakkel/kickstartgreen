import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestOrdersUiComponent } from './latest-orders/latest-orders.component';
import { MaterialUiModule } from '@shared/material-ui';

export { LatestOrdersUiComponent };

const components = [LatestOrdersUiComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialUiModule],
  exports: components,
})
export class DashboardUiModule {}
