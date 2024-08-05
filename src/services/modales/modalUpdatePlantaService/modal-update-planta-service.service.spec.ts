import { TestBed } from '@angular/core/testing';

import { ModalUpdatePlantaServiceService } from './modal-update-planta-service.service';

describe('ModalUpdatePlantaServiceService', () => {
  let service: ModalUpdatePlantaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalUpdatePlantaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
