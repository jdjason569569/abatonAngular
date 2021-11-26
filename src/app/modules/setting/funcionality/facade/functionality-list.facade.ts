import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import { Constants } from 'app/constants/Constans';
// import { listenToTriggersV2 } from 'angular-bootstrap-md/lib/free/utilities';
import { FunctionalityService } from '../service/functionality.service';
import { SystemSection } from '../../../../models/SystemSection';
import { SystemFunctionality } from '../../../../models/SystemFunctionality';
import { FunctionalityListState } from '../state/functionalityList.state';




@Injectable({
  providedIn: 'root'
})
export class FunctionalityListFacade implements OnInit  {
  //optionValueState: ProfileFuncState;
  constructor(private dto: FunctionalityListState, private router: Router, private service: FunctionalityService, private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.listFunctionality(+params.id);
      //this.dto.section = JSON.parse(localStorage.getItem('section'));
      this.dto.section = this.activatedRoute.snapshot.queryParams;
    }

  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //this.dto.section = JSON.parse(localStorage.getItem('section'));
    if (params.id) {
      this.listFunctionality(params.id);
      this.dto.section = this.activatedRoute.snapshot.queryParams;
    }
  }

  getSt() {
    return this.dto;
  }

  listFunctionality(id: number) {
    this.service.getListFunctionality(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listFunctionality = resp.data;
            if (this.dto.listFunctionality.length <= 0) {
              console.log('no se encontraron registros');
            }
          }  else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }

  updateOptionValue(item: SystemFunctionality) {
    //localStorage.setItem('functionality', JSON.stringify(item));
    this.router.navigate([`abaton/functionality/view/${item.idSection}/functionality/${item.idFunctionality}`],{queryParams: item});
  }

  deleteOptionValue(item: SystemFunctionality) {
    this.service.delete(item)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            const params = this.activatedRoute.snapshot.params;
            if (params.id) {
              this.listFunctionality(params.id);
            }
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }

  backToSection() {
    this.dto.listFunctionality = [];
    this.dto.section = new SystemSection();
    this.router.navigate([`abaton/functionality/`]);
  }


}
