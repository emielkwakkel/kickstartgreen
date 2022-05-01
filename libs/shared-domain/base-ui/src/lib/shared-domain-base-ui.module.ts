import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@shared/material-ui';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  SharedDashboardComponent,
  SharedDynamicComponentDirective,
} from './dashboard/dashboard.component';

const components = [
  SidenavComponent,
  SharedDashboardComponent,
  SharedDynamicComponentDirective,
];
@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialUiModule],
  exports: components,
})
export class BaseUiModule {}
