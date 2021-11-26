import { Injectable } from '@angular/core';
import { UserState } from '../state/user.state';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JSendResponse } from '../../../../models/JSendResponse';
import { SystemUser } from '../../../../models/SystemUser';
import { Constants } from 'app/constants/Constans';

@Injectable({
  providedIn: 'root'
})

export class UserNewFacade {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private userState: UserState, private router: Router, private userService: UserService) {
    this.loadUser();
    this.loadOption();
  }

  loadOption() {
    this.userService.getListOptionValueService()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            console.log('options => ', resp.data);
            this.userState.listOptionValue = resp.data;
          } else {
            console.log('Lista vacia de optionsValue');
          }
        }, error => {
          console.log(error);
        });
  }

  loadUser() {
    this.userState.user = JSON.parse(localStorage.getItem('user'));
    if (this.userState.user != null) {
      this.userState.userForm = this.updateFormGroup(this.userState.user);
    } else {
      this.userState.userForm = this.createFormGroup();
    }
  }

  createFormGroup() {
    return new FormGroup({
      nameUser: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastNameUser: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      identUser: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      passUser: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      emailUser: new FormControl('', [Validators.required, Validators.maxLength(50),
      Validators.pattern(this.emailPattern)])
    });
  }
  updateFormGroup(user: SystemUser) {
    return new FormGroup({
      idUser: new FormControl(user.idUser),
      nameUser: new FormControl(user.nameUser, [Validators.required, Validators.maxLength(50)]),
      lastNameUser: new FormControl(user.lastNameUser, [Validators.required, Validators.maxLength(50)]),
      identUser: new FormControl(user.identUser, [Validators.required, Validators.maxLength(50)]),
      emailUser: new FormControl(user.emailUser, [Validators.required, Validators.maxLength(50),
      Validators.pattern(this.emailPattern)])
    });
  }
  manageNewOrEdit() {
    if (this.userState.user != null) {
      this.onEditForm();
    } else {
      this.onSaveForm();
    }
  }

  onResetForm() {
    this.userState.userForm.reset();
  }
  onSaveForm() {
    if (this.userState.userForm.valid) {
      console.log('Usuario a crear', this.userState.userForm.value);
      this.userService.saveUser(this.userState.userForm.value)
        .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.router.navigate(['/abaton/user/user']);
            this.onResetForm();
          } else {
            alert('Error al agregar');
          }
        },
          error => console.log('entra al  error', error)
        );
    } else {
      console.log('no valid ');
    }
  }
  onEditForm() {
    this.userService.updateUser(this.userState.userForm.value)
      .subscribe((data: JSendResponse) => {
        if (data.status === Constants.SUCCESS) {
          this.router.navigate(['/abaton/user/user']);
        } else {
          alert('Error al editar');
        }
      });
  }

  userSt() {
    return this.userState;
  }
  get nameUser() {
    return this.userState.userForm.get('nameUser');
  }

  get lastNameUser() {
    return this.userState.userForm.get('lastNameUser');
  }

  get identUser() {
    return this.userState.userForm.get('identUser');
  }

  get passUser() {
    return this.userState.userForm.get('passUser');
  }

  get emailUser() {
    return this.userState.userForm.get('emailUser');
  }
}
