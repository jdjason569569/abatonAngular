import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  @Input() big = false
  @Input() alignItems: 'center'

  diameter = 40
  stroke = 3

  constructor() { }

  ngOnInit() {
    if (this.big) {
      this.diameter = 60
    }
  }

}
