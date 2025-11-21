import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHeaderComponent } from './todo-header.component';
import { ComponentRef, provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('TodoHeaderComponent', () => {
  let component: TodoHeaderComponent;
  let fixture: ComponentFixture<TodoHeaderComponent>;
  let componentRef: ComponentRef<TodoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoHeaderComponent],
      providers: [
        provideExperimentalZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoHeaderComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('title', 'Sample Todo');
    componentRef.setInput('state', 'open');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
