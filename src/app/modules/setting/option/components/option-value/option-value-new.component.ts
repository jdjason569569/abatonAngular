import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SystemOptionValue} from '../../../../../models/SystemOptionValue';
import {ActivatedRoute, Router} from '@angular/router';
import {OptionValueService} from '../../service/option-value.service';
import {JSendResponse} from '../../../../../models/JSendResponse';
import {OptionValueFacade} from '../../facade/option-value.facade';
import {OptionValueListFacade} from '../../facade/option-value-list.facade';
import {OptionValueNewFacade} from '../../facade/option-value-new.facade';
import {Constants} from '../../../../../constants/Constans';


@Component({
  selector: 'app-option-value-new',
  templateUrl: './option-value-new.component.html',
  providers: [OptionValueNewFacade]
})
export class OptionValueNewComponent implements OnInit {
  optionValueForm: FormGroup;
  optionValue: SystemOptionValue;
  facade: OptionValueNewFacade;
  edit = false;
  constructor(private optionValueFacade: OptionValueNewFacade, private router: Router, private service: OptionValueService, private activatedRoute: ActivatedRoute) {
    this.facade = optionValueFacade;
  }

  ngOnInit() {
    const paramsP = this.activatedRoute.parent.snapshot.params;
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.optionValue = JSON.parse(localStorage.getItem('optionValue'));
      this.optionValueForm = this.updateFormGroup(this.optionValue);
      this.edit = true;
    } else {
      this.optionValueForm = this.createFormGroup(paramsP.id);
    }
  }

  createFormGroup( idOpt: number ) {
    return new FormGroup({
      idOpt: new FormControl(idOpt),
      nameOptVal: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      codOptVal: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      descOptVal: new FormControl(''),
      stateOptVal: new FormControl(true)
    });
  }

  updateFormGroup(option: SystemOptionValue) {
    return new FormGroup({
      idOptVal: new FormControl(option.idOptVal),
      idOpt: new FormControl(option.idOpt),
      nameOptVal: new FormControl(option.nameOptVal, [Validators.required, Validators.maxLength(50)]),
      codOptVal: new FormControl(option.codOptVal, [Validators.required, Validators.maxLength(50)]),
      descOptVal: new FormControl(option.descOptVal),
      stateOptVal: new FormControl(option.stateOptVal)
    });
  }

  onSaveForm() {
    if (this.optionValueForm.valid) {
      const paramsP = this.activatedRoute.parent.snapshot.params;
      const params = this.activatedRoute.snapshot.params;
      // new or update option
      if ( this.edit ) {
        this.updateOptionValue( paramsP.id );
      } else {
        this.createOptionValue(paramsP.id);
      }
    } else {
      console.log('no valid ');
    }
  }

  createOptionValue(idOpt: number) {
    this.service.saveOptionValue(this.optionValueForm.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.router.navigate([`abaton/user/option/view/${idOpt}`]);
          } else {
            alert('Error al agregar');
          }
        },
        error => console.log('entra al  error', error)
      );
  }

  updateOptionValue(idOpt: number) {
    this.service.updateOptionValue(this.optionValueForm.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.router.navigate([`abaton/user/option/view/${idOpt}`]);
          } else {
            alert('Error al actualizar');
          }
        },
        error => console.log('entra al  error', error)
      );
  }

  onResetForm() {
    this.optionValueForm.reset();
  }

  get nameOptVal() {
    return this.optionValueForm.get('nameOptVal');
  }

  get codOptVal() {
    return this.optionValueForm.get('codOptVal');
  }

  get descOptVal() {
    return this.optionValueForm.get('descOptVal');
  }

  get stateOptVal() {
    return this.optionValueForm.get('stateOptVal');
  }

}
