import { Component, OnInit } from '@angular/core';
import { ProfileListFacade } from '../../facade/profileList.facade';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  providers: [ProfileListFacade]
})
export class ProfileListComponent implements OnInit {

  facade: ProfileListFacade;
  constructor(private profileFacade: ProfileListFacade) {
    this.facade = this.profileFacade;
  }

  ngOnInit() {
    this.facade = this.profileFacade;
  }

}
