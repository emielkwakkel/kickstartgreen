import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@shared/material-ui/src';
import { SidenavComponent } from './sidenav/sidenav.component';

const components = [
  SidenavComponent,
]
@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialUiModule],
  exports: components,
})
export class BaseUiModule {}
