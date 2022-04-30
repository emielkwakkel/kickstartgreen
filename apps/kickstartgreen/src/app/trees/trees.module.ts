import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TreesDashboardPageComponent } from './dashboard/dashboard-page.component';
import { TreesPlantPageComponent } from './plant/plant-page.component';
import { TreesDashboardFeatureModule } from '@trees/dashboard-feature';

export const TREES_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: TreesDashboardPageComponent,
    data: {
      title: 'Trees Dashboard',
    },
  },
  {
    path: 'plant',
    component: TreesPlantPageComponent,
    data: {
      title: 'Plant trees',
    },
  },
];
@NgModule({
  declarations: [TreesPlantPageComponent, TreesDashboardPageComponent],
  imports: [
    CommonModule,
    TreesDashboardFeatureModule,
    RouterModule.forChild(TREES_ROUTES),
  ],
})
export class TreesModule {}
