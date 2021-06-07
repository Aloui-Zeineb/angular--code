import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseListComponentComponent } from './purchase-list-component.component';

describe('PurchaseListComponentComponent', () => {
  let component: PurchaseListComponentComponent;
  let fixture: ComponentFixture<PurchaseListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
