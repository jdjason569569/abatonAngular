import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AppRouting } from './app.routing';
import { SessionModule } from './sessionFolder/session.module';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { BnNgIdleService } from 'bn-ng-idle';
import { SettingModule } from './modules/setting/setting.module';
import { ContractComponent } from './modules/billing/contract/component/contract/contract.component';
import { ContractListComponent } from './modules/billing/contract/component/contract-list/contract-list.component';
import { ContractNewComponent } from './modules/billing/contract/component/contract-new/contract-new.component';
import { ServiceContractComponent } from './modules/billing/service-contract/component/service-contract/service-contract.component';
import { ServiceContractAddComponent } from './modules/billing/service-contract/component/service-contract-add/service-contract-add.component';
import { ConfigDiaryComponent } from './modules/diary/config-diary/component/config-diary/config-diary.component';
import { ConfigDiaryListDoctorComponent } from './modules/diary/config-diary/component/config-diary-list-doctor/config-diary-list-doctor.component';

/* const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
]; */

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PagesComponent, // Ver si se puede reemplazar con la plantilla de inicio
        HeaderComponent, // se deben eliminar cuando se reemplace con la plantilla
        //FooterComponent // se deben eliminar cuando se reemplace con la plantilla

        //Componentes que se deben eliminar cuando tenga su propio modulo
        ContractComponent,
        ContractListComponent,
        ContractNewComponent,
        ServiceContractComponent,
        ServiceContractAddComponent,
        ConfigDiaryComponent,
        ConfigDiaryListDoctorComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        //RouterModule.forRoot(appRoutes),
        FormsModule,
        TranslateModule.forRoot(),

        // Material moment date module
        // MatMomentDateModule,


        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        SessionModule,
        SettingModule,

        AppRouting,
        TranslateModule,

        ReactiveFormsModule,
        //SharedModule // si se usa en los otros module no es necesario importarlo aca
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [BnNgIdleService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
