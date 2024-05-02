import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPaymentFrontComponent } from './monthly-payment-front.component';

describe('MonthlyPaymentFrontComponent', () => {
  let component: MonthlyPaymentFrontComponent;
  let fixture: ComponentFixture<MonthlyPaymentFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyPaymentFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPaymentFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
