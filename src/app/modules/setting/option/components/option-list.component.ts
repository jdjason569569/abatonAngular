import { Component, OnInit } from '@angular/core';
import {OptionListFacade} from '../facade/option-list.facade';


@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  providers: [OptionListFacade]
})
export class OptionListComponent implements OnInit {

  facade: OptionListFacade;
  constructor(private optionFacade: OptionListFacade) {
    this.facade = this.optionFacade;
  }

  ngOnInit() {
    this.facade = this.optionFacade;
  }

}
