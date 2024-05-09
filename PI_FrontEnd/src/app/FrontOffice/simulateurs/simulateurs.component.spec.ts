import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateursComponent } from './simulateurs.component';

describe('SimulateursComponent', () => {
  let component: SimulateursComponent;
  let fixture: ComponentFixture<SimulateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
