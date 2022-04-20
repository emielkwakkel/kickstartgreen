import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BankingDashboardFeatureModule } from '@banking/dashboard-feature';
import { PlantFeatureModule } from '@trees/plant-feature';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PlantFeatureModule, BankingDashboardFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
