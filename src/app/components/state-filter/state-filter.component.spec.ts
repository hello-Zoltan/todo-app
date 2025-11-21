import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFilterComponent } from './state-filter.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('StateFilterComponent', () => {
  let component: StateFilterComponent;
  let fixture: ComponentFixture<StateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateFilterComponent],
      providers: [
        provideExperimentalZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
