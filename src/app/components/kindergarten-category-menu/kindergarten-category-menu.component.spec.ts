import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergartenCategoryMenuComponent } from './kindergarten-category-menu.component';

describe('KindergartenCategoryMenuComponent', () => {
  let component: KindergartenCategoryMenuComponent;
  let fixture: ComponentFixture<KindergartenCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindergartenCategoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindergartenCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
