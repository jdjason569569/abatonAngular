import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { OptionValueState } from '../state/option-value.state';
import { OptionValueService } from '../service/option-value.service';
import { SystemOptionValue } from '../../../../models/SystemOptionValue';



@Injectable({
  providedIn: 'root'
})
export class OptionValueNewFacade implements OnInit {

  constructor(private optionState: OptionValueState, private router: Router, private optionService: OptionValueService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  optionSt() {
    return this.optionState;
  }

  updateOptionValue(option: SystemOptionValue) {
    localStorage.setItem('optionValue', JSON.stringify(option));
    this.router.navigate([`option/view/9`]);
  }
}
