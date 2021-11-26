import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { Constants } from '../../../../constants/Constans';
import { FunctionalityService } from '../service/functionality.service';
import { FunctionalityNewState } from '../state/functionalityNew.state';


@Injectable({
  providedIn: 'root'
})
export class FunctionalityNewFacade implements OnInit {


  dto: FunctionalityNewState;
  activatedRoute: ActivatedRoute;

  constructor(private router: Router, private service: FunctionalityService, private actRoute: ActivatedRoute) {
    console.log('captura parametro dto padre:', actRoute);
    this.activatedRoute = actRoute;
    this.dto = new FunctionalityNewState(this.activatedRoute);

    const paramsP = this.activatedRoute.parent.snapshot.params;
    if (paramsP.id) {
      this.listFunctionality(+paramsP.id);
    }
  }
  ngOnInit() {
    this.dto = new FunctionalityNewState(this.activatedRoute);
  }
  getSt() {
    return this.dto;
  }
  onSaveForm() {
    if (this.dto.funcForm.valid) {
      const paramsP = this.activatedRoute.parent.snapshot.params;
      // new or update option
      if (this.dto.edit) {
        this.update(paramsP.id);
      } else {
        this.create(paramsP.id);
      }
    } else {
      console.log('no valid ');
    }
  }

  create(idFunctionality: number) {
    this.service.save(this.dto.funcForm.value)
      .subscribe((data: JSendResponse) => {
        if (data.status === Constants.SUCCESS) {
          this.onResetForm();
          this.router.navigate([`abaton/functionality/view/${idFunctionality}`]);
        } else {
          alert('Error al agregar');
        }
      },
        error => console.log('entra al  error', error)
      );
  }

  update(idFunctionality: number) {
    this.service.update(this.dto.funcForm.value)
      .subscribe((data: JSendResponse) => {
        if (data.status === Constants.SUCCESS) {
          this.onResetForm();
          this.router.navigate([`abaton/functionality/view/${idFunctionality}`]);
        } else {
          alert('Error al actualizar');
        }
      },
        error => console.log('entra al  error', error)
      );
  }

  onResetForm() {
    this.dto.funcForm.reset();
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
          } else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }





}
