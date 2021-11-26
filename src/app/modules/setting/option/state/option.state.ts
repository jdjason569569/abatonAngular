import {Injectable} from '@angular/core';
import {SystemOption} from '../../../../models/SystemOption';


@Injectable({
  providedIn: 'root'
})
export class OptionState {
  listOption: SystemOption[] = [];
  option: SystemOption = new SystemOption();
}
