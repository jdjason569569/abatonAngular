import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { ProfileService } from '../service/profile.service';
import { ProfileState } from '../state/profile.state';
import { SystemProfile } from '../../../../models/SystemProfile';
import { Constants } from 'app/constants/Constans';


@Injectable({
  providedIn: 'root'
})
export class ProfileListFacade implements OnInit {

  constructor(private dto: ProfileState, private router: Router, private service: ProfileService) {
    this.listProfile();
  }

  ngOnInit() {
    this.listProfile();
  }

  profileSt() {
    return this.dto;
  }

  listProfile() {
    this.service.getList()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listProfile = resp.data;
          } else {
            console.log('Lista vacia de Profile');
          }
        }, (error: any) => {
          alert(error);
          console.log(error);
        });
  }

  updateProfile(item: SystemProfile) {
    //localStorage.setItem('profile', JSON.stringify(item));
    this.router.navigate([`abaton/user/profile/profile/${item.idProfile}`], { queryParams: item });
  }

  deleteProfile(id: number) {
    this.service.delete(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.listProfile();
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }

  viewProfileFunc(item: SystemProfile) {
    //localStorage.setItem('profile', JSON.stringify(item));
    this.router.navigate([`abaton/user/profile/view/${item.idProfile}`], { queryParams: item });
  }
}
