import {Injectable} from '@angular/core';
import {SpecialityState} from '../state/specialityState';
import {Router} from '@angular/router';
import {SpecialityService} from '../service/speciality.service';
import {FormGroup} from '@angular/forms';
import {SystemSpeciality} from '../../../../models/systemSpeciality';

@Injectable({
  providedIn: 'root'
})

export class SpecialityNewFacade {

  constructor(private specialityState: SpecialityState, private router: Router, private specialityService: SpecialityService) {
    console.log('constructor SpecialityNewFacade');
    //this.userState.user = JSON.parse(localStorage.getItem('user'));
    if (this.specialityState.speciality != null) {
      this.specialityState.specialityForm = this.updateFormGroup(this.specialityState.speciality);
    } else {
      this.specialityState.specialityForm = this.createFormGroup();
    }
  }

  createFormGroup() {
    return new FormGroup({});
  }

  updateFormGroup(speciality: SystemSpeciality) {
    return new FormGroup({});
  }

  specialitySt() {
    return this.specialityState;
  }

  manageNewOrEdit() {
    if (this.specialityState.speciality != null) {
      this.onEditForm();
    } else {
      this.onSaveForm();
    }
  }

  onEditForm() {
  }

  onSaveForm() {
  }

  onResetForm() {
    this.specialityState.specialityForm.reset();
  }
}
