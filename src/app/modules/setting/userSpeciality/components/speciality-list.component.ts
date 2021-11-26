import { Component } from '@angular/core';
import { SpecialityListFacade } from '../facade/specialityList.facade';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  providers: [SpecialityListFacade]
})
export class SpecialityListComponent {
 facade: SpecialityListFacade;

  constructor(private specialityFacede: SpecialityListFacade) {
    this.facade = specialityFacede;
  }
}
