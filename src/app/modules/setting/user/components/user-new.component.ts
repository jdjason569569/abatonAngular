import { Component } from '@angular/core';
import { UserNewFacade } from '../facade/userNew.facade';
import { UserListFacade } from '../facade/userList.facade';
import { Ciudad } from 'app/models/Test';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  providers: [UserNewFacade]
})
export class UserNewComponent {
  facade: UserNewFacade;

  lista: Ciudad[] = [];
  select: Ciudad;

  constructor(private userFacade: UserNewFacade) {
    this.facade = userFacade;
    this.lista.push(new Ciudad('1', 'santander', 'ciudad al lado del mar'));
    this.lista.push(new Ciudad('2', 'donosti', 'ciudad gastronomica'));
    this.lista.push(new Ciudad('3', 'bilbao', 'ciudad cultural'));
  }
}
