import { TestBed } from '@angular/core/testing';

import { ModalAddPlantaServiceService } from './modal-add-planta-service.service';

describe('ModalAddPlantaServiceService', () => {
  let service: ModalAddPlantaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAddPlantaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
