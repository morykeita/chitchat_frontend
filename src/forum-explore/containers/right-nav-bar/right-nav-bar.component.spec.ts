import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavBarComponent } from './right-nav-bar.component';

describe('RightNavBarComponent', () => {
  let component: RightNavBarComponent;
  let fixture: ComponentFixture<RightNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
