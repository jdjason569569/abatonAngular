import { Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list.component';
import { ProfileNewComponent } from './profile-new.component';
import { PROFILE_FUNC_ROUTES } from '../profile-func/profileFunc.routes';
import { ProfileFuncComponent } from '../profile-func/profile-func.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { SectionConstant } from 'app/constants/Section.constant';


export const PROFILE_ROUTES: Routes = [
  { path: '', component: ProfileListComponent },
  { path: 'profile', component: ProfileNewComponent },
  { path: 'profile/:id', component: ProfileNewComponent },
  { path: 'view/:id', component: ProfileFuncComponent,
    children: PROFILE_FUNC_ROUTES
    //, canActivate: [AuthGuard],
    //data: {section: [SectionConstant.user_configuration], typeComponent: ['functionality']}
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
  ];
