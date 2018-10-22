import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  details;
  detailId:number;
  ngOnInit() {
      this.detailId = this.router.snapshot.params['detailId'];
      this.http.get('/api/details').subscribe((data=>{
          // console.log(data);
          this.details=data;
      }))
  }
}
