import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommnentDisplayComponent } from './commnent-display.component';

describe('CommnentDisplayComponent', () => {
  let component: CommnentDisplayComponent;
  let fixture: ComponentFixture<CommnentDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommnentDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommnentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
