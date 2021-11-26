import {Injectable} from '@angular/core';
import {SystemOptionValue} from '../../../../models/SystemOptionValue';
import {SystemOption} from '../../../../models/SystemOption';


@Injectable({
  providedIn: 'root'
})
export class OptionValueState {
  listOptionValue: SystemOptionValue[] = [];
  optionValue: SystemOptionValue = new SystemOptionValue();
  option: SystemOption;

  constructor() {
    this.option = JSON.parse(localStorage.getItem('option'));
  }
}
