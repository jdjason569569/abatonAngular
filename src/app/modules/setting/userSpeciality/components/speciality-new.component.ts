import {Component} from '@angular/core';
import {SpecialityNewFacade} from '../facade/specialityNew.facade';

@Component({
  selector: 'app-speciality-new',
  templateUrl: './speciality-new.component.html',
  providers: [SpecialityNewFacade]
})
export class SpecialityNewComponent {
  facade: SpecialityNewFacade;

  constructor(private specialityFacade: SpecialityNewFacade) {
    this.facade = specialityFacade;
  }
}
