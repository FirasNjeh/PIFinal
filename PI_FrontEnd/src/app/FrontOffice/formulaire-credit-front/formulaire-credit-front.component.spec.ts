import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCreditFrontComponent } from './formulaire-credit-front.component';

describe('FormulaireCreditFrontComponent', () => {
  let component: FormulaireCreditFrontComponent;
  let fixture: ComponentFixture<FormulaireCreditFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCreditFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCreditFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
