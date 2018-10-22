import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  constructor(private http:HttpClient) { }
  details;
  ngOnInit() {
    this.http.get('/api/details').subscribe((data=>{
      console.log(data);
      this.details=data;
  }))
  }

}
