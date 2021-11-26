import {Injectable} from '@angular/core';
import {SystemOption} from '../../../../models/SystemOption';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'

})
export class OptionNewState {
  listOption: SystemOption[] = [];
  option: SystemOption = new SystemOption();
  optionForm: FormGroup;
  edit = false;

  constructor(private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    console.log('captura parametro en new option:', params.id);
    if (params.id) {
      this.option = JSON.parse(localStorage.getItem('option'));
      console.log('option localstorage:', this.option);
      this.optionForm = this.updateFormGroup(this.option);
      this.edit = true;
    } else {
      this.optionForm = this.createFormGroup();
    }
  }




  createFormGroup() {
    return new FormGroup({
      nameOpt: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      codOpt: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      descOpt: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  updateFormGroup(option: SystemOption) {
    return new FormGroup({
      idOpt: new FormControl(option.idOpt),
      nameOpt: new FormControl(option.nameOpt, [Validators.required, Validators.maxLength(50)]),
      codOpt: new FormControl(option.codOpt, [Validators.required, Validators.maxLength(50)]),
      descOpt: new FormControl(option.descOpt, [Validators.required, Validators.maxLength(50)])
    });
  }

  get nameOpt() {
    return this.optionForm.get('nameOpt');
  }

  get codOpt() {
    return this.optionForm.get('codOpt');
  }

  get descOpt() {
    return this.optionForm.get('descOpt');
  }




}
