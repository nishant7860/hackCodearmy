import { TestBed, async, inject } from '@angular/core/testing';

import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
import { TestModule } from 'src/app/test.module';

describe('SecureInnerPages.Guard.TsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      providers: []
    });
  });

  it('should ...', inject([SecureInnerPagesGuard], (guard: SecureInnerPagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
