import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import { ContractListState } from '../state/contractList.state';
import { ContractService } from '../service/contract.service';
import { Constants } from 'app/constants/Constans';
import { SystemConstant } from 'app/models/SystemConstant';
import { InsContract } from 'app/models/InsContract';





@Injectable({
  providedIn: 'root'
})
export class ContractListFacade implements OnInit  {
  //optionValueState: ProfileFuncState;
  constructor(private dto: ContractListState, private router: Router, private service: ContractService, private activatedRoute: ActivatedRoute) {
   
      this.listContract();
    

  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.listContract();
  }

  getSt() {
    return this.dto;
  }

  listContract() {
    this.service.getListContract()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listContract = resp.data;
            if (this.dto.listContract.length <= 0) {
              console.log('no se encontraron registros');
            }
          }  else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }

  update(item: SystemConstant) {
    //localStorage.setItem('constant', JSON.stringify(item));
    this.router.navigate([`abaton/contract/update/${item.idConstant}`],{queryParams: item});
  }

  addService(item: InsContract) {
    //localStorage.setItem('constant', JSON.stringify(item));
    this.router.navigate([`abaton/contract/addService/${item.idCont}`],{queryParams: item});
  }

  insert() {
    //localStorage.setItem('constant', JSON.stringify(item));
    this.router.navigate([`abaton/contract/new/`]);
  }

  delete(item: InsContract) {
    this.service.delete(item)
      .subscribe(
        (resp: JSendResponse) => { 
          if (resp.status === Constants.SUCCESS) {
            const params = this.activatedRoute.snapshot.params;
            if (params.id) {
              this.listContract();
            }
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }




}
