import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultionComponent } from './consultion.component';

describe('ConsultionComponent', () => {
  let component: ConsultionComponent;
  let fixture: ComponentFixture<ConsultionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
