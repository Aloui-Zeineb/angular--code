import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePurchaseComponentComponent } from './update-purchase-component.component';

describe('UpdatePurchaseComponentComponent', () => {
  let component: UpdatePurchaseComponentComponent;
  let fixture: ComponentFixture<UpdatePurchaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePurchaseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePurchaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
