import { Component, OnInit } from '@angular/core';
import { ContractListFacade } from '../../facade/contractList.facade';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  providers: [ContractListFacade]
})
export class ContractListComponent implements OnInit {

  facade: ContractListFacade;
  constructor(private constantFacade: ContractListFacade) {
    this.facade = this.constantFacade;
  }

  ngOnInit() {
    this.facade = this.constantFacade;
  }

}
