import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurancesListComponent } from './assurances-list.component';

describe('AssurancesListComponent', () => {
  let component: AssurancesListComponent;
  let fixture: ComponentFixture<AssurancesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurancesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssurancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
