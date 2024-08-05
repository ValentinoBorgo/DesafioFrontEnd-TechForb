import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdatePlantaComponent } from './modal-update-planta.component';

describe('ModalUpdatePlantaComponent', () => {
  let component: ModalUpdatePlantaComponent;
  let fixture: ComponentFixture<ModalUpdatePlantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdatePlantaComponent]
    });
    fixture = TestBed.createComponent(ModalUpdatePlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
