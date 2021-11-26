import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import { SystemUser } from 'app/models/SystemUser';
import { SystemInstitutionModel } from 'app/models/SystemInstitution.model';
import { LocalStorageConstant } from 'app/constants/LocalStorage.Constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  user: SystemUser;
  institution: SystemInstitutionModel = null;

  constructor(private bnIdle: BnNgIdleService, private router: Router) {
    // se debe cerrar la sesión si expira mas de media hora de inactividad
    this.bnIdle.startWatching(1800).subscribe((res) => {
      if (res) {
        this.logout();
      }
    });
    this.viewUserSession();
  }

  logout() {
    localStorage.removeItem(LocalStorageConstant.TOKEN);
    localStorage.removeItem(LocalStorageConstant.INSTITUTION);
    localStorage.removeItem(LocalStorageConstant.USER);
    this.router.navigateByUrl('/abaton/login');
  }

  viewUserSession() {
   // console.log(localStorage.getItem(LocalStorageConstant.USER))
    this.user = JSON.parse(localStorage.getItem(LocalStorageConstant.USER));
    this.institution = JSON.parse(localStorage.getItem(LocalStorageConstant.INSTITUTION));
  }

}
