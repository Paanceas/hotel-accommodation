import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SpinnerService } from './services/spinner.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let spinnerServiceSpy: jasmine.SpyObj<SpinnerService>;
  let spinnerService: SpinnerService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SpinnerService', ['loader']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: SpinnerService, useValue: spy },
        { provide: NgxSpinnerService, useValue: jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']) }
      ],
      imports: [RouterTestingModule, NgxSpinnerModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    spinnerServiceSpy = TestBed.inject(SpinnerService) as jasmine.SpyObj<SpinnerService>;
    spinnerService = fixture.debugElement.injector.get(SpinnerService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call loader with true on ngOnInit', () => {
    component.ngOnInit();
    expect(spinnerServiceSpy.loader).toHaveBeenCalledWith(true);
  });

  it('should call loader with false after 3 seconds', fakeAsync(() => {
    component.ngOnInit();
    tick(3000);
    expect(spinnerServiceSpy.loader).toHaveBeenCalledWith(false);
  }));
});
