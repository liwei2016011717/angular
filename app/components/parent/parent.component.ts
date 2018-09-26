import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  txt:string;
  data:string[]=[];
  data1:string[]=[];
  del(i){
    console.log(i);
    this.data.splice(i,1)
    this.local.set('list',this.data);
  }
  del1(i){
    this.data1.splice(i,1)
    this.local.set('list1',this.data1);
  }
  change(i){
    let ele=this.data.splice(i,1);
    this.data1.push(ele[0]);
    this.local.set('list',this.data);
    this.local.set('list1',this.data1);
  }
  change1(i){
    let ele=this.data1.splice(i,1);
    this.data.push(ele[0]);
    this.local.set('list',this.data);
    this.local.set('list1',this.data1);
  }
  constructor( private local:CommonService) { }

  ngOnInit() {
    if(this.local.get("list")){
      this.data = localStorage.getItem("list").split(",");
    }else{
      this.data=[];
    }
    if(this.local.get("list1")){
      this.data1=localStorage.getItem("list1").split(",");
    }else{
      this.data1=[];
    }
  }
}