import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUiModule } from '@banking/dashboard-ui';
import { MaterialUiModule } from '@shared/material-ui/src';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseUiModule } from '@shared/base-ui';
import { GraphQLUtilModule } from '@shared/graphql-util/src';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardUiModule,
    MaterialUiModule,
    BaseUiModule,
    GraphQLUtilModule,
  ],
  exports: [DashboardComponent],
})
export class TreesDashboardFeatureModule {}
