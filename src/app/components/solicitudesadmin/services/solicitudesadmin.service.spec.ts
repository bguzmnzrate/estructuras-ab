import { TestBed } from '@angular/core/testing';

import { SolicitudesadminService } from './solicitudesadmin.service';

describe('SolicitudesadminService', () => {
  let service: SolicitudesadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
