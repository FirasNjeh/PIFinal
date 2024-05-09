import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPackBackComponent } from './afficher-pack-back.component';

describe('AfficherPackBackComponent', () => {
  let component: AfficherPackBackComponent;
  let fixture: ComponentFixture<AfficherPackBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPackBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherPackBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
