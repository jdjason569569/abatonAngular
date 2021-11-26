import { Component, OnInit } from '@angular/core';
import { ContractNewFacade } from '../../facade/contractNew.facade';


@Component({
  selector: 'app-contract-new',
  templateUrl: './contract-new.component.html',
  providers: [ContractNewFacade]
})
export class ContractNewComponent implements OnInit {

  facade: ContractNewFacade;
  constructor(private constantFacade: ContractNewFacade) {
    this.facade = this.constantFacade;
  }

  ngOnInit() {
    this.facade = this.constantFacade;
  }

}
