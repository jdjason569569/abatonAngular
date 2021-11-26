import { Component, OnInit } from '@angular/core';
import { ProfileFuncListFacade } from '../../facade/profileFuncList.facade';
import { Directory } from '../tree-view/directory';
import { SystemProfileFunct } from 'app/models/SystemProfileFunct';

@Component({
  selector: 'app-profile-func-list',
  templateUrl: './profile-func-list.component.html',
  providers: [ProfileFuncListFacade]
})
export class ProfileFuncListComponent implements OnInit {
  

  facade: ProfileFuncListFacade;
  constructor(private profileFacade: ProfileFuncListFacade) {
    this.facade = this.profileFacade;
    
    
  }

  ngOnInit() {
    this.facade = this.profileFacade;
  }

 


}
