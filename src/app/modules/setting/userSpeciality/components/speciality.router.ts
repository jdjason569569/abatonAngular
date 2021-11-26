import { Routes } from '@angular/router';
import { SpecialityListComponent } from './speciality-list.component';
import { SpecialityNewComponent } from './speciality-new.component';


export const SPECIALITY_ROUTES: Routes = [
    { path: '', component: SpecialityListComponent },
    { path: 'new', component: SpecialityNewComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
