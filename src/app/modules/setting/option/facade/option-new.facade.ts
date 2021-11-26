import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import {OptionService} from '../service/option.service';
import {OptionNewState} from '../state/option-new.state';
import {Constants} from '../../../../constants/Constans';


@Injectable({
  providedIn: 'root'
})
export class OptionNewFacade implements OnInit  {


  optionState: OptionNewState;
  activatedRoute: ActivatedRoute;

  constructor(private optSta: OptionNewState, private router: Router, private service: OptionService, private actRoute: ActivatedRoute) {
    this.activatedRoute = actRoute;
    this.optionState = new OptionNewState(this.activatedRoute);
  }
  ngOnInit() {
    this.optionState = new OptionNewState(this.activatedRoute);
  }
  optionSt() {
    return this.optionState;
  }
  onSaveForm() {
    if (this.optionState.optionForm.valid) {
      if ( this.optionState.edit ) {
        this.updateOption();
      } else {
        this.createOption();
      }
    } else {
      console.log('no valid ');
    }
  }
  createOption() {
    this.service.saveOption(this.optionState.optionForm.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.router.navigate(['abaton/user/option']);
          } else {
            alert('Error al agregar');
          }
        },
        error => console.log('entra al  error', error)
      );
  }

  updateOption() {
    this.service.updateOption(this.optionState.optionForm.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.router.navigate(['abaton/user/option']);
          } else {
            alert('Error al actualizar');
          }
        },
        error => console.log('entra al  error', error)
      );
  }

  onResetForm() {
    this.optionState.optionForm.reset();
  }





}
