import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParListComponent } from './par-list.component';

describe('ParListComponent', () => {
  let component: ParListComponent;
  let fixture: ComponentFixture<ParListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
