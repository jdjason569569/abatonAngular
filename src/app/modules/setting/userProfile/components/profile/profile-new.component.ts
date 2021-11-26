import { Component, OnInit } from '@angular/core';
import { ProfileNewFacade } from '../../facade/profileNew.facade';

@Component({
  selector: 'app-profile-new',
  templateUrl: './profile-new.component.html',
  providers: [ProfileNewFacade]
})
export class ProfileNewComponent implements OnInit {

  facade: ProfileNewFacade;
  constructor(private profileFacade: ProfileNewFacade) {
    this.facade = this.profileFacade;
  }

  ngOnInit() {
    this.facade = this.profileFacade;
  }
}
