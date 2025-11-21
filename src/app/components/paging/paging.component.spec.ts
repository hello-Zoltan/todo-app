import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingComponent } from './paging.component';
import { ComponentRef, provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;
  let componentRef: ComponentRef<PagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagingComponent],
      providers: [
        provideExperimentalZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('pageLength', 100);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
