import { Component, OnInit } from '@angular/core';
import { FunctionalityNewFacade } from '../facade/functionality-new.facade';

@Component({
  selector: 'app-functionality-new',
  templateUrl: './functionality-new.component.html',
  providers: [FunctionalityNewFacade]
})
export class FunctionalityNewComponent implements OnInit {

  facade: FunctionalityNewFacade;
  constructor(private optionFacade: FunctionalityNewFacade) {
    this.facade = this.optionFacade;
  }

  ngOnInit() {
    this.facade = this.optionFacade;
  }
}
