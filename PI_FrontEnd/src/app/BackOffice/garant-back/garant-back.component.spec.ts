import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantBackComponent } from './garant-back.component';

describe('GarantBackComponent', () => {
  let component: GarantBackComponent;
  let fixture: ComponentFixture<GarantBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
