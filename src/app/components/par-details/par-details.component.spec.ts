import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParDetailsComponent } from './par-details.component';

describe('ParDetailsComponent', () => {
  let component: ParDetailsComponent;
  let fixture: ComponentFixture<ParDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
