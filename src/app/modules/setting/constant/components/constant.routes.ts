import { Routes } from '@angular/router';
import { ConstantListComponent } from './constant-list/constant-list.component';
import { ConstantNewComponent } from './constant-new/constant-new.component';



export const CONSTANT_ROUTES: Routes = [
  { path: '', component: ConstantListComponent },
  { path: 'new', component: ConstantNewComponent },
  { path: 'update/:id', component: ConstantNewComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
