import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditFrontComponent } from './credit-front.component';

describe('CreditFrontComponent', () => {
  let component: CreditFrontComponent;
  let fixture: ComponentFixture<CreditFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
