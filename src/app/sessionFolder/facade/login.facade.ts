import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';
import { LoginState } from '../state/login.state';
import Swal from 'sweetalert2';
import { JSendResponse } from '../../models/JSendResponse';
import { Router } from '@angular/router';
import { SwalAlerts } from '../../components/shared/SwalAlerts';
import { Md5 } from 'ts-md5/dist/md5';
import { Constants } from 'app/constants/Constans';
import { LocalStorageConstant } from 'app/constants/LocalStorage.Constant';

@Injectable({
  providedIn: 'root'
})
export class LoginFacade {

  loginStat() {
    return this.loginState;
  }

  constructor(private loginState: LoginState, private loginService: LoginService, private router: Router,
    private swal: SwalAlerts) {
  }

  setUserNameLS() {
    if (localStorage.getItem('usernameLocal')) {
      this.loginState.user.identUser = localStorage.getItem('usernameLocal');
      this.loginState.rememberMe = true;
    }
  }


  login(ident: string, pass: string) {
    if (!this.loginState.multipleInstitution) {
      this.swal.loadingSwal('Autenticando...');
      const md5 = new Md5();
      this.loginService.login(ident, md5.appendStr(pass).end().toString())
        .subscribe((reponse: JSendResponse) => {
          Swal.close();
          if (reponse.status === Constants.SUCCESS) {
            this.loginState.user = reponse.data;

            localStorage.setItem(LocalStorageConstant.TOKEN, reponse.token);
            localStorage.setItem(LocalStorageConstant.USER, JSON.stringify(this.loginState.user));
            if (this.loginState.rememberMe) {
              localStorage.setItem(LocalStorageConstant.USER_NAME, this.loginState.user.identUser);
            } else {
              localStorage.removeItem(LocalStorageConstant.USER_NAME);
            }
            if (this.loginState.user.lstInstitutions.length === 1) {
              this.loginState.multipleInstitution = false;
              this.router.navigateByUrl('/abaton/home');
              this.loginState.institutionSelect = this.loginState.user.lstInstitutions[0];
              localStorage.setItem(LocalStorageConstant.INSTITUTION, JSON.stringify(this.loginState.institutionSelect));
            } else {
              this.loginState.multipleInstitution = true;
            }
          } else {
            this.swal.errorSwal(reponse.message);
            localStorage.removeItem(LocalStorageConstant.TOKEN);
            localStorage.removeItem(LocalStorageConstant.INSTITUTION);
            localStorage.removeItem(LocalStorageConstant.USER);
          }

        }, error => {
          Swal.close();
          console.log(error);
          this.swal.errorSwal(error.error);
        });
    } else {
      this.router.navigateByUrl('/abaton/home');
      localStorage.setItem(LocalStorageConstant.INSTITUTION, JSON.stringify(this.loginState.institutionSelect));
    }
  }
}
