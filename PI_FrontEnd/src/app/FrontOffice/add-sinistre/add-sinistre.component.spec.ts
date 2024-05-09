import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSinistreComponent } from './add-sinistre.component';

describe('AddSinistreComponent', () => {
  let component: AddSinistreComponent;
  let fixture: ComponentFixture<AddSinistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSinistreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSinistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
