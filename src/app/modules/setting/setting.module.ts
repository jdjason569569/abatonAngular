import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import {UserComponent} from './user/components/user.component';
import {UserNewComponent} from './user/components/user-new.component';
import {UserListComponent} from './user/components/user-list.component';
import {HttpClientModule} from '@angular/common/http';
//import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BnNgIdleService} from 'bn-ng-idle';
import {OptionComponent} from './option/components/option.component';
import {OptionListComponent} from './option/components/option-list.component';
import {OptionNewComponent} from './option/components/option-new.component';
import {OptionValueComponent} from './option/components/option-value/option-value.component';
import {OptionValueListComponent} from './option/components/option-value/option-value-list.component';
import {OptionValueNewComponent} from './option/components/option-value/option-value-new.component';

import {ProfileComponent} from './userProfile/components/profile/profile.component';
import {ProfileListComponent} from './userProfile/components/profile/profile-list.component';
import {ProfileNewComponent} from './userProfile/components/profile/profile-new.component';
import {ProfileFuncComponent} from './userProfile/components/profile-func/profile-func.component';
import {ProfileFuncListComponent} from './userProfile/components/profile-func/profile-func-list.component';
import {ProfileFuncNewComponent} from './userProfile/components/profile-func/profile-func-new.component';
import {TreeViewComponent} from './userProfile/components/tree-view/tree-view.component';
import {SpecialityComponent} from './userSpeciality/components/speciality.component';
import {SpecialityNewComponent} from './userSpeciality/components/speciality-new.component';
import {SpecialityListComponent} from './userSpeciality/components/speciality-list.component';
import { ConstantListComponent } from './constant/components/constant-list/constant-list.component';
import { ConstantComponent } from './constant/components/constant/constant.component';
import { ConstantNewComponent } from './constant/components/constant-new/constant-new.component';
import { SharedModule } from 'app/components/shared/shared.module';
import { FunctionalitySectionComponent } from './funcionality/components/functionality-section.component';
import { FunctionalityComponent } from './funcionality/components/functionality.component';
import { FunctionalityNewComponent } from './funcionality/components/functionality-new.component';


@NgModule({
  declarations: [
    ConstantComponent,
    ConstantListComponent,
    ConstantNewComponent,
    UserComponent,
    UserNewComponent,
    UserListComponent,
    OptionComponent,
    OptionListComponent,
    OptionNewComponent,
    OptionValueComponent,
    OptionValueListComponent,
    OptionValueNewComponent,
    ProfileComponent,
    ProfileListComponent,
    ProfileNewComponent,
    ProfileFuncComponent,
    ProfileFuncListComponent,
    ProfileFuncNewComponent,
    TreeViewComponent,
    SpecialityComponent,
    SpecialityNewComponent,
    SpecialityListComponent,
    FunctionalitySectionComponent,
    FunctionalityComponent,
    FunctionalityNewComponent
  ],
  imports: [
    SettingRoutingModule,
    SharedModule
    //MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [BnNgIdleService]
})
export class SettingModule { }
