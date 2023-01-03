import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitLayoutComponent } from './exit-layout.component';

describe('ExitLayoutComponent', () => {
  let component: ExitLayoutComponent;
  let fixture: ComponentFixture<ExitLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
