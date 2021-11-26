import { Component, OnInit } from '@angular/core';
import { FunctionalityListSectionFacade } from '../facade/functionality-list-section.facade';

@Component({
  selector: 'app-functionality-list-section',
  templateUrl: './functionality-list-section.component.html',
  providers: [FunctionalityListSectionFacade]
})
export class FunctionalityListSectionComponent implements OnInit {

  facade: FunctionalityListSectionFacade;
  constructor(private optionFacade: FunctionalityListSectionFacade) {
    this.facade = this.optionFacade;
  }

  ngOnInit() {
    this.facade = this.optionFacade;
  }
}
