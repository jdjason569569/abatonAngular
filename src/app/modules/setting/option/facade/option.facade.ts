import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { OptionService } from '../service/option.service';
import { OptionState } from '../state/option.state';
import { SystemOption } from '../../../../models/SystemOption';
import { Constants } from '../../../../constants/Constans';


@Injectable({
  providedIn: 'root'
})
export class OptionFacade implements OnInit {

  constructor(private optionState: OptionState, private router: Router, private optionService: OptionService) {
    console.log('3 constructor OptionFacade');
    this.listOption();
  }

  ngOnInit() {
    console.log('4 ngOnInit OptionFacade');
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
            console.log('listOption => ', resp.data);
            this.optionState.listOption = resp.data;
          } else {
            console.log('Lista vacia de Option');
          }
        }, error => {
          console.log(error);
        });
  }

  updateOption(option: SystemOption) {
    localStorage.setItem('option', JSON.stringify(option));
    this.router.navigate([`option/update/${option.idOpt}`]);
  }

  deleteOption(id: number) {
    this.optionService.deleteOption(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.listOption();
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }
  viewOptionValue(option: SystemOption) {
    localStorage.setItem('option', JSON.stringify(option));
    this.router.navigate([`option/view/${option.idOpt}`]);
  }


}
