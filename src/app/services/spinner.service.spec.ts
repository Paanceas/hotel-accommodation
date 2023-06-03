import { TestBed } from '@angular/core/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;
  let spinnerServiceSpy: jasmine.SpyObj<NgxSpinnerService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);

    TestBed.configureTestingModule({
      providers: [
        SpinnerService,
        { provide: NgxSpinnerService, useValue: spy }
      ]
    });
    service = TestBed.inject(SpinnerService);
    spinnerServiceSpy = TestBed.inject(NgxSpinnerService) as jasmine.SpyObj<NgxSpinnerService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open the spinner', () => {
    service.loader(true);
    expect(spinnerServiceSpy.show).toHaveBeenCalled();
  });

  it('should close the spinner', () => {
    service.loader(false);
    expect(spinnerServiceSpy.hide).toHaveBeenCalled();
  });
});
