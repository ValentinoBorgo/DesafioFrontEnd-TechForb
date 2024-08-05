import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDeletePlantaServiceService {

  constructor() { }

  private plantaSubject = new BehaviorSubject<any>(null);

  $valorModalDeletePlanta = new BehaviorSubject<any>("");
  
  $planta = this.plantaSubject.asObservable();

  setPlanta(planta:any) {
    this.plantaSubject.next(planta);
  }

  getPlantaValue(){
    return this.plantaSubject.getValue();
  }
}
