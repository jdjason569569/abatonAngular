import { Routes } from '@angular/router';
import { FunctionalityListComponent } from './functionality-list.component';
import { FunctionalityNewComponent } from './functionality-new.component';


export const FUNCTIONALITY_ROUTES: Routes = [
  { path: '', component: FunctionalityListComponent },
  { path: 'list', component: FunctionalityListComponent },
  { path: 'new', component: FunctionalityNewComponent },
  { path: 'functionality/:id', component: FunctionalityNewComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
