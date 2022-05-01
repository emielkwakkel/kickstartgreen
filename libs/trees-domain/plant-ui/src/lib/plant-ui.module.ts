import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreesUtilModule } from '@trees/trees-util';
import { MaterialUiModule } from '@shared/material-ui';
import { PlantTreesComponent } from './plant-trees/plant-trees.component';

export { PlantTreesComponent };

@NgModule({
  imports: [CommonModule, TreesUtilModule, MaterialUiModule],
  declarations: [PlantTreesComponent],
  exports: [PlantTreesComponent],
})
export class PlantUiModule {}
