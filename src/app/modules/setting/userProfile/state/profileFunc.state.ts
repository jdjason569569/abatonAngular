import {Injectable} from '@angular/core';
import { SystemProfileFunct } from '../../../../models/SystemProfileFunct';
import { SystemProfile } from '../../../../models/SystemProfile';
import { SystemSection } from 'app/models/SystemSection';
import { Directory } from '../components/tree-view/directory';


@Injectable({
  providedIn: 'root'
})
export class ProfileFuncState {
  listProfileFunc: SystemProfileFunct[] = [];
  profileFunc: SystemProfileFunct = new SystemProfileFunct();
  profile: SystemProfile;
  directories: Array<Directory>;
  listProfFunc: Array<any>;
  listSection: SystemSection[] = [];

  constructor() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
}
