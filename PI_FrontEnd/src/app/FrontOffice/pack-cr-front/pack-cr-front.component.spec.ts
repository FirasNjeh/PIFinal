import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCRFrontComponent } from './pack-cr-front.component';

describe('PackCRFrontComponent', () => {
  let component: PackCRFrontComponent;
  let fixture: ComponentFixture<PackCRFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackCRFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackCRFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
