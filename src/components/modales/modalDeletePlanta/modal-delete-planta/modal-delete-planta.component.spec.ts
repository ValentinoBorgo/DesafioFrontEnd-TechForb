import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletePlantaComponent } from './modal-delete-planta.component';

describe('ModalDeletePlantaComponent', () => {
  let component: ModalDeletePlantaComponent;
  let fixture: ComponentFixture<ModalDeletePlantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeletePlantaComponent]
    });
    fixture = TestBed.createComponent(ModalDeletePlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
