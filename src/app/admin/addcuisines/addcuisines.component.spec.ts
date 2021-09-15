import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcuisinesComponent } from './addcuisines.component';

describe('AddcuisinesComponent', () => {
  let component: AddcuisinesComponent;
  let fixture: ComponentFixture<AddcuisinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcuisinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
