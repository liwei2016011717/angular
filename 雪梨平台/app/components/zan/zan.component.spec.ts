import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanComponent } from './zan.component';

describe('ZanComponent', () => {
  let component: ZanComponent;
  let fixture: ComponentFixture<ZanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
