import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDetailsComponentComponent } from './purchase-details-component.component';

describe('PurchaseDetailsComponentComponent', () => {
  let component: PurchaseDetailsComponentComponent;
  let fixture: ComponentFixture<PurchaseDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
