import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurAssuranceComponent } from './simulateur-assurance.component';

describe('SimilateurAssuranceComponent', () => {
  let component: SimulateurAssuranceComponent;
  let fixture: ComponentFixture<SimulateurAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateurAssuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateurAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
