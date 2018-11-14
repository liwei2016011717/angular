import { Component ,ViewChild} from '@angular/core';
import { NavController,Slides} from 'ionic-angular';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  arr=['客厅','卧室','餐厅','书房','门厅'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {
   
  }
  // ionViewDidLoad() {
  //   console.log(this.slides.getActiveIndex());
  // }
  go(){
    this.navCtrl.push(SearchPage);
  }
}
