import { Component, OnInit } from '@angular/core';
import { ConstantListFacade } from '../../facade/constantList.facade';

@Component({
  selector: 'app-constant-list',
  templateUrl: './constant-list.component.html',
  providers: [ConstantListFacade]
})
export class ConstantListComponent implements OnInit {

  facade: ConstantListFacade;
  constructor(private constantFacade: ConstantListFacade) {
    this.facade = this.constantFacade;
  }

  ngOnInit() {
    this.facade = this.constantFacade;
  }

}
