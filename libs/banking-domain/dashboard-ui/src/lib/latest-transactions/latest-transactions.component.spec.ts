import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTransactionsUiComponent } from './latest-transactions.component';

describe('DashboardComponent', () => {
  let component: LatestTransactionsUiComponent;
  let fixture: ComponentFixture<LatestTransactionsUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LatestTransactionsUiComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTransactionsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
