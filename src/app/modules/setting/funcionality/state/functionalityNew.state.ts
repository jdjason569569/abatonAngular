import { Injectable } from '@angular/core';
import { SystemFunctionality } from '../../../../models/SystemFunctionality';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SystemSection } from '../../../../models/SystemSection';


@Injectable({
  providedIn: 'root'

})
export class FunctionalityNewState {
  section: SystemSection = new SystemSection();
  listFunctionality: SystemFunctionality[] = [];
  functionality: SystemFunctionality = new SystemFunctionality();
  funcForm: FormGroup;
  edit = false;

  constructor(private activatedRoute: ActivatedRoute) {


    const params = this.activatedRoute.snapshot.params;
   // console.log('captura parametro dto padre:', paramsP);
    console.log('captura activatedRoute:', activatedRoute);
    if (params.id) {
      //this.functionality = JSON.parse(localStorage.getItem('functionality'));
      this.functionality = this.activatedRoute.snapshot.queryParams;
      console.log('Profile localstorage :', this.functionality);
      this.funcForm = this.updateFormGroup(this.functionality);
      this.edit = true;
    } else {
     const paramsP = this.activatedRoute.parent.snapshot.params;
      this.funcForm = this.createFormGroup(paramsP.id);
    }
  }

  createFormGroup(idSection: number) {
    return new FormGroup({

      idSection: new FormControl(idSection, [Validators.required]),
      sysIdFunctionality: new FormControl(null),
      codFunctionality: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      nameFunctionality: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      descFunctionality: new FormControl('')
    });
  }

  updateFormGroup(obj: SystemFunctionality) {
    console.log('update profile--')
    //console.log(profile.nameProfile)
    return new FormGroup({
      idFunctionality: new FormControl(obj.idFunctionality),
      idSection: new FormControl(obj.idSection, [Validators.required]),
      sysIdFunctionality: new FormControl(obj.sysIdFunctionality),
      codFunctionality: new FormControl(obj.codFunctionality, [Validators.required, Validators.maxLength(50)]),
      nameFunctionality: new FormControl(obj.nameFunctionality, [Validators.required, Validators.maxLength(50)]),
      descFunctionality: new FormControl(obj.descFunctionality)
    });
  }

  get sysIdFunctionality() {
    return this.funcForm.get('sysIdFunctionality');
  }

  get codFunctionality() {
    return this.funcForm.get('codFunctionality');
  }
  get nameFunctionality() {
    return this.funcForm.get('nameFunctionality');
  }
  get descFunctionality() {
    return this.funcForm.get('descFunctionality');
  }





}
