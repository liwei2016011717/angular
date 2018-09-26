import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;
  @Output() delIndex=new EventEmitter();
  @Output() delIndex1=new EventEmitter();
  @Output() changeIndex=new EventEmitter();
  @Output() changeIndex1=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  del1(i){
    this.delIndex1.emit(i);
  }
  change(i){
    this.changeIndex.emit(i);
  }
  change1(i){
    this.changeIndex1.emit(i);
  }
  constructor() { }

  ngOnInit() {
  }

}
