import { Component, OnInit } from '@angular/core';
import{HttpClient}from'@angular/common/http';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit() {
  }

}
