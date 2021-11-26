import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { SpecialityState } from '../state/specialityState';
import { SpecialityService } from '../service/speciality.service';
import { SystemSpeciality } from '../../../../models/systemSpeciality';
import { Constants } from '../../../../constants/Constans';

@Injectable({
    providedIn: 'root'
})
export class SpecialityListFacade {
    constructor(private specialityState: SpecialityState, private router: Router, private specialityService: SpecialityService) {
        console.log('constructor SpecialityListFacade');
        this.listSpecialitySystem();
    }

    cleanSpeciality() {
        localStorage.removeItem('speciality');
    }
    specialitySt() {
        return this.specialityState;
    }

    listSpecialitySystem() {
        this.specialityService.getListSpecialityService()
            .subscribe(
                (resp: JSendResponse) => {
                    if (resp.status === Constants.SUCCESS) {
                        console.log('Especialidades => ', resp.data);
                        this.specialityState.listSpeciality = resp.data;
                    } else {
                        console.log('Lista vacia de especialidades');
                    }
                }, error => {
                    console.log(error);
                });
    }
    updateSpeciality(speciality: SystemSpeciality) {
        localStorage.setItem('speciality', JSON.stringify(speciality));
        this.router.navigate(['speciality/new']);
    }
    deleteSpeciality(id: number) {
        this.specialityService.deleteSpeciality(id)
            .subscribe(
                (resp: JSendResponse) => {
                    if (resp.status === Constants.SUCCESS) {
                        this.listSpecialitySystem();
                    } else {
                        console.log('delete: Lista vacia de especialidades');
                    }
                });
    }

}
