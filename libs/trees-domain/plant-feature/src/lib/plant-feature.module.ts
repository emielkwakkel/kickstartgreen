import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantUiModule } from '@trees/plant-ui';
import { PlantUtilModule } from '@trees/plant-util';

@NgModule({
  imports: [CommonModule, PlantUiModule, PlantUtilModule],
})
export class PlantFeatureModule {}
