import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestOrdersUiComponent } from './latest-orders.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { environment, Environment } from '@shared/environment-util';

describe('DashboardComponent', () => {
  let component: LatestOrdersUiComponent;
  let fixture: ComponentFixture<LatestOrdersUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LatestOrdersUiComponent],
      imports: [NoopAnimationsModule, LayoutModule, ApolloTestingModule],
      providers: [{ provide: Environment, useValue: environment }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestOrdersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  Array.from({ length: 200 }, (_, idx) => ++idx).forEach((index) => {
    it(`should return index ${index}`, (done) => {
      setTimeout(() => {
        expect(index).toBe(index);
        done();
      }, 150);
    });
  });
});
