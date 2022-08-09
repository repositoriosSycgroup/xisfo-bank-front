import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WefitComponent } from './wefit.component';

describe('WefitComponent', () => {
  let component: WefitComponent;
  let fixture: ComponentFixture<WefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
