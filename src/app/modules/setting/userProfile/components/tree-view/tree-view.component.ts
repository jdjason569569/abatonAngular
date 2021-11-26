import { Component, OnInit, Input } from '@angular/core';
import { Directory } from './directory';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html'
})
export class TreeViewComponent implements OnInit {
  @Input() directories: Array<Directory>;
  constructor() { }

  ngOnInit() {
  }

}
