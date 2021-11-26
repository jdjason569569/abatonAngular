import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {JSendResponse} from '../../../../models/JSendResponse';
import {SystemUser} from '../../../../models/SystemUser';
import {UserState} from '../state/user.state';
import { Constants } from '../../../../constants/Constans';

@Injectable({
  providedIn: 'root'
})
export class UserListFacade {

  constructor(private userState: UserState, private router: Router, private userService: UserService) {
    console.log('constructor UserListFacade');
    this.listUserSystem();
  }

  userSt() {
    return this.userState;
  }

  listUserSystem() {
    this.userService.getListUserService()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            console.log('usuarios => ', resp.data);
            this.userState.listUser = resp.data;
          } else {
            console.log('Lista vacia de usuarios');
          }
        }, error => {
          console.log(error);
        });
  }

  trackByUserId(index: number, user: SystemUser): number {
    return user.idUser;
}

  updateUser(user: SystemUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  cleanUser() {
    localStorage.removeItem('user');
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.listUserSystem();
          } else {
            console.log('delete: Lista vacia de usuarios');
          }
        });
  }
}
