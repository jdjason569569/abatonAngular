import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list.component';
import { PatientNewComponent } from './patient-new.component';

export const PATIENT_ROUTES: Routes = [
  { path: '', component: PatientListComponent },
  { path: 'new', component: PatientNewComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
