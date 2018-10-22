import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-tongbuke',
  templateUrl: './tongbuke.component.html',
  styleUrls: ['./tongbuke.component.css']
})
export class TongbukeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  courses;
  ngOnInit() {
    this.http.get('/api/courses1').subscribe(data=>{
      console.log(data);
      this.courses=data;
    })
  }

}
