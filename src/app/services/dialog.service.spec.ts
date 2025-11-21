import { TestBed } from '@angular/core/testing';
import { DialogService } from './dialog.service';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('DialogService', () => {
  let service: DialogService;
  let mockMatDialog: any;

  beforeEach(() => {
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      providers: [
        DialogService,
        provideExperimentalZonelessChangeDetection()
      ]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
