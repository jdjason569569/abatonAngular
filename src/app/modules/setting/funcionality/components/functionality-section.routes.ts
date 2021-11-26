import { Routes } from '@angular/router';
import {AuthGuard} from '../../../../guards/auth.guard';
import {SectionConstant} from '../../../../constants/Section.constant';
import { FunctionalityListSectionComponent } from './functionality-list-section.component';
import { FunctionalityListComponent } from './functionality-list.component';
import { FunctionalityComponent } from './functionality.component';
import { FUNCTIONALITY_ROUTES } from './functionality.routes';

export const FUNCTIONALITY_SECTION_ROUTES: Routes = [
  { path: '', component: FunctionalityListSectionComponent },
  { path: 'listSection', component: FunctionalityListSectionComponent },
  { path: 'view/:id', component: FunctionalityComponent,
    children: FUNCTIONALITY_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
  ];
