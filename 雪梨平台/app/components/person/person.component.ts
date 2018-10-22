import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private http:HttpClient) { }
  persons
  ngOnInit() {
    this.http.get('/api/persons').subscribe((data=>{
      console.log(data);
      this.persons=data;
  }))
  }

}
