import { Routes } from '@angular/router';
import {OptionListComponent} from './option-list.component';
import {OptionNewComponent} from './option-new.component';
import {AuthGuard} from '../../../../guards/auth.guard';
import {SectionConstant} from '../../../../constants/Section.constant';
import {OPTION_VALUE_ROUTES} from './option-value/option-value.routes';
import {OptionValueListComponent} from './option-value/option-value-list.component';
import {OptionValueNewComponent} from './option-value/option-value-new.component';
import {OptionValueComponent} from './option-value/option-value.component';

export const OPTION_ROUTES: Routes = [
  { path: '', component: OptionListComponent },
  { path: 'new', component: OptionNewComponent },
  { path: 'update/:id', component: OptionNewComponent },
  { path: 'view/:id', component: OptionValueComponent,
    children: OPTION_VALUE_ROUTES
    //, canActivate: [AuthGuard],
    //data: {section: [SectionConstant.user_configuration], typeComponent: ['functionality']}
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
  ];
