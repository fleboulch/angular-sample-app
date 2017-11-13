import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArrayComponent implements OnInit {

  @Input()
  myComponent: string;

  @Input()
  hidden = false;

  @Input()
  data: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.myComponent);
  }

}
