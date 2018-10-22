import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-wanjie',
  templateUrl: './wanjie.component.html',
  styleUrls: ['./wanjie.component.css']
})
export class WanjieComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  finishs;
  courses;
  courseId:number;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/finishs').subscribe(data=>{
      this.finishs=data;
    })
    this.http.get('/api/courses/'+this.courseId).subscribe(data=>{
      // console.log(data);
      this.courses=data;
    })
  }

}
