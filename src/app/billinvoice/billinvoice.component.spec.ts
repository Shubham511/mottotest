import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinvoiceComponent } from './billinvoice.component';

describe('BillinvoiceComponent', () => {
  let component: BillinvoiceComponent;
  let fixture: ComponentFixture<BillinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
