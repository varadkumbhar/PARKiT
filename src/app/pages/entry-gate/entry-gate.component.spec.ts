import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGateComponent } from './entry-gate.component';

describe('EntryGateComponent', () => {
  let component: EntryGateComponent;
  let fixture: ComponentFixture<EntryGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryGateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
