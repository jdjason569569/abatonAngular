import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../sessionFolder/service/login.service';
import { Router } from '@angular/router';
import { SystemUser } from 'app/models/SystemUser';
import { SystemInstitutionModel } from 'app/models/SystemInstitution.model';
import { LocalStorageConstant } from 'app/constants/LocalStorage.Constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: SystemUser;
  institution: SystemInstitutionModel = null;

  constructor(private loginService: LoginService, private router: Router) {
    this.viewUserSession();
  }

  ngOnInit() {
  }

  visibleItem(section: string, typeComponent: string) {
    return true;
  }

  viewUserSession() {
    // console.log(localStorage.getItem(LocalStorageConstant.USER))
     this.user = JSON.parse(localStorage.getItem(LocalStorageConstant.USER));
     this.institution = JSON.parse(localStorage.getItem(LocalStorageConstant.INSTITUTION));
   }

   logout() {
    localStorage.removeItem(LocalStorageConstant.TOKEN);
    localStorage.removeItem(LocalStorageConstant.INSTITUTION);
    localStorage.removeItem(LocalStorageConstant.USER);
    this.router.navigateByUrl('/login');
  }
}
