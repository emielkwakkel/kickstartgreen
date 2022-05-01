import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'banking',
    data: {
      title: 'Banking',
    },
    loadChildren: () =>
      import('./banking/banking.module').then(
        (esModule) => esModule.BankingModule
      ),
  },
  {
    path: 'trees',
    data: {
      title: 'Trees',
    },
    loadChildren: () =>
      import('./trees/trees.module').then((esModule) => esModule.TreesModule),
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      title: 'Home',
    },
  },
  {
    path: '**',
    component: HomePageComponent,
    data: {
      title: 'Not found',
    },
  },
];
