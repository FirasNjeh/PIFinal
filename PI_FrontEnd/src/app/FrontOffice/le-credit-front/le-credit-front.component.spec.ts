import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeCreditFrontComponent } from './le-credit-front.component';

describe('LeCreditFrontComponent', () => {
  let component: LeCreditFrontComponent;
  let fixture: ComponentFixture<LeCreditFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeCreditFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeCreditFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
