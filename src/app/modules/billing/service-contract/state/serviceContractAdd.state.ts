import {Injectable} from '@angular/core';
import { InsContract } from 'app/models/InsContract';
import { InsServContract } from 'app/models/InsServContract';
import { SystemTariffManual } from 'app/models/SystemTariffManual';



@Injectable({
  providedIn: 'root'
})
export class ServiceContractAddState {
  listInsSerContract: InsServContract[] = []; 
  listInsSerContractD: InsServContract[] = []; //lista de servcios para quitar del contrato
  listInsSerContractIU: InsServContract[] = []; //para agregar o actualizar  
  listTaMa: SystemTariffManual[];            
  mapInsSerContract: Map<number,InsServContract>= new Map();
  contract: InsContract;
  tamaSelected: string = '';
 

  constructor() {
    //this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
