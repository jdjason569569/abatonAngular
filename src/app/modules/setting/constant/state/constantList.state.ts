import { Injectable } from '@angular/core';
import { SystemConstant } from 'app/models/SystemConstant';


@Injectable({
  providedIn: 'root'

})
export class ConstantListState {
  constant: SystemConstant = new SystemConstant();
  listConstant: SystemConstant[] = [];

}
