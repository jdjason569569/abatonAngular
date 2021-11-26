import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { Constants } from '../../../../constants/Constans';
import { ConstantService } from '../service/constant.service';
import { ConstantNewState } from '../state/constantNew.state';


@Injectable({
  providedIn: 'root'
})

export class ConstantNewFacade implements OnInit {


  dto: ConstantNewState;
  activatedRoute: ActivatedRoute;

  constructor(private router: Router, private service: ConstantService, private actRoute: ActivatedRoute) {
    this.activatedRoute = actRoute;
    this.dto = new ConstantNewState(this.activatedRoute);
    this.listInst();
  }


  ngOnInit() {
    this.dto = new ConstantNewState(this.activatedRoute);
  }


  getSt() {
    return this.dto;
  }

  onSaveForm() {
    if (this.dto.form.valid) {
      const paramsP = this.activatedRoute.parent.snapshot.params;
      // new or update option
      if (this.dto.edit) {
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
          this.router.navigate([`abaton/constant/`]);
        } else {
          alert('Error al agregar');
        }
      },
        error => console.log('entra al  error', error)
      );
  }

  update() {
    this.service.update(this.dto.form.value)
      .subscribe((data: JSendResponse) => {
        if (data.status === Constants.SUCCESS) {
          this.onResetForm();
          this.router.navigate([`abaton/constant/`]);
        } else {
          alert('Error al actualizar');
        }
      },
        error => console.log('entra al  error', error)
      );
  }

  onResetForm() {
    this.dto.form.reset();
  }

  listInst() {
    this.service.getListInst()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listInst = resp.data;
            console.log(this.dto.listInst)
            if (this.dto.listInst.length <= 0) {
              console.log('no se encontraron registros');
            }
          } else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }





}
