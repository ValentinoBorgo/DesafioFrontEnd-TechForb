import { Component, OnInit } from '@angular/core';
import { ModalDeletePlantaServiceService } from 'src/services/modales/modalDeletePlantaService/modal-delete-planta-service.service';
import { PlantasService } from 'src/services/plantas/plantas-service.service';

@Component({
  selector: 'app-modal-delete-planta',
  templateUrl: './modal-delete-planta.component.html',
  styleUrls: ['./modal-delete-planta.component.css']
})
export class ModalDeletePlantaComponent implements OnInit{

  constructor(private modalDeleteService:ModalDeletePlantaServiceService, private plantaService:PlantasService){}

  planta:any;

  ngOnInit(): void {

    let planta = this.modalDeleteService.getPlantaValue();

    this.planta = planta;
  }

  yesDelete(planta:any){
    this.plantaService.deletePlanta(planta.id).subscribe({
      complete : () => {
        alert("Se elimino correctamente la planta " +planta.nombre);
        this.noDelete();
      },
      error : (error) => {
        alert("No se pudo eliminar la planta");
        console.log(error);
        this.noDelete();
      }
    })
  }

  noDelete(){
    this.modalDeleteService.$valorModalDeletePlanta.next(false);
  }

}
