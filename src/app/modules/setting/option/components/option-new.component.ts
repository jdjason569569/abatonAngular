import { Component } from '@angular/core';
import { OptionNewFacade } from '../facade/option-new.facade';

@Component({
  selector: 'app-option-new',
  templateUrl: './option-new.component.html',
  providers: [OptionNewFacade]
})
export class OptionNewComponent {
  facade: OptionNewFacade;

  constructor(private optionNewFacade: OptionNewFacade) {
    this.facade = optionNewFacade;
  }
}
