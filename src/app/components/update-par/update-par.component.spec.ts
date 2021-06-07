import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParComponent } from './update-par.component';

describe('UpdateParComponent', () => {
  let component: UpdateParComponent;
  let fixture: ComponentFixture<UpdateParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
