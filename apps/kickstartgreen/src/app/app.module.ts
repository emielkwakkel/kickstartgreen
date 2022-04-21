import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BankingDashboardFeatureModule } from '@banking/dashboard-feature';
import { PlantFeatureModule } from '@trees/plant-feature';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PlantFeatureModule, BankingDashboardFeatureModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
