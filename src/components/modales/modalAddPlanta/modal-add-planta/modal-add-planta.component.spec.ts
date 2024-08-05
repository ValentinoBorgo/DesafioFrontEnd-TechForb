import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPlantaComponent } from './modal-add-planta.component';

describe('ModalAddPlantaComponent', () => {
  let component: ModalAddPlantaComponent;
  let fixture: ComponentFixture<ModalAddPlantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddPlantaComponent]
    });
    fixture = TestBed.createComponent(ModalAddPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
