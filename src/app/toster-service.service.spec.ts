import { TestBed } from '@angular/core/testing';

import { ToasterService } from './toster-service.service';

describe('TosterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasterService= TestBed.get(ToasterService);
    expect(service).toBeTruthy();
  });
});
