import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContentComponent } from './todo-content.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('TodoContentComponent', () => {
  let component: TodoContentComponent;
  let fixture: ComponentFixture<TodoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoContentComponent],
      providers: [
        provideExperimentalZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
