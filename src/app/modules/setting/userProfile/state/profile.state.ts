import { Injectable } from '@angular/core';
import { SystemProfile } from '../../../../models/SystemProfile';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'

})
export class ProfileState {
  listProfile: SystemProfile[] = [];
  profile: SystemProfile = new SystemProfile();
  profileForm: FormGroup;
  edit = false;

  constructor(private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.profile = this.activatedRoute.snapshot.queryParams;
      this.profileForm = this.updateFormGroup(this.profile);
      this.edit = true;
    } else {
      this.profileForm = this.createFormGroup();
    }
  }
  createFormGroup() {
    return new FormGroup({
      nameProfile: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }
  updateFormGroup(profile: SystemProfile) {
    return new FormGroup({
      idProfile: new FormControl(profile.idProfile),
      nameProfile: new FormControl(profile.nameProfile, [Validators.required, Validators.maxLength(50)])
    });
  }

  get nameProfile() {
    return this.profileForm.get('nameProfile');
  }
}
