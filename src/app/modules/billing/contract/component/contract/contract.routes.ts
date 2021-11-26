import { Routes } from '@angular/router';
import { ContractListComponent } from '../contract-list/contract-list.component';
import { ContractNewComponent } from '../contract-new/contract-new.component';
import { ServiceContractComponent } from '../../../service-contract/component/service-contract/service-contract.component';
import { SERVICE_CONTRACT_ROUTES } from '../../../service-contract/component/service-contract/service-contract.route';

export const CONTRACT_ROUTES: Routes = [
    { path: '', component: ContractListComponent },
    { path: 'list', component: ContractListComponent },
    { path: 'new', component: ContractNewComponent },
    { path: 'update/:id', component: ContractNewComponent },
    {
        path: 'addService/:id', component: ServiceContractComponent,
        children: SERVICE_CONTRACT_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];