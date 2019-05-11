import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupularCategoriesItemComponent } from './pupular-categories-item.component';

describe('PupularCategoriesItemComponent', () => {
  let component: PupularCategoriesItemComponent;
  let fixture: ComponentFixture<PupularCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupularCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupularCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
