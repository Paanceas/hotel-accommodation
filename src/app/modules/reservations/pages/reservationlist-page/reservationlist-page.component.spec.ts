import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationlistPageComponent } from './reservationlist-page.component';

describe('ReservationlistPageComponent', () => {
  let component: ReservationlistPageComponent;
  let fixture: ComponentFixture<ReservationlistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationlistPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
