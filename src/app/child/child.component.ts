import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  data;

  @Output()
  counter: EventEmitter<number> = new EventEmitter<number>();

  number = 10;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  increment() {
    this.number++;
    this.counter.emit(this.number);
  }

  decrement() {
    this.number--;
    this.counter.emit(this.number);
  }

}
