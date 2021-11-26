import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SystemSpeciality } from '../../../../models/systemSpeciality';

@Injectable({
    providedIn: 'root'
})
export class SpecialityState {
    listSpeciality: SystemSpeciality[] = [];
    speciality: SystemSpeciality = new SystemSpeciality();
    specialityForm: FormGroup;
}
