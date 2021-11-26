import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OptionValueListFacade} from '../../facade/option-value-list.facade';


@Component({
  selector: 'app-option-value-list',
  templateUrl: './option-value-list.component.html',
  providers: [OptionValueListFacade]
})
export class OptionValueListComponent implements OnInit {
  facade: OptionValueListFacade;
  constructor(private optionFacade: OptionValueListFacade, private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    this.facade = this.optionFacade;
  }

  ngOnInit() {
    this.facade = this.optionFacade;
  }

}
