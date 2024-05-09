import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackAssurListComponent } from './pack-assur-list.component';

describe('PackAssurListComponent', () => {
  let component: PackAssurListComponent;
  let fixture: ComponentFixture<PackAssurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackAssurListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackAssurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
