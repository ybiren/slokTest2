import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeAssistComponent } from './upgrade-assist.component';

describe('UpgradeAssistComponent', () => {
  let component: UpgradeAssistComponent;
  let fixture: ComponentFixture<UpgradeAssistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeAssistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
