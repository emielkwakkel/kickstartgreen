import { AfterViewInit, Component, ComponentFactoryResolver, Directive, Input, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[sharedHost]',
})
export class SharedDynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

export interface DashboardCard {
  title: string;
  component: any;
  cols: number;
  rows: number;
}

@Component({
  selector: 'shared-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SharedDashboardComponent implements AfterViewInit {
  @ViewChildren (SharedDynamicComponentDirective, { read: ViewContainerRef }) containers!: QueryList<ViewContainerRef>;
  /** Based on the screen size, switch from standard to one column per row */
  @Input() cards!: DashboardCard[] | null;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
    if (this.containers.length > 0) {
      // The container already exists
      this.initCards();
    };
  
    this.containers.changes.subscribe(() => {
      this.initCards();
    });
  }

  private initCards() {
    this.cards?.forEach((card: any, index: any) => this.addComponent(card.component, index));
  }

  private addComponent(component: any, index: any) {
    const container = this.containers.toArray()[index];
    const factory = this.resolver.resolveComponentFactory(component);
    container.createComponent(factory);
  }
}