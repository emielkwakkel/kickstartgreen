import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RoutesRecognized } from '@angular/router';

export interface SideNavMenu {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'shared-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() menu: SideNavMenu[] = [];
  title = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const title = data.state.root.children[0].data['title'];
        this.title = title ? title : this.title
      }
    });
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
