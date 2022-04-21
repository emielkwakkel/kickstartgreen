import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule
];

@NgModule({
  imports: [CommonModule, ...materialModules ],
  exports: [ ...materialModules ]
})
export class MaterialUiModule {}
