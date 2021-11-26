import {Injectable} from '@angular/core';
import {InsPatientInfoModel} from '../../../models/InsPatientInfo.model';

@Injectable({
  providedIn: 'root'
})
export class PatientState {
  patientInfo: InsPatientInfoModel;

}
