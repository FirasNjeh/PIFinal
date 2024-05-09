import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditBackComponent } from './credit-back.component';

describe('CreditBackComponent', () => {
  let component: CreditBackComponent;
  let fixture: ComponentFixture<CreditBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
