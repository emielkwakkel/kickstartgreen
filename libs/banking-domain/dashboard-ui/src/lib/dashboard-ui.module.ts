import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@shared/material-ui/src'
import { OverviewUiComponent } from './overview/overview.component';

export { OverviewUiComponent };

@NgModule({
  declarations: [OverviewUiComponent],
  imports: [CommonModule, MaterialUiModule],
  exports: [OverviewUiComponent],
})
export class DashboardUiModule {}
