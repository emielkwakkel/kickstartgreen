import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantTreesComponent } from './plant-trees.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('PlantTreesComponent', () => {
  let component: PlantTreesComponent;
  let fixture: ComponentFixture<PlantTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantTreesComponent],
      imports: [ApolloTestingModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
