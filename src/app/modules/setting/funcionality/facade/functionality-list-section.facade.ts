import {Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {JSendResponse} from '../../../../models/JSendResponse';
import { Constants } from 'app/constants/Constans';
import { FunctionalityService } from '../service/functionality.service';
import { SystemSection } from '../../../../models/SystemSection';
import { FunctionalitySectionState } from '../state/functionalitySection.state';


@Injectable({
  providedIn: 'root'
})
export class FunctionalityListSectionFacade implements OnInit  {

  constructor(private dto: FunctionalitySectionState, private router: Router, private service: FunctionalityService) {
    this.listSection();
  }

  ngOnInit() {
    this.listSection();
  }

  getSt() {
    return this.dto;
  }

  listSection() {
    this.service.getListSection()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
           this.dto.listSection = resp.data;
          } else {
            console.log('Lista vacia de Option');
          }
        }, error => {
          alert(error);
          console.log(error);
        });
  }

  viewFunctionality(section: SystemSection) {
    //localStorage.setItem('section', JSON.stringify(section));
    this.router.navigate([`abaton/functionality/view/${section.idSection}`],{queryParams: section});
  }


}
