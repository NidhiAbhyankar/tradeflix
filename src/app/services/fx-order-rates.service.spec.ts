import { TestBed } from '@angular/core/testing';

import { FxOrderRatesService } from './fx-order-rates.service';

describe('FxOrderRatesService', () => {
  let service: FxOrderRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FxOrderRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
