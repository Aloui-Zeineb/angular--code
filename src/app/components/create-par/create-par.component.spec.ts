import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParComponent } from './create-par.component';

describe('CreateParComponent', () => {
  let component: CreateParComponent;
  let fixture: ComponentFixture<CreateParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
