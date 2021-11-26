import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import { Constants } from 'app/constants/Constans';
import { ConstantListState } from '../state/constantList.state';
import { ConstantService } from '../service/constant.service';
import { SystemConstant } from 'app/models/SystemConstant';





@Injectable({
  providedIn: 'root'
})
export class ConstantListFacade implements OnInit  {
  constructor(private dto: ConstantListState, private router: Router, private service: ConstantService, private activatedRoute: ActivatedRoute) {
      this.listConstant();
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.listConstant();
  }

  getSt() {
    return this.dto;
  }

  listConstant() {
    this.service.getListConstant()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listConstant = resp.data;
            if (this.dto.listConstant.length <= 0) {
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
    this.router.navigate([`abaton/constant/update/${item.idConstant}`],{queryParams: item});
  }

  delete(item: SystemConstant) {
    this.service.delete(item)
      .subscribe(
        (resp: JSendResponse) => { 
          if (resp.status === Constants.SUCCESS) {
            const params = this.activatedRoute.snapshot.params;
            if (params.id) {
              this.listConstant();
            }
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }

  backToSection() {
    this.dto.listConstant = [];
    this.dto.constant = new SystemConstant();
    this.router.navigate([`abaton/constant/`]);
  }


}
