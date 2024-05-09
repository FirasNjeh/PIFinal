import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistresListComponent } from './sinistres-list.component';

describe('SinistresListComponent', () => {
  let component: SinistresListComponent;
  let fixture: ComponentFixture<SinistresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinistresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinistresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
