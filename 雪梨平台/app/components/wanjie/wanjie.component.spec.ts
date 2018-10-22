import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanjieComponent } from './wanjie.component';

describe('WanjieComponent', () => {
  let component: WanjieComponent;
  let fixture: ComponentFixture<WanjieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanjieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanjieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
