import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantUiModule } from '@trees/plant-ui';
import { TreesUtilModule } from '@trees/trees-util';

@NgModule({
  imports: [CommonModule, PlantUiModule, TreesUtilModule],
})
export class PlantFeatureModule {}
