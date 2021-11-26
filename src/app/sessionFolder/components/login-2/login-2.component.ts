import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as english } from 'app/navigation/i18n/en';
import { locale as spanish } from 'app/navigation/i18n/sp';
import { LoginFacade } from 'app/sessionFolder/facade/login.facade';

@Component({
    selector: 'login-2',
    templateUrl: './login-2.component.html',
    styleUrls: ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class Login2Component implements OnInit {

    loginForm: FormGroup;
    facade: LoginFacade;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(private _fuseConfigService: FuseConfigService, private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService, private loginFacade: LoginFacade) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
        this.facade = loginFacade;
        this.facade.setUserNameLS();
        //this._fuseTranslationLoaderService.loadTranslations(spanish);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', Validators.required]
        });
    }


  login() {
    if (this.loginForm.invalid) {
      return false;
    }
    this.loginFacade.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
