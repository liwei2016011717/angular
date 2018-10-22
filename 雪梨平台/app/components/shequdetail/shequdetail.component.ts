import { Component, OnInit } from '@angular/core';
import {HttpClient}from'@angular/common/http';
import{ActivatedRoute}from'@angular/router';
@Component({
  selector: 'app-shequdetail',
  templateUrl: './shequdetail.component.html',
  styleUrls: ['./shequdetail.component.css']
})
export class ShequdetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  article;
  articleId:number;
  ngOnInit() {
    this.articleId=this.router.snapshot.params['articleId'];
    this.http.get('/api/articles1/'+this.articleId).subscribe(data=>{
      console.log(data);
      this.article=data;
    })
  }

}
