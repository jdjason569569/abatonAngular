import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { ProfileFuncState } from '../state/profileFunc.state';
import { ProfileService } from '../service/profile.service';
import { SystemProfileFunct } from '../../../../models/SystemProfileFunct';



@Injectable({
  providedIn: 'root'
})
export class OptionValueNewFacade implements OnInit {

  constructor(private optionState: ProfileFuncState, private router: Router, private optionService: ProfileService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    /* const params = this.activatedRoute.snapshot.params;
     console.log('4 ngOnInit OptionvalueFacade id:', params.id);
     if (params.id) {
       this.listOptionValue(params.id);
     }*/
  }

  optionSt() {
    return this.optionState;
  }

  updateOptionValue(option: SystemProfileFunct) {
    localStorage.setItem('option-value', JSON.stringify(option));
    this.router.navigate([`option/view/9`]);
  }
}
