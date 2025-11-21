import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoService, 
        provideExperimentalZonelessChangeDetection()
      ]
    });
    service = TestBed.inject(TodoService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
