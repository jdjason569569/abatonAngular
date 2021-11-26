import { SystemService } from './SystemService';
import { SysTamaServ } from './SysTamaServ';

export class InsServContract {    
    idServCont?: number;
    idCont?: number;
    idServ?: number;  
    idTama?: number;
    realValueServ?: number;   
    tariffAdjustment?:number;
    totalGoalService?:number;

    systemService?: SystemService;
    sysTamaServ?: SysTamaServ;
    checked?: boolean;
    add?: boolean=null;
  }