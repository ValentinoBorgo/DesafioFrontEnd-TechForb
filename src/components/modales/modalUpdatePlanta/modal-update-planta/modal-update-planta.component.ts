import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalUpdatePlantaServiceService } from 'src/services/modales/modalUpdatePlantaService/modal-update-planta-service.service';
import { PlantasService } from 'src/services/plantas/plantas-service.service';

@Component({
  selector: 'app-modal-update-planta',
  templateUrl: './modal-update-planta.component.html',
  styleUrls: ['./modal-update-planta.component.css']
})
export class ModalUpdatePlantaComponent implements OnInit{

  constructor(private modalUpdateService:ModalUpdatePlantaServiceService, private formBuilder:FormBuilder,
    private plantaService:PlantasService
  ){}

  editForm = this.formBuilder.group({
    planta: [''],
    pais: [''],
    cant_lecturas: [''],
    alertas_medias: [''],
    alertas_rojas: [''],
    cc: ['']
  })


  ngOnInit(): void {
  }

  cancelar(){
    this.modalUpdateService.$valorModalUpdatePlanta.next(false);
  }

  editar() {
    const plantaVieja = this.modalUpdateService.getPlantaValue();
    console.log(plantaVieja, this.editForm);
  
    let planta = {
      nombre: this.editForm.value.planta == null || this.editForm.value.planta == "" ? plantaVieja.nombre : this.editForm.value.planta,
      pais: this.editForm.value.pais == null || this.editForm.value.pais == "" ? plantaVieja.pais : this.editForm.value.pais,
      cant_lecturas: this.editForm.value.cant_lecturas == null || this.editForm.value.cant_lecturas == "" ? plantaVieja.cant_lecturas : this.editForm.value.cant_lecturas,
      alertas_medias: this.editForm.value.alertas_medias == null || this.editForm.value.alertas_medias == "" ? plantaVieja.alertas_medias : this.editForm.value.alertas_medias,
      alertas_rojas: this.editForm.value.alertas_rojas == null || this.editForm.value.alertas_rojas == "" ? plantaVieja.alertas_rojas : this.editForm.value.alertas_rojas,
      bandera: plantaVieja.bandera
    };

    const unCampoNoVacio = Object.values(this.editForm.value).some(value => value !== null && value !== "");
    
  
    if (this.editForm.valid && unCampoNoVacio) {
      this.plantaService.updatePlanta(plantaVieja.id, planta).subscribe({
        error: (error: any) => {
          console.log("ERROR EN HTML : " + error);
          alert("No se puede editar la planta");
        },
        complete: () => {
          alert("Actualización de planta efectiva");
          this.editForm.reset();
          this.cancelar();
        }
      });
    } else {
      alert("Formulario no válido");
    }
  }

  validarNumero(event: KeyboardEvent) {
    const pattern = /[0-9]/;
  
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

}
