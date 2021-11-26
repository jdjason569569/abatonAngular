import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PatientComponent } from './components/patient.component';
import { PATIENT_ROUTES } from './components/patient.routes';


const routes: Routes = [
  {
    path: 'patient',
    component: PatientComponent, children: PATIENT_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule {
}
