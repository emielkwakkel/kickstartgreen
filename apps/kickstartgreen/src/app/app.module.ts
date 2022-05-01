import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlantFeatureModule } from '@trees/plant-feature';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { BaseUiModule } from '@shared/base-ui';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLUtilModule } from '@shared/graphql-util';
import { environment, Environment } from '@shared/environment-util';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BaseUiModule,
    BrowserModule,
    PlantFeatureModule,
    BrowserAnimationsModule,
    LayoutModule,
    GraphQLUtilModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HomePageComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: Environment, useValue: environment }],
})
export class AppModule {}
