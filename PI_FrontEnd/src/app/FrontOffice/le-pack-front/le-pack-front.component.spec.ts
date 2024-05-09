import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LePackFrontComponent } from './le-pack-front.component';

describe('LePackFrontComponent', () => {
  let component: LePackFrontComponent;
  let fixture: ComponentFixture<LePackFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LePackFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LePackFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
