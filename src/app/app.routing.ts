import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { Login2Component } from './sessionFolder/components/login-2/login-2.component';
import { PagesComponent } from './components/pages.component';
import { HomeComponent } from './components/home/home.component';
import { FunctionalitySectionComponent } from './modules/setting/funcionality/components/functionality-section.component';
import { FUNCTIONALITY_SECTION_ROUTES } from './modules/setting/funcionality/components/functionality-section.routes';
import { ConstantComponent } from './modules/setting/constant/components/constant/constant.component';
import { CONSTANT_ROUTES } from './modules/setting/constant/components/constant.routes';
import { AuthGuard } from './guards/auth.guard';
import { SectionConstant } from './constants/Section.constant';
import { ContractComponent } from './modules/billing/contract/component/contract/contract.component';
import { CONTRACT_ROUTES } from './modules/billing/contract/component/contract/contract.routes';
import { ConfigDiaryComponent } from './modules/diary/config-diary/component/config-diary/config-diary.component';
import { CONFIG_DIARY_ROUTES } from './modules/diary/config-diary/component/config-diary/config-diary.routes';


const routes: Routes = [
  {
    path: 'abaton',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user',
        loadChildren: './modules/setting/setting.module#SettingModule'
      },
      {
        path: 'functionality',
        component: FunctionalitySectionComponent,
        children: FUNCTIONALITY_SECTION_ROUTES
        // ,canActivate: [AuthGuard],
        // data: {section: [SectionConstant.user_configuration], typeComponent: ['functionality']}
      },
      {
        path: 'constant',
        component: ConstantComponent,
        children: CONSTANT_ROUTES,
        canActivate: [AuthGuard],
        data: { section: [SectionConstant.system_constant], typeComponent: ['item'] }
        // ,canActivate: [AuthGuard],
        // data: {section: [SectionConstant.system_constant], typeComponent: ['item']}
      },
      {
        path: 'contract',
        component: ContractComponent,
        children: CONTRACT_ROUTES
        //,canActivate: [AuthGuard],
        //  data: {section: [SectionConstant.system_constant], typeComponent: ['item']}
      },
      {
        path: 'config-diary',
        component: ConfigDiaryComponent,
        children: CONFIG_DIARY_ROUTES
        //,canActivate: [AuthGuard],
        //  data: {section: [SectionConstant.system_constant], typeComponent: ['item']}
      }
      /*,
      {
        path: 'patient',
        loadChildren: './modules/patient#PatientModule'
      }*/
    ]
  },
  { path: 'login', component: Login2Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouting { }