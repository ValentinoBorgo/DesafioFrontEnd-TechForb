import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ModalAddPlantaServiceService } from 'src/services/modales/modalAddPlantaService/modal-add-planta-service.service';
import { PlantasService } from 'src/services/plantas/plantas-service.service';

@Component({
  selector: 'app-modal-add-planta',
  templateUrl: './modal-add-planta.component.html',
  styleUrls: ['./modal-add-planta.component.css']
})
export class ModalAddPlantaComponent implements OnInit{

  // $valorModalHtml:any = "";

  paises:any;

  paisesAPI!: Observable<any[]>;

  filtroPaisesAPI!: Observable<any[]>;

  paisesControl = new FormControl('');

  banderaJSON:any;

  paisJSON:any;
  
  constructor(private modalAddPlantaService:ModalAddPlantaServiceService, private plantaService:PlantasService, private formBuilder:FormBuilder){}

  paisesForm = this.formBuilder.group({
    planta: ['',Validators.required],
  })

  ngOnInit(): void {
    this.apiPaises();
  }

  //  cargarUsers(){
  //    this.usuarioService.getUsuarios().subscribe(users => {
  //      this.usuarios = users;
  //      this.filteredUsers = this.userControl.valueChanges.pipe(
  //      startWith(''),
  //        map(value => this._filtrarPaises(value))
  //    );
  //    });
  //  }

   _filtrarPaises(value: any): any[] {
     return this.paises.filter((pais:any) => pais.name.common.toLowerCase().includes(value));
   }

   onPaisChange(pais: any) {
    this.banderaJSON = pais.flags.png;
    this.paisJSON = pais.name.common;
     this.paisesControl.setValue(pais.name.common);
   }

  cancelar(){
    this.modalAddPlantaService.$valorModalAddPlanta.next(false);
  }

  apiPaises(){
    this.plantaService.apiPaises().subscribe(
      paises => {
        this.paises = paises;
        this.filtroPaisesAPI = this.paisesControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filtrarPaises(value))
        )
      },
      error => {
        alert("Se ha producido un error con la busqueda de paises");
      }
    )
  }

  postPlanta(){

    let planta = {
      nombre : this.paisesForm.value.planta,
      bandera : this.banderaJSON,
      pais : this.paisJSON,
    }


    if(this.paisesForm.valid && this.banderaJSON != "" && this.paisJSON != ""){
      this.plantaService.postPlanta(planta).subscribe({
        error : (error) => {
         console.log("ERROR EN HTML : "+ error);
         alert("No se puede cargar la Planta, intente nuevamente");
       },
       complete : () => {
          alert("Registro de planta efectivo");
         this.paisesForm.reset();
         this.paisesControl.setValue("");
         this.cancelar();
        }
      })
    }else if(!this.paisesForm.valid || this.banderaJSON == "" || this.paisJSON == ""){
      alert("Faltan rellenar campos");
    }

  }

}
