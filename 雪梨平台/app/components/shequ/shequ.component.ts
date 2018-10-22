import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient) { }
  articles;
  ngOnInit() {
    this.http.get('/api/articles').subscribe((data)=>{
        // console.log(data);
        this.articles=data;
    })
  }

}
