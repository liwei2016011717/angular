import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hudong',
  templateUrl: './hudong.component.html',
  styleUrls: ['./hudong.component.css']
})
export class HudongComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  course;
  courseId:number;
  ngOnInit() {
    // this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses').subscribe((data)=>{
      // console.log(data);
        this.course=data;
    })
  }

}
