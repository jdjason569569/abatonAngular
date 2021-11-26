import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import {OptionValueState} from '../state/option-value.state';
import {OptionValueService} from '../service/option-value.service';
import {SystemOptionValue} from '../../../../models/SystemOptionValue';
import { Constants } from '../../../../constants/Constans';



@Injectable({
  providedIn: 'root'
})
export class OptionValueFacade implements OnInit  {

  constructor(private optionState: OptionValueState, private router: Router, private optionService: OptionValueService, private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.listOptionValue(params.id);
    }
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
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
          } else {
            console.log('Lista vacia de Option');
          }
        }, error => {
          console.log(error);
        });
  }

  updateOptionValue(option: SystemOptionValue) {
    localStorage.setItem('optionValue', JSON.stringify(option));
    this.router.navigate([`option/view/9`]);
  }

  deleteOptionValue(option: SystemOptionValue) {
    this.optionService.deleteOptionValue(option)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            const params = this.activatedRoute.snapshot.params;
            console.log('4 ngOnInit OptionFacade id:', params.id);
            if (params.id) {
              this.listOptionValue(params.id);
            }
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }
}
