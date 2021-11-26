import { Routes } from '@angular/router';
import { ServiceContractAddComponent } from '../service-contract-add/service-contract-add.component';

export const SERVICE_CONTRACT_ROUTES: Routes = [
    { path: '', component: ServiceContractAddComponent },
    { path: 'addService', component: ServiceContractAddComponent},    
    { path: '**', pathMatch: 'full', redirectTo: '' }
    ];