import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBackComponent } from './profil-back.component';

describe('ProfilBackComponent', () => {
  let component: ProfilBackComponent;
  let fixture: ComponentFixture<ProfilBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
