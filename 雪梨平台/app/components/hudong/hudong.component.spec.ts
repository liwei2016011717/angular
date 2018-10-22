import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HudongComponent } from './hudong.component';

describe('HudongComponent', () => {
  let component: HudongComponent;
  let fixture: ComponentFixture<HudongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HudongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HudongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
