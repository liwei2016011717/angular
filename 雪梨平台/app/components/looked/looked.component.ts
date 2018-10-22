import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-looked',
  templateUrl: './looked.component.html',
  styleUrls: ['./looked.component.css']
})
export class LookedComponent implements OnInit {

  constructor(private http:HttpClient) { }
  details;
  ngOnInit() {
    this.http.get('/api/details').subscribe((data=>{
      console.log(data);
      this.details=data;
   }))
  }
}
