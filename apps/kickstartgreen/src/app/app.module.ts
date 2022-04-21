import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlantFeatureModule } from '@trees/plant-feature';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'banking',
    loadChildren: () => import('./banking/banking.module').then((esModule) => esModule.BankingModule),
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '**',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    PlantFeatureModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  declarations: [AppComponent, HomePageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
