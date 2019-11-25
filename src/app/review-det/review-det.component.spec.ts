import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDetComponent } from './review-det.component';

describe('ReviewDetComponent', () => {
  let component: ReviewDetComponent;
  let fixture: ComponentFixture<ReviewDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
