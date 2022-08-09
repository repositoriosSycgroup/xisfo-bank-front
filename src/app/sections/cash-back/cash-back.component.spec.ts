import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBackComponent } from './cash-back.component';

describe('CashBackComponent', () => {
  let component: CashBackComponent;
  let fixture: ComponentFixture<CashBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
