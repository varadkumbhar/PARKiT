import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateOperatorDashboardComponent } from './gate-operator-dashboard.component';

describe('GateOperatorDashboardComponent', () => {
  let component: GateOperatorDashboardComponent;
  let fixture: ComponentFixture<GateOperatorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateOperatorDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GateOperatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
