import { TestBed } from '@angular/core/testing';

import { RouteLoaderGuard } from './route-loader.guard';

describe('RouteLoaderGuard', () => {
  let guard: RouteLoaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteLoaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
