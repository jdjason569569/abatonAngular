import { Component, OnInit } from '@angular/core';
import { FunctionalityListFacade } from '../facade/functionality-list.facade';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  providers: [FunctionalityListFacade]
})
export class FunctionalityListComponent implements OnInit {

  facade: FunctionalityListFacade;
  constructor(private optionFacade: FunctionalityListFacade) {
    this.facade = this.optionFacade;
  }

  ngOnInit() {
    this.facade = this.optionFacade;
  }

}
