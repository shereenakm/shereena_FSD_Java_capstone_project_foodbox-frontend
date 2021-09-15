import { TestBed } from '@angular/core/testing';

import { CartlineService } from './cartline.service';

describe('CartlineService', () => {
  let service: CartlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
