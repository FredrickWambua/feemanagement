import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeemanagerComponent } from './feemanager.component';

describe('FeemanagerComponent', () => {
  let component: FeemanagerComponent;
  let fixture: ComponentFixture<FeemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
