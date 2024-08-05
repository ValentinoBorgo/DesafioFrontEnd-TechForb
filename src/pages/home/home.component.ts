import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ModalAddPlantaServiceService } from 'src/services/modales/modalAddPlantaService/modal-add-planta-service.service';
import { ModalDeletePlantaServiceService } from 'src/services/modales/modalDeletePlantaService/modal-delete-planta-service.service';
import { ModalUpdatePlantaServiceService } from 'src/services/modales/modalUpdatePlantaService/modal-update-planta-service.service';
import { PlantasService } from 'src/services/plantas/plantas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  nombreApellido:string = "";

  plantas:Array<any> = [];

  totalizadores:any;

  sensoresDeshabilitados:number = 0;

  modalAddPlantaHtml:boolean = false;

  modalUpdatePlantaHtml:boolean = false;

  modalDeletePlantaHtml:boolean = false;

  accionesEE:any;

  suscription: Subscription = new Subscription;
  
  constructor(private cookie:CookieService, private plantasService:PlantasService, private modalAddPlanta:ModalAddPlantaServiceService,
    private modalUpdatePlanta:ModalUpdatePlantaServiceService, private modalDeletePlanta:ModalDeletePlantaServiceService
  ){}

  ngOnInit(): void {

    this.getDatos();
    this.getPlantas();
    this.getMaxSensoresDeshabilitados();
    this.getTotalizadores();

    this.suscription = this.plantasService.getRefresh().subscribe(() => {
      this.getPlantas();
      this.getMaxSensoresDeshabilitados();
      this.getTotalizadores();
    })

    this.modalAddPlanta.$valorModalAddPlanta.subscribe(
      (valor) => {this.modalAddPlantaHtml = valor})

      this.modalUpdatePlanta.$valorModalUpdatePlanta.subscribe(
        (valor) => {this.modalUpdatePlantaHtml = valor})

        this.modalDeletePlanta.$valorModalDeletePlanta.subscribe(
          (valor) => {this.modalDeletePlantaHtml = valor})
  }

  getDatos(){
    let arrayDatos = this.cookie.get("datos");
    let datos = arrayDatos.replace(/\[|\]/g, '').split(',')
    this.nombreApellido = datos[0] + datos[1]; 
  }

  getPlantas(){
    this.plantasService.getPlantas().subscribe(
      plantas => {
        this.plantas = plantas;
      },
      error => {
        alert("Se ha producido un error con la busqueda de plantas");
      }
    )
  }

  // accionesEEVisibilidad(){
  //   this.accionesEE = !this.accionesEE;
  // }

  acciones(i: number): void {
    this.accionesEE = (this.accionesEE === i) ? null : i;
  }

  editar(planta:any){
    this.modalUpdatePlantaHtml = true;
    this.modalUpdatePlanta.setPlanta(planta);
  }

  eliminar(planta:any){
    this.modalDeletePlantaHtml = true;
    this.modalDeletePlanta.setPlanta(planta);
  }

  getTotalizadores(){
    this.plantasService.getTotalizadores().subscribe(
      totalizadores => {
        this.totalizadores = totalizadores;
      },
      error => {
        alert("Se ha producido un error con la busqueda de totalizadores");
      }
    )
  }

  getMaxSensoresDeshabilitados(){
    this.plantasService.getMaxSensoresDeshabilitados().subscribe(
      sensoresDeshabilitados => {
        this.sensoresDeshabilitados = sensoresDeshabilitados;
      },
      error => {
        alert("Se ha producido un error con la busqueda de sensores deshabilitados");
      }
    )
  }

  modalAdd(){
    this.modalAddPlantaHtml = true;
  }

}