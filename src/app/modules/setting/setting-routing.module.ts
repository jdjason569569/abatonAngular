import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/components/user.component';
import {USER_ROUTES} from './user/components/user.routes';
import {OPTION_ROUTES} from './option/components/option.routes';
import {OptionComponent} from './option/components/option.component';
import {ProfileComponent} from './userProfile/components/profile/profile.component';
import {PROFILE_ROUTES} from './userProfile/components/profile/profile.routes';
import {SpecialityComponent} from './userSpeciality/components/speciality.component';
import {SPECIALITY_ROUTES} from './userSpeciality/components/speciality.router';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent, children: USER_ROUTES
  },
  {
    path: 'option',
    component: OptionComponent, children: OPTION_ROUTES
  },
  {
    path: 'profile',
    component: ProfileComponent, children: PROFILE_ROUTES
  },
  {
    path: 'speciality',
    component: SpecialityComponent, children: SPECIALITY_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule {
}
