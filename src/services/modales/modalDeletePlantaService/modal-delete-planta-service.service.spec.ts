import { TestBed } from '@angular/core/testing';

import { ModalDeletePlantaServiceService } from './modal-delete-planta-service.service';

describe('ModalDeletePlantaServiceService', () => {
  let service: ModalDeletePlantaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDeletePlantaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
