import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadFrontComponent } from './head-front.component';

describe('HeadFrontComponent', () => {
  let component: HeadFrontComponent;
  let fixture: ComponentFixture<HeadFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
