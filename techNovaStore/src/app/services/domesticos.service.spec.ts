import { TestBed } from '@angular/core/testing';

import { DomesticosService } from './domesticos.service';

describe('DomesticosService', () => {
  let service: DomesticosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomesticosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
