import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintinvComponent } from './printinv.component';

describe('PrintinvComponent', () => {
  let component: PrintinvComponent;
  let fixture: ComponentFixture<PrintinvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintinvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
