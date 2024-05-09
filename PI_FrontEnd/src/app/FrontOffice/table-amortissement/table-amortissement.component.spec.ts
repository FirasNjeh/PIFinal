import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAmortissementComponent } from './table-amortissement.component';

describe('TableAmortissementComponent', () => {
  let component: TableAmortissementComponent;
  let fixture: ComponentFixture<TableAmortissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAmortissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAmortissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
