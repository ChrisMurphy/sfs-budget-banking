import { TestBed } from '@angular/core/testing';

import { BankingAuthService } from './banking-auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankingAuthService = TestBed.get(BankingAuthService);
    expect(service).toBeTruthy();
  });
});
