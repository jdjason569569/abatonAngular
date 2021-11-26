import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './components/patient-list.component';
import { PatientComponent } from './components/patient.component';
import { PatientNewComponent } from './components/patient-new.component';
import { SharedModule } from 'app/components/shared/shared.module';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  declarations: [
    PatientComponent,
    PatientListComponent,
    PatientNewComponent
  ],
  imports: [
    SharedModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
