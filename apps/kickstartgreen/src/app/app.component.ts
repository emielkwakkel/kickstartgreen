import { Component } from '@angular/core';
import { SideNavMenu } from '@shared/base-ui/src/lib/sidenav/sidenav.component';

@Component({
  selector: 'kickstartgreen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavMenu: SideNavMenu[] = [
    {
      title: 'Banking',
      url: 'banking/dashboard',
      icon: 'account_balance',
    },
    {
      title: 'Plant trees',
      url: 'trees/dashboard',
      icon: 'forest',
    },
  ];
}
