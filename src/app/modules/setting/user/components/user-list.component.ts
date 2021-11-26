import { Component } from '@angular/core';
import { UserListFacade } from '../facade/userList.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserListFacade]
})
export class UserListComponent {
  facade: UserListFacade;

  constructor(private userFacade: UserListFacade) {
    this.facade = userFacade;
  }
}
