import { TestBed } from '@angular/core/testing';

import { ComunasRegionesService } from './comunas-regiones.service';

describe('ComunasRegionesService', () => {
  let service: ComunasRegionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunasRegionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
