import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


import { InsContract } from 'app/models/InsContract';
import { SystemEapb } from 'app/models/SystemEapb';
import { SystemOptionValue } from 'app/models/SystemOptionValue';
import { SystemTariffManual } from 'app/models/SystemTariffManual';


@Injectable({
  providedIn: 'root'

})
export class ContractNewState {
  
    contract: InsContract = new InsContract();
    listEapb: SystemEapb[] = [];
    listRegimen: SystemOptionValue[] = [];
    listTypeCont: SystemOptionValue[] = [];
    listTariffManual: SystemTariffManual[] = [];
  form: FormGroup;
  edit = false;

  constructor(private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
   // console.log('captura parametro en new constant:', params.id);
    if (params.id) {
      //this.constant = JSON.parse(localStorage.getItem('constant'));
      this.contract = this.activatedRoute.snapshot.queryParams;
      //console.log('option localstorage:', this.constant);
      this.form = this.updateFormGroup(this.contract);
      this.edit = true;
    } else {
      this.form = this.createFormGroup();
    }
  }




  createFormGroup() {
    return new FormGroup({
       
        
        idEapb: new FormControl(null),
        nameCont: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        intialDateCont: new FormControl(null, [Validators.required]),
        finalDateCont: new FormControl(null, [Validators.required]),
        regimeCont: new FormControl(null),
        kindCont: new FormControl(null),
        codeCont: new FormControl(''),
        stateCont: new FormControl(true),
        totalValueContract: new FormControl('',[Validators.required]),
        idTama: new FormControl(null),
        ajustTama: new FormControl(null)
       
        
    });
  }

  updateFormGroup(obj: InsContract) {
    return new FormGroup({
        idCont: new FormControl(obj.idCont),
        insIdCont: new FormControl(obj.insIdCont),
        idEapb: new FormControl(obj.idEapb),
        nameCont: new FormControl(obj.nameCont, [Validators.required, Validators.maxLength(50)]),
        intialDateCont: new FormControl(obj.intialDateCont, [Validators.required]),
        finalDateCont: new FormControl(obj.finalDateCont, [Validators.required]),
        regimeCont: new FormControl(obj.regimeCont),
        kindCont: new FormControl(obj.kindCont),
        codeCont: new FormControl(obj.codeCont),
        stateCont: new FormControl(obj.stateCont),
        totalValueContract: new FormControl(obj.totalValueContract),
        idTama: new FormControl(obj.idTama),
        ajustTama: new FormControl(obj.ajustTama)
       

    });
  }

  get idCont() {
    return this.form.get('idCont');
  }

  get insIdCont() {
    return this.form.get('insIdCont');
  }

  get idEapb() {
    return this.form.get('idEapb');
  }

  get nameCont() {
    return this.form.get('nameCont');
  }

  get intialDateCont() {
    return this.form.get('intialDateCont');
  }

  get finalDateCont() {
    return this.form.get('finalDateCont');
  }

  get regimeCont() {
    return this.form.get('regimeCont');
  }

  get kindCont() {
    return this.form.get('kindCont');
  }
  get codeCont() {
    return this.form.get('codeCont');
  } 
  get stateCont() {
    return this.form.get('stateCont');
  }

  get totalValueContract() {
    return this.form.get('totalValueContract');
  }

  get idTama() {
    return this.form.get('idTama');
  }

  get ajustTama() {
    return this.form.get('ajustTama');
  }




}


