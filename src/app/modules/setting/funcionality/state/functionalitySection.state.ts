import { Injectable } from '@angular/core';
import { SystemFunctionality } from '../../../../models/SystemFunctionality';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemSection } from '../../../../models/SystemSection';


@Injectable({
  providedIn: 'root'

})
export class FunctionalitySectionState {
listSection: SystemSection[] = [];

}
