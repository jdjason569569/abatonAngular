import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { OptionService } from '../service/option.service';
import { OptionState } from '../state/option.state';
import { SystemOption } from '../../../../models/SystemOption';
import { Constants } from 'app/constants/Constans';


@Injectable({
  providedIn: 'root'
})
export class OptionListFacade implements OnInit {

  constructor(private optionState: OptionState, private router: Router, private optionService: OptionService) {
    this.listOption();
  }

  ngOnInit() {
    this.listOption();
  }

  optionSt() {
    return this.optionState;
  }

  listOption() {
    this.optionService.getListOption()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.optionState.listOption = resp.data;
          } else {
            console.log('Lista vacia de Option');
          }
        }, error => {
          alert(error);
          console.log(error);
        });
  }

  updateOption(option: SystemOption) {
    localStorage.setItem('option', JSON.stringify(option));
    this.router.navigate([`abaton/user/option/update/${option.idOpt}`]);
  }

  deleteOption(id: number) {
    this.optionService.deleteOption(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.listOption();
          } else {
            alert('delete: Lista vacia de Option');
          }
        }
        ,
        error => {
          console.log('no se puede eliminar');
          alert(error.error.message);
          console.log(error.error);
        }
      );
  }

  viewOptionValue(option: SystemOption) {
    localStorage.setItem('option', JSON.stringify(option));
    this.router.navigate([`abaton/user/option/view/${option.idOpt}`]);
  }


}
