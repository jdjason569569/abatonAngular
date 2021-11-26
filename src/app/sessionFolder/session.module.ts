import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { SessionRoutingModule } from "./session.routing";
import { SharedModule } from 'app/components/shared/shared.module';
import { Login2Component } from './components/login-2/login-2.component';



@NgModule({
    declarations: [
        Login2Component
    ],
    imports: [
        SessionRoutingModule,
        FuseSharedModule,
        SharedModule
    ]
})

export class SessionModule { }