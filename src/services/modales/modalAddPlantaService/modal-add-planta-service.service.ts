import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalAddPlantaServiceService {

  constructor() { }

  $valorModalAddPlanta = new BehaviorSubject<any>("");
  
  $planta = new BehaviorSubject<any>("");
}
