import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import {Constants} from '../../../../constants/Constans';
import { ContractNewState } from '../state/ContractNew.state';
import { ContractService } from '../service/contract.service';
import { OptionValueService } from 'app/modules/setting/option/service/option-value.service';
import { EapbService } from 'app/modules/setting/eapb/service/eapb.service';
import { SwalAlerts } from 'app/components/shared/SwalAlerts';


@Injectable({
  providedIn: 'root'
})

export class ContractNewFacade implements OnInit  {

  dto: ContractNewState;
  activatedRoute: ActivatedRoute;

  constructor(private router: Router,
     private service: ContractService,
     private serviceValueOption: OptionValueService,
     private serviceEapb: EapbService,
     private actRoute: ActivatedRoute,
     private swal: SwalAlerts) {
    
    this.activatedRoute = actRoute;
    this.dto = new ContractNewState(this.activatedRoute);

    
      this.listRegimen();
      this.listTypeContract();
      this.listEapb();
      this.listTama();
    
  }


  ngOnInit() {
    this.dto = new ContractNewState(this.activatedRoute);
  }


  getSt() {
    return this.dto;
  }



  onSaveForm() {
    console.log(this.dto.form.value);
    if (this.dto.form.valid) {
      const paramsP = this.activatedRoute.parent.snapshot.params;
      // new or update option
      if ( this.dto.edit ) {
        this.update();
      } else {
        this.create();
      }
    } else {
      console.log('no valid ');
    }
  }

  create() {
    this.service.save(this.dto.form.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.swal.successTopRigth('Creado correctamente');
            this.router.navigate([`abaton/contract/`]);
          } else {
            this.swal.errorTopRigth('Error al guardar');
             
          }
        },
        error => {
        //console.log('entra al  error', error)
        this.swal.errorTopRigth('Error al guardar');
      }
      );
  }

  update() {
    this.service.update(this.dto.form.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.swal.successTopRigth('Actualizado correctamente');
            this.router.navigate([`abaton/contract/`]);
          } else {
            
            this.swal.errorTopRigth('Error al Actualizar');
          }
        },
        error => {
      //console.log('entra al  error', error)
          this.swal.errorTopRigth('Error al actualizar');
        }
      );
  }

  onResetForm() {
    this.dto.form.reset();
  }

  listRegimen() {
    this.serviceValueOption.getListOptionValueByCode('REGIMEN')
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listRegimen = resp.data;
            console.log(this.dto.listRegimen)
            if (this.dto.listRegimen.length <= 0) {
              console.log('no se encontraron registros');
            }
          }  else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }

  listTypeContract() {
    this.serviceValueOption.getListOptionValueByCode('TIPO_CONTRATO')
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listTypeCont = resp.data;
            console.log(this.dto.listTypeCont)
            if (this.dto.listTypeCont.length <= 0) {
              console.log('no se encontraron registros');
            }
          }  else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }

  listEapb() {
    this.serviceEapb.getListEapb()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listEapb = resp.data;
            console.log(this.dto.listEapb)
            if (this.dto.listEapb.length <= 0) {
              console.log('no se encontraron registros');
            }
          }  else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }

  listTama() {
    this.service.getListTaMa()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listTariffManual = resp.data;
            console.log(this.dto.listTariffManual)
            if (this.dto.listTariffManual.length <= 0) {
              console.log('no se encontraron registros');
            }
          }  else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }


}
