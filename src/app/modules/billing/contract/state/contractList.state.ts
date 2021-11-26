import { Injectable } from '@angular/core';
import { InsContract } from 'app/models/InsContract';


@Injectable({
  providedIn: 'root'

})
export class ContractListState {
  contract: InsContract = new InsContract();
  listContract: InsContract[] = [];

}
