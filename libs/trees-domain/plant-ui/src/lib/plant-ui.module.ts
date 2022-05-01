import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreesUtilModule } from '@trees/trees-util';
import { MaterialUiModule } from '@shared/material-ui';
import { PlantTreesComponent } from './plant-trees/plant-trees.component';
import { ReactiveFormsModule } from '@angular/forms';

export { PlantTreesComponent };

@NgModule({
  imports: [
    CommonModule,
    TreesUtilModule,
    MaterialUiModule,
    ReactiveFormsModule,
  ],
  declarations: [PlantTreesComponent],
  exports: [PlantTreesComponent],
})
export class PlantUiModule {}
