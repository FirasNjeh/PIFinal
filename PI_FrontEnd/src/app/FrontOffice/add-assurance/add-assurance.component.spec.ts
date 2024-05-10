import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssuranceComponent } from './add-assurance.component';

describe('AddAssuranceComponent', () => {
  let component: AddAssuranceComponent;
  let fixture: ComponentFixture<AddAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
