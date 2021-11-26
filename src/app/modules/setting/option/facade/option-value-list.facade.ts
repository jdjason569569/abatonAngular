import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import {OptionValueState} from '../state/option-value.state';
import {OptionValueService} from '../service/option-value.service';
import {SystemOptionValue} from '../../../../models/SystemOptionValue';
import {SystemOption} from '../../../../models/SystemOption';
import { Constants } from '../../../../constants/Constans';




@Injectable({
  providedIn: 'root'
})
export class OptionValueListFacade implements OnInit  {
  optionValueState: OptionValueState;
  constructor(private optionState: OptionValueState, private router: Router, private optionService: OptionValueService, private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    this.optionValueState = optionState;
    if (params.id) {
      this.listOptionValue(params.id);
      this.optionValueState.option = JSON.parse(localStorage.getItem('option'));
    }
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.optionValueState.option = JSON.parse(localStorage.getItem('option'));
    if (params.id) {
      this.listOptionValue(params.id);
    }
  }

  optionSt() {
    return this.optionState;
  }

  listOptionValue(id: number) {
    this.optionService.getListOptionValue(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.optionState.listOptionValue = resp.data;
            if (this.optionState.listOptionValue.length <= 0) {
              console.log('no se encontraron registros');
            }
          }  else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }

  updateOptionValue(option: SystemOptionValue) {
    localStorage.setItem('optionValue', JSON.stringify(option));
    this.router.navigate([`abaton/user/option/view/${option.idOpt}/update/${option.idOptVal}`]);
  }

  deleteOptionValue(option: SystemOptionValue) {
    this.optionService.deleteOptionValue(option)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            const params = this.activatedRoute.snapshot.params;
            if (params.id) {
              this.listOptionValue(params.id);
            }
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }

  backToOption() {
    this.optionValueState.listOptionValue = [];
    this.optionValueState.option = new SystemOption();
    this.router.navigate([`abaton/user/option/`]);
  }


}
