import { Component, OnInit } from '@angular/core';
import { ConstantNewFacade } from '../../facade/constantNew.facade';

@Component({
  selector: 'app-constant-new',
  templateUrl: './constant-new.component.html',
  providers: [ConstantNewFacade]
})
export class ConstantNewComponent implements OnInit {
  facade: ConstantNewFacade;
  constructor(private constantFacade: ConstantNewFacade) {
    this.facade = this.constantFacade;
  }

  ngOnInit() {
    this.facade = this.constantFacade;
  }
}
