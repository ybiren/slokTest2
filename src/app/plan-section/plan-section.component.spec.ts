import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSectionComponent } from './plan-section.component';

describe('PlanSectionComponent', () => {
  let component: PlanSectionComponent;
  let fixture: ComponentFixture<PlanSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
