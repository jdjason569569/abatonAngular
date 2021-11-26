import { Routes } from '@angular/router';
import {OptionValueNewComponent} from './option-value-new.component';
import {OptionValueListComponent} from './option-value-list.component';


export const OPTION_VALUE_ROUTES: Routes = [
  { path: '', component: OptionValueListComponent },
  { path: 'new', component: OptionValueNewComponent },
  { path: 'update/:id', component: OptionValueNewComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
