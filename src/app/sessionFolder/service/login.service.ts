import { Injectable } from '@angular/core';
import { SystemUser } from '../../models/SystemUser';
import { AppSettings } from '../../app.settings';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JSendResponse } from '../../models/JSendResponse';
import { SwalAlerts } from '../../components/shared/SwalAlerts';
import { SystemInstitutionModel } from '../../models/SystemInstitution.model';
import { LocalStorageConstant } from 'app/constants/LocalStorage.Constant';
import { Constants } from 'app/constants/Constans';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router, private swal: SwalAlerts) {
  }

  login(ident: String, pass: String) {
    return this.http.post(`${AppSettings.API_URL}login/loginAuth`, { identUser: ident, pass: pass });
  }

  isAuthenticated(section: string, typeComponentStr: string): Observable<boolean> {
    console.log('---lega al guard con:')
    console.log('section:', section, 'component', typeComponentStr)
    let tokenAuth = localStorage.getItem(LocalStorageConstant.TOKEN);
    if (tokenAuth === null) {
      tokenAuth = 'noToken';
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'tokenAuth': tokenAuth
      })
    };
    let inst = JSON.parse(localStorage.getItem(LocalStorageConstant.INSTITUTION));
    if (inst === null) {
      inst = new SystemInstitutionModel();
      inst.idInst = 0;
      inst.usernameInst = '';
    }
    const authData = {
      sectionA: section,
      typeComponent: typeComponentStr
    };
    return this.http.post(`${AppSettings.API_URL}login/verifyTokenAndSection`, authData, httpOptions)
      .pipe(
        map((reponse: JSendResponse) => {
          console.log('--respuesta del servidor en el guard')
          console.log(reponse)
          localStorage.setItem(LocalStorageConstant.TOKEN, reponse.token);
          if (reponse.status === Constants.SUCCESS) {
            if (reponse.data) {
              this.swal.errorTopRigth('permiso Correcto')
            } else {
              this.swal.errorTopRigth('No tiene permiso para esta sección');
              this.router.navigateByUrl('/abaton/home');
            }
          } else {
            this.swal.errorTopRigth(reponse.message);
            this.router.navigateByUrl('/login');
          }
          return reponse.data;
        }, error => {
          console.log('--error del servidor en el guard', error)
          localStorage.removeItem(LocalStorageConstant.TOKEN);
          this.swal.errorTopRigth('El token ha expirado');
          this.router.navigateByUrl('/login');
          return false;
        })
      );
  }

  validateTokenInServer() {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'tokenAuth': token
        })
      };
      return this.http.get(`${AppSettings.API_URL}login/validateTokenInServer`, httpOptions)
        .pipe(
          map((reponse: JSendResponse) => {
            if (reponse.data) {
              localStorage.setItem('token', reponse.token);
            }
            return reponse.data;
          }, error => {
            return false;
          })
        );
    }
  }
}
