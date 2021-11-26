import { Routes } from '@angular/router';
import { ProfileFuncListComponent } from './profile-func-list.component';
import { ProfileFuncNewComponent } from './profile-func-new.component';

export const PROFILE_FUNC_ROUTES: Routes = [
  { path: '', component: ProfileFuncListComponent },
  { path: 'profileFunc', component: ProfileFuncNewComponent },
  { path: 'profileFunc/:id', component: ProfileFuncNewComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
