import { Component, OnInit } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  videoId:number;
  video;
  ngOnInit() {
    this.videoId = this.router.snapshot.params['videoId'];
    this.http.get('/api/videos/'+ this.videoId).subscribe((data)=>{
      console.log(data);
      this.video= data;
    })   
  }

}
