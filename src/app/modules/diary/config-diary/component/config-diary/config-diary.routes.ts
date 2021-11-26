import { Routes } from '@angular/router';
import { ConfigDiaryListDoctorComponent } from '../config-diary-list-doctor/config-diary-list-doctor.component';
import { ConfigDiaryManageDoctorComponent } from '../config-diary-manage-doctor/config-diary-manage-doctor.component';

export const CONFIG_DIARY_ROUTES: Routes = [
    { path: '', component: ConfigDiaryListDoctorComponent },
    { path: 'list-doctor', component: ConfigDiaryListDoctorComponent },
    { path: 'manage-doctor', component: ConfigDiaryManageDoctorComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
    ];