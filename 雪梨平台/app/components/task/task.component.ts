import { Component, OnInit } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{ActivatedRoute}from'@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
 task;
  ngOnInit() {
    this.http.get('/api/tasks').subscribe(data=>{
      console.log(data);
      this.task=data;
    })
  }

}
