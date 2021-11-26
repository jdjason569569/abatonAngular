import { Injectable } from '@angular/core';
import { SystemUser } from '../../../../models/SystemUser';
import { FormGroup } from '@angular/forms';
import { SystemOptionValue } from '../../../../models/SystemOptionValue';

@Injectable({
  providedIn: 'root'
})
export class UserState {
  listUser: SystemUser[] = [];
  user: SystemUser = new SystemUser();
  userForm: FormGroup;
  listOptionValue: SystemOptionValue[] = [];
  optionValue: SystemOptionValue = new SystemOptionValue();
  displayedColumns = ['nameUser', 'lastNameUser', 'emailUser', 'Options'];
}
