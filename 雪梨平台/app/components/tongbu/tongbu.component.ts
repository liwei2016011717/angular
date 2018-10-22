import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from'@angular/router';
import {HttpClient}from'@angular/common/http';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courses;
  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    })
  }


}
