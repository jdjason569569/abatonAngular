import { Routes } from '@angular/router';
import { UserNewComponent } from './user-new.component';
import { UserListComponent } from './user-list.component';


export const USER_ROUTES: Routes = [
    { path: '', component: UserListComponent },
    { path: 'new', component: UserNewComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }];
