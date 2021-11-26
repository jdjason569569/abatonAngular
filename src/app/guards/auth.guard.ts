import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'app/sessionFolder/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginService) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /* hacer la validacion si esta logeado el usuario, si lo esta entonces devolver true sino con ayuda de router salir de la pagina */
    return this.auth.isAuthenticated(next.data.section, next.data.typeComponent);
    // return true;
  }

}
