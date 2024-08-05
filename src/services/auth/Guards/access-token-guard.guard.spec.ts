import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessTokenGuardGuard } from './access-token-guard.guard';

describe('accessTokenGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessTokenGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
