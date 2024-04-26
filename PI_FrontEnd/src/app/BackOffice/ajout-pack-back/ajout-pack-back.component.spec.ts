import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPackBackComponent } from './ajout-pack-back.component';

describe('AjoutPackBackComponent', () => {
  let component: AjoutPackBackComponent;
  let fixture: ComponentFixture<AjoutPackBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPackBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutPackBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
