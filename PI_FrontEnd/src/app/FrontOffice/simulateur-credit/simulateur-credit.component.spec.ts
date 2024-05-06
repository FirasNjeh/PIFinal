import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurCreditComponent } from './simulateur-credit.component';

describe('SimulateurCreditComponent', () => {
  let component: SimulateurCreditComponent;
  let fixture: ComponentFixture<SimulateurCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateurCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateurCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
