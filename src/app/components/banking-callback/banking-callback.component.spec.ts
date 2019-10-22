import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingCallbackComponent } from './banking-callback.component';

describe('BankingCallbackComponent', () => {
  let component: BankingCallbackComponent;
  let fixture: ComponentFixture<BankingCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
