import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JianjieComponent } from './jianjie.component';

describe('JianjieComponent', () => {
  let component: JianjieComponent;
  let fixture: ComponentFixture<JianjieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JianjieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JianjieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
