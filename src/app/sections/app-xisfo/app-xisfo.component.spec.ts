import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppXisfoComponent } from './app-xisfo.component';

describe('AppXisfoComponent', () => {
  let component: AppXisfoComponent;
  let fixture: ComponentFixture<AppXisfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppXisfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppXisfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
