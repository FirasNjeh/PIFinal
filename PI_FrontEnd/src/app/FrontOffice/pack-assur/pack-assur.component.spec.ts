import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackAssurComponent } from './pack-assur.component';

describe('PackAssurComponent', () => {
  let component: PackAssurComponent;
  let fixture: ComponentFixture<PackAssurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackAssurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackAssurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
