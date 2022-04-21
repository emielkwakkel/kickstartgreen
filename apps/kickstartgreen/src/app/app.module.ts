import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlantFeatureModule } from '@trees/plant-feature';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { BaseUiModule } from '@shared/base-ui'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'banking',
    data: {
      title: 'Banking'
    },
    loadChildren: () => import('./banking/banking.module').then((esModule) => esModule.BankingModule),
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      title: 'Home'
    },
  },
  {
    path: '**',
    component: HomePageComponent,
    data: {
      title: 'Not found'
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BaseUiModule,
    BrowserModule,
    PlantFeatureModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  declarations: [AppComponent, HomePageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
