import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAssurancesComponent } from './dashboard-assurances.component';

describe('DashboardAssurancesComponent', () => {
  let component: DashboardAssurancesComponent;
  let fixture: ComponentFixture<DashboardAssurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAssurancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
