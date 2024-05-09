import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeCreditBackComponent } from './le-credit-back.component';

describe('LeCreditBackComponent', () => {
  let component: LeCreditBackComponent;
  let fixture: ComponentFixture<LeCreditBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeCreditBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeCreditBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
