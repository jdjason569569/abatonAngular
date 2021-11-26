import { Injectable } from '@angular/core';
import { SystemUser } from '../../models/SystemUser';
import { SystemInstitutionModel } from '../../models/SystemInstitution.model';

@Injectable({
  providedIn: 'root'
})
export class LoginState {
  user: SystemUser = new SystemUser();
  rememberMe: boolean;
  multipleInstitution: boolean;
  institutionSelect: SystemInstitutionModel = null;
}
