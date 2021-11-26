import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { SystemConstant } from 'app/models/SystemConstant';
import { SystemInstitutionModel } from 'app/models/SystemInstitution.model';


@Injectable({
  providedIn: 'root'

})
export class ConstantNewState {
    constant: SystemConstant = new SystemConstant();
    listInst: SystemInstitutionModel[] = [];
  form: FormGroup;
  edit = false;

  constructor(private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
   // console.log('captura parametro en new constant:', params.id);
    if (params.id) {
      //this.constant = JSON.parse(localStorage.getItem('constant'));
      this.constant = this.activatedRoute.snapshot.queryParams;
      //console.log('option localstorage:', this.constant);
      this.form = this.updateFormGroup(this.constant);
      this.edit = true;
    } else {
      this.form = this.createFormGroup();
    }
  }


  createFormGroup() {
    return new FormGroup({ 
        idInst: new FormControl(null),
        nameConstant: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        valueConstant: new FormControl('', [Validators.required]),
        descConstant: new FormControl('', [ Validators.maxLength(200)])
    });
  }

  updateFormGroup(obj: SystemConstant) {
    return new FormGroup({
        idConstant: new FormControl(obj.idConstant),
        idInst: new FormControl(obj.idInst),
        nameConstant: new FormControl(obj.nameConstant, [Validators.required, Validators.maxLength(50)]),
        valueConstant: new FormControl(obj.valueConstant, [Validators.required]),
        descConstant: new FormControl(obj.descConstant, [ Validators.maxLength(200)])

    });
  }

  get idInst() {
    return this.form.get('idInst');
  }

  get nameConstant() {
    return this.form.get('nameConstant');
  }

  get valueConstant() {
    return this.form.get('valueConstant');
  }

  get descConstant() {
    return this.form.get('descConstant');
  }




}

