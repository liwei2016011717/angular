import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
// import { BPage } from '../b/b';
// import { APage } from '../a/a';
// import { ZhucePage } from '../zhuce/zhuce';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('ac') ac;
  // nav:string="tuijian";
  items = [];
  arr=['推荐','家居','餐厨','床上用品'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController,public http:HttpClient) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  doInfinite(infiniteScroll) {
    this.http.get('/api/courses').subscribe(data=>{
        console.log(data);
        infiniteScroll.complete();
    })
    // setTimeout(() => {
    //   for (let i = 0; i < 30; i++) {
    //     this.items.push( this.items.length );
    //   }
    //   infiniteScroll.complete();
    //   if(this.items.length>90){
    //     infiniteScroll.enable();
    //   }
    // }, 500);
  }

  // doRefresh(refresher) {
  //   console.log('Begin async operation', refresher);

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  // }


  // goSub(){
  //   this.navCtrl.push(BPage);
  // }
  // go(){
  //   this.navCtrl.push(ZhucePage);
  // }
  // ionViewDidLoad(){
  //   this.ac.get();
  // }

}
