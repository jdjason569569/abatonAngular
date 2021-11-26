import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import {ProfileService} from '../service/profile.service';
import { ProfileState } from '../state/profile.state';
import { Constants } from 'app/constants/Constans';


@Injectable({
  providedIn: 'root'
})
export class ProfileNewFacade implements OnInit  {
  private dto: ProfileState;
  constructor(private router: Router, private service: ProfileService,private activatedRoute: ActivatedRoute) {
    this.dto = new  ProfileState(activatedRoute);
  }

  ngOnInit() {
  }


  profileSt() {
    return this.dto;
  }

  onSaveForm() {
    if (this.dto.profileForm.valid) {
      // new or update option
      if ( this.dto.edit ) {
        this.update();
      } else {
        this.create();
      }
    } else {
      console.log('no valid ');
    }
  }
  create() {
    this.service.insert(this.dto.profileForm.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.router.navigate(['abaton/user/profile']);
          } else {
            alert('Error al agregar');
          }
        },
        error => console.log('entra al  error', error)
      );
  }
  update() {
    this.service.update(this.dto.profileForm.value)
      .subscribe((data: JSendResponse) => {
          if (data.status === Constants.SUCCESS) {
            this.onResetForm();
            this.router.navigate(['abaton/user/profile']);
          } else {
            alert('Error al actualizar');
          }
        },
        error => console.log('entra al  error', error)
      );
  }

  onResetForm() {
    this.dto.profileForm.reset();
  }
}
